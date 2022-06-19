import React from "react";
import Lottie from "react-lottie";
import magicAnimation from "../../assets/json/magic.json";

const BookingLoadingIcon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: magicAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} className="-z-30 absolute w-full" />;
};

export default BookingLoadingIcon;
