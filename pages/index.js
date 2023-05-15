import Home from "../src/components/Home";
import Service from "../src/components/Service";
import About from "../src/components/About";
import VideoSection from "../src/components/VideoSection";
import Layout from "../src/layouts/Layout";


const Index = () => {
    return (
      <Layout>
        <Home />
        <Service />
        <About />
        <VideoSection />
      </Layout>
    );
  };
  
  export default Index;
