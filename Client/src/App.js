
import { BrowserRouter ,  Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import ProductsList from "./pages/ProductList"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Success from "./pages/Success";



const App = () => {
  
  return (
    <>
    <BrowserRouter >
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/products/:category" element={<ProductsList/>} />
      <Route path="/product/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/success" element={<Success/>} />


    </Routes>
    </BrowserRouter>
    </>
  )

};

export default App;
