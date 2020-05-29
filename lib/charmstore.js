import "isomorphic-fetch";

export async function getBundleIds() {
  let res = await fetch(
    "https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=100&type=bundle"
  );
  let bundleIds = await res.json();

  return bundleIds.Results;
}

export async function getBundleMetadata() {
  let bundleIds = await getBundleIds();
  let bundleQueryString = `https://api.jujucharms.com/charmstore/v5/meta/any?include=bundle-metadata&include=id-name&id=${bundleIds[0].Id.substring(
    3
  )}`;

  for (let index = 1; index < bundleIds.length; index++) {
    bundleQueryString =
      bundleQueryString + "&id=" + bundleIds[index].Id.substring(3);
  }

  let data = await fetch(bundleQueryString);
  const bundleJson = await data.json();

  return Object.keys(bundleJson).map((k) => bundleJson[k]);
}

export async function getBundleNames() {
  let bundleIds = await getBundleIds();

  const allBundleNames = await Promise.all(
    bundleIds.map(async (bundle) => {
      // Notice callback is async to work with .map

      //get metadata
      const qs = `https://api.jujucharms.com/charmstore/v5/${bundle.Id.substring(
        3
      )}/meta/id-name`;

      let res = await fetch(qs);

      let data = await res.json();

      return data.Name;
    })
  );

  return allBundleNames;
}

export async function getOneBundle(bundleName) {
  let bundleId = await fetch(
    `https://api.jujucharms.com/charmstore/v5/search?owner=omnivector&limit=1&name=${bundleName}`
  );
  bundleId = await bundleId.json();

  //get bundle data
  let data = await fetch(
    `https://api.jujucharms.com/charmstore/v5/meta/any?include=archive-size&include=archive-upload-time&include=bundle-machine-count&include=bundle-metadata&include=bundle-unit-count&include=bundles-containing&include=charm-actions&include=charm-config&include=charm-metadata&include=charm-metrics&include=charm-related&include=extra-info&include=hash&include=hash256&include=id&include=id-name&include=id-revision&include=id-series&include=id-user&include=manifest&include=promulgated&include=published&include=revision-info&include=stats&include=supported-series&include=tags&id=${bundleId.Results[0].Id.substring(
      3
    )}`
  );

  let bundleJson = await data.json();

  return Object.values(bundleJson)[0];
}

//    CHARMS

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
  let qs = `https://api.jujucharms.com/charmstore/v5/${charm.Id.substring(
    3
  )}/meta/any?include=archive-size&include=charm-actions&include=charm-config&include=charm-metadata&include=charm-metrics&include=charm-related&include=extra-info&include=common-info&include=id-name&include=manifest&include=stats`;
  let metadata = await fetch(qs);
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
