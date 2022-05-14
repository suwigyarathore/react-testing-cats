import Cards from "./components/cards/Cards";
import cats from "./mocks/cats.json";

function App() {
  return (
    <div className="App">
      <Cards cats={cats} />
    </div>
  );
}

export default App;
