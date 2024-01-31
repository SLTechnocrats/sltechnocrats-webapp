import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const PopMsg = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <button aria-describedby={id} variant="contained" onClick={handleClick} className=' text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-blue-500  hover:bg-gradient-to-r hover:from-cyan-500 hover:to-red-500 cursor-pointer duration-200 hover:scale-110'>
        Code
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Unavailable!</Typography>
      </Popover>
    </div>
  );
}

export default PopMsg;