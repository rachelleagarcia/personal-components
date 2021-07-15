import { ReactNode } from 'react';
import styled from 'styled-components';
import { spacing } from '../../styles';

interface ISectionProps {
  // Standard children prop, accepts a valid React Node
  children: ReactNode;

  // Adds extra styling to the component
  className?: string;
}

const StyledSection = styled.div`
  margin: 0 0 ${spacing.SPACING_13} ${spacing.SPACING_12};
`;

const Section = ({ children, className }: ISectionProps) => {
  return <StyledSection className={className}>{children}</StyledSection>;
};

export { Section };
