import React from "react";
import Layout from "./Layout/Layout";
import Navigation from "../Navigation/Navigation";
import Footer from "./Footer/Footer";
import { Provider } from 'react-redux';
import store from "../Redux/Store";

function App() {
  return (
    <div>
      <Layout />
      <Provider store={store}> 
          <Navigation />
      </Provider>
      <Footer />
    </div>
  );
};

export default App;