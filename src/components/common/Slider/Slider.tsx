import { CarouselProps, Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import React, { FC, useState } from 'react';
import styles from './Slider.module.scss';
import { SliderArrow } from './SliderArrow/SliderArrow';

const Carousel = dynamic(
  () => import('@brainhubeu/react-carousel'),
  { ssr: false },
);

interface SliderProps {
  slides: JSX.Element[];
  slidesToShow?: number;
  breakpoints?: {
    [x: number]: Omit<SliderProps, 'slides' | 'responsive'>;
  };
  dots?: boolean;
  slideContainerClass?: string;
}

interface SliderBreakpoint {
  [x: number]: {
    plugins: CarouselProps['plugins'];
  };
}

export const Slider: FC<SliderProps> = props => {
  const [slide, setSlide] = useState<number>(0);

  const getPlugins = (props: Pick<SliderProps, 'slidesToShow'>): CarouselProps['plugins'] => [
    props.slidesToShow && props.slidesToShow > 1 && {
      resolve: slidesToShowPlugin,
      options: {
        numberOfSlides: props.slidesToShow,
      },
    },
  ].filter(Boolean);

  let breakpoints: SliderBreakpoint = {};

  if (props.breakpoints) {
    Object.keys(props.breakpoints).forEach(breakpoint => {
      const breakpointNum = +breakpoint;

      breakpoints[breakpointNum] = {
        plugins: getPlugins({
          slidesToShow: props.breakpoints[breakpointNum].slidesToShow,
        }),
      };
    });
  }

  const isPrevArrowDisabled = slide === 0;
  const isNextArrowDisabled = slide === (props.slides.length - (props.slidesToShow || 1));

  return (
    <div className={styles.root}>
      <Carousel 
        slides={props.slides.map(item => <div className={props.slideContainerClass}>{item}</div>)} 
        value={slide}
        onChange={setSlide} 
        plugins={getPlugins({
          slidesToShow: props.slidesToShow,
        })}
        breakpoints={breakpoints}
      />

      <SliderArrow 
        position="prev" 
        className={classNames(styles.arrow, styles.arrow_prev)} 
        disabled={isPrevArrowDisabled}
        onClick={() => isPrevArrowDisabled ? null : setSlide(slide - 1)}
      />

      <SliderArrow 
        position="next" 
        className={classNames(styles.arrow, styles.arrow_next)} 
        disabled={isNextArrowDisabled}
        onClick={() => isNextArrowDisabled ? null : setSlide(slide + 1)}
      />

      {
        props.dots && 
        <Dots value={slide} onChange={setSlide} number={props.slides.length} className="product-dots" />
      }
    </div>
  );
}