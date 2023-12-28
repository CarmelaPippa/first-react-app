import { useState } from 'react';
import './App.css'
import Alert from './components/Alert';
import Button from './components/Button';
import ListGroup from './components/Listgroup'

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const items = ['New York', "San Francisco", 'Tokyo','London', 'Paris'];
  const handleSelectItem = (item: string)=> {console.log(item)};
  
 return (
 <div>
   {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}> Ciao bello! </Alert>}
   <Button color='danger' onClick={()=> setAlertVisibility(true)}> My Button</Button>
  <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem} />

    </div>
)}

export default App
