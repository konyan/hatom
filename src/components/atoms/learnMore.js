import { ArrowRightIcon } from "@heroicons/react/outline";

const LearnMoreBtn = () => {
  return (
    <span className="uppercase text-xs w-full text-left my-4 text-indigo-500 cursor-pointer">
      Learn more
      <ArrowRightIcon
        className="ml-4 h-4 w-4 inline-block"
        aria-hidden="true"
      />
    </span>
  );
};

export default LearnMoreBtn;
