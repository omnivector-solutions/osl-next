import "isomorphic-fetch";

export async function getCharmIds() {
  let res = await fetch(
    "https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=100&type=charm"
  );
  let charmIds = await res.json();

  return charmIds;
}

export async function getCharmMetadata() {
  let charmIds = await getCharmIds();

  const allCharmMetadata = await Promise.all(
    charmIds.Results.map(async (charm) => {
      // Notice callback is async to work with .map

      //get metadata
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

  return allCharmMetadata;
}

export async function getOneCharm(charmName) {
  let allCharmIds = await getCharmIds();

  const thisId = allCharmIds.filter((id) =>
    id.toLowerCase().includes(charmName)
  );

  console.log(thisId);

  const charm = { Id: { thisId } };
  //get metadata
  data = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${thisId.substring(
      3
    )}/meta/charm-metadata`
  );
  charm.data = await data.json();

  //get read-me
  let readme = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${thisId.substring(3)}/readme`
  );
  charm.readme = await readme.text();
  console.log(charm);

  return charm;
}
