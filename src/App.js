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
import { AcountsProvider } from "./components/context/AccountsContext/AcountsContext";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AcountsProvider>
          <DarkModeProvider>
            <Routes>
              <Route path="/home" element={<Home/>}/>
              <Route path="/" element={<Store/>}/>
              <Route path="/save" element={<SaveCarts/>}/>
            </Routes>
          </DarkModeProvider>
        </AcountsProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

