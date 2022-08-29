import "./App.css";
import "./index.css";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;
