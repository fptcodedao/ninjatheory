import { globalActionTypes } from '../actions/globalAction';

const initialState: any = {
  modal: {
    loading: { active: false },
    knightStaking: { active: false, data: null },
  },
  web3Service: null,
  tokenPrice: {
    FARA: 0,
    BNB: 0
  }
};

export default function globalReducer(state = initialState, action: any): any {
  switch (action.type) {
    case globalActionTypes.SET_MODAL: {
      const { key, data } = action.payload;

      return {
        ...state,
        modal: {
          ...state.modal,
          [key]: data ?? {...state.modal[key], active: false},
        },
      };
    }
    case globalActionTypes.SET_WEB3_SERVICE: {
      return {
        ...state,
        web3Service: action.payload
      }
    }
    case globalActionTypes.SET_TOKEN_PRICE: {
      return {
        ...state,
        tokenPrice: action.payload
      }
    }
    default:
      return state;
  }
}
