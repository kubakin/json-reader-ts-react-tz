import React from 'react';
interface GlobalContextInterface {
    dragField: boolean,
    setDragField: (c:boolean)=>void,
}
interface ErrorStatusInterface {
    error: string,
    showHideError: (c:string)=>void,
}
const DragStatus = React.createContext<GlobalContextInterface>({
    dragField: false,
    setDragField: ()=>{}
});
const ErrorStatus = React.createContext<ErrorStatusInterface>({
    error: '',
    showHideError: ()=> {}
})
export default DragStatus;
export {
    ErrorStatus,
}