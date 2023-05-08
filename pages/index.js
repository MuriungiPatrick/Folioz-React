import Home from "../src/components/Home";
import Service from "../src/components/Service";
import Counter from "../src/components/Counter";
import Layout from "../src/layouts/Layout";


const Index = () => {
    return (
      <Layout>
        <Home />
        <Service />
        <Counter />
      </Layout>
    );
  };
  
  export default Index;
