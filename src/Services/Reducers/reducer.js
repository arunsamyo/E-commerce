
const initialState={
    cardData:[]  
    
}
export const cardItems=(state=initialState,action)=>{

    switch(action.type)
    {
        case "ADD_TO_CART":
            return{
                ...state,
                cardData:[...state.cardData,action.payload]
            }
            default :
            return state
    }

}




