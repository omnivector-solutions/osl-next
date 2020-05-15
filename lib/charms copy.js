import "isomorphic-fetch";

export function getCharmData() {
  fetch(
    "https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=100&type=charm"
  )
    .then((res) => res.json())
    .then(
      (result) => {
        const allCharmData = result.Results.map((charmId) => {
          const thisID = charmId.Id.substring(3);
          fetch(
            `https://api.jujucharms.com/charmstore/v5/${thisID}/meta/charm-metadata`
          )
            .then((res) => res.json())
            .then(
              (result) => {
                console.log("CHARM DATA: ", result.name);
                return result;
              },
              (error) => {
                return error;
              }
            );
        });
        console.log("All Charm Data: ", allCharmData);
        return allCharmData;
      },
      (error) => {
        return error;
      }
    );
}
