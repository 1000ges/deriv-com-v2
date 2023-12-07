import { FluidContainer, Heading, Text, qtJoin } from '@deriv/quill-design';
import { CardsContainer, CustomLink } from '@deriv-com/components';

import { FastPaymentProps } from '../types';

// TODO: Complete Redo needed

const Base: React.FC<FastPaymentProps> = ({
  title,
  description,
  link,
  disclaimer,
  content: { cards = [], cols = 'three', dense, sliderClass },
  isRtl = false,
  className,
}) => {
  return (
    <FluidContainer
      className={qtJoin(
        'flex flex-col items-center py-general-4xl text-center',
        className,
      )}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <Heading.H2 dir="rtl">{title}</Heading.H2>
      {description && <Text className="pt-general-md">{description}</Text>}

      {link && (
        <CustomLink href={link.href} className="w-fit pt-general-xl" hasIcon>
          {link.content}
        </CustomLink>
      )}
      <CardsContainer
        cards={cards}
        variant="ContentBottom"
        cols={cols}
        dense={dense}
        className="pt-general-2xl"
        sliderClass={sliderClass}
      />
      {disclaimer && (
        <Text size="sm" className="pt-general-2xl text-typography-subtle">
          {disclaimer}
        </Text>
      )}
    </FluidContainer>
  );
};

export default Base;
