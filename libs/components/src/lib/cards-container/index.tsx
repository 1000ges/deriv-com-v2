import { qtJoin, qtMerge } from '@deriv/quill-design';
import Card, { CardVariants } from '../card';

export type CardVariantType = keyof CardVariants;

export type CardVariantProps<T extends CardVariantType> =
  React.ComponentPropsWithoutRef<CardVariants[T]> & {
    id: number;
  };

export type CardsContainerCols = 'two' | 'three' | 'four' | 'five' | 'infinite';

export interface CardsContainerProps<T extends CardVariantType> {
  variant: T;
  cards: CardVariantProps<T>[];
  cols?: CardsContainerCols;
  dense?: boolean;
  className?: string;
  sliderClass?: string;
}

/**
 * * Important: The gap is currently set at 16px. If additional gap variants are introduced, make sure to update this value accordingly.
 */

const cardColsVariant: { [key in CardsContainerCols]: string } = {
  two: 'basis-full sm:basis-[calc((100%-16px)/2)]',
  three:
    'basis-full sm:basis-[calc((100%-16px)/2)] lg:basis-[calc((100%-16px*2)/3)]',
  four: 'basis-full sm:basis-[calc((100%-16px)/2)] lg:basis-[calc((100%-16px*3)/4)]',
  five: 'basis-full sm:basis-[calc((100%-16px)/2)] lg:basis-[calc((100%-16px*4)/5)]',
  infinite: 'animate-slide flex',
};

const columns = {
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};

export const CardsContainer = <T extends CardVariantType>({
  cards,
  cols = 'two',
  dense = false,
  variant,
  className,
  sliderClass,
}: CardsContainerProps<T>) => {
  const CardComponent = Card[variant];

  return (
    <div
      className={qtMerge(
        'flex overflow-hidden',
        cols === 'infinite' ? 'w-screen' : 'w-full',
        className,
      )}
      id="cards-container"
      dir="ltr"
    >
      {cols === 'infinite' ? (
        Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className={qtJoin(
              'gap-gap-lg', // TODO: Add sm/md/lg/xl variants if needed
              cardColsVariant[cols],
              'pr-general-md',
              sliderClass,
            )}
            id="infinite-carousel"
          >
            {cards.map((card) => (
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              <CardComponent key={card.header} {...card} />
            ))}
          </div>
        ))
      ) : (
        <div
          className={qtJoin(
            'flex flex-wrap gap-gap-lg', // TODO: we might need to add sm/md/lg/xl variants
            dense ? 'w-full lg:max-w-max' : 'w-full',
            cards.length < columns[cols]
              ? 'lg:justify-center'
              : 'justify-start',
          )}
        >
          {cards.map((card) => (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            <CardComponent
              className={cardColsVariant[cols]}
              key={card.id}
              {...card}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardsContainer;
