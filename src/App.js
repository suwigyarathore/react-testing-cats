import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Card
        name="Sydney"
        phone="111-111-111"
        email="cat@gmail.com"
        image={{
          url: "https://media.istockphoto.com/photos/kitten-exploring-domestic-setting-picture-id1335433001?k=20&m=1335433001&s=612x612&w=0&h=dsapxuNHv_J3eG05LFjqqf7NhfI6XNnhNq5KjReY_lE=",
          alt: "cute cat",
        }}
        favorite={false}
      />
    </div>
  );
}

export default App;
