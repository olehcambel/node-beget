## Introduction

> Client library for accessing Beget API. Beget.API will allow to use most features of the administration panel directly from your own scripts, content management systems (CMS) and other software products.

### What can I do using Beget.API?
- Receive information about the web hosting account;
- Administer security backups;
- Administer the task planner;
- Adjust DNS;
- Administer databases;
- Create and delete websites on account;
- Manage domains settings;
- Manage mailboxes.

## Documentation

[See](./docs/globals.md) documentation on endpoints in details

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
