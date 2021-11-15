import { InputLabel, Typography, Box, TextField, FormControl, Button } from '@material-ui/core';
import useStyles from './useStyles';
import profileFormData from './profileFormData';
import { Autocomplete } from '@material-ui/lab';

export default function EditProfileForm(): JSX.Element {
  const classes = useStyles();
  const formData = profileFormData;

  return (
    <form>
      <Box display="flex" justifyContent="center" minWidth={350}>
        <InputLabel className={classes.label}>First Name</InputLabel>
        <TextField
          className={classes.field}
          variant="outlined"
          placeholder="John"
          id="firstName"
          margin="normal"
          InputProps={{
            classes: { input: classes.inputs },
          }}
          name="firstName"
          autoComplete="firstName"
        />
      </Box>
      <Box display="flex" justifyContent="center" minWidth={350}>
        <InputLabel className={classes.label}>Last Name</InputLabel>
        <TextField
          className={classes.field}
          variant="outlined"
          placeholder="Doe"
          id="lastName"
          margin="normal"
          InputProps={{
            classes: { input: classes.inputs },
          }}
          name="lastName"
          autoComplete="lastName"
        />
      </Box>
      <Box display="flex" justifyContent="start" marginLeft={5} minWidth={350}>
        <InputLabel className={classes.label}>Gender</InputLabel>
        <FormControl variant="outlined">
          <Autocomplete
            renderInput={(params) => (
              <TextField {...params} className={classes.textSelect} placeholder="Male" variant="outlined" />
            )}
            autoSelect
            options={formData.genders}
          ></Autocomplete>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="start" marginLeft={3} minWidth={350}>
        <InputLabel className={classes.label}>Birth Date</InputLabel>
        <FormControl variant="outlined">
          <Autocomplete
            renderInput={(params) => (
              <TextField {...params} className={classes.textSelect} placeholder="June" variant="outlined" />
            )}
            autoSelect
            options={formData.months}
          ></Autocomplete>
        </FormControl>
        <FormControl variant="outlined">
          <Autocomplete
            renderInput={(params) => (
              <TextField {...params} className={classes.numSelect} placeholder="15" variant="outlined" />
            )}
            autoSelect
            options={formData.dates}
          ></Autocomplete>
        </FormControl>
        <FormControl variant="outlined">
          <Autocomplete
            renderInput={(params) => (
              <TextField {...params} className={classes.numSelect} placeholder="1988" variant="outlined" />
            )}
            autoSelect
            options={formData.years}
          ></Autocomplete>
        </FormControl>
      </Box>
      <Box display="flex" justifyContent="start" marginRight={2} minWidth={350}>
        <InputLabel className={classes.label}>email address</InputLabel>
        <TextField
          className={classes.field}
          variant="outlined"
          placeholder="john-doe@gmail.com"
          id="email"
          margin="normal"
          InputProps={{
            classes: { input: classes.inputs },
          }}
          name="firstName"
          autoComplete="firstName"
        />
      </Box>
      <Box display="flex" justifyContent="start" marginRight={1} minWidth={350}>
        <InputLabel className={classes.phonelabel}>phone number</InputLabel>
        <Box display="flex" justifyContent="space-between" minWidth={350}>
          <Typography className={classes.noNumberText}>No Phone number entered</Typography>
          <Button className={classes.phonebtn} variant="outlined" color="primary">
            Add a phone number
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="start" marginRight={1} minWidth={350}>
        <InputLabel className={classes.label}>Where You live</InputLabel>
        <TextField
          className={classes.field}
          variant="outlined"
          placeholder="john-doe@gmail.com"
          id="email"
          margin="normal"
          InputProps={{
            classes: { input: classes.inputs },
          }}
          name="firstName"
          autoComplete="firstName"
        />
      </Box>
      <Box display="inline-flex" justifyContent="space-between" minWidth={350}>
        <InputLabel className={classes.describeLabel}>describe yourself</InputLabel>
        <TextField
          multiline
          rows={5}
          className={classes.field}
          variant="outlined"
          placeholder="About you"
          id="email"
          margin="dense"
          InputProps={{
            classes: { input: classes.describeInput },
          }}
          name="firstName"
          autoComplete="firstName"
        />
      </Box>
      <Box display="flex" justifyContent="space-around" marginRight={1} minWidth={350}>
        <Button className={classes.saveBtn} variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </form>
  );
}
