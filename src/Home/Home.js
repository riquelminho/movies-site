import Navbar from "../Navbar";
import Trending from "../Trending";
import TvShow from "../TvShow";
import Upcoming from "../Upcoming";
import TopRated from "../TopRated";
import WatchingPage from "../WatchingPage";



//import Trailers from "../Trailers";

const Home = () => {
  return (
    <main>
  
      
        <Navbar />
        <Trending />
        <TvShow />
        <Upcoming />
        <TopRated />
        <WatchingPage />

    </main>
  );
};

export default Home;
