//INITIAL STATE
const myRestaurants = [];

//ACTION TYPES
const GOT_MY_RESTAURANTS = 'GOT_MY_RESTAURANTS';

//ACTION CREATORS
const gotMyRestaurants = (restaurants) => ({
  action: GOT_MY_RESTAURANTS,
  restaurants
});

//THUNK CREATORS
export const getMyRestaurants = () => {
  return (dispatch, _, { axios }) => {
    axios.get('api/myRestaurants')
      .then(res => res.data)
      .then(restaurants => dispatch(gotMyRestaurants(restaurants)))
      .catch(console.error.bind(console));
  }
};

//REDUCER
export default (state = myRestaurants, action) => {
  switch (action.type) {
    case GOT_MY_RESTAURANTS:
      return action.restaurants;
    default:
      return state;
  }
};
