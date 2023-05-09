import Home from "../src/components/Home";
import Service from "../src/components/Service";
import VideoSection from "../src/components/VideoSection";
import Layout from "../src/layouts/Layout";


const Index = () => {
    return (
      <Layout>
        <Home />
        <Service />
        <VideoSection />
      </Layout>
    );
  };
  
  export default Index;
