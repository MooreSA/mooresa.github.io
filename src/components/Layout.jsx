/* eslint-disable quotes */
import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => (
  <div className="layout">
    <Header />
    <Outlet />
    <Footer />
  </div>
);
export default Layout;
