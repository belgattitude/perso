import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { GithubRepo } from './github-repo';
import type { RepoItems } from './github.api';
import GithubApi from './github.api';

export type GithubRepoListProps = {
  githubQuery: string;
  filters?: Array<[string, string[]]>;
  className?: string;
  children?: never;
};

const UnstyledGithubRepoList: React.FC<GithubRepoListProps> = (props) => {
  const [repos, setRepos] = useState<RepoItems>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { filters = [], className, githubQuery } = props;

  useEffect(() => {
    let mounted = true;
    const abortController = new AbortController();
    const fetchData = async () => {
      const api = GithubApi.createFromDefaults();
      setIsError(false);
      setLoading(true);
      const { payload } = await api.getMyRepos({
        githubQuery,
        signal: abortController.signal,
        filterOnly: filters,
      });
      if (mounted) {
        if (payload.isError) {
          setIsError(true);
        } else {
          setRepos(payload.value);
        }
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      abortController.abort();
      mounted = false;
    };
  }, [filters, githubQuery]);

  if (loading) {
    return <div className={className}>Loading...</div>;
  }

  if (isError) {
    return <div className={className}>Cannot reach github, please retry.</div>;
  }

  return (
    <div className={className}>
      <ul>
        {repos.map((repoData) => {
          return (
            <li key={repoData.id}>
              <GithubRepo repo={repoData} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const GithubRepoList = styled(UnstyledGithubRepoList)`
  margin: 0;
  padding: 0;
  line-height: 1em;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      border-bottom: 1px solid #eeeeee;
      margin: 0;
      padding: 5px 5px 5px;
      display: flex;
      :last-of-type {
        border-bottom: none;
      }
    }
  }
`;
