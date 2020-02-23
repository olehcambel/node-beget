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
// getaccount info
const accountInfo = await beget.user.getAccountInfo();

// toggle ssh
beget.user.toggleSsh(0);
```

```ts
// if you need only one endpoint

import { UserEndpoint, Beget } from 'beget-api';

const begetConfig = { login: 'login', password: 'password' };
const beget = new Beget(begetConfig);
const user = new UserEndpoint(beget);

// ...
await user.getAccountInfo();
```
