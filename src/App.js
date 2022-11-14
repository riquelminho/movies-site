import Home from "./Home/Home";
import Navbar from "./Navbar";
import Trending from "./Trending";
import TvShow from "./TvShow";
import Upcoming from "./Upcoming";
import TopRated from "./TopRated";
import WatchingPage from "./WatchingPage";
import TrendingPage from "./TrendingPage";

import "./App.css";

function App() {
  return (
    <main>
      <Home />
      <Navbar />
      <Trending />
      <TrendingPage />
      <TvShow />
      <Upcoming />
      <TopRated />
      <WatchingPage />
    </main>
  );
}

export default App;
