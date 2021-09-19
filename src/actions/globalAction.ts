export const globalActionTypes = {
  SET_MODAL: 'GLOBAL.SET_MODAL',
  SET_WEB3_SERVICE: 'GLOBAL.SET_WEB3_SERVICE',
  SET_TOKEN_PRICE: 'GLOBAL.SET_TOKEN_PRICE'
};

export function setGlobalModal(key: string, data: any = null) {
  return {
    type: globalActionTypes.SET_MODAL,
    payload: { key, data }
  }
}