import { useAuth } from '../../../../context/useAuthContext';
import LoggedInNavBarLinks from '../loggedIn/NavBarLinks';
import LoggedOutNavBarLinks from '../loggedOut/NavBarLinks';

function NavBarLinks(): JSX.Element {
  const { loggedInUser: user } = useAuth();
  if (!user) return <LoggedOutNavBarLinks />;
  else return <LoggedInNavBarLinks user={user} />;
}

export default NavBarLinks;
