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

## Generated Documentation

[See](./docs/globals.md) documentation on endpoints in details

## example usage

```ts
import { Beget } from 'node-beget';

const begetConfig = { login: 'login', password: 'password' };
const beget = new Beget(begetConfig);

// ...
// get account info
const accountInfo = await beget.user.getAccountInfo();

// toggle ssh
beget.user.toggleSsh(0);
```

```ts
// if you need only one endpoint

import { UserEndpoint, BegetRequest } from 'node-beget';

const begetConfig = { login: 'login', password: 'password' };
const begetClient = new BegetRequest(begetConfig);
const user = new UserEndpoint(begetClient);

// ...
await user.getAccountInfo();
```
