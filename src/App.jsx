import React from "react";
import { Blog, Featured, Footer, Hero, Navbar, RealSell, Subscribe } from "./containers";
import './App.css';

const App = () => (
    <div>
        <Navbar />
        <Hero  />
        <Featured />
        <RealSell />
        <Blog />
        <Subscribe />
        <Footer />
    </div>
);

export default App;