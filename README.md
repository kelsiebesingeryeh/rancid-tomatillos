# Rancid Tomatillos

Rancid Tomatillos is a web application built with React that allows users to view a list of movies from a RESTful API. Users can view a specific movie's details, search by movie title, or filter by movie ratings and movie titles.

View the deployed site [here]().

### Contributors
- Kelsie Besinger-Yeh : [github profile](https://github.com/kelsiebesingeryeh)
- Christina Cook: [github profile](https://github.com/christina-cook)

## Table of Contents
1. [Introduction](#introduction)
2. [Instructions](#set-up-instructions)
3. [How-To](#using-rancid-tomatillos)
4. [Challenges and Wins](#challenges-and-wins)
5. [Tech Stack](#tech-stack)
6. [Agile Workflow](#agile-workflow)


## Introduction
For this project we were tasked to create an application for viewing a variety of movies, and also viewing a specific movies's details. Users can search through the movie list in the database by title or they can sort the movies by rating or alphabetically. When a user has searched or filtered a movie, the user will see their choice of movies displayed on the homepage. If a user is interested in learning more about a particular movie, they can click on the movie poster and view that movie's details. Details for movies can include a movie's trailer, budget, revenue, genre, ratings, runtime and release date. 

## Set-Up Instructions
1. Clone the repository
```git@github.com:christina-cook/rancid-tomatillos.git```

2. Install dependencies
```npm install```

3. Start the server
```npm start```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

5. Start the test suite
```npm run cypress```

6. To Run the testing suite hit "run integration tests"

7. Cypress will open a new window to run all tests. Watch the magic happen in real time!

## Using Rancid Tomatillos
// INSERT SCREENSHOTS AND VIDEO DEMO
// SEARCH
// SORT
// DISPLAY DETAILS

## Challenges and Wins
* **Challenge**: One of the bigger challenges we ran into earlier on was trying to get two APIS to run asynchronous as the movie details page loaded. We wanted to fetch data from the movie details API and we also wanted to fetch data from the movie trailer API. After trying a few different ways and reaching out to mentors and instructors for support, we decided a Promise.all was the route we wanted to take. Once we ran the fetch with Promise.all and set the state to the data we wanted, everything displayed on the page as we expected and at the same time.

* **Wins**: Project planning, code architecture and issue tracking. We were very diligent about keeping our project board up-to-date with new issues (bugs, enhancements, etc...) and made sure to clear out the tickets before moving on to the next iterature. We wireframed out the design of the app, and created a plan for our architecture and how we wanted to lay everything out.

## Tech Stack
We used a combination of the following technologies/tools:
* React, React Router, React Player
* REST APIs
* JavaScript
* SASS
* Tested with Cypress
* GitHub Projects

## Agile Workflow
We followed an agile workflow by utiilizing the Kanban board on Github Projects. 

Over 60 tickets (user stories, bugs, new features, testing tickets) were converted into issues and tracked throughout the 2 week sprint. 
We adhered to daily standups, discussing our goals for the day along with ending every working session identifying goals that we wanted to tackle the following day. We created detailed iterations and milestones to make sure we were hitting our goals.

To see the process, check out the project board [here](https://github.com/christina-cook/rancid-tomatillos/projects/1)
