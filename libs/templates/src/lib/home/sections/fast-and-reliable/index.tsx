import { FastAndReliableContent } from './data';
import { Features } from '@deriv-com/blocks';
import { OptimizedImage } from '@deriv-com/components';

const FastAndReliableSection = () => {
  return (
    <Features.ContentRight
      title="Fast and reliable"
      content={() => {
        return (
          <>
            <OptimizedImage
              className="block lg:hidden"
              imageName="home/hero/hk_homepage_feature_2.png"
              width={712}
              height={800}
              alt="home hero"
            />
            <OptimizedImage
              className="hidden lg:block"
              imageName="home/hero/hk_homepage_feature.png"
              width={712}
              height={800}
              alt="home hero"
            />
          </>
        );
      }}
    >
      <FastAndReliableContent />
    </Features.ContentRight>
  );
};

export default FastAndReliableSection;
