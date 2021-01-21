# Neds Mobile
Mobile implementation of Neds "Next to go" screen. 
Created for Entain's front-end developer challenge. This application
was implemented using React Native.

## Getting Started

Before running the application, please ensure that you have installed the following in your machine. 
Please note that this application has been tested in *android* devices only. 

- [NodeJS](https://nodejs.org/en/) - used to run the app
- [Android Studio](https://developer.android.com/studio/install) - used to run emulators. Optional if you can connect your Android phone in debug mode.
- [Android Debugger Bridge](https://developer.android.com/studio/command-line/adb) - used to find connected android devices

### Step 1: Ensure an android phone is connected
If you have the android debugger bridge installed, please run `adb devices` to check attached devices. Output would look like this:

```
List of devices attached
89KX0AYM2       device
```

### Step 2: Start the app
```
cd neds-mobile
npm install
npm run android
```

## Process

### Step 1: Analyse requirements and data
- Used [Postman](https://www.postman.com/) to analyse data structure
- Looked at neds.com.au for design expectations
- Asked recruiter questions

### Step 2: Gather resources
This step involved gathering resources needed to create an app that's consistent with brand.
- Scraped the SVG assets from the neds website
- Identified colour palette

### Step 3: Design user interface to identify best layout
Went through four iterations of UI design. Can find all design iterations here in this [Figma link](https://www.figma.com/file/Eey6aMcAsluOKIt7HzKjCR/Entain?node-id=0%3A1)

### Step 4: Set up development environment
- Set up project linting, prettier, and babel-config so my code is clean
- Created ErrorBoundary for smoother handling of errors and crashes
- Created AppProvider as a wrapper for all third party modules
- Installed native-base so components can be easily positioned on screen

### Step 5: Implement the view
The focus here is to implement all the components.
- Implemented a few reusable components whenever possible
- Used mock data for components

### Step 6: Integrate with backend and redux
- Used redux toolkit to set up my store, slices, etc.
- Implemented fetch logic using axios
- Used redux thunk to create asynchronous calls
- Used intervals to manage when data will be retrieved from backend (if a race happened 1 minute ago), 
  and each race details manage their own display time.

### Step 7: User testing
- Got family to play around with the app to see if flow is natural

### Step 8: Write docs
- This is what I'm doing now.

## Folder Structure

### Inside the root folder of neds-mobile
- src - contains all application code
- assets - contains all static files used in the app
- App.js - entrypoint of the app
- package.json - contains app information like dependencies, version, author, etc

(also has a bunch of stuff for linting, formatting, and babel. Not important)

### Inside the src folder
- api - contains HTTP request and mapper logic
- components - contains all UI components used in the app
- hook - custom hooks
- models - data models for representing data structure
- redux - contains code for slices, reduces and store. Mainly uses redux toolkit
- utils - utility scripts like dayjs, global styling and themes

### Inside api folder
- index.js - contains the fetching logic
- mapper.js - contains functions for standardising the data format received from endpoint. Allows changes to be made easily in the app if there are schema changes in the backend.

### Inside components
- common - shared components among all screens
- images - custom SVG images written as React components
- screens - all application screens

### Component structure
Each component is a directory. All of them contains the following:
- components - folder for components used by that component only
- index.js - code of the component
- styles.js - code for defining stylesheet
- container - folder that encapsulates redux logic

## Future Improvements
- More pages. At the moment, I added a placeholder navigation to support more screens. If more screens to be added,
- Remove logic for filtering out data after the fetch in the mapper. All filtering logic should be in the backend.
  Front-end should really just pass in a parameter.
- Add automated testing through jest and react-testing-library

## App Screenshot

![image](docs/neds-mobile-img.png)
