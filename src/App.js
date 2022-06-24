import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import "./App.css";
import logo from "./images/logo.svg";
import data from "./data";

function App() {
  const cardElements = data.map((i) => <Card key={i.id} item={i} />);
  return (
    <div className="App">
      <Header className="header" img={logo} title="my travel journal" />
      <section className="cardList">{cardElements}</section>
    </div>
  );
}

export default App;
