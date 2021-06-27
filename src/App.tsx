import React, { useContext, useState } from 'react';
import { useTypedSelector } from './hooks/useTypedSelector';
import JsonDragReader from './components/jsonDragReader';
import UniqueList from './components/uniqueList';
import { useDispatch } from 'react-redux';
import { deleteItem } from './redux/action';
import DragStatus, { ErrorStatus } from './redux/context';
function App() {
  const dispatch = useDispatch();
  const state = useTypedSelector(state => state);
  const { nameList, fileName } = state.file;
  const [effect, setEffect] = useState('');
  const value = useContext(DragStatus);
  const {error} = useContext(ErrorStatus);
  // Для тени на главной
  const shadowOn = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setEffect('shadow')
    value.setDragField(true);
  }
  const shadowOff = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setEffect('');
    value.setDragField(false);
  } 
  return (
      <div className={`app`}
      onDragOver={(e)=>shadowOn(e)}
      onDragStart={(e)=>shadowOn(e)}
      onDrop={(e)=>shadowOff(e)}
      >
        {error ? <div className="error">{error}</div> : ''}
        {nameList.size > 0 ? <UniqueList caption={fileName} deleteItem={(item)=>dispatch(deleteItem(item))} items={nameList}/> : ''}
        <div className={effect}></div>
        {(value.dragField || nameList.size === 0) ? <JsonDragReader/> : ''}
      </div>
    );
}

export default App;
