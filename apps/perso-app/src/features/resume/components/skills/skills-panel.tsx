import styled from '@emotion/styled';
import {
  m as motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import type { skillType } from '@/config';
import { skillSections } from '@/config';
import { SkillLabel } from './skill-label';
import {
  getAnimationType,
  getItemVariants,
  getListVariants,
} from './skills-panel.anims';

export type SkillSections = typeof skillSections[number];
export type SkillType = typeof skillType[number];

export type SkillRecord = {
  name: string;
  logo?: string;
  homepage?: string;
  years?: number;
  rating?: number;
  sections: SkillSections[];
  type: SkillType;
};

// Utilitary
const isSectionsActive =
  (activeSections: SkillSections[]) =>
  (sections: SkillSections[]): boolean => {
    if (activeSections === null || activeSections.length === 0) {
      return false;
    }
    return sections.some((s) => activeSections.includes(s));
  };

export type SkillsPanelProps = {
  skills: SkillRecord[];
  defaultSection: SkillSections;
  className?: string;
  children?: never;
};

const UnstyledSkillsPanel: React.FC<SkillsPanelProps> = (props) => {
  const { className, skills, defaultSection } = props;
  const [activeSections, setActiveSections] = useState<SkillSections[]>([
    defaultSection,
  ]);
  const sectionActive = isSectionsActive(activeSections);
  return (
    <LazyMotion strict features={domAnimation}>
      <div className={className}>
        <div className="section">
          {skillSections.map((section) => {
            const cls = sectionActive([section]) ? 'tab__active' : '';
            return (
              <div
                role={'tab'}
                key={section}
                className={`tab ${cls}`}
                onClick={(_e) => {
                  if (sectionActive([section])) {
                    setActiveSections([defaultSection]);
                  } else {
                    setActiveSections([section]);
                  }
                }}
              >
                {section}
              </div>
            );
          })}
        </div>
        <div className="card-container">
          <AnimatePresence initial={true}>
            <motion.div
              className="animation-container"
              key={`${activeSections.join(',')}`}
              variants={getListVariants(getAnimationType(activeSections[0]))}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {skills.map((skill, _idx) => {
                const { name, logo, homepage } = skill;
                if (
                  activeSections.length > 0 &&
                  !sectionActive(skill.sections)
                ) {
                  return false;
                }
                return (
                  <motion.article
                    className="card"
                    key={`${name}`}
                    variants={getItemVariants('soft')}
                  >
                    <div className={'card-picture'}>
                      <a href={homepage} target="_blank" rel="noreferrer">
                        {logo ? (
                          <Image src={logo} alt={name} width={60} height={60} />
                        ) : (
                          <div
                            style={{
                              fontSize: '2em',
                              padding: '1em',
                              fontWeight: 600,
                            }}
                          >
                            {name}
                          </div>
                        )}
                      </a>
                    </div>
                    <motion.div
                      className="card-footer"
                      key={`${name}`}
                      variants={getItemVariants(
                        getAnimationType(activeSections[0])
                      )}
                    >
                      <SkillLabel skill={skill} />
                    </motion.div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </LazyMotion>
  );
};

export const SkillsPanel = styled(UnstyledSkillsPanel)`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  div.section {
    align-self: flex-start;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    div.tab {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 300;
      padding: 5px 10px 10px 10px;
      border-bottom: 1px solid #eee;
      margin: 5px;
      &:hover {
        cursor: pointer;
      }
      &.tab__active {
        background-color: white;
        border-bottom: 2px solid darkgray;
      }
    }
  }
  // container
  div.card-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    padding-top: 20px;

    // because of animation, need one more div
    .animation-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch;
      padding: 15px 0 15px 0;

      // the actual card
      article.card {
        flex: 1 1 auto;
        width: 33.33%;
        @media all and (max-width: 900px) {
          width: 50%;
        }

        display: flex;
        flex-direction: column;
        align-items: center;

        .card-picture {
          position: relative;
          text-align: center;
          max-width: 70px;
          height: 50px;
          a,
          a:visited {
            color: black;
            text-decoration: none;
          }
          a:hover {
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: scale-down;
            transition: filter 0.5s ease-in-out;
            //filter: saturate(400%) grayscale(100%) ;
            &:hover {
              filter: grayscale(30%);
            }
          }
        }
        .card-footer {
          display: flex;
          width: 100%;
          padding: 5px 5px 20px 5px;
        }
      }
    }
  }
`;
