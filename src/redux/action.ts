const loadData = (data:Array<object> | object) => {
    return {
        type: 'LOAD',
        payload: data,
    }
}
const deleteItem = (item: string) => {
    return {
        type: 'DELETE_ITEM',
        payload: item,
    }
}
export {
    loadData,
    deleteItem,
}