import React from "react";
import Iframe from "react-iframe";
import Layout from "../components/layout";
import "isomorphic-fetch";
import { getAllCharmIds } from "../lib/charms";

export async function getStaticProps() {
  fetch(
    "https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=100&type=charm"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        console.log(result);
        return {
          props: {
            charms,
          },
        };
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
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
