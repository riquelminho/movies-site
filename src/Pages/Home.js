
import Footer from "../Components/Footer";
import TopRated from "../Components/TopRated";
import Upcoming from "../Components/Upcoming";
import TvShow from "../Components/TvShow";
import Trending from "../Components/Trending";
import Search from "../Components/Search";



const Home = () => {
  return (
    <main>
      <Search/>
      <Trending/>
      <TvShow />
      <Upcoming />
      <TopRated />
      <Footer />
    </main>
  );
};

export default Home;
