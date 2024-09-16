import { useState } from 'react';
import './App.css';
import Box from './components/box';

function App() {
  const [color,setColor]=useState('')
  
  return (
    
    <Box color={color} setColor={setColor}/>
  );
}

export default App;
