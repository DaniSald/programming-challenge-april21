# API setup

## Stack

- yarn
- node.js with express and sequelize
- postgresql (local)

## Steps

First of all copy or move the `movies.csv` and `ratings.csv` files from the [dataset](http://files.grouplens.org/datasets/movielens/ml-25m.zip) to the `/api/src/database/raw_data` directory.

1. Create the enviroment variables file `.env` at `/api` directory. There is a `.env.sample` file that you can rely on.

```
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
```

2. Create your user on the postgres server as you specified on your `.env` file and grant it the superuser role.

```sql
CREATE USER <DB_USER> WITH PASSWORD '<DB_PASSWORD>';
ALTER USER <DB_USER> WITH SUPERUSER;
```

3. If you have `make` installed just run `make bootstrap` on the `/api` directory. If not, run the commands below:

```
yarn
yarn sequelize db:create
yarn sequelize db:migrate
yarn sequelize db:seed:all
yarn server
```

Just run `yarn server` on future starts. At this point you should be able to access the API at [http://localhost:9000](http://localhost:9000).

## Routes

This API provides two routes for searching in the database.

- `/movie` - Filters the movies by year and/or genre.

  - query params:

    - `year` - Release year.
    - `genre` - [Action | Adventure | Animation | Children | Comedy | Crime | Documentary | Drama | Fantasy | Film-Noir | Horror | Musical | Mystery | Romance | Sci-Fi | Thriller | War | Western]

    **you can provide one param or both, but never none.**

- `/rating/:limit` - Returns the n (limit) best rated movies.

## Try it yourself

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/0f7e5a0e5c312577741e)
