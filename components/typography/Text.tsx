import classNames from 'classnames';
import { ReactNode } from 'react';
import styled from 'styled-components';
import './Text.css';

interface ITextProps {
  // Standard children prop, accepts a valid React Node
  children: ReactNode;

  // Adds extra styling to the component
  className?: string;

  // Adds the css style of inline-block
  inline?: string;

  // Makes the text bold by adding font-weight of 700
  isBold?: boolean;

  // The size determines what font-size will be used
  // Refer to ./Text.css to see size options
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const StyledText = styled.p<Pick<ITextProps, 'inline' | 'isBold'>>`
  display: ${(props) => props.inline && 'inline-block'};
  font-weight: ${(props) => props.isBold && '700'};
`;

const Text = ({ children, className, size }: ITextProps) => {
  const classes = classNames(className, {
    [`text--${size}`]: size,
  });

  return <StyledText className={classes}>{children}</StyledText>;
};

Text.defaultProps = {
  size: 'sm',
};

export { Text };
