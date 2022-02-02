const INITIAL_STATE ={
    user:null,
    curruser:null,
    user_loaded:false,
    online_users:[],
    conversations:[""],
    friendList:[],
    selectedFriend:[],
    requestList:[],
    
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        user_loaded:true,
      };
      
    default:
      return state;
  }
};

export default userReducer;