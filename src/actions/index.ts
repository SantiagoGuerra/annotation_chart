export const changeOptions = (option) => ({
  type: 'CHANGE_OPTION',
  payload: {
    option
  }
})

export const updatePoint = point => ({
  type: 'UPDATE_POINT',
  payload: {
    point
  }
})