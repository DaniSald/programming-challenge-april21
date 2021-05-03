# App setup

## Stack

- React
- React Router DOM
- axios

## Steps

1. Create the enviroment variables file `.env` in the `/app` directory. There is a `.env.sample` file that you can rely on.

```
REACT_APP_BASE_URL=
```

> Base URL should be the API URL.

2. If you have `make` installed just run `make bootstrap` at `/app` directory. If not, run the commands below:

```
yarn
yarn start
```

Just run `yarn start` on future starts. At this point you should be able to access the app [http://localhost:3000](http://localhost:3000).

## Pages

- Home - Simple home screen showing the app's name.
- Filter movies - Page with the form for filtering movies by year and/or genre.
- Top rank - Page with the form that returns the best rated movies.
