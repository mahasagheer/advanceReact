const initialState = 10;
const Increment = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 10;
    case "decrement":
      return state - 10;
    default:
      return state;
  }
};
export default Increment;
