import Head from "next/head";
import { Fragment, useEffect } from "react";
import {
  aTagClick,
  dataImage,
  wowJsAnimation,
} from "../utilits";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import Preloader from "./Preloader";

const Layout = ({ children, headName, dark }) => {
    useEffect(() => {
    dataImage();
    wowJsAnimation();
    aTagClick();
  });
  return (
    <Fragment>
      <Head>
        <title>Folioz.com | {headName ? headName : "Home"} </title>
      </Head>
      <Preloader />
      <div className="aali_tm_all_wrap" data-magic-cursor="show">
        <MobileMenu />
        <Header dark={dark} />
        {children}
        <Footer />
        <Cursor />
      </div>
    </Fragment>
  );
};

export default Layout;
