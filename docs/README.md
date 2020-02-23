[node-beget](README.md) › [Globals](globals.md)

# node-beget

## Introduction

> Client library for accessing Beget API

## Generated Documentation

-   [Details](./docs/globals.md)

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
