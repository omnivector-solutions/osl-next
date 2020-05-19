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
      return charm;
    })
  );
  return allCharmMetadata;
}

export async function getCharmNames() {
  let charmIds = await getCharmIds();

  const allCharmNames = await Promise.all(
    charmIds.Results.map(async (charm) => {
      // Notice callback is async to work with .map

      //get metadata
      let res = await fetch(
        `https://api.jujucharms.com/charmstore/v5/${charm.Id.substring(
          3
        )}/meta/charm-metadata`
      );
      let data = await res.json();

      return data.Name;
    })
  );
  return allCharmNames;
}

export async function getOneCharm(charmName) {
  let charm = {};

  let charmId = await fetch(
    `https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=1&name=${charmName}`
  );
  charmId = await charmId.json();
  charm.Id = charmId.Results[0].Id;

  //get charm data
  let metadata = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${charm.Id.substring(
      3
    )}/meta/any?include=archive-size&include=charm-actions&include=charm-config&include=charm-metadata&include=charm-metrics&include=charm-related&include=extra-info&include=common-info&include=id-name&include=manifest&include=stats`
  );
  metadata = await metadata.json();
  Object.assign(charm, metadata);

  //get readme
  let readme = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${charm.Id.substring(3)}/readme`
  );
  readme = await readme.text();
  charm.readme = readme;

  return charm;
}
