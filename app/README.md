# Frontend - DevJournal

This is the frontend part of the **DevJournal** project, a developer's diary application styled like a terminal. It is built using **React** and uses **SASS** for styling. The frontend interacts with a **Node.js** backend API to manage diary entries and provide a terminal-like user interface for developers.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [Styling with SASS](#styling-with-sass)

## Technologies Used

- `React`: A JavaScript library for building the user interface (UI).
- `SASS`: A CSS preprocessor for writing modular and maintainable CSS.
- `Axios`: A promise-based HTTP client for making requests to the backend API.

## Project Structure

The frontend folder is organized as follows:

<pre>
.
├── app.Dockerfile
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.js
    ├── components
    │   ├── commandLine
    │   │   ├── ActiveCommand.jsx
    │   │   └── UsedCommand.jsx
    │   ├── commandResults
    │   │   ├── CommandResultsList.jsx
    │   │   └── results
    │   │       ├── Dev.jsx
    │   │       ├── Error.jsx
    │   │       ├── Help.jsx
    │   │       ├── Init.jsx
    │   │       ├── ListJournals.jsx
    │   │       ├── NoResult.jsx
    │   │       ├── Sucess.jsx
    │   │       ├── Warning.jsx
    │   │       └── Welcome.jsx
    │   ├── Editing.jsx
    │   └── Viewing.jsx
    ├── index.js
    ├── placeholder
    │   └── mdPlaceholder.js
    └── style
        ├── base
        │   └── _reset.sass
        ├── components
        │   ├── _commandLine.sass
        │   ├── _devResult.sass
        │   ├── _errorResult.sass
        │   ├── _helpResult.sass
        │   ├── _initResult.sass
        │   ├── _journalList.sass
        │   ├── _mdCode.sass
        │   ├── _noResult.sass
        │   ├── _sucessResult.sass
        │   ├── _warningResult.sass
        │   └── _welcomeResult.sass
        ├── layout
        │   ├── _editPage.sass
        │   ├── _mainPage.sass
        │   └── _viewing.sass
        ├── style.css
        ├── style.css.map
        ├── style.sass
        └── utils
            ├── _colors.sass
            └── _fonts.sass

</pre>


### Styling with SASS

We use **SASS** to manage our CSS styles, which allows for modularization, better organization, and the use of advanced CSS features like variables, mixins, and nesting.

- All styles are stored in the `/src/styles` directory.
- The main entry point for the styles is the `index.scss` file, which is imported into the `index.js` file.

