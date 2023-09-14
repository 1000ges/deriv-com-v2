import { Heading } from '@deriv/quill-design';
import clsx from 'clsx';
import { HeroProps } from '..';

const ImageLimitless = ({
  title,
  title_type = 'hero',
  description,
  content,
  className,
  children,
}: HeroProps) => {
  const left_panel_classes = [
    'lg:pt-4000 lg:pb-4000 lg:pr-3200',
    'md:pt-2000 md:pl-1200 md:pr-1200 md:pb-1600',
  ];

  type MediaQueryClassesProps = {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    xl2?: string;
  };

  return (
    <div
      className={clsx(
        'bg-background-primary-container',
        'items-center',
        'w-full',
        className
      )}
    >
      <div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex  sm:flex-col items-center">
        <div
          className={clsx(left_panel_classes, 'flex flex-1 flex-col pl-5000')}
        >
          {title_type === 'hero' && (
            <Heading.Hero className="pb-8">{title}</Heading.Hero>
          )}
          {title_type === 'h1' && (
            <Heading.H1 className="pb-8">{title}</Heading.H1>
          )}

          <p className="font-sans font-normal text-3xl text-opacity-600 text-400  pb-10">
            {description}
          </p>
          <div className="w-full">{children}</div>
        </div>
        <div className="flex flex-1">{content && content}</div>
      </div>
    </div>
  );
};

export default ImageLimitless;
