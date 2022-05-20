import GithubIcon from '@/public/icons/devicons/github/github-original.svg';
import LinkedInIcon from '@/public/icons/devicons/linkedin/linkedin-original.svg';

export const navConfig = {
  topNav: {
    navLinks: [
      { label: 'Resume', url: '/about/resume' },
      // { label: 'Blog', url: '/blog' },
    ],
    iconLinks: [
      {
        label: 'Github',
        Icon: GithubIcon,
        url: 'https://github.com/belgattitude',
      },
      {
        label: 'LinkedIn',
        Icon: LinkedInIcon,
        url: 'https://www.linkedin.com/in/s%C3%A9bastien-v-b369565/',
      },
    ],
  },
};
