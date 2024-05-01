<div align="center">

# Traffic accident frontend app

Create traffic accident forecast wia weather conditions in Moscow at north

</div>

---

## Stack

- Typescript
- React 18
- Context API / hooks
- axios
- react-window
- react-helmet
- react-i18next
- react-chartjs-2
- react-router-dom
- styled-components
- MUI

## Lighthouse & Web Vitals

![LightHouse](https://github.com/jsinkx/traffic-accident-frontend/assets/69904090/e8604257-db90-447c-87bc-fb711cf4e068)

![Web Vitals](https://github.com/jsinkx/traffic-accident-frontend/assets/69904090/81d514d5-671a-4b1d-bc3d-90ebdd2032ad)

## Config app

An example of the config is in `.env.example`, but to use it you need to create `.env`

Integration of the config from `.env` into javascript variables and all constants are in
`./src/shared/constants.ts`

## Production mode

### By docker

Way without create `.env`

```sh
docker build -t traffic-accident-frontend-build --build-arg GENERATE_SOURCEMAP=false --build-arg VITE_API_URL=<API_URL>  .
```

<strong> Warning: don't forget to create `.env` </strong>

```sh
docker build -t traffic-accident-frontend-build .
```

Run build container

```sh
docker run --name traffic-accident-frontend-build --restart=always -d -p 80:80 traffic-accident-frontend-build
```

### By package manage (don't recommended)

_Check installation part_

```sh
pn build
pn serve
```

## Dev mode & installation

### Via system

1. [`git`](https://git-scm.com/)
2. [`Node.js`](https://nodejs.org/)
3. [`pnpm`](https://pnpm.io/installation)
4. Install all dependencies `package.json`

**Warning**: before use `pn` command, need to read alias in `.bashrc` or `alias.bat`, also instead `pn` can
called `pnpm`

Terminal

```sh
source .bashrc
```

Cmd

```sh
alias.bat
```

Install all dependencies

```sh
cd traffic-accident-frontend
pn i
```

Run `pn dev`
