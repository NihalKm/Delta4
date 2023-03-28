import './App.css';
import { Stack } from '@mui/system';
import Menubar from './Components/Menubar';
import { useState } from 'react';
import Taskbar from './Components/Taskbar';
import Contents from './Components/Contents';

function App() {
  const [ selectedMenu, setSelectedMenu ] = useState("Dashboard");
  return (
    <Stack className="App" direction={"row"} sx={{height:"100vh"}}>
        <Menubar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        <Stack sx={{width:"100%"}}>
          <Taskbar/>
          <Contents/>
        </Stack>
        
    </Stack>
  );
}

export default App;
