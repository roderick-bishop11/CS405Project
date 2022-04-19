# CS405Project- Birthday Reminder WebApp

Project for CS405- Software Engineering Fall 2021 at [South Carolina State University](https://scsu.edu/)

## Meet the Group

[Roderick Bishop](https://www.linkedin.com/in/roderickebishop/)
[Ramon Lavender](https://www.linkedin.com/in/ramon-lavender-47b081145/)
[Kristin Barrett](https://www.linkedin.com/in/kristin-barrett-104287187/)

## Problem

Remembering birthdays is one of the best ways to show a person that you care for them, but too many people forget. Forgetting is something most humans do almost daily, we can’t blame them for forgetting but we also want to remember to celebrate those that we love the most. The world needs a solution to this issue and help others show they care with one of the most accepted acts of love humans can offer.

## Solution

We propose a chrome extension or web app that will allow users to add birthdays for people that they know and get notifications when their birthday is arriving.

## Tech Stack

For this project, we plan to use [React.js](https://reactjs.org/) which is a Library for JS. We also use [Ant](https://ant.design/) for UI elements.
For testing, we will use [Jest.js](https://jestjs.io/) for our framework to unit test the functionality in our app. It gives us robust context as to why our functions don’t work, has a great API and requires zero configuration.
We utilized github for versioning, cloud backup & project management. It helped us sync our code across devices and workspaces, manage new changes, tag releases when new versions are available, and keep our “source of truth” or main branch isolated from current work so that we never lose a working version of the application. This use of github aligns well with the industry standard.
We used a note-taking platform, Notion, for our kanban boards. Although github has a feature for this, we decided to go with the simpler and more customizable option using Notion.

## Automated Tooling

DevOps is a very important part of every SWE's job. One part of setting up an automated pipeline with dev tools is utilizing [Husky](https://typicode.github.io/husky/#/) We used Husky in this repo to automatically lint and format our code before commits, such that we only write clean code. When committing to a branch, there is a [git hook](https://git-scm.com/docs/githooks) that triggers any commands that we want. Check the .husky folder to see our hooks.

## How to run

Our app was build using `create-react-app` and `npm`. This project can also be build using Yarn, altough all resources below and steps in this README use `npm`

 1. Clone the repo via HTTPS or the Github CLI.
 2. Make sure you have node installed on your machine. To check which version you have installed, run `$ node -v` . If not installed, you can download Node directly from their [website](https://nodejs.org/en/download/). If your node version is out of date, you can use this article that entails how to update using nvm, npm, or binary pkgs.
 3. With the everything installed/updated, `cd` into the cloned repo and run `npm start` if you're using npm. For any other package manager, utilize their documentation to start the application.
 4. Edit the code however you like to learn!

## Resources & Inspo

[How To Create a Chrome Extension with React](https://levelup.gitconnected.com/how-to-make-a-chrome-extension-with-react-129cdcbf1414)

[Birthday App with React.js](https://www.youtube.com/watch?v=a_7Z7C_JCyo)

[React Fundamentals](https://www.youtube.com/watch?v=4UZrsTqkcW4&t=0s)

[JavaScript Object Fundamentals](https://www.w3schools.com/js/js_object_properties.asp)

[Page Loading in React](https://javascript.plainenglish.io/how-to-create-a-page-load-animated-loader-in-react-793d42411fd5)

[Bootstrap JavaScript Carousel](https://www.w3schools.com/bootstrap/bootstrap_ref_js_carousel.asp)

[Carousel structure](https://medium.com/allenhwkim/how-to-build-a-carousel-in-pure-javascript-98d758a18811)

## Contribution

If you'd like to contribute, feel free to fork main, and draft a PR. Feel free to also message us on LinkedIn with upgrade suggestions!

## Next steps

- Overhaul UI(styling and material UI components)
- Lifecycle Methods for event handling
- Custom Photos
- Scaffolding for future functionality
- comments branch for verbose comments on the most current version of Main so students can understand.
