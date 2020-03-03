## node-beget

<!-- [![npm package](https://nodei.co/npm/node-beget.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-beget/) -->

[![NPM version](https://badge.fury.io/js/node-beget.png)](http://badge.fury.io/js/node-beget)
[![CircleCI](https://circleci.com/gh/olehcambel/node-beget.svg?style=svg)](https://circleci.com/gh/olehcambel/node-beget)
[![Coverage Status](https://coveralls.io/repos/github/olehcambel/node-beget/badge.svg?branch=master)](https://coveralls.io/github/olehcambel/node-beget?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/olehcambel/node-beget/badge.svg?targetFile=package.json)](https://snyk.io/test/github/olehcambel/node-beget?targetFile=package.json)

> [Beget](https://beget.com/en) wrapper for NodeJS. BegetAPI will allow to use most features of the administration panel directly from your own scripts, content management systems (CMS) and other software products.

### What can I do using Beget.API?

-   Receive information about the web hosting account;
-   Administer security backups;
-   Administer the task planner;
-   Adjust DNS;
-   Administer databases;
-   Create and delete websites on account;
-   Manage domains settings;
-   Manage mailboxes.

## Documentation

[See](https://github.com/olehcambel/node-beget.git/globals) documentation on endpoints in details

## example usage

```js
const { Beget } = require('node-beget');
// import { Beget } from 'node-beget';

const begetConfig = { login: 'login', password: 'password' };
const beget = new Beget(begetConfig);

// ...
// get account info
const accountInfo = await beget.user.getAccountInfo();

// toggle ssh
await beget.user.toggleSsh({ status: 1 });

await beget.mysql.dropAccess({ suffix: 'suffix', access: 'localhost' });
```

```js
const { UserEndpoint, BegetRequest } = require('node-beget');
// import { UserEndpoint, BegetRequest } from 'node-beget';

const begetConfig = { login: 'login', password: 'password' };
const begetClient = new BegetRequest(begetConfig);
const user = new UserEndpoint(begetClient);

// ...
await user.getAccountInfo();
```
