import { AppProps } from 'next/app';

// We wrap every single page that we have with this App component
// Very useful to set route rules, e.g. if the route is public great, if not, 
// redirect the User to the Login Page.

// You can have a store than manages the user's profile and login status.

// Useful for any high level app configurations like user configured themes.
function App({ Component, pageProps }: AppProps) {
  return (
    <Component />
  );
}

export default App;