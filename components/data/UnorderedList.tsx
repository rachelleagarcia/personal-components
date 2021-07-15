import styled from 'styled-components';
import { ListItem } from './ListItem';
import { spacing } from '../../styles';

interface IListProps {
  // The data coming in will need to be an Array
  // as it will use the map method to li elements
  listData: Array<string>;
}

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  margin: 0 0 ${spacing.SPACING_05} 0;
`;

const UnorderedList = ({ listData }: IListProps) => {
  return (
    <StyledUnorderedList>
      {listData.map((item, key) => (
        <ListItem key={key}>{item}</ListItem>
      ))}
    </StyledUnorderedList>
  );
};

export { UnorderedList };
