import academyHtmlImage from '@/assets/images/education/cert1.jpg';
import academyJsImage from '@/assets/images/education/cert2.jpg';
import itechartImage from '@/assets/images/education/cert3.jpg';
import ipp from '@/assets/images/education/ipp.jpg';

export const education = [
  {
    id: 1,
    period: 'Dec 2020 - Feb 2021',
    title: 'iTechArt Students Lab',
    spec: 'Full Stack JS',
    image: itechartImage,
    zoomIn: true,
  },
  {
    id: 2,
    period: 'Jun 2020 - Oct 2020',
    title: 'IT-Academy',
    spec: 'JavaScript Web Application Development',
    image: academyJsImage,
    zoomIn: true,
  },
  {
    id: 3,
    period: 'Apr 2020 - May 2021',
    title: 'IT-Academy',
    spec: 'Website development with HTML, CSS & JavaScript',
    image: academyHtmlImage,
    zoomIn: true,
  },
  {
    id: 4,
    period: 'Sep 2004 - Jun 2009',
    title: 'Institute of Parliamentary and Entrepreneurship',
    spec: 'Manager',
    image: ipp,
    zoomIn: false,
  },
];
