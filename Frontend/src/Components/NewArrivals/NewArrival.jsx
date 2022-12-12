import React from 'react';
import { useNewArrivals } from '../../Context/new-arrival-context';
import { ProductCard } from '../../index';
import Lottie from 'react-lottie';
import LoadingLottie from '../../Assets/Lottie/loading-0.json';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

function NewArrivals() {
  const { newArrivalsProductList } = useNewArrivals();

  const loadingObj = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (newArrivalsProductList == null) {
    return (
      <div className="new-arrivals-container">
        <Lottie
          options={loadingObj}
          height={380}
          style={{ margin: 'auto' }}
          isStopped={false}
          isPaused={false}
        />
      </div>
    );
  }

  return (
    <div className="new-arrivals-container">
      {newArrivalsProductList.map((product) => (
          <ProductCard key={product.id} productdetails={product} />
      ))}
    </div>
  );
}

export { NewArrivals };
