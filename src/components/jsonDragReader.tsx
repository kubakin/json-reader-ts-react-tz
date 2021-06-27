import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadData } from '../redux/action';
import DragStatus, { ErrorStatus } from '../redux/context';
import DragField from './dragField';

function JsonDragReader() {
  const { showHideError} = useContext(ErrorStatus);
  const [loader, setLoad ] = useState<boolean>(false)
  const value = useContext(DragStatus);
  let userList = new Set<string>();
  const dispatch = useDispatch();
  const dfs = (arr: Array<object> | Object) => {
    if (arr) {
    if (!Array.isArray(arr)) {
      if ('user' in arr) {
      userList.add(arr['user']);
    }
    
  dfs(arr['replies']);
    }
    for (let i in arr) {
      if (arr[i]?.user) {
      userList.add(arr[i].user);
    }

      if (arr[i].replies) {
        dfs(arr[i].replies);
      }
    }
  }
  }
  const dragOverHandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  }
  const dragDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setLoad(true);
    let file = e.dataTransfer.files[0];
    if (file.type !== 'application/json') {
      showHideError('Необходимо перенести один JSON файл');
      setLoad(false);
      return
    }
    if (e.dataTransfer.files.length === 1) {
      let reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
          let result = reader.result as string;
          let jsn = JSON.parse(result);
          if (jsn !== undefined) {
            dfs(jsn);
        }
          if (userList.size === 0) {
              showHideError('Пользователи не найдены');
              setLoad(false);
              return;
          }
          dispatch(loadData({list:userList, file: file.name}));
          setLoad(false);
          value.setDragField(false);
      }
      reader.onerror = () => {
         showHideError(reader.result as string);
      }
    }
    else {
      showHideError('Необходимо перенести один JSON файл');
      setLoad(false);

    }
  }
  
  return (
    <div className='json-drag-app'>
      {loader ? <p>...loading</p> : <DragField 
        dragDropHandler={(e)=>dragDropHandler(e)} 
        dragOverHandler={(e)=>dragOverHandler(e)}
        />}
        
      </div>
  );
}

export default JsonDragReader;
