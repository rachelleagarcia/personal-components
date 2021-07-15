import styled from 'styled-components';
import { Heading } from '..';
import { spacing } from '../../styles';

interface ITitleProps {
  // Sub-heading, displays the company name
  company: string;

  // Heading for the yearly date
  date: string;
}

const StyledTitle = styled.div`
  margin: 0 0 ${spacing.SPACING_05} ${spacing.SPACING_12};

  h1 {
    font-weight: 400;
  }
`;

const Title = ({ company, date }: ITitleProps) => {
  return (
    <StyledTitle>
      <Heading level={1} size='md'>
        {date}
      </Heading>
      <Heading level={2} size='lg'>
        {company}
      </Heading>
    </StyledTitle>
  );
};

export { Title };
