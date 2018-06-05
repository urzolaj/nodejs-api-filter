# nodejs-api-filter

This project uses Loopback 3 as ORM and Angular 5 as client. Use of Reactive Forms filter to real-time render items list through Loopback API response.

## Getting Started

### Prerequisites

Make sure you have Node 8.0.0 or higher, together with NPM 6 properly installed (https://nodejs.org/en/download/)

Angular CLI should be installed globally to run the UI server. The client part of this project was made using Angular CLI: 1.6.5

```
npm install -g @angular/cli
```

Also, you need an instance of MongoDB (3.6.x or later) running as the API works with it (https://docs.mongodb.com/manual/installation/)

Once you know MongoDB is installed and the directory `/data/db` exists, open a terminal window and navigate to MongoDB installation folder and run:

```
./bin/mongod
```

### Installing

Open a command line console (Run the below commands as root user to avoid permission errors).

Navigate to the project root directory

Install NPM dependencies by running:

```
npm install
```

## Run Loopback server

In order to establish connection with the MongoDB database, run:

```
node .
```

Open `http://localhost:3000/explorer/` in your browser. Now you are able to see the database explorer where you can apply CRUD operations. Refer (`https://loopback.io/doc/en/lb3/Use-API-Explorer.html`)

Get back to terminal and navigate to the ./client/hotels-ui folder

Install NPM dependencies by running:

```
npm install
```

## Run client Development server

```
ng serve
```

Open `http://localhost:4200/` in your browser. The app will automatically reload if you change any of the source files.

## UI Guide

The User Interface of this application has two main sections: a form at the left where the user can choose options to filter hotels, and the section at the right shows the list of hotels matching the filter criteria used on the filter form.

- Filtering by name would retrieve any hotel containing the string in its name property.
- Filtering by All stars option would retrieve all the hotels on the database.
- Filtering by any star(s) would retrieve all the hotels with those numbers of stars.

The layout was made using flexbox and it adapts to any screen widths greater than 360px.

## Build

Inside hotels-ui folder, run:

```
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Contributing

This project is not intended to be forked

## Authors

* **Johann Garrido** - [urzolaj](https://github.com/urzolaj)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Further help

Contact the author via email: johann.gz@gmail.com

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
