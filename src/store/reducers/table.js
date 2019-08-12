export default (state = [], action) => {
  switch (action.type) {
    case 'SUBMIT_CARDS':
      return [...action.cards];
    case 'CLEAR_TABLE':
    case 'RESTART':
      return [];
    default:
      return state;    
  }
};