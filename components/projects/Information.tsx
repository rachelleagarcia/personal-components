import styled from 'styled-components';
import { Heading, LinkItem, UnorderedList } from '..';
import { spacing } from '../../styles';

interface IIinformationProps {
  // The link where users will navigate to
  link: string;

  // The text the user sees for the linkItem
  linkText?: string;

  // The title for linkItems
  linkTitle?: string;

  // An array that will display each tech item
  techItems: Array<string>;

  // The title for techItems
  techTitle: string;
}

const StyledInformation = styled.div`
  max-width: ${spacing.SPACING_14};

  h3 {
    margin-bottom: ${spacing.SPACING_02};
  }
`;

const Information = ({
  link,
  linkText,
  linkTitle,
  techItems,
  techTitle,
}: IIinformationProps) => {
  return (
    <StyledInformation>
      <Heading level={3} size='sm'>
        {techTitle}
      </Heading>
      <UnorderedList listData={techItems} />

      {link && (
        <>
          <Heading level={3} size='sm'>
            {linkTitle}
          </Heading>
          <LinkItem href={link}>{linkText}</LinkItem>
        </>
      )}
    </StyledInformation>
  );
};

export { Information };
