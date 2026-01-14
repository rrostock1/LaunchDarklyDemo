# Getting Started with Ralph Rostock's LaunchDarkly Platform Demo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Clone this repo to a local folder, then run `npm install` to install necessary packages.
Please place an .env file in the root directory containing the following lines: 

LAUNCHDARKLY_API_TOKEN=api-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

LAUNCHDARKLY_SDK_KEY=sdk-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

replacing the placholder values with the API token and SDK key values (provided separately).
In the project directory, please run `npm run dev` which will start both the frontend and backend servers.
The react application can be accessed at [http://localhost:3000](http://localhost:3000).

## Overview of application

This is an anonymized prototype of a life insureance policy document viewer application. On page load several insurance documents will be listed.
Specify the user by passing ?user=xxxx as a query parameter, e.g. [http://localhost:3000?user=andy](http://localhost:3000?user=andy).
The application demonstrates integration with the LaunchDarkly platform using the default project, the test environment, and the test-flag-1 flag.
As currently configured, with the test-flag-1 feature flag disabled as default rule, most users will see the default (green) table header. Certain users ('admin' as well as those in the 'Marketing' group ('Andy', 'Randy', and 'Sandy')) will see the new Beta layout which features an orange table header, as well as displaying two additional 'secret' documents listed.
In addition, the admin user ([http://localhost:3000?user=admin](http://localhost:3000?user=admin)) will be shown a button that will allow them to immediately turn the test feature flag off, in case it becomes necessary, by means of the REST API. (The `Revert` button will appear below the banner and above the document table, and only if the admin user is logged in the flag is currently enabled).

Finally, I am including the results of an experiment I ran attempting to correlate the value of the Feature Flag with user clicks within the application.   
