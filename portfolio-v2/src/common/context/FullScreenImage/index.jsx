import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import useEscapeKey from '@/common/hooks/useEscapeKey';
import { FullScreenImage } from '@/common/context/FullScreenImage/FullScreenImage.styled';

const FullScreenImageContext = createContext();

export const useFullScreenImageContext = () => {
  const context = useContext(FullScreenImageContext);

  if (!context) {
    throw new Error('Component must be rendered as child component of FullScreenImageContext');
  }

  return context;
};

export function FullScreenImageProvider({ children }) {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const showFullImage = (image) => setFullScreenImage(image);
  const closeFullImage = () => setFullScreenImage(null);

  useEscapeKey(closeFullImage);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FullScreenImageContext.Provider value={{ showFullImage }}>
      {children}

      {fullScreenImage ? (
        <FullScreenImage>
          <div aria-hidden="true" className="close" onClick={closeFullImage}>
            <i className="bx bx-x" />
          </div>
          <img src={fullScreenImage} alt={fullScreenImage} />
        </FullScreenImage>
      ) : null}
    </FullScreenImageContext.Provider>
  );
}

FullScreenImageProvider.propTypes = {
  children: PropTypes.node,
};

FullScreenImageProvider.defaultProps = {
  children: null,
};
