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

`yarn add -g serve` `yarn run build` `serve -s build`

## Стек

- Typescript
- React
- styled-components
- MUI
- chart.js
- react-router-dom
- axios

## Конфигурация

Пример конфига находится в `.env.example`, но для использования нужно использовать `.env`

Интеграция конфига из env в переменные и все константы находятся в `./src/shared/constants.ts`
