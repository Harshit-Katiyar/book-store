export default function(state = null, action){
    switch(action.type){
      case 'SEARCH_BOOK':
        return action.payload
    }
    return state;
  }