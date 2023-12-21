import { Helmet } from "react-helmet";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import UserTypesSection from "../../Components/UserTypesSection/UserTypesSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | TaskFlowPro</title>
      </Helmet>
      <Banner />
      <UserTypesSection />
      <Footer />
    </div>
  );
};

export default Home;
