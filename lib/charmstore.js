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
  const charm = {
    name: charmName,
  };

  let charmId = await fetch(
    `https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=1&name=${charm.name}`
  );
  charmId = await charmId.json();

  charm.id = charmId.Results[0].Id;

  //get charm-actions
  let actions = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${charm.id.substring(
      3
    )}/meta/charm-actions`
  );
  actions = await actions.json();
  charm.actions = actions.ActionSpecs;

  //get charm-config
  let config = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${charm.id.substring(
      3
    )}/meta/charm-config`
  );
  config = await config.json();
  charm.config = config.Options;

  //get charm-metadata
  let metadata = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${charm.id.substring(
      3
    )}/meta/charm-metadata`
  );
  metadata = await metadata.json();
  charm.metadata = metadata;

  //get common-info
  let common = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${charm.id.substring(
      3
    )}/meta/common-info`
  );
  common = await common.json();
  charm.common = common;

  //get readme
  let readme = await fetch(
    `https://api.jujucharms.com/charmstore/v5/${charm.id.substring(3)}/readme`
  );
  readme = await readme.text();
  charm.readme = readme;

  console.log(charm);

  return charm;
}
