import PropTypes from 'prop-types';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
import Signin from '../components/Signin';
// import NavBarAuth from '../components/NavBarAuth';
import NavBarAuth from '../components/NavBarAuth';
import NavBarBusiness from '../components/NavBarBusiness';

const ViewDirectorBasedOnUserAuthStatus = ({ toggle, component: Component, pageProps }) => {
  const { user, userLoading } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    if (user === toggle) {
      return (
        <>
          <NavBarAuth /> {/* NavBar only visible if user is logged in and is in every view */}
          <div className="container">
            <Component {...pageProps} />
          </div>
        </>
      );
    }
    if (user === !toggle) {
      <>
        <NavBarBusiness />
        <div className="container">
          <Component {...pageProps} />
        </div>
      </>;
    }
  }
  return <Signin />;
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
  toggle: PropTypes.bool,
};

ViewDirectorBasedOnUserAuthStatus.defaultProps = {
  toggle: true,
};
