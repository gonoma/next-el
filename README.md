# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

FROM REACT PAGE ⬆️

# MY OWN DOCUMENTATION

## NPM Package Manager

run `npm init` to create package.json file with what you need.
Or use `npm init -y` for setting up package.json file with default values.

Run npm install -g npm@8.17.0 to update your npm!

To install packages simply use `npm install [PACKAGE-NAME]`

Super similar to `pip`, e.g. you can do `npm list` to list all your installed packages.

`package.json` is for storing all your dependencies.

`package-lock.json` is for making sure you don't have dependency overrides when cloning
packages from other repos that may have their own `package.json`, this package will store
the exact package versions of your original project.

### Versioning

`npm view [PACKAGE-NAME] versions`

### Start

`npm start`

If there is a server.js file in the root of your package, then npm will default the start command to node server.js

You could either change the name of your application script to server.js or add the following to your package.json

```json
"scripts": {
    "start": "node your-script.js"
}
```

Or ... you could just run `node your-script.js` directly

## GCP

### Run Docker from the command line

`mkdir my-app`

`cd my-app/`

Create id_ecdsa and id_ecdsa.pub

The keys need to be read-writable only by you --> `chmod 600 ~/.ssh/id_rsa`

Alternatively, the keys can be only readable by you (this also blocks your write access) -->

`chmod 400 ~/.ssh/id_rsa`

Finally, you may need to adjust your known_hosts file

Now you have the right permissions to clone the repo into the Google Cloud Shell

`git clone <repo from Source Repository>`

Use "chmod" command to change file permissions

`ls -lrt`

```text
-rw-r--r--   1 gonzalo  staff   1085 Aug 16 20:03 README.md
-rw-r--r--   1 gonzalo  staff    488 Aug 17 10:15 package.json
-rw-r--r--   1 gonzalo  staff    293 Aug 17 10:17 main.js
-rw-r--r--   1 gonzalo  staff  39709 Aug 18 12:44 package-lock.json
-rw-r--r--   1 gonzalo  staff    177 Aug 18 12:50 Dockerfile
```

Change mod of docker file to make it executable

`chmod +x Dockerfile`

#### Now we build the container image

gcr.io is the container registry tag under which this particular application will be stored.
The `<IMAGE TAG>` is the tag that the container about to be built will have.

`gcloud builds submit --tag gcr.io/<PROJECT ID>/<IMAGE TAG>`

When we execute the above command, GCP will start to use the my-app application and the
Docker file to build a container with a corresponding image id, and then it will push it into the container registry.

Essentially: Building Container Image -> Pushing it into container registry

Finally, to deploy the application we run:

`gcloud run deploy --image gcr.io/<PROJECT ID>/<IMAGE TAG>`

#### GCP sample Build command:

`git clone https://github.com/GoogleCloudBuild/cloud-console-sample-build && \ cd cloud-console-sample-build && \ gcloud builds submit --config cloudbuild.yaml --region=global`

# Getting started with React and Nodejs

Run the following command in your repository, and you will get a template of a fully functional app.

`npx create-react-app app`

# NEXT JS README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
