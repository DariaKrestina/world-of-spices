# World of Spices

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**World of Spices** is a web application that allows registered users to view available spices and create custom spice blends.

<br>

## MVP

Create an app, where user will be able to sign in/sign up. Once account created user can view, create, update and delete a spice blend(s) to/from their blend collection. To achieve this goal I will use full CRUD on the Back end & Fron end.

<br>

### Goals

- Style the webpage using Grid/Flexbox and/or Bootstrap for React
- Use media queries for mobile and tablet 
- GET, POST, PUT, and DELETE data using RESTful api
- Link to separate components creating illusion of a multi page app utilizing React Router
- Deploy to Heroku, Netlify

<br>

### Libraries and Dependencies

|     Library      | Description                                                                                                                |
| :--------------: | :------------------------------------------------------------------------------------------------------------------------- |
|      React       | JavaScript library for building user interfaces.                                                                           |
|   React Router   | React Router is used to define multiple routes in the application.                                                         |
| React Bootstrap  | CSS framework directed at responsive, mobile-first front-end web development made specifically to work with React library. |
|     PostgreSQL   | Relational database management system.                                                                                     |
|  Ruby on Rails   | Ruby framework that includes everything needed to create database-backed web applications .                                |

<br>

### Client (Front End)

#### Wireframes
![Wireframes](https://i.imgur.com/JyprJvs.png)

#### Component Tree

[Component Tree](https://i.imgur.com/JpBUg61.png)

#### Component Architecture

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

## Code Issues & Resolutions
