// import logo from "./logo.svg";
import "./App.css";
import "./Reset.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="body-background page-width">
      <Header />
      <main>
        <Hero />
        <Grid />
      </main>
      <Footer />
    </body>
  );
}

export default App;
