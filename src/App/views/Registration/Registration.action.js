const loader = (boolean) => {
  return {
    type: "LOADER",
    payload: {
      loader: boolean
    }
  }
}
const logIn = ({userName, userId, contacts = []}) => {
  return {
    type: 'LOGIN',
    payload: {
      userName: userName,
      userId: userId,
      contacts: [...contacts]
    }
  }
}
export default {loader, logIn}
