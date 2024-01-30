# Клиентское веб приложения прогнозирования ДТП

---

## Установка

1. [`Node.js`](https://nodejs.org/) `LTS`
2. [`npm`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or
   [`yarn`](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
3. [`git`](https://git-scm.com/)
4. Установить все зависимости `package.json`

```sh
cd traffic-accident-frontend
yarn install
```

## Режим разработки

`yarn start`

## Режим продакшен

```sh
yarn run build
yarn serve
```

## Стек

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

## Конфигурация

Пример конфига находится в `.env.example`, но для использования нужно использовать `.env`

Интеграция конфига из env в переменные и все константы находятся в `./src/shared/constants.ts`

## Lighthouse & Web Vitals

![LightHouse](https://github.com/jsinkx/traffic-accident-frontend/assets/69904090/e8604257-db90-447c-87bc-fb711cf4e068)

![Web Vitals](https://github.com/jsinkx/traffic-accident-frontend/assets/69904090/81d514d5-671a-4b1d-bc3d-90ebdd2032ad)
