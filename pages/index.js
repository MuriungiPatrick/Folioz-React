import Home from "../src/components/Home"
import Service from "../src/components/Service"
import About from "../src/components/About"
import Video from "../src/components/Video"
import Faq from "../src/components/Faq"
import Cta from "../src/components/Cta"
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
        <Faq />
        <Cta />
      </Layout>
    );
  };
  
  export default Index;
