import React from 'react';
import ListItem from './listItem';
interface UniqueListInterface {
  items: Set<string>,
  deleteItem:(item:string)=>void,
  caption?:string,
}
function UniqueList({items, deleteItem, caption}:UniqueListInterface) {
  const list:Array<JSX.Element> = []
  items.forEach((item, key)=>{
    list.push(<ListItem key={key} deleteItem={(item)=>deleteItem(item)} item={item} />);
  });
  return (
    <>
    {caption ? <h2>{caption}</h2> : ''} 
    <div className='uniqueList'>
     {list}
    </div>
    </>
  );
}

export default UniqueList;
