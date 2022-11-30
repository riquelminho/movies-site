import Trending from "../Trending";
import TvShow from "../TvShow";
import Upcoming from "../Upcoming";
import TopRated from "../TopRated";
import Search from "../Search";
import Footer from "../Footer";



//import Trailers from "../Trailers";

const Home = () => {
  return (
    <main>
      <Search />

      <Trending />
      <TvShow />
      <Upcoming />
      <TopRated />
      <Footer />
    </main>
  );
};

export default Home;
