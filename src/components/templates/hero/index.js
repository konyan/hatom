import { ReactComponent as BgImage } from "../../../assets/images/bg.svg";
import { ReactComponent as MachineImage } from "../../../assets/images/machine.svg";

import { ReactComponent as People } from "../../../assets/images/people.svg";
import Lottie from "lottie-react";
import magicAnimation from "../../../assets/json/magic.json";

import Coin from "../../../assets/images/coin.png";

const Hero = () => {
  return (
    <div className="w-full h-full block relative bg-transparent">
      <BgImage className="-z-40 object-cover top-0 right-0 w-full" />
      {/* <im dg src={Coin} alt="coin" className="absolute bg-center bg-no-repeat	" /> */}
      <Lottie
        animationData={magicAnimation}
        loop={true}
        autoplay={true}
        className="z-0 absolute w-full bg-transparent top-0 right-0"
      />
      <MachineImage className="absolute z-0 object-cover top-0 right-0 w-full" />
      <People className="absolute z-0 object-cover top-0 right-0 w-full" />
    </div>
  );
};

export default Hero;
