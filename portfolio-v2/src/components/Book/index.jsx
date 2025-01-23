import { BookProvider } from '@/common/context/Book';
import Cover from '@/common/components/Cover';

function Book() {
  return (
    <BookProvider>
      <Cover />
    </BookProvider>
  );
}

export default Book;
