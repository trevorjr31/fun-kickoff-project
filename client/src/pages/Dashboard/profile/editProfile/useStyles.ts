import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../../themes/theme';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 24,
    textTransform: 'capitalize',
    fontWeight: 600,
  },
  inputs: {
    marginLeft: theme.spacing(1),
    height: '2rem',
    padding: '5px',
  },
  label: {
    marginTop: theme.spacing(3.5),
  },
  field: {
    width: '25vw',
    minWidth: '200px',
    maxWidth: '300px',
  },
}));

export default useStyles;
