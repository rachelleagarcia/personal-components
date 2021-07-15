import styled from 'styled-components';

interface IImageProps {
  // Alternative text displayed for images
  alt: string;

  // Adds additional classes
  className?: string;

  // Link for image that will be displayed
  src: string;
}

const StyledImage = styled.img`
  max-width: 969px;
  max-height: auto;
`;

const Image = ({ alt, className, src }: IImageProps) => {
  return <StyledImage src={src} alt={alt} className={className} />;
};

export { Image };
