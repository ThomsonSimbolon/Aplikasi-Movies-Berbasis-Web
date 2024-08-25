import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import "./style/landingPage.css";
import Superhero from "./components/Superhero";
import Romantic from "./components/Romantic";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="navigation">
        <NavigationBar />
        <Intro />
      </div>
      {/* End Intro */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End Trending */}

      {/* Superhero Section */}
      <div className="superhero">
        <Superhero />
      </div>
      {/* End Superhero */}

      {/* Romantic Section */}
      <div className="romantic">
        <Romantic />
      </div>
      {/* End Romantic */}

      {/* Footer */}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
