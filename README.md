# Environment configuration

#### 1 - Clone this project with ssh key.

```bash
git clone git@github.com:yeaaah-dev/yeah-stock.git
```

#### 2 - Instalar as depedências.

This command go to generate a node_module folder, there is where stay all the libs/dependencies.

```bash
npm install
```

or

```bash
npm i
```

#### 2 - Run the project

The project will run at the port `5173`, then just put this url on the your browser `http://localhos:5173` that you will see the project running.

```bash
npm run dev
```

#### 3 - Back end

Our back-end in the file `db.json`, where you can put data on the array. We are use the lib json-server. The documentation link is below.

[Json Server Doc](https://github.com/typicode/json-server)

#### 4 - Run the back-end

This command will start the back-end at the port `3004`.

```bash
npx json-server --watch db.json --port 3004
```
