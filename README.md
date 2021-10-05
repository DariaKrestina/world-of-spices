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

#### [Wireframes](https://www.figma.com/file/twSXmrDwSBn9RzNAFB7bIv/world-of-spices?node-id=0%3A1)
![Wireframes](https://i.imgur.com/JyprJvs.png)

#### Component Tree

![Component Tree](https://i.imgur.com/JpBUg61.png)

#### Component Architecture

``` structure

src
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Login.jsx
      |__ Register.jsx
      |__ Blends.jsx
      |__ Spices.jsx
      |__ SpiceDetail.jsx
      |__ BlendEdit.jsx
      |__ BlendCreate.js
      |__ Home.jsx
|__ services/
      |__ auth.js
      |__ config.jsx
      |__ blends.js
      |__ spices.jsx
|__ App.css/
|__ App.js/
|__ Index.css/
|__ Index.js/
```

#### Time Estimates

| Component                                                | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Pseudocode                                               |    H     |    0.5hrs      |               |             |
| Install Ruby on Rails / seed PostgreSQL database         |    H     |    4.5hrs      |               |             |
| Set up models/controllers/routes in Rails                |    H     |      3hrs      |               |             |
| Create React App / Create separate components            |    H     |      2hrs      |               |             |
| Clickable Edit / Add buttons / React Routes              |    H     |      2hrs      |               |             |
| CRUD functionality on front-end                          |    H     |      4hrs      |               |             |
| Setup CORS                                               |    H     |    0.5hrs      |               |             |
| CRUD functionality on back-end                           |    H     |      4hrs      |               |             |
| CSS styling desktop                                      |    H     |      5hrs      |               |             |
| CSS Grid / Bootstrap styling                             |    H     |      4hrs      |               |             |
| Deploy back-end to Heroku / front-end to Netlify         |    H     |    1.5hrs      |               |             |
| Media Query for Mobile                                   |    H     |      3hrs      |               |             |
| Media Query for Tablet                                   |    H     |      3hrs      |               |             |
| MVP check/fixes/tweaks                                   |    H     |      3hrs      |               |             |
| PostMVP checks/fixes/tweaks                              |    H     |      2hrs      |               |             |
| Total                                                    |    H     |     42hrs      |               |             |


<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/jhR0RaS.png)
<br>

***

## Post-MVP

- Add Sort/Search functionality
- Add recipe suggestions for spices/blends

***

## Code Showcase

## Code Issues & Resolutions
