const initialState = {
  items: [
    { id:1, name: "Choco Biscuit" }
  ],
  isLoading: false,
};

export default function(state=initialState, action) {
  if (action.type == "ITEM/LOAD_ALL_PENDING") {
    return {...state, isLoading: true};
  }

  if (action.type == "ITEM/LOAD_ALL_FULFILLED") {
    const items = action.payload;
    return {...state, isLoading: false, items};
  }

  if (action.type == "ITEM/CREATE") {
    let maxId;
    for (let item of state.items) {
      if (!maxId || item.id > maxId) {
        maxId = item.id;
      }
    }
    const newItem = action.payload;
    newItem.id = maxId + 1;
    const items = [...state.items, newItem];
    return {...state, items};
  }
  
  if (action.type == "ITEM/UPDATE") {
    const { meta:{ id } } = action;
    const editedItem = action.payload;
    const items = [...state.items];
    for (let index in items) {
      const item = items[index];
      if (item.id == id) {
        items[index] = editedItem;
        break;
      }
    }
    return {...state, items};
  }

  return state;
} 
