import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [ans, setAns] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAns(event.target.value);
    props.childToParent(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



  return (
    <div className="left-margin" style={{display:"inline-block"}}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={ans}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={props.firstchoice}>{props.firstchoice}</MenuItem>
          <MenuItem value={props.secondchoice}>{props.secondchoice}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ControlledOpenSelect

