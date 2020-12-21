const logOut = (value) => {
  return {
    type: 'LOGOUT',
    payload: {
      value
    }
  }
}
export default {logOut}