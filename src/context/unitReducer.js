const unitReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CUSTOMERS':
      return {
        ...state,
        customers: action.payload,
      };
    case 'GET_APPLICATIONS':
      return {
        ...state,
        applications: action.payload,
      };
    case 'CREATE_APPLICATION':
      return {
        ...state,
        applications: [action.payload, ...state.applications],
      };
    default:
      return state;
  }
};

export default unitReducer;
