# coinmarketcap-private-apis

Convert CoinMarketCap's private APIs to public APIs

## Installation

Clone repo
```bash
git clone https://github.com/ozgrozer/coinmarketcap-private-apis.git
```

Change directory
```bash
cd coinmarketcap-private-apis
```

Copy `.env.example` as `.env`
```bash
cp .env.example .env
```

Open `.env` and just generate a random bearer token to add to `BEARER_TOKEN` variable (will be used in requests for extra security)
```bash
vim .env
```

Install dependencies for this app
```bash
yarn install
```

Install dependencies for `Puppeteer`
```bash
apt install -y libasound2 libnss3-dev libgdk-pixbuf2.0-dev libgtk-3-dev libxss-dev
```

Build the app
```bash
yarn build
```

Start the app with `Yarn`
```bash
yarn start
```

Now APIs should be working on the URL
```bash
http://your-ip:1360/
```

To run it continuously you'd like to use `PM2` or a similar process manager
```bash
# Install it if you don't have
yarn global add pm2
# Start the app with PM2
pm2 start pm2.json
# Set PM2 to be run on startups
pm2 startup
```

## Usage

Make a post request to your IP address with your bearer token
```js
const axios = require('axios')

const run = async () => {
  const collections = await axios({
    data: {
      start: '0',
      period: '4',
      limit: '100',
      desc: 'true',
      sort: 'volume'
    },
    method: 'post',
    url: 'http://your-ip:1360/api/nft/collections',
    headers: {
      Authorization: 'Bearer BEARER_TOKEN'
    }
  })

  console.log(collections.data)
}

run()
```

Results would be
```js
{
  success: true,
  coinmarketcap: {
    data: { count: '1901', collections: [Array], blockChains: [Array] },
    status: {
      timestamp: '2022-03-06T19:45:08.867Z',
      error_code: '0',
      error_message: 'SUCCESS',
      elapsed: '89',
      credit_count: 0
    }
  }
}
```
