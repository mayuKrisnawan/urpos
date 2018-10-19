export function loadAllPending() {
  return {
    type: "ITEM/LOAD_ALL_PENDING",
  };
}

export function loadAllFulfilled() {
  const items = [
    { id: 1, name: "Chocholatos" },
    { id: 2, name: "Twisko" },
  ]; 
  return {
    type: "ITEM/LOAD_ALL_FULFILLED",
    payload: items,
  };
}

export function create(item) {
  return {
    type: "ITEM/CREATE",
    payload: item,
  };
};
