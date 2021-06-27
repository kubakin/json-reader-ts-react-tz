import React, { MouseEvent } from 'react';
interface ListItemInterface {
  item: string,
  deleteItem: (item:string)=>void,
}
function ListItem({item, deleteItem}:ListItemInterface) {
  const deleteItemHandler = (e: MouseEvent<HTMLElement>, item:string) => {
    e.preventDefault(); 
    deleteItem(item);
  }
  return (
    <div className='listItem'>
      <p>{item}</p>
     <a href="/" onClick={(e:MouseEvent<HTMLElement>)=>deleteItemHandler(e, item)}>✘</a>
    </div>
  );
}

export default ListItem;
