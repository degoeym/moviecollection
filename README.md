# moviecollection

This app was built as part of step two of an interview process. This README will serve as my explination of the app.

## Backend
The app's backend is written as a C# Web API using .Net Core 2.0. I've been playing around with .Net Core quite a bit lately, and relished the opportunity to flex my knowledge of the latest in the .Net Framework. The tooling is very nice, made easy through either Visual Studio 2017 (which was used) or VS Code. With some tweaking, mainly around which RDBMS is being used, the code should be able to run on any platform capable of running .Net Core 2.0. SQL Server is used for the RDBMS.

## Frontend
The app's frontend is written in ReactJS, utilizing the create-react-app package created by Facebook. The package allows for setting up the basic skeleton of a React app with no configuration needed from the developer, so it's a great springboard to get up and running quickly, as you simply need to add any packages you wish to use in the project, install them, and get to coding. I've been tinkering with React for the last few weeks, and while I understand PAN uses Angular 1 (which was a "bonus point" item for the front end), I chose React as it's the JS frontend framework I'm most familiar with. Further, I hope to show what I'm capable of learning (almost entirely on my own) and putting together in such a short span of time, and that it might indicate I can pick up Angular around as quickly.

## The App
The app is a very, very, very basic movie collection app. No users, very rudimentary details. The app allows for simple CRUD operations on the collection of movies. The frontend makes calls to the API using axios, which allows for very straight forward calls to RESTful APIs, and handling of those responses. Redux is used to handle storing the information used across pages. Main reason for choosing Redux is it's one of the most popular state containers, and is fairly straight forward to implement. Routing is handled by redux-router, again due to relative simplicity and ease of setup.

Both the backend API and frontend React app are deployed to Azure. I've some limited experience with AWS through my current job, so this was really my first time delving into deploying with Azure. So far I've enjoyed working with the platform and would love to dig deeper, particularly into building and deploying either from Git locally, or GitHub.

## Improvements
Naturally, sites (usually) continually need improvement.

The most obvious improvement this app would need is proper form validation, either as the user enters data or before/after submitting. My API is capable of returning information related to why a submission was rejected for things like adding and updating movies, but through my current understanding of React and axios I couldn't figure out how to obtain those items from the response.

Additionally, there's a slight flicker when loading the details page for any given movie. Not a showstopper, but something that should definitely be dealt with.

Fleshing out the site to include user profiles would make it infinitely more useful, and implementing a better way to search for and obtain information on movies in the collection would be a great enhancement. I'd likely look to implement The Movie Database's API for such endeavors.

## UPDATES
27 September 2017:

  **NOTE** All changes listed here may not be live on their hosted versions just yet. I've simply checekd in the changes after testing them locally.
  * Fixed "flicker" issue with details page.
  * Revamped store to store collection and a single movie separately. Should enhance details page to pull from store collection if movie ID exists, otherwise call out to the api to try and find the movie matching the provided ID.
   * This required additional changes to the reducer. Unit tests would definitely be a great thing to add to catch items like this sooner.
  * Updated Startup.cs to allow any source from CORS. Naturally this would *not* be ideal in a production app. This is simply for the purposes of demonstrating this app.
