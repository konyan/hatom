import Hero from "../templates/hero";
import InfoPage from "../templates/feature";

const HomePage = () => {
  return (
    <div>
      <div className="w-full block relative h-[auto]">
        <Hero />
      </div>
      <InfoPage />
    </div>
  );
};

export default HomePage;
