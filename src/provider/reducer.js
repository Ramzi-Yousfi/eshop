

export const initialState = {
    cards: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {
                ...state,
                cards: [...state.cards, action.item]
            }
        case 'REMOVE_FROM_CARD':
           const index = state.cards.findIndex(card => card.id === action.id)
              let newCards = [...state.cards];
              if (index >=0) {
                  newCards.splice(index, 1);
              }else{
                  console.warn(`Card with id ${action.id} not found`)
                }
            return {...state,cards: newCards}
        default:
            return state;
    }
}
export default reducer;