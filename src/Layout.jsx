// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import ThemeWrapper from "./layout/ThemeWrapper";

const Layout = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeWrapper isDark={isDark}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="pt-20 px-4">
        <Outlet />
         
      </div>
       <Footer/>
    </ThemeWrapper>
   
  );
};

export default Layout;
