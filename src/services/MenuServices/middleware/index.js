import make_API_call from "../../../providers/REST_API"
import {
  setStateAction,
  loadMenuReq,
  loadMenuSuccess,
  loadMenuFailure,
  getpromosFailure,
  getpromosSuccess,
  getpromosReq,
  loadRecommendedRestaurantsReq,
  loadRecommendedRestaurantsSuccess,
  loadRecommendedRestaurantsFailure
} from "../actions/actionCreator"

export const _set_state = (obj) => (dispatch) => {
  dispatch(setStateAction(obj))
}

export const _load_menu = () => (dispatch) => {
  dispatch(loadMenuReq())
  return make_API_call("get", "/menus/restaurants/11/available/")
    .then(res => {
      dispatch(loadMenuSuccess(res))
    }).catch(err => {
      const msg = `Failed to get menu items`
      dispatch(loadMenuFailure(msg))
    })
}

export const getPromos = (id) => (dispatch) => {
  dispatch(getpromosReq())
  // return make_API_call("get", `/promos/active/restaurants/${id}/`)
  //   .then(res => {
  //     dispatch(getpromosSuccess(res))
  //   })
  //   .catch(err => {
  //     const msg = 'Failed to get promos'
  //     dispatch(getpromosFailure(msg))
  //   })

  setTimeout(() => {
    const payload = [
      {
        "code": "CHECKOUT",
        "icon": null,
        "name": "<font color=\"#af1014\"><b>40%</b> discount</font>",
        "summary": "Get 40% discount upto Rs. 100 on your first 3 orders.",
        "terms": "Applicable for orders above  Rs. 99.",
        "expires": null,
        "filter_choice": "rest.all"
      },
      {
        "code": "HOOKAH",
        "icon": null,
        "name": "Testing of Hookah",
        "summary": "dsfsd",
        "terms": "dsfdsfds",
        "expires": null,
        "filter_choice": "rest.all"
      },
      {
        "code": "DESSERT50",
        "icon": null,
        "name": "DESSERT50",
        "summary": "Get 50% off on desserts!",
        "terms": "TEST",
        "expires": null,
        "filter_choice": "rest.all"
      }
    ]
    dispatch(getpromosSuccess(payload))
  }, 2000);
}
export const loadRecommendedRestaurants = (restaurant_id) => (dispatch) => {
  dispatch(loadRecommendedRestaurantsReq())
  // return make_API_call("get", `/menus/items/recommended/restaurants/${restaurant_id}/`)
  //   .then(res => {
  //     dispatch(loadRecommendedRestaurantsSuccess(res))
  //   }).catch(err => {
  //     console.error(err);
  //     const msg = "Failed to load recommended restaurants"
  //     dispatch(loadRecommendedRestaurantsFailure(msg))
  //   })
  setTimeout(() => {
    const payload = [
      {
        "name": "amet sit cillum deserunt ullamco",
        "pk": 87306782,
        "types": [
          "incididunt qu",
          "labore in"
        ],
        "costs": [
          "laborum amet in",
          "mollit dolore dolore ullamco"
        ],
        "tags": [
          "est",
          "cupidatat des"
        ],
        "available_meals": [
          "dinner",
          "dinner"
        ],
        "image": "http://hDOGuWvrnMcgbvcsI.szdFsunPVvUzf0KBOb",
        "description": "nisi enim ullamco esse minim",
        "ingredients": [
          "laborum labore",
          "consequat fugiat"
        ],
        "is_available": false,
        "customizations": [
          33513103,
          -88187178
        ],
        "item_type": 0,
        "created": "2017-01-27T08:45:33.239Z",
        "modified": "1966-07-29T06:23:14.825Z",
        "menus": [
          27092907,
          -9213591
        ]
      },
      {
        "name": "elit proident irure",
        "pk": 69030897,
        "types": [
          "ea Ut ut ad mol",
          "ut "
        ],
        "costs": [
          "laboris qui occaecat proident",
          "magna quis pariatur ullamco"
        ],
        "tags": [
          "ut",
          "n"
        ],
        "available_meals": [
          "nhtlfe",
          "nhtlfe"
        ],
        "image": "https://qqPrq.bnZG5ko6Y,amyqKDeI",
        "description": "est nostrud deseru",
        "ingredients": [
          "enim",
          "officia amet Excepteur ci"
        ],
        "is_available": false,
        "customizations": [
          -91249641,
          21473134
        ],
        "item_type": 0,
        "created": "2013-04-06T11:46:40.922Z",
        "modified": "2013-08-09T22:42:50.117Z",
        "menus": [
          84903670,
          -18969572
        ]
      }
    ]
    dispatch(loadRecommendedRestaurantsSuccess(payload))
  }, 2000);
}