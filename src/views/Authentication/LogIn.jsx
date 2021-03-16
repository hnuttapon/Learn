import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CCallout } from '@coreui/react';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../actions';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'orange',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  Background: {
    backgroundImage:'url(https://files.123freevectors.com/wp-content/original/119450-light-green-abstract-background-design.jpg)',
    height:'100vh',
    paddingTop:'4%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));

const SignIn = () => {
  const classes = useStyles();

  const dispatch = useDispatch(); 
  let history = useHistory();

  const [note, setNote] = useState({
    Email: "",
    Password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(note.Email);
    console.log(note.Password);

    fetch('https://localhost:44347/api/LogIn', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Email: note.Email,
            Password: note.Password,
        })
    }) 
    .then(res => res.json())
    .then((result) => {
        alert(result);
        // this.setState({snackbaropen:true, snackbarmsg:result})
        if(result != 0){
          dispatch(login(result[0]));
          if(result[0].Role == "User"){
            history.push("/dashboard");
          }
          else if (result[0].Role == "Admin"){
            history.push("/ManagerDashboard");
          }        
        }
        else{
          alert("Not Found");
        }

    },
  
    (error) => {
        // this.setState({snackbaropen:true, snackbarmsg:'failed'})
            alert(error);
    }
    )
}

  return (
    <div className={classes.Background}>
        <Container component="main" maxWidth="xs" style={{backgroundColor:'white',padding:'20px',borderRadius:'30px',boxShadow: '0 2px 5px    grey'}}>
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon style={{backgroundColor:'orange'}}/>
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <CCallout color="warning">
                    <h5 style={{ color: 'black',"font-family": "Kanit, sans-serif",fontWeight:'400'}}>Email</h5>
                </CCallout>
                <input
                    style={{padding:'20px',paddingLeft:'10px'}}
                    className="form-control"
                    name="Email"
                    onChange={handleChange}
                    value={note.Email}
                    placeholder="Email"
                />
                </Grid>
                <Grid item xs={12}>
                <CCallout color="warning">
                    <h5 style={{ color: 'black',"font-family": "Kanit, sans-serif",fontWeight:'400' }}>Password</h5>
                </CCallout>
                <input
                    style={{padding:'20px',paddingLeft:'10px'}}
                    className="form-control"
                    name="Password"
                    onChange={handleChange}
                    value={note.Password}
                    placeholder="Password"
                />
                </Grid>
                
            </Grid>
            <Button style={{backgroundColor:'orange',color:"white"}}
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={handleSubmit}
            >
                Sign In
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="/#/Register" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
            </form>
        </div>
        </Container>
    </div>
  );
}

export default SignIn;
   