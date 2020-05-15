import React from "react";
import Iframe from "react-iframe";
import Layout from "../components/layout";
import { getCharms } from "../lib/charmstore";

export async function getStaticProps() {
  const data = await getCharms();
  return {
    props: {
      charmData: data,
    },
  };
}

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
