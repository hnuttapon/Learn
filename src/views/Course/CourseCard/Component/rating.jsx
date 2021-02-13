import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const SimpleRating = (props) => {
  const [value, setValue] = React.useState(props.rating);

  return (
    <div>
      <Box style={{float:'left',left:'-5px', position:'relative'}}  mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
 
    </div>
  );
}

export default SimpleRating;
