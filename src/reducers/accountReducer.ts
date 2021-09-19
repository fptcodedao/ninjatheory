import { REHYDRATE } from 'redux-persist/lib/constants';
import { accountActionTypes } from '../actions/accountAction';
import { getWalletByType } from "../utils/helpers";

const initialState: any = {
  address: '',
  type: '',
  wallet: null,
  balance: {
    FARA: '0',
    BNB: '0'
  }
};

export default function accountReducer(state = initialState, action: any): any {
  switch (action.type) {
    case REHYDRATE: {
      const lastData = action.payload;

      if (action.key === 'account' && lastData && lastData.type) {
        const wallet = getWalletByType(lastData.address, lastData.type);
        if (wallet) return {...state, wallet};
        return initialState;
      }

      return {...state}
    }
    case accountActionTypes.IMPORT_ACCOUNT: {
      const { address, wallet, type } = action.payload;

      return {
        ...state,
        address: address.toLowerCase(),
        wallet: wallet,
        type: type
      }
    }
    case accountActionTypes.SET_BALANCE: {
      return {
        ...state,
        balance: action.payload
      }
    }
    case accountActionTypes.CLEAR_ACCOUNT: {
      return initialState;
    }
    default:
      return state;
  }
}
