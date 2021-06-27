import React from 'react';
interface DragFieldInterface {
  dragOverHandler: (e:React.DragEvent<HTMLDivElement>) => void,
  dragDropHandler: (e:React.DragEvent<HTMLDivElement>) => void,
  effect?: string,

}
function DragField({dragOverHandler, dragDropHandler, effect=''}:DragFieldInterface) {
  return (
    <div
      onDragOver={(e:React.DragEvent<HTMLDivElement>) => dragOverHandler(e)}
      onDrop={(e:React.DragEvent<HTMLDivElement>) => dragDropHandler(e)}
      className={`dragField ${effect}` }
      >
      <p>DROP HERE</p>
    </div>
  );
}

export default DragField;
