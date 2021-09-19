const env = {
  NETWORK_ID: 56,
  CHAIN_NAME: "bsc",
  URL: {
    EXPLORER: 'https://bscscan.com',
    GRAPHQL: 'https://queries-graphnode.faraland.io/subgraphs/name/edwardevans094/farastore-v8',
    FARALAND: 'https://service.faraland.io',
    // FARALAND: 'https://faraland.moonknightlabs.com',
    FARALAND_GITHUB_ASSET: 'https://raw.githubusercontent.com/faraland/faraland-assets/master',
    COINGECKO_API: 'https://api.coingecko.com/',
  },
  NODE: {
    URL: "https://bsc-dataseed.binance.org/"
  },
  CONTRACT: {
    FARA_TOKEN: '0xf4ed363144981d3a65f42e7d0dc54ff9eef559a1',
    WBNB_TOKEN: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    MOONKNIGHT: '0xa7a9a8156c24c4b0ca910c3ba842d1f1ac7200ef',
    STAKING_POOL: '0x3057a6ef2acf803371315380d21d0193471e3ef8',
    EQUIPMENT: '0x39383f4172095090d0127d8bac79615e5dc2ba0e',
  }
};

export default env;