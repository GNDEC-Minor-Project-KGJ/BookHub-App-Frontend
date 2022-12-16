import React from 'react';
import Lottie from 'react-lottie';
import LoadingLottie from '../../Assets/Lottie/loading-0.json';

const loadingObj = {
  loop: true,
  autoplay: true,
  animationData: LoadingLottie,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

function Loader() {
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

export default Loader;
