import Education from '@/components/Pages/Education';
import Experience from '@/components/Pages/Experience';
import IntroPage from '@/components/Pages/Intro';
import Profile from '@/components/Pages/Profile';
import Projects from '@/components/Pages/Projects';
import Skills from '@/components/Pages/Skills';

const pages = [
  { title: 'Introduction', component: IntroPage },
  { title: 'Profile', component: Profile },
  { title: 'Work Experience', component: Experience, part: 1 },
  { component: Experience, part: 2 },
  { component: Experience, part: 3 },
  { component: Experience, part: 4 },
  { component: Experience, part: 5 },
  { component: Experience, part: 6 },
  { component: Experience, part: 7 },
  { component: Experience, part: 8 },
  { title: 'Skills', component: Skills },
  { title: 'Education', component: Education },
  { title: 'Projects', component: Projects },
  { component: Projects, part: 2 },
];

export const bookPages = pages.map((page, index) => ({ ...page, page: index + 1 }));

export const totalPages = bookPages.length;
export const lastPageNavigation = totalPages % 2 === 0 ? totalPages + 1 : totalPages;

export const initialPage = 1;

export const pagesOnScreen = 2;

export const coverRotateTimeout = 1000;
