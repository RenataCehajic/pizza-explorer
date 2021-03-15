// src/store/user/reducer.js
const initialState = {
  name: "Renata",
  id: 40,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
