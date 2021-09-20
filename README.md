# Project Name

**Author**: Team Heros
**Version**: 1.1.0

## Overview

- - -
         Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. This is small app to track what books have impacted you, and what’s recommended to read next.
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for this class. (i.e. What's your problem domain?) -->

## Getting Started

- - -
     after we done the backend lets do the front end

- - -



<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture

- javascript
- Node js
- Mongodb
- React
- React Bootstrap
- API's
- Heroku
- Netlify
- Axios
- CSS

<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log

20-09-2021 4:00am - Application now has a working backend with API of /books

<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

## Estimates
<!-- See below -->

## Credit and Collaborations

[Eslam Akram](https://github.com/eslamakram)
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->

- - -

Name of feature: Set up your repositories

Estimate of time needed to complete: 1

Start time: 6:00pm

Finish time: 6:45pm

Actual time needed to complete: 45 min

- - -

Name of feature: Storage

Estimate of time needed to complete: 2 hours

Start time: 2:00am

Finish time: 4:00am

Actual time needed to complete: 2 hours

        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />

          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>

          <Footer />
        </Router>
        