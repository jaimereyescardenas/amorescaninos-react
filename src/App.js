import './vendor/bootstrap-4.5.0-dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainApp from "./components/MainApp";

function App() {
  return (
    <div className="App">
      <Header />
      <MainApp />
      <Footer />
    </div>
  );
}

export default App;
