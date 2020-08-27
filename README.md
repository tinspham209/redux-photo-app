# Mini Project: Photo App

### Date created: 24 - Jun - 2020

### Screenshot

<img src="https://i.imgur.com/0PqBeU3.png" />

### Functions:

- View list of photos
- Add new photo
- Edit photo
- Remove photo
- Login with Google

### Tech-stack

- ReactJS Hooks
- bootstrap & reactstrap
- Redux & Redux Toolkit
- Formik : Form
- react-select : selected form
- react-router-dom
- Yup : validation form
- axios : HTTP GET/POST
- query-string : parse & stringify url query strings
- react-firebaseui : firebase UI
- firebase

### Plan of actions

1. Initial project

2. React: 24 - Jun - 2020

- Setup ReactJS
- Add scss support
- Add react-router
- Build UI with Reactstrap
- Folder Structure
- Routing structure
- Relative imports with jsconfig
- Header component
- Banner component
- Random photo component
- NotFound component
- Photo component
  - PhotoCard
  - PhotoForm
  - PhotoList
- Build custom field into Formik
- Bind custom control into Formik
- Random photo control
- Form validation with Yup

3. Redux: 26 - Jun - 2020

- Setup Redux Toolkit
- Add photo with Redux toolkit
- Edit/Remove photo

4. Deploy: 26 - Jun - 2020

5. API: 27 - Aug - 2020

- Fetch API and handling with axiosClient & query-string

6. Auth: 27 - Aug - 2020

- Firebase config
- handle firebase auth changed
- Create Google login UI with firebaseUI
- Handling Race condition when using firebase token
- Handling unsubscribe firebase listener when setTimeout run
- Async action with Redux
  - Fake user api
  - Async action getMe()
  - Call action getMe() on component

### Bug:

- Can't use `process.env.VARIABLE_NAME`

Temporary Solution:

- Update variable in `.env`
  - `REACT_APP_API_URL` : replace axiosClient.baseURL in `src\api\axiosClient.js`
  - `REACT_APP_FIREBASE_API` : replace config firebase `config.apiKey` in `src\App.js`
  - `REACT_APP_FIREBASE_AUTH_DOMAIN` : replace config firebase `config.authDomain` in `src\App.js`

### Folder structure

```
|__ jsconfig.json
|__ .env
|__ public
|__ src
    |__ api
    |__ app
    |__ assets
      |__ images
    |
    |__ components
      |__ Banner
      |__ Header
      |__ NotFound
      |__ RandomPhoto
    |
    |__ constants
    |
    |__ custom-fields
      |__ InputField
      |__ RandomPhotoField
      |__ SelectedField
    |
    |__ features
      |__ Auth
        |__ pages
          |__SignIn
      |
      |__ Photo
        |__ components
        |  |__ PhotoList
        |  |__ PhotoCard
        |  |__ PhotoForm
        |
        |__ pages
        |  |__ MainPage
        |  |__ AddEditPage
        |__ photoSlice.js
        |__ index.jsx
    |__ utils
    |
    |__ App.js
    |__ App.scss
    |__ index.css
    |__ index.js

```

### Setup

```
npm install
```

and

```
npm start
```
