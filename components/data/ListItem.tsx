import { ReactNode } from 'react';
import styled from 'styled-components';
import { spacing } from '../../styles';

interface IListItemProps {
  // The list item that will be displayed
  children: ReactNode;
}

const StyledListItem = styled.li`
  line-height: ${spacing.SPACING_03};
`;

const ListItem = ({ children }: IListItemProps) => {
  return <StyledListItem>{children}</StyledListItem>;
};

export { ListItem };
