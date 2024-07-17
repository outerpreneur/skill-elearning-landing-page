// import logo from "./logo.svg";
import "./App.css";
import "./Reset.css";
import Grid from "./components/Grid";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <body className="body-background  font-plus-jackarta">
      <Header />
      <main className="page-width">
        <Hero />
        <Grid />
      </main>
      <Footer />
    </body>
  );
}

export default App;
