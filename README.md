<p align="center"><img alt="React Showcase Project" src="https://user-images.githubusercontent.com/12038461/51156325-bc311500-1859-11e9-96de-fcc8bc0ba3c2.png"></p>

# React Showcase
#### A simple yet complete ReactJS application
This application provides a user registration screen with insertion and deletion of entries plus a screen with a grid of media cards. All the data is obtained by HTTP requests to a mocked REST API using the json-server library. The routing was made with the react-route library.

## Components, Functionalities and Patterns

* Responsive design using Bootstrap 4;
* Presents a navigation drawer and an app bar component;
* Use of the Fetch API to get and write data to a mocked REST API;
* Use of `react-router-dom` for routing;
* Stateful parents and stateless children;

## Installing and Running

1. Install (if you haven't already) JSON Server, a fake REST API tool, by running `> npm install -g json-server`;
2. Install the project's dependencies by executing the `> npm install` command in the root directory;
3. Enter the `/json-server` directory and start the mocked REST API by running `> json-server db.json`;
4. Back into the root directory of the project, run `> npm start`;

## Live Demo
If in a first attempt the application fails to load showing an **application error page**, please try refreshing the browser since the Heroku plataform put applications to sleep after some time of inactivity. The second request should work wihtout any problem.

https://react-showcase-client.herokuapp.com

## The Author
* [Behance](https://www.behance.net/joserogeriofilho)
* [Linkedin](https://www.linkedin.com/in/joserogeriofilho/)

## License
![Attribution 4.0 International CC License](https://i.creativecommons.org/l/by/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
