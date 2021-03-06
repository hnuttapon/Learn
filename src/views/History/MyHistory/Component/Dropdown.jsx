import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: "20px",
    },
    formControl: {
        minWidth: 120,
    },
}));

function ControlledOpenSelect(prop) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const data = prop.data;

    return (
        <div style={{ display: "inline-block", width: '200px' }}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">{prop.label}</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {   
                        data.map(dataItem => (
                            <MenuItem value={dataItem.name}>{dataItem.name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default ControlledOpenSelect

