export default function(state = null, action){
    switch(action.type){
      case 'CURRENT_BOOK':
      return action.payload;
    }
    return state;
  }