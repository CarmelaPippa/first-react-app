// import { MouseEvent } from "react";
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item:string)=> void;
}

import { useState } from "react";

function ListGroup( {items, heading, onSelectItem}: Props) {
// items = [];
// event handler
// const handleClick = (event: MouseEvent)=> console.log(event);

// let selectedIndex = 0; 
// Hook -> invece di scrivere la variabile sopra settiamo la funzione sottostante a -1
const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
        <h1>{heading}</h1>
        {items.length === 0 && <p>No cities here! </p>}
    <ul className="list-group">
  {items.map((item,index) => 
  <li 
  className={selectedIndex === index ? "list-group-item active" : 'list-group-item'}
  key={item}
  onClick={()=>{
    setSelectedIndex(index)
    onSelectItem(item)
}} 
  
  >
    {item}</li>)}
</ul>
</>
)
}

export default ListGroup