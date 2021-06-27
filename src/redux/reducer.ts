import { combineReducers } from "redux"

export interface InitialStateInterface {
    nameList: Set<string>,
    fileName: string,
}
interface ActionInterface {
    payload?: any,
    type: string
}
const initialState: InitialStateInterface = {
    nameList: new Set<string>(),
    fileName: '',
}
const reducer = (state: InitialStateInterface = initialState, actions: ActionInterface): InitialStateInterface => {
    switch (actions.type) {
        case "LOAD": {
            return {
                ...initialState,
                nameList: new Set([...actions.payload.list].sort()),
                fileName: actions.payload.file,
            }
        }
        case "DELETE_ITEM": {
            const list = new Set(state.nameList)
            list.delete(actions.payload);
            return {
                ...state,
                nameList: new Set(list)
            }
        }
        default: {
            return state
        }
    }
}
const rootReducer = combineReducers({
    file: reducer
})
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>