function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Button = ({ btnName, className }) => {
  let originClass =
    "bg-gradient-to-r from-green-700 to-green-900  px-3 py-3  border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-900";
  return (
    <button type="button" className={classNames(originClass, className)}>
      {btnName}
    </button>
  );
};

export default Button;
