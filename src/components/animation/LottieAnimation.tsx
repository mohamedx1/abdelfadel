import Player from "lottie-react";
import loadingAnimation from "../../assets/animation.json";

const LottieAnimation = () => {
  return (
    <div className='flex justify-center  '>
      <Player
        autoplay
        loop
        animationData={loadingAnimation}
        style={{ height: "400px", width: "400px" }}
      />
    </div>
  );
};

export default LottieAnimation;
