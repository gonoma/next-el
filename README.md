## NPM Package Manager

run ``npm init`` to create package.json file with what you need.
Or use ``npm init -y`` for setting up package.json file with default values.

Run npm install -g npm@8.17.0 to update your npm!

To install packages simply use ``npm install [PACKAGE-NAME]``

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
