
import { Routes, Route} from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Store from "./components/Pages/Store";
import Layout from "./components/Layout/Layout";
import ContactUs from "./components/Pages/ContactUs";
import ProductsDetails from "./components/Product/ProductsDetails";

import PrivateRoute from "./uitls/PrivateRoute/PrivateRoute";
import { useEffect,useContext } from "react";
import CartContext from "./context/CartContext";
import LoginPage from "./components/Pages/LoginPage";


function App() {

  const ctx = useContext(CartContext);
  useEffect(() =>{
 
    ctx.initialCart();
   

  },['']);

  return (
    <>
      <Layout>
       <Routes>
          <Route path= '/' element = {<Home/>}/>
          
          <Route path = '/store' exact element = {<PrivateRoute><Store/></PrivateRoute>}>
          </Route>
          <Route path = '/about' element={<About/>}/>
         
          <Route path = '/login' element={<LoginPage/>}/>
          <Route path = '/contactUs' element={<ContactUs/>}/>
          <Route path = '/productDetails/:productId' element={<ProductsDetails/>}/>  
          </Routes>
       </Layout>
     </>
  );
}

export default App;
