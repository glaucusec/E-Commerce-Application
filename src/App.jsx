import { useState, Fragment } from "react";
import { Divider } from "@chakra-ui/react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";

function App() {
  return (
    <Fragment>
      <Header />
      <Divider />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
