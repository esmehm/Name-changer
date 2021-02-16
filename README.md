This is a demonstation of why we need state. 

The goal of this app is to create a name changer: we want to be able to select a name using the relevant buttons and show it at the top.

Without knowledge of React, scholars may therefore assume this could be achieved by using a varialbe `name` , displaying it in the `name-display` `div` and changing it via the `onClick` event listener. As this demonstrates, they would be correct in assuming that this will change the value of the `name` variable however would be disapointed that they cannot see the `name` change on screen in the `name-display` div. 

The `name-display` `div` sits within the `App` component. React Components only update when either their state or their props change. Currently `App` is stateless (it does not have a state defined) and is not passed any props - therefore it will never update. We have included the log statement `App has updated!` to demonstrate how it only loads the first time and will never update again at the moment. Unless `App` updates, the `name-display` `div` has no way to know that `name` has changed and so will not update the value it shows. 

I have added a button to log `name` to demonstrate how the value of `name` does change depending on the name button clicked and so to highlight that the problem is only because the `App` is not updating.

This is therefore a great use-case for state. If we define `name` using state then when we change `name` then `App` will update and so the `name-display` `div` will reflect the change. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
