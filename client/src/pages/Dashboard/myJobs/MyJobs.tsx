import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useAuth } from '../../../context/useAuthContext';
import { useHistory } from 'react-router-dom';

export default function MyJobs(): JSX.Element {
  const { loggedInUser } = useAuth();

  const history = useHistory();

  if (loggedInUser === undefined) return <CircularProgress />;
  if (!loggedInUser) {
    history.push('/login');
    // loading for a split seconds until history.push works
    return <CircularProgress />;
  }

  return (
    <Grid container component="main">
      <Grid item>
        <h2>my jobs</h2>
      </Grid>
    </Grid>
  );
}
