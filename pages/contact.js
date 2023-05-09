import React from 'react';

import VideoSection from "../src/components/VideoSection";
import Layout from "../src/layouts/Layout";

function contact() {
  return (
      <Layout>
        <title>Folioz | {headName ? headName : "Contact"} </title>
    <VideoSection />
  </Layout>
   
  
  )
}

export default contact