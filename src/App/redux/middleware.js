import URI from '../data/URI';

const postman = (store) => (next) => (action) => {
  // console.log(action);
  if (action.type === "AVE") {
  //   fetch(`{URI}`)
  //     .then((data) => data.json())
  //     .then((json) => {
  //       action = {
  //         type: "ADD",
  //         payload: {
  //           contacts: [...json],
  //         },
  //       };
  //       next(action);
  //     });
  } else if (action.type === "ADD" && action.payload.contacts.length) {
    console.log(store.getState().userId);
    fetch(`${URI.server}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marker: 'add',
        userId: store.getState().userId,
        sessionControl: localStorage.getItem('sessionControl'),
        contacts: [...action.payload.contacts]
      }),
    }).then((data)=> {
      console.log(data);
    })
    .then(next(action));
  // } else if (action.type === "DEL"){
  //   fetch(`{URI}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ marker: 'del', id: action.payload.id}),
  //   })
  //   .then(next(action));
  } else {
    next(action);
  }
};

export default postman
