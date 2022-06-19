import Hero from "../templates/hero";
import InfoPage from "../templates/feature";
import ArticlesPage from "../templates/articles";
import Subscribe from "../templates/subscribe";
import Footer from "../templates/footer";
import PoliciesPage from "../templates/policies";

const HomePage = () => {
  return (
    <div>
      <div className="w-full block relative h-[auto]">
        <Hero />
      </div>
      <InfoPage />
      <ArticlesPage />
      <Subscribe />
      <PoliciesPage />
      <Footer />
    </div>
  );
};

export default HomePage;
