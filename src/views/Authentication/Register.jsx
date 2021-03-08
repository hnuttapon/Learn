import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { CCallout } from '@coreui/react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#2E86AB',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [note, setNote] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    Role: "User"
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


    console.log(note.FirstName);
    console.log(note.LastName);
    console.log(note.Email);
    console.log(note.Password);

    fetch('https://localhost:44347/api/UserData', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            DepartmentId: null,
            FirstName: note.FirstName,
            LastName: note.LastName,
            Email: note.Email,
            Password: note.Password,
            Role: note.Role,
        })
    })
        .then(res => res.json())
        .then((result) => {
            alert(result);
            // this.setState({snackbaropen:true, snackbarmsg:result})
        },
        (error) => {
            // this.setState({snackbaropen:true, snackbarmsg:'failed'})
                alert('Failed');
        }
        )
}

  return (
    <div style={{backgroundColor:'#63B995',height:'100vh',paddingTop:'4%'}}>
        <Container component="main" maxWidth="xs" style={{backgroundColor:'white',padding:'20px',borderRadius:'30px',boxShadow: '0 2px 5px #307351'}}>
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon style={{backgroundColor:'#2E86AB'}}/>
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign up
            </Typography>
            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <CCallout color="warning">
                    <h5 style={{ color: 'black',"font-family": "Kanit, sans-serif",fontWeight:'400' }}>First Name</h5>
                </CCallout>
                <input
                    style={{padding:'20px',paddingLeft:'10px'}}
                    className="form-control"
                    name="FirstName"
                    onChange={handleChange}
                    value={note.FirstName}
                    placeholder="First Name"
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <CCallout color="warning">
                    <h5 style={{ color: 'black',"font-family": "Kanit, sans-serif",fontWeight:'400' }}>Last Name</h5>
                </CCallout>
                <input
                    style={{padding:'20px',paddingLeft:'10px'}}
                    className="form-control"
                    name="LastName"
                    onChange={handleChange}
                    value={note.LastName}
                    placeholder="Last Name"
                />
                </Grid>
                <Grid item xs={12}>
                <CCallout color="warning">
                    <h5 style={{ color: 'black',"font-family": "Kanit, sans-serif",fontWeight:'400' }}>Email</h5>
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
            <Button style={{backgroundColor:'#2E86AB',color:"white"}}
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={handleSubmit}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="#" variant="body2">
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