import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TimePickers() {
  const classes = useStyles();
  const [time,setTime] = useState("");
  const [ans, setAns] = React.useState('');

  const handleChange = (event) => {
    setAns(event.target.value);
    // props.childToParent(event.target.value);
  };


  return (
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={ans}
        onChange={handleChange}
      />
      <p>{ans}</p>
    </form>
  );
}