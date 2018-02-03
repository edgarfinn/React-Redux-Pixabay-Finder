# React-Redux-Pixabay-Finder

### What?
A simple colour-thematic image finder. Users select and colour using the coloured squares, and then retrieve 5 images from Pixabay's API.

- The first image returned from Pixabay is displayed in large, and is clickable through to the images Pixabay page.

- The remaining four images are displayed in a row beneath.

### How?

#### Installation:

```bash
$ git clone https://github.com/edgarfinn/React-Redux-Pixabay-Finder.git
$ cd React-Redux-Pixabay-Finder/
$ npm install
$ echo REACT_APP_ACCESS_TOKEN=123456789 > .env
# 123456789 should be the API key provided
$ npm start
```

In your browser, you should then find the application running at localhost:3000/

Users select a colour from the four square options, and the application then randomly selects from one of the following search terms:

man, mountain, state, ocean, country, building, cat, airline, wealth, happiness, pride, fear, religion, bird, book, phone, rice, snow and water.

#### Tools and technology used:

- React
  - For presenting all components of the application, and handling some component-level state.
- Redux
  - For handling application level state.
- Redux form
  - For handling the validation and dispatch of form data (colour selection).

#### Issues:
- Some colour + search-term combinations yield less than 5 images in total, therefore the list of smaller images is not invariably does not always consist of four images.

  - Suggested solution: allow the image list length to vary for shorter data-list API responses.

- Some colour + search-term combinations yield no result at all, therefore crashing (eg: purple airline).

  - Suggested solution:
    - test for every colour + search-term combination. For those that do not return a response status code of 200, remove the search-term from the list of options when the colour-selected is that of the failing test.
    - provide error message for empty response data lists in case of any other unforseen corner cases.
    - ensure that the image components do not try to render, and reducers do not attempt to update state if image data is not returned from the api.


- No tests!
  - Due to a time constraints, unit testing was neglected. Given a little more familiarity and experience with jest, enzyme and testing react and redux components, this should be a priority in any future iterations.
