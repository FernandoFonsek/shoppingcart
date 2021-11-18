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


function App() {
  return (
    <BrowserRouter>
     <CartProvider>
        <DarkModeProvider>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/store" element={<Store/>}/>
          </Routes>
        </DarkModeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
