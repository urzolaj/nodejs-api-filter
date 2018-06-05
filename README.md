# nodejs-api-filter

The server uses Loopback as ORM and the client uses Angular Reactive Forms to real-time render items list from the Loopback API.

## Getting Started

### Prerequisites

Make sure you have Node 8.0.0 or higher, together with NPM 6 properly installed (https://nodejs.org/en/download/)
Also, you need an instance of MongoDB (3.6.x or later) running as the API works with it (https://docs.mongodb.com/manual/installation/)

### Installing

Open a command line console (Run the below commands as root user to avoid permission errors).

Install Angular CLI

```
npm install -g @angular/cli
```

Navigate to the project root directory

Install NPM dependencies

```
npm install
```

## Run Loopback server

```
node .
```

Open `http://localhost:3000/explorer/` in your browser. Now you are able to see the database explorer where you can apply CRUD operations. Refer (`https://loopback.io/doc/en/lb3/Use-API-Explorer.html`)

Get back to terminal and navigate to the ./client/hotels-ui folder

Install NPM dependencies

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
