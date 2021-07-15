import { ReactNode } from 'react';

interface ILinkItemProps {
  // Standard children prop, accepts a valid React Node
  children: ReactNode;

  // Adds extra styling to the component
  className?: string;

  // The link the user will be directed to
  href: string;

  // Adds target="_blank" and rel="noopener" for external links
  isExternal?: boolean;
}

const LinkItem = ({
  children,
  className,
  href,
  isExternal,
}: ILinkItemProps) => {
  if (isExternal) {
    return (
      <a className={className} href={href} rel='noopener' target='_blank'>
        {children}
      </a>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

export { LinkItem };
