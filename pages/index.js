import Home from "../src/components/Home"
import Service from "../src/components/Service"
import About from "../src/components/About"
import Video from "../src/components/Video"
import Testimonial from "../src/components/Testimonial"
import Layout from "../src/layouts/Layout"


const Index = () => {
    return (
      <Layout>
        <Home />
        <Service />
        <About />
        <Testimonial />
        <Video />
      </Layout>
    );
  };
  
  export default Index;
