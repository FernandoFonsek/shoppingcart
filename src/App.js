import {
  BrowserRouter, 
  Routes,
  Route
  } from "react-router-dom"
  
  //import pages
import Home from "./pages/Home";
import Store from "./pages/Store";

import {DarkModeProvider} from "./components/context/DarkModeContext"
import {CartProvider} from "./components/context/CartContext/CartContext"
import SaveCarts from "./pages/SaveCarts";


function App() {
  return (
    <CartProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/store" element={<Store/>}/>
            <Route path="/save" element={<SaveCarts/>}/>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </CartProvider>
  );
}

export default App;
