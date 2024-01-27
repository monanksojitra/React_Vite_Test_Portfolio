import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./Home";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import Test from "./components/Test";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-Poppins py-2 container mx-auto">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<MainSection />} />
            <Route path="/test" element={<Test />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

const MainLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
const MainSection = () => {
  return (
    <>
      <Hero />
      <ProjectList />
      <Skills />
      <Contect />
      <InfoSection />
    </>
  );
};
