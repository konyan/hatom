import Lottie from "lottie-react";
import logoAnimation from "../../../assets/json/loop.json";
import Button from "../../atoms/button";

const PoliciesPage = () => {
  return (
    <div
      className="md:flex md:flex-row justify-center block md:pt-0 h-[500px] md:h-auto align-center overflow-hidden"
      style={{ backgroundColor: "#081424" }}
    >
      <div className="flex flex-col  md:w-1/3 justify-center md:mx-20 pt-8 md:mt-0 items-center">
        <h1 className="w-full text-center text-3xl p-2 text-white">
          Disclaimer
        </h1>
        <Button btnName="Legal Information" className="inline-block" />
      </div>
      <div className="w-full mt-4">
        <Lottie
          animationData={logoAnimation}
          loop={true}
          autoplay={true}
          className="w-full md:h-auto rotate-90 md:rotate-0 block h-[100vw]"
          width="400px"
          rendererSettings={{
            preserveAspectRatio: "x2 slice",
          }}
        />
      </div>
    </div>
  );
};
export default PoliciesPage;
