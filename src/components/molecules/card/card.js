import LearnMoreBtn from "../../atoms/learnMore";

const Card = ({ src, name, description }) => {
  return (
    <>
      <div
        aria-hidden="true"
        className=" pt-4 aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
      >
        <img
          src={src}
          alt={name}
          className=" rounded-lg  w-full h-full object-center object-cover"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-gray-900 w-full text-left">
        {name}
      </h3>
      <p className="mt-2 text-sm text-gray-500 text-left w-full">
        {description}
      </p>
      <LearnMoreBtn />
    </>
  );
};

export default Card;
