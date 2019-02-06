# Dare Your Body - Diagnosis Listings
## A react application that allows users to create new patient records, type their data and diagnosis, edit these diagnosis or delete them entirely.

# Installation && Launching
## In the terminal type:
### - yarn install 
### - yarn run build
### - yarn run dev-server
## Then:
### - Open the link localhost:8080 in any browser.

# Why I wrote it this way?
### - I wanted to lessen the amount of 3rd parties used as possible so I did not use redux to manage the state though it would have been much easier to do so. I managed the state entirely through the App component and passed it when necessary to descendant components.

# What did I do?
### - I created an App component that is responsible for managing the state for the entire application. This is the list of patients saved.
### - I created a Patient component that renders the data of each patient separately.
### - I rendered the EditDiagnosis component within the Patient Component, allowwed it to pull the data from the Patient component (name, phone, diagnosis) and dump them into a form.
### - The editing form reads data from the Patient component props. Added onChange property on the edit form inputs to make changing them possible.
### - I preferred to use a textarea element for the diagnosis to allow for extensive writing instead of input.

#Technologies Used:
### - React
### - Bootstrap (As recommended)
### - CSS compiler (SASS)
### - Webpack
###- Babel (to transpile the JSX)

# Made with :heart: by Ahmed Magdy as part of the technicial testing required by the Dare Your Body team.

