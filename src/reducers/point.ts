const initialState = {
  price: 0,
  date: '01/01/1999'
}

const pointReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_POINT":
      return {...state, ...action.payload.point}
    default:
      return state;
  }
};

export default pointReducer;