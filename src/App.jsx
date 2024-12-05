import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Features from "./components/Features";
import ContactUS from "./components/ContactUs";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import FoodCreate from "./components/FoodCreate";
import Details from "./components/Details";

const App = () => {
  let router = [
    {
      id: 1,
      Link: "/",
      element: <Home />,
    },
    {
      id: 2,
      Link: "/aboutus",
      element: <AboutUs />,
    },
    {
      id: 3,
      Link: "/menu",
      element: <Menu />,
    },
    {
      id: 4,
      Link: "/features",
      element: <Features />,
    },
    {
      id: 5,
      Link: "/contactus",
      element: <ContactUS />,
    },
    {
      id: 6,
      Link: "/createfood",
      element: <FoodCreate />,
    },
    {
      id: 7,
      Link:`/details/:id`,
      element: <Details />,
    },
  ];

  return (
    <>
      <Header />
      <Routes>
        {router.map((el) => (
          <Route path={el.Link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default App;
