import { jsx as _jsx } from "react/jsx-runtime";
import Player from "lottie-react";
import loadingAnimation from "../../assets/animation.json";
const LottieAnimation = () => {
    return (_jsx("div", { className: 'flex justify-center  ', children: _jsx(Player, { autoplay: true, loop: true, animationData: loadingAnimation, style: { height: "400px", width: "400px" } }) }));
};
export default LottieAnimation;
