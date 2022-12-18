# RBS Vehicle express

This project is based on some websites which's purpose is to manage car offers and allow people to easily sell or check cars for themselves.

# Technologies used to create the application
The back-end of the project is done with [express.js](https://expressjs.com/)  and the database used is [MONGODB](https://www.mongodb.com/home). For authorization is used [JWT](https://jwt.io/) and [cookie-parser](https://www.npmjs.com/package/cookie-parser). The front-end is done with [Angular](https://angular.io/).

## How to start the application
Open two terminals, in one navigate to the ```REST-API``` folder and type ```npm start```. This will execute the start script with [nodemon](https://www.npmjs.com/package/nodemon) which auto-resets the server upon change. In the second terminal navigate to the ```src``` folder which is into the ```frontend``` folder. Then type ```ng s``` or ``` ng serve``` to start the front-end part of the application.

## Zones

The app has ```guest``` zone, ```regular user``` zone and ```admin``` zone, protected by hidden address that is not accessible from anywhere unless manually written:

```bash
http://localhost:4200/o074dm1n/h1dd3n4ddr35s/570p/....
```

## Guests
The guests can only browse through the app, they cannot create car posts nor make requests for services from the company.

## Regular users
The regular users have all the access of the main part of the app, they can create, update and delete their posts, they can edit their personal data and make a request for services for their vehicles.

## Administrators
The admin users can log into the main page as users, as well as into the admin panel. In the admin panel they can see all the users, edit their data or delete them.