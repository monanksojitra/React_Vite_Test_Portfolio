
import Navbar from "./components/Navbar";
import Contect from "./components/Contect";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";

const App = () => {
  return <DeoloymentComponent />;
};

export default App;

// const MainLayout = () => {
//   return (
//     <Layout>
//       <Outlet />
//     </Layout>
//   );
// };

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Navbar />
//       {children}
//       <Footer />
//     </>
//   );
// };
// const MainSection = () => {
//   return (
//     <>
//       <Hero />
//       <ProjectList />
//       <Skills />
//       <Contect />
//       <InfoSection />
//     </>
//   );
// };

// const RouterComponent = () => {
//   return (
//     <BrowserRouter>
//       <div className="font-Poppins py-2 container mx-auto">
//         <Routes>
//           <Route path="/" element={<MainLayout />}>
//             <Route index element={<MainSection />} />
//             <Route path="/test" element={<Test />} />
//           </Route>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

const DeoloymentComponent = () => {
  return (
    <div className="font-Poppins py-2 container mx-auto">
      <Navbar />
      <Hero />
      <ProjectList />
      <Skills />
      <Contect />
      <InfoSection />
      <Footer />
    </div>
  );
};
