import classNames from 'classnames';
import { ReactNode } from 'react';
import './Heading.css';

interface IHeadingProps {
  // Standard children prop, accepts a valid React Node
  children: ReactNode;

  // Adds extra styling to the component
  className?: string;

  // The level determines what type of heading will be used
  // For example h1, h2, etc.
  level: 1 | 2 | 3 | 4 | 5 | 6;

  // The size determines what size the font should be.
  // Refer to ./Heading.css to see size options
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const Heading = ({ children, className, level, size }: IHeadingProps) => {
  const StyledHeading = `h${level}` as any;

  const classes = classNames(className, {
    [`heading--${size}`]: size,
  });

  return <StyledHeading className={classes}>{children}</StyledHeading>;
};

Heading.defaultProps = {
  level: 1,
  size: '2xl',
};

export { Heading };
