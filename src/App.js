import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import Products from "./components/Products";

function App() {
  return (
    <div className="container lg:max-w-[1280px] w-[100%] m-auto">
      <Header />
      <Items />
      <Products />
    </div>
  );
}

export default App;
