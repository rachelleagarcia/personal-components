import styled from 'styled-components';
import { FlexLayout, HeroImage, Information, Introduction, Title } from '..';
import { IWorkDataProps } from '../../layouts/workInterface';
import { spacing } from '../../styles';

const StyledHeadSection = styled.section`
  margin-bottom: ${spacing.SPACING_12};
`;

const HeadSection = ({
  backgroundColor,
  children,
  company,
  date,
  heading,
  imgSrc,
  link,
  linkText,
  linkTitle,
  messages,
  techItems,
  techTitle,
  theme,
}: IWorkDataProps) => {
  return (
    <StyledHeadSection>
      <Title company={company} date={date} />

      <HeroImage
        alt={`${company} main image`}
        backgroundColor={backgroundColor}
        src={imgSrc}
        theme={theme}
      />

      <FlexLayout theme={theme}>
        <Introduction heading={heading} messages={messages} />
        <Information
          link={link}
          linkText={linkText}
          linkTitle={linkTitle}
          techItems={techItems}
          techTitle={techTitle}
        />
        {children}
      </FlexLayout>
    </StyledHeadSection>
  );
};

export { HeadSection };
