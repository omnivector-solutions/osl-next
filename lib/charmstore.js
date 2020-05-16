import "isomorphic-fetch";

export async function getCharms() {
  let res = await fetch(
    "https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=100&type=charm"
  );
  let charmIds = await res.json();

  const allCharms = await Promise.all(
    charmIds.Results.map(async (charm) => {
      // Notice callback is async

      //get data
      let data = await fetch(
        `https://api.jujucharms.com/charmstore/v5/${charm.Id.substring(
          3
        )}/meta/charm-metadata`
      );
      charm.data = await data.json();

      //get read-me
      let readme = await fetch(
        `https://api.jujucharms.com/charmstore/v5/${charm.Id.substring(
          3
        )}/readme`
      );
      charm.readme = await readme.text();

      return charm;
    })
  );
  console.log(allCharms[0]);

  return allCharms;
}
