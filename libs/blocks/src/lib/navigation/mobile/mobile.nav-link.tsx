import { CustomLink } from '@deriv-com/components';
import { DirectNavLink } from '@deriv-com/providers';
import { qtMerge } from '@deriv/quill-design';

export interface MobileNavLinkProps {
  item: DirectNavLink;
  className?: string;
}

export const MobileNavLink: React.FC<MobileNavLinkProps> = ({
  item,
  className,
}) => {
  return (
    <CustomLink
      href={item.href}
      className={qtMerge('text-body-md font-bold leading-body-md', className)}
    >
      {item.text}
    </CustomLink>
  );
};

export default MobileNavLink;