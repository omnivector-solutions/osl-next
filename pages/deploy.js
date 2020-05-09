import React from "react";
import Iframe from "react-iframe";
import Layout from "../components/layout";

const Deploy = () => {
  return (
    <Layout>
      <div>
        <Iframe
          url="https://jaas.ai/u/omnivector"
          width="100%"
          height="4280px"
          id="jaas"
          display="initial"
          position="relative"
          frameBorder="0"
        />
      </div>
    </Layout>
  );
};

export default Deploy;
