function App() {
  fetch('http://localhost:8000/products')
    .then((response) => response.json())
    .then(data => console.log(data));
  return <h1>E-Commerce</h1>;
}

export default App;
