# Time-off tracking system

An app that allows create a time-off request and send for approval to the manager.

## Tech stack

React, Redux, Firebase, Semantic UI, Formic, Yup

## Future improvements

- Add the ability to register a company
- Create different types of admin users

## Prerequisites

Node.js v14 or greater and NPM v6 or greater

## Projet setup

```bash
git clone https://github.com/Griunvald/time-off-tracking-system.git
cd time-off-tracking-system && cd client
npm install
npm start
```

Create .env in the root of the project, add your firebase credentials

REACT_APP_API_KEY=YOUR_REACT_APP_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_REACT_APP_AUTH_DOMAIN
REACT_APP_PROJECT_ID=YOUR_REACT_APP_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_REACT_APP_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_REACT_APP_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_REACT_APP_APP_ID
REACT_APP_MEASUREMENT_ID=YOUR_REACT_APP_MEASUREMENT_ID

## Usage

Log in using one of the emails listed below:

hazeltaylor@mail.com
robertrodrigues@mail.com
ivygarcia@mail.com
charliewilson@mail.com

password: test1234

Create request

Log in as an admin

admin@mail.com
password: test1234

On the admin dashboard, all user requests will appear

Mark them as approved or declined

Al changes will be reflected on the user's 'My requests' page

## License

Attribution-NonCommercial-NoDerivatives 4.0 International

[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)
