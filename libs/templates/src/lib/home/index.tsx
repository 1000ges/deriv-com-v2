import { Hero, Features, StatBlock } from '@deriv-com/blocks';
import { OptimizedImage, PageLayout } from '@deriv-com/components';
import { Button, FluidContainer, Text } from '@deriv/quill-design';
import { homeStatData, heroItems } from './data';
import {
  SocialAppleIcon,
  SocialFacebookIcon,
  SocialGoogleIcon,
} from '@deriv/quill-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function HomeTemplate() {
  return (
    <PageLayout>
      <Hero.ContentLimitless
        title="Forex spreads from 0.3 pips"
        description="items in this hero banner are not fully styled yet, we need buttons, inputs and social buttons"
        content={() => (
          <div className="">
            <Swiper
              speed={1500}
              centeredSlides={true}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              effect={'fade'}
              fadeEffect={{
                crossFade: true,
              }}
              direction="horizontal"
              slidesPerView={1}
              modules={[Autoplay, EffectFade]}
              loop={true}
            >
              {heroItems.map((slide) => (
                <SwiperSlide key={slide.key}>{slide.image}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      >
        <FluidContainer className={`flex flex-col gap-general-lg`}>
          <div className="flex flex-col justify-between gap-gap-lg md:flex-row">
            <input
              placeholder="This component is not styled yet"
              className="rounded-2xl border-300 border-solid-red-600"
            />
            <Button size="lg" fullWidth>
              Create a demo account
            </Button>
          </div>
          <Text>or sign up with</Text>
          <div className="flex flex-row items-center justify-between gap-general-sm">
            <Button
              renderLeftIcon={() => <SocialGoogleIcon iconSize="sm" />}
              variant="tertiary"
              colorStyle="black"
              fullWidth
              className="rounded-800 border-75 border-solid-slate-300"
            >
              Google
            </Button>
            <Button
              renderLeftIcon={() => <SocialFacebookIcon iconSize="sm" />}
              variant="tertiary"
              colorStyle="black"
              fullWidth
              className="rounded-800 border-75 border-solid-slate-300"
            >
              Facebook
            </Button>
            <Button
              renderLeftIcon={() => <SocialAppleIcon iconSize="sm" />}
              variant="tertiary"
              colorStyle="black"
              fullWidth
              className="rounded-800 border-75 border-solid-slate-300"
            >
              Apple
            </Button>
          </div>
        </FluidContainer>
      </Hero.ContentLimitless>

      <Hero.ContentLimit
        title="Title goes here"
        description={`Description goes here description goes here
          description goes here description goes here`}
        content={() => (
          <OptimizedImage
            imageName="home/hero/hk_homepage_feature.png"
            width={712}
            height={800}
            alt="home hero"
          />
        )}
      >
        <p>This is a content limit hero</p>
      </Hero.ContentLimit>
      <StatBlock.NumbersWithTitle
        cardsContent={homeStatData}
        title="This is title"
        description="this is description"
      />

      <Hero.ContentTop title="Content Top">
        <img
          className="w-full"
          src="https://placehold.co/712x200"
          alt="Placeholder"
        />
      </Hero.ContentTop>
      <Hero.ContentBottom title="Content Bottom">
        <img
          className="w-full"
          src="https://placehold.co/712x200"
          alt="Placeholder"
        />
      </Hero.ContentBottom>

      <Hero.ContentLess
        title="Title goes here"
        description={`Description goes here description goes here
          description goes here description goes here`}
      >
        <Text className="text-center">This is a content less block</Text>
      </Hero.ContentLess>

      <Features.CardContent
        title="Title goes here"
        description="Description goes here description goes here description goes here description goes here"
        cta={
          <div className="flex w-full justify-center">
            <Button>CTA</Button>
          </div>
        }
      >
        <Text className="text-center">Content will go here</Text>
      </Features.CardContent>

      <Features.ContentLeft
        title="Content Left Title"
        description="Description goes here description goes here description goes here description goes here"
        content={
          <div className="flex w-full">
            <Text>Any Content here</Text>
          </div>
        }
        image_content={
          <img
            className="flex w-full flex-1"
            src="https://placehold.co/712x800"
            alt="Placeholder"
          />
        }
      />

      <Features.ContentRight
        title="Content Right Title"
        description="Description goes here description goes here description goes here description goes here"
        content={
          <div className="flex w-full">
            <Text>Any Content here</Text>
          </div>
        }
        image_content={
          <img
            className="flex w-full flex-1"
            src="https://placehold.co/712x800"
            alt="Placeholder"
          />
        }
      />
    </PageLayout>
  );
}

export default HomeTemplate;
