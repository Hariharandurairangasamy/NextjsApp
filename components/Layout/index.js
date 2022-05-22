import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from 'next/link';
import {Row,Col} from "antd"
export const Layout = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event= React.SyntheticEvent, newValue= number) => {
    setValue(newValue);
  };

  return (
    <div>
<Row>
  
 <Box sx={{ width: '100%' }}>
      <Tabs
        onChange={handleChange}
        style={{width:"50%"}}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        <Link href={'/[id]/addemploye'} as={'/1/addemploye'}>
        <Tab label="Add Student" />
        </Link>
        <Link href={'/[id]/viewemployee'} as={'/1/viewemployee'}>
        <Tab label="ViewStudent" />
        </Link>
        <Tab label="Attendence" />
        <Tab label="ViewAttendence" />
        <Tab label="Details" />
      </Tabs>
    </Box>
  
    </Row>
    </div>
  )
}
