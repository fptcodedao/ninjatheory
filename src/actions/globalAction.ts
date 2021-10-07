export const globalActionTypes = {
  SET_MODAL: 'GLOBAL.SET_MODAL',
  SET_WEB3_SERVICE: 'GLOBAL.SET_WEB3_SERVICE',
  SET_TOKEN_PRICE: 'GLOBAL.SET_TOKEN_PRICE',
  SET_CONTRACT_SERVICE: 'GLOBAL.SET_CONTRACT_SERVICE',
};

export function setGlobalModal(key: string, data: any = null) {
  return {
    type: globalActionTypes.SET_MODAL,
    payload: { key, data }
  }
}

export function setContractService(data: any) {
  return {
    type: globalActionTypes.SET_CONTRACT_SERVICE,
    payload: data
  }
}

export function setWeb3Service(data: any) {
  return {
    type: globalActionTypes.SET_WEB3_SERVICE,
    payload: data
  }
}