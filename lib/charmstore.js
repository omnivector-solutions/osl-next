export async function getCharms() {
  let res = await fetch(
    "https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=100&type=charm"
  );
  let charmIds = await res.json();
  console.log("CHARM IDs: ", charmIds.Results);

  const allCharms = await Promise.all(
    charmIds.Results.map(async (charm) => {
      // Notice callback is async
      const thisID = charm.Id.substring(3);
      let res = await fetch(
        `https://api.jujucharms.com/charmstore/v5/${thisID}/meta/charm-metadata`
      );

      let charmData = await res.json();
      return charmData;
    })
  );
  console.log(allCharms);

  return allCharms;
}
