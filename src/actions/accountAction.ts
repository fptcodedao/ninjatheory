export const accountActionTypes = {
  IMPORT_ACCOUNT: 'ACCOUNT.IMPORT_ACCOUNT',
  CLEAR_ACCOUNT: 'ACCOUNT.CLEAR_ACCOUNT',
  SET_BALANCE: 'ACCOUNT.SET_BALANCE',
};

export function importAccount(address: string, wallet: any, type: string) {
  return {
    type: accountActionTypes.IMPORT_ACCOUNT,
    payload: { address, wallet, type }
  }
}

export function setBalance(balance: any) {
  return {
    type: accountActionTypes.SET_BALANCE,
    payload: balance
  }
}

export function clearAccount() {
  return {
    type: accountActionTypes.CLEAR_ACCOUNT
  }
}