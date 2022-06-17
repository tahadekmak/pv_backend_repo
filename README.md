## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# To use the 3 available APIs, provide your EtherScan API key in owners.service & transactions.service

# GET all owners (parameters: Contract Address, tokenId)
http://localhost:3000/owners/APIKEY/tockenId

# GET all transactions (parameters: Contract Address, tokenId)
http://localhost:3000/transactions/APIKEY/tockenId

# GET the wallet address of the user who minted a token (paramters: Contract Address, tokenId)
http://localhost:3000/owners/mintOwner/APIKEY/tockenId
