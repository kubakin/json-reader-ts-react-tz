import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import DragStatus, {ErrorStatus} from './redux/context';
const Main = () => {
  const [dragField, setDragField] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const showHideError = (err:any) => {
    setError(err);
    setTimeout(()=>setError(''), 2000)
  }

  return (
<React.StrictMode>
    <DragStatus.Provider value={{dragField, setDragField}}>
      <ErrorStatus.Provider value={{error, showHideError}}>
    <Provider store={store}>
      <App />
    </Provider>
    </ErrorStatus.Provider>
    </DragStatus.Provider>
  </React.StrictMode>
  )
}
ReactDOM.render(
  <Main/>
  ,
  document.getElementById('root')
);
