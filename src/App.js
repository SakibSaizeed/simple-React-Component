import logo from "./logo.svg";
import "./App.css";

function App() {
  //dynamic Component using array of object
  const obj = [
    { id: 1, productName: "Laptop", Brand: "MSI", price: 85000 },
    { id: 2, productName: "UltraBook", Brand: "DELL", price: 100000 },
    { id: 3, productName: "Mobile", Brand: "Apple", price: 135000 },
  ];

  return (
    <div className="App">
      <h1>Product List With React</h1>
      <quote>'Similar in Look, Different in Data'</quote>
      <h3> A practice project using react component, props in dynamic way </h3>
      {obj.map((productElement) => (
        <ProductComponent
          name={productElement.productName}
          price={productElement.price}
        ></ProductComponent>
      ))}
    </div>
  );

  function ProductComponent(props) {
    return (
      <div className="product-container">
        <h2>This is a component named 'Product'</h2>
        <h3>Name: {props.name}</h3>
        <h5>Price:(BDT) {props.price}</h5>
      </div>
    );
  }
}

export default App;
