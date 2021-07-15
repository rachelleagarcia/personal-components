import styled from 'styled-components';
import { Heading, Text } from '..';
import { spacing } from '../../styles';

interface IIntroductionProps {
  // Heading element, default will use h2
  heading: string;

  // Message that's displayed underneath the heading
  messages: string;
}

const StyledIntroduction = styled.div`
  max-width: ${spacing.SPACING_14};

  h2 {
    margin-bottom: ${spacing.SPACING_03};
  }

  p {
    margin-bottom: ${spacing.SPACING_02};
  }
`;

const Introduction = ({ heading, messages }: IIntroductionProps) => {
  return (
    <StyledIntroduction>
      <Heading level={2} size='lg'>
        {heading}
      </Heading>
      {messages.split('\n').map((message: string) => (
        <Text size='md'>{message}</Text>
      ))}
    </StyledIntroduction>
  );
};

export { Introduction };
