/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
// import NoAuth from '../components/NoAuth'; // TODO: COMMENT OUT FOR AUTH
import '../styles/globals.css';
import '../styles/App.css';
// import NavBarAuth from '../components/NavBarAuth';
import { AuthProvider } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector'; // TODO: COMMENT IN FOR AUTH

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <ViewDirectorBasedOnUserAuthStatus
          component={Component}
          pageProps={pageProps}
        />
      </AuthProvider>
    </>
  );
}

export default MyApp;
