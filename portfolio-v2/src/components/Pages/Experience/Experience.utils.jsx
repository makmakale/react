import Part1 from '@/components/Pages/Experience/Partials/Part1';
import Part2 from '@/components/Pages/Experience/Partials/Part2';
import Part3 from '@/components/Pages/Experience/Partials/Part3';
import Part4 from '@/components/Pages/Experience/Partials/Part4';
import Part5 from '@/components/Pages/Experience/Partials/Part5';
import Part6 from '@/components/Pages/Experience/Partials/Part6';
import Part7 from '@/components/Pages/Experience/Partials/Part7';
import Part8 from '@/components/Pages/Experience/Partials/Part8';

export const getComponent = (part) => {
  switch (part) {
    case 1:
      return Part1;
    case 2:
      return Part2;
    case 3:
      return Part3;
    case 4:
      return Part4;
    case 5:
      return Part5;
    case 6:
      return Part6;
    case 7:
      return Part7;
    case 8:
      return Part8;
    default:
      return null;
  }
};
