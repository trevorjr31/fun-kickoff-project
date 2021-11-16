import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../../../../themes/theme';

const useStyles = makeStyles(() => ({
  title: {
    fontSize: 24,
    textTransform: 'capitalize',
    fontWeight: 600,
    alignSelf: 'center',
  },
  inputs: {
    marginLeft: theme.spacing(1),
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(1),
  },
  label: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 12,
  },
  phonelabel: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(1),
    color: 'black',
    fontWeight: 600,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  phonebtn: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(5),
    fontWeight: 600,
    fontSize: 12,
  },
  describeLabel: {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(-3),
    marginRight: theme.spacing(1),
    textTransform: 'uppercase',
    color: 'black',
    fontWeight: 600,
    fontSize: 12,
  },
  field: {
    width: '400px',
  },
  textSelect: {
    height: '50px',
    width: '150px',
    marginTop: theme.spacing(1),
    marginBottom: 10,
  },
  numSelect: {
    height: '50px',
    width: '115px',
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  noNumberText: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    fontStyle: 'italic',
  },
  saveBtn: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(7),
    width: 125,
    height: 40,
    fontSize: 11,
    fontWeight: 500,
    textTransform: 'uppercase',
  },
  describeInput: {
    marginLeft: theme.spacing(0),
  },
}));

export default useStyles;
