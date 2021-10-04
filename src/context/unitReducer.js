const unitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CUSTOMERS':
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};

export default unitReducer;
