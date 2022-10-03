import React, { useContext } from "react";
import Introduction from "./components/introduction/Introduction";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contacts/Contact";
import Toggle from "./components/toggle/Toggle";
import {ThemeContext} from './context'

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
  <div style={{backgroundColor:darkMode ? '#222' : 'white', color: darkMode && 'white'}}>
    <Toggle/>
   <Introduction/>
   <About/> 
   <ProductList/>
   <Contact/>
  </div>
  );
}

export default App;

