import styled from 'styled-components';
import { spacing } from '../../styles';

const FlexLayout = styled.div<{ theme: string }>`
  background-color: ${({ theme }) =>
    theme === 'light' ? '#FAFAFA' : '#212121'};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: ${spacing.SPACING_11} ${spacing.SPACING_12};
`;

export { FlexLayout };
