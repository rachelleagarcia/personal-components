import styled from 'styled-components';

interface IImageProps {
  // Alternative text displayed for images
  alt: string;

  // Adds a customized background color
  backgroundColor?: string;

  // Adds additional classes
  className?: string;

  // Link for image
  src: string;

  // Sets the background color based on theme color
  theme?: string;
}

const StyledImage = styled.div<Pick<IImageProps, 'backgroundColor' | 'theme'>>`
  background-color: ${({ backgroundColor, theme }) =>
    theme === 'light' ? backgroundColor : '#35324f'};
  display: flex;
  flex: 1;
  justify-content: center;
  height: 843px;
  width: 100%;

  img {
    align-self: center;
    max-width: 969px;
    max-height: auto;
  }
`;

const HeroImage = ({
  alt,
  backgroundColor,
  className,
  theme,
  src,
}: IImageProps) => {
  return (
    <StyledImage backgroundColor={backgroundColor} theme={theme}>
      <img src={src} alt={alt} className={className} />
    </StyledImage>
  );
};

export { HeroImage };
