import dynamic from "next/dynamic";
import { useEffect } from "react";
import Home from "../src/components/Home";
import Service from "../src/components/Service";
import Layout from "../src/layouts/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});

const Index = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("dark");
  }, []);
  return (
    <Layout dark>
      <Home />
    
      <Service dark />
    
    </Layout>
  );
};

export default Index;
