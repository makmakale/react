// import calcImage from '@/assets/images/my-projects/calculator-small.jpg';
// import countdownImage from '@/assets/images/my-projects/countdown-small.jpg';
import portfolioImage from '@/assets/images/my-projects/portfolio-small.jpg';
import tetrisImage from '@/assets/images/my-projects/tetris-small.jpg';
import todoImage from '@/assets/images/my-projects/todo-small.jpg';
import jslabImage from '@/assets/images/projects/cargo-trans.png';
import moomlaImage from '@/assets/images/projects/moomla.png';
import nextTodos from '@/assets/images/my-projects/todos-small.jpg';

const projectsSetup = [
  {
    img: nextTodos,
    title: 'Nextjs ToDo Board',
    description: 'First Next.js project with tailwind.',
    viewLink: 'https://next-todos-tw.netlify.app/',
    sourceLink: 'https://github.com/makmakale/next-todos-tailwind',
  },
  {
    title: 'ToDo Board',
    img: todoImage,
    description: 'To Do board in Jira style with D&D (PERN app).',
    viewLink: 'https://pern-todo-board.vercel.app',
    sourceLink: 'https://github.com/makmakale/pern-todo-board',
  },
  {
    title: 'Portfolio',
    img: portfolioImage,
    description: 'You are currently in. But you can view source code by the link below.',
    sourceLink: 'https://github.com/makmakale/old-portfolio',
  },
  {
    title: 'Tetris',
    img: tetrisImage,
    description: 'Tetris game in classic mode where I first tried Redux toolkit.',
    viewLink: 'https://makmakale.github.io/tetris/',
    sourceLink: 'https://github.com/makmakale/tetris',
  },
  {
    title: 'Moomla',
    img: moomlaImage,
    description: 'E-Commerce with admin panel based on Joomla + JoomShopping (old version).',
    sourceLink: 'https://github.com/makmakale/moomla',
  },
  {
    title: 'CargoTrans',
    img: jslabImage,
    description: 'Mobile app for drivers. Allows view waybills, create routes on the map, check on points and make'
      + ' reports for broken/stolen goods.',
    sourceLink: 'https://github.com/makmakale/jslabproject',
  },
  // {
  //   title: 'Calculator',
  //   img: calcImage,
  //   description: 'Simple calculator based on Windows calculator but with basic actions (old version).',
  //   viewLink: 'https://makmakale.github.io/calculator/',
  //   sourceLink: 'https://github.com/makmakale/calculator',
  // },
  // {
  //   title: 'Ney Year Countdown',
  //   img: countdownImage,
  //   description: 'Simple countdown to New Year.',
  //   viewLink: 'https://makmakale.github.io/ny-countdown/',
  //   sourceLink: 'https://github.com/makmakale/ny-countdown',
  // },
];

export const projects = projectsSetup.map((project, index) => ({ ...project, id: index + 1 }));
