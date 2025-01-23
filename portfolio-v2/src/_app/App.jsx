import { ThemeProvider } from 'styled-components';
import Book from '@/components/Book';
import { theme } from '@/common/constants/theme';
import { FullScreenImageProvider } from '@/common/context/FullScreenImage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FullScreenImageProvider>
        <Book />
      </FullScreenImageProvider>
    </ThemeProvider>
  );
}

export default App;
