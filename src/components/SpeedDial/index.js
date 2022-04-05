import React from 'react'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ListIcon from '@mui/icons-material/List';
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const navigate = useNavigate()
  const actions = [
      {
        icon: <ListIcon/>, name: 'To Do List', onClick: () => {
          navigate('todo')
        }
      },
    ]
  ;

  return (
    <Box sx={{height: 320, transform: 'translateZ(0px)', flexGrow: 1}}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon/>}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
