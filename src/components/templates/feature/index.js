const InfoPage = () => {
  return (
    <div className="my-8 p-5 lg:container m-auto">
      <div className="flex justify-evenly">
        <div>
          <h2 className="text-2xl">
            $901,111,111.26
            <p className="ml-8 text-green-500 text-3xl inline-block">
              Dividends
            </p>
          </h2>
          <p className="inline-block text-sm text-gray-700">
            Paid out to Hatom Token Holders over 3 years
          </p>
        </div>

        <div>
          <button
            type="button"
            className="bg-gradient-to-r from-green-700 to-green-900  inline-flex items-center px-3 py-2  border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Buy Hatom Tokens
          </button>
        </div>
      </div>
      <div>
        <h3 className="mt-12 text-2xl">
          <span className="text-indigo-700">Features</span> of Hatom Protocol
        </h3>
      </div>
    </div>
  );
};

export default InfoPage;
