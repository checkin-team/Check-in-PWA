import make_API_call from "../../../providers/REST_API"
import { getSettleBill } from "../../Checkout/middleware";
import {placeOrderReq,placeOrderSuccess,placeOrderFailure, increaseItem, addItem, decreaseItem, removeItem, calculateAmount, emptyCartReq, emptyCartSuccess, emptyCartFailure} from '../actions/actionCreator';
// import {
//   setStateAction,
//   loadRestaurentDetailsReq,
//   loadRestaurentDetailsSuccess,
//   loadRestaurentDetailsFailure,
//   loadOrdersReq,
//   loadOrdersSuccess,
//   loadOrdersFailure,
//   loadTrendingDishesReq,
//   loadTrendingDishesSuccess,
//   loadTrendingDishesFailure,

// } from "../actions/actionCreator"

// export const _set_state = (obj) => (dispatch) => {
//   dispatch(setStateAction(obj))
// }
export const _addItem = (payload,cart) =>(dispatch,getState)=>{ 
  // console.log(cart)
  // console.log(cart?.items?.data?.find(i=>i.pk==payload.pk&&i.variantChosen.pk==payload.variantChosen.pk))
  if(cart?.items?.data?.find(i=>i.pk==payload.pk)){
  const index= cart.items.data.findIndex((i)=>i.pk==payload.pk);
  const item = cart;
  item.items.data[index].quantity= item.items.data[index].quantity+1;
  // console.log(item);
  return dispatch(increaseItem(item))
}
else{
  const item= payload;
  if(item.quantity==undefined)item.quantity=0
  item.quantity=item.quantity+ 1;
  if(item.type_index==undefined){
    item.type_index=0;
  }
  return dispatch(addItem(item))
}
}

export const _removeItem = (payload,cart) =>(dispatch,getState)=>{
 
  var quantity=0;
 quantity= cart.items.data.find(i=>i.pk==payload.pk).quantity
  if(quantity>1){
    const index= cart.items.data.findIndex(i=>i.pk==payload.pk);
    const item = cart;
    
    item.items.data[index].quantity= item.items.data[index].quantity-1;
    console.log(item);
    return dispatch( decreaseItem(item))
  }
  else{
    return dispatch(removeItem(payload))
  }
}

export const _calculateAmount = (cart)=>(dispatch,getState)=>{
  var total=0;
  if(cart.items.data.length>=1){
    
    cart.items.data.forEach(item=>{
      if(item.customizations){
        total+= (item.costs[item.type_index]+item.customizations.reduce((acc,customItem)=>{
          return acc+customItem.fields.reduce((subAcc,customSubItem)=>{
            return subAcc+parseFloat(customSubItem.cost)
          },0)
        },0))*item.quantity;
      }else{
        total+= parseFloat(item.costs[item.type_index])*item.quantity
      }
      
    })

    //   total = cart.items.data.reduce((acc,item)=>{
    //   if(item.customizations){
    //     return (acc+item.customizations.reduce((custAcc,customItem)=>{
    //       return custAcc+customItem.fields.reduce((custSubAcc,customSubItem)=>{
    //         return custSubAcc+parseFloat(customSubItem.cost)
    //        },0)
    //       },0)
    //    +parseFloat(item.costs[item.type_index] ))*item.quantity
    //   }
    //   else{
    //       return (acc+parseFloat(item.costs[item.type_index]))*item.quantity
    //   }
    // },0);

  }
  return dispatch(calculateAmount(total.toFixed(2)))
}


export const place_order = () =>async (dispatch,getState)=>{
 try{ dispatch(placeOrderReq())
  const items= getState().cart.items.data;
  const id= getState().authentication.login.session.payload.pk;
  var data = [];
  items.forEach((item)=>{
    let obj={type_index:item.type_index,quantity:item.quantity,item:item.pk,customizations:[],remarks:"something"};
    if(item.customizations.length>1){
      item.customizations.forEach(subItem=>{
        // let subObj={pk:subItem.pk,fields:[]}
        subItem.fields.forEach(subSubItem=>{
          // subObj.fields.push({pk:subSubItem.pk})
          obj.customizations.push(subSubItem.pk)
        
        })
        // obj.customizations.push(subObj);
      })
    }else{
    }
    data.push(obj)
  })
  // const JSONData = JSON.stringify(data);
  // console.log(data);
  const resp= await make_API_call('post',`/sessions/active/order/`,[...data])
   dispatch(placeOrderSuccess("success"));
  }catch(err){
   dispatch(placeOrderFailure(err));
  }
}

export const emptyCart= ()=>async (dispatch,getState)=>{
  try{
    dispatch(emptyCartReq())
    dispatch(emptyCartSuccess())
    dispatch(getSettleBill());
  }catch(err){
    dispatch(emptyCartFailure(err))
  }

}

// export const _load_restaurent_details = () => (dispatch, getState) => {
//   dispatch(loadRestaurentDetailsReq())
//   return make_API_call("get", "/sessions/active")
//     .then(res => {
//       console.log(res);
//       dispatch(loadRestaurentDetailsSuccess(res))
//     }).catch(() => {
//       const msg = `Failed to load details`
//       dispatch(loadRestaurentDetailsFailure(msg))
//     })
// }

// export const _load_orders = () => (dispatch, getState) => {
//   dispatch(loadOrdersReq())
//   return make_API_call("get", "/sessions/active/orders")
//     .then(res => {
//       dispatch(loadOrdersSuccess(res))
//     }).catch(() => {
//       const msg = `Failed to load orders`
//       dispatch(loadOrdersFailure(msg))
//     })

// }
// export const _load_trending_dishes = () => (dispatch, getState) => {
//   dispatch(loadTrendingDishesReq())
//   // const restaurant_id = getState().home.details.data.restaurant.pk
//   // return make_API_call("get", `/menus/items/trending/restaurants/${parseInt(restaurant_id, 10)}`)
//   //   .then(res => {
//   //     dispatch(loadTrendingDishesSuccess(res))
//   //   }).catch(() => {
//   //     const msg = `Failed to load trending dishes`
//   //     dispatch(loadTrendingDishesFailure(msg))
//   //   })

//   setTimeout(() => {
//     const payload = [
//       {
//         "pk": 94,
//         "name": "Banana",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "89.00"
//         ],
//         "tags": [
//           "dessert"
//         ],
//         "available_meals": [
//           "brkfst"
//         ],
//         "image": "https://storage.googleapis.com/checkin-app-18.appspot.com/images/menus/items/94_3259.jpg",
//         "description": "Have a tasty Banana all you like!! Eat it so much that you'll get fat",
//         "ingredients": [
//           "na"
//         ],
//         "is_available": true,
//         "customizations": [
//           5,
//           3
//         ],
//         "item_type": 3,
//         "group": 10,
//         "created": "2019-06-24T12:08:56.796530Z",
//         "modified": "2020-11-22T15:22:19.506693Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 91,
//         "name": "Chilli Mushroom",
//         "types": [
//           "Gravy",
//           "Dry"
//         ],
//         "costs": [
//           "159.00",
//           "159.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://storage.googleapis.com/checkin-app-18.appspot.com/images/menus/items/91_699f.jpg",
//         "description": "Have a tasty Chilli Mushroom",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 16,
//         "created": "2019-06-24T12:08:56.796836Z",
//         "modified": "2020-11-06T14:27:20.329527Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 90,
//         "name": "Chilli Paneer",
//         "types": [
//           "Gravy",
//           "Dry"
//         ],
//         "costs": [
//           "159.00",
//           "159.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://storage.googleapis.com/checkin-app-18.appspot.com/images/menus/items/90_4584.jpg",
//         "description": "Have a tasty Chilli Paneer",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 16,
//         "created": "2019-06-24T12:08:56.796909Z",
//         "modified": "2020-11-06T14:27:20.339936Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 82,
//         "name": "Chilli Potato",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "119.00"
//         ],
//         "tags": [
//           "na"
//         ],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/chinese.png",
//         "description": "Have a tasty Chilli Potato",
//         "ingredients": [
//           "na"
//         ],
//         "is_available": false,
//         "customizations": [
//           10
//         ],
//         "item_type": 0,
//         "group": 16,
//         "created": "2019-06-24T12:08:56.796969Z",
//         "modified": "2020-11-06T14:27:20.349996Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 117,
//         "name": "Chinese Platter",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "199.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/main.png",
//         "description": "Have a tasty Chinese Platter",
//         "ingredients": [],
//         "is_available": true,
//         "customizations": [],
//         "item_type": 0,
//         "group": 22,
//         "created": "2019-06-24T12:08:56.797025Z",
//         "modified": "2020-11-06T14:14:45.887775Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 118,
//         "name": "Chips&Dips Platter",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "199.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/main.png",
//         "description": "Have a tasty Chips n Dips Platter",
//         "ingredients": [],
//         "is_available": true,
//         "customizations": [],
//         "item_type": 0,
//         "group": 22,
//         "created": "2019-06-24T12:08:56.801233Z",
//         "modified": "2020-11-06T14:14:45.897832Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 162,
//         "name": "chjgeg",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "123.00"
//         ],
//         "tags": [
//           "na"
//         ],
//         "available_meals": [
//           "lunch"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/chef_spl.png",
//         "description": "",
//         "ingredients": [
//           "na"
//         ],
//         "is_available": true,
//         "customizations": [
//           1
//         ],
//         "item_type": 2,
//         "group": 30,
//         "created": "2020-03-04T14:59:26.672276Z",
//         "modified": "2020-11-06T14:35:48.524930Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 96,
//         "name": "Chocolate",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "89.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/main.png",
//         "description": "Have a tasty Chocolate",
//         "ingredients": [],
//         "is_available": true,
//         "customizations": [],
//         "item_type": 0,
//         "group": 18,
//         "created": "2019-06-24T12:08:56.801320Z",
//         "modified": "2020-11-06T14:05:09.943294Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 123,
//         "name": "Crispy Babycorn",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "159.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/chinese.png",
//         "description": "Have a tasty Crispy Babycorn",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 16,
//         "created": "2019-06-24T12:08:56.801379Z",
//         "modified": "2020-11-06T14:27:20.360336Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 160,
//         "name": "ddgf",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "123.00"
//         ],
//         "tags": [
//           "na"
//         ],
//         "available_meals": [
//           "lunch"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/chef_spl.png",
//         "description": "",
//         "ingredients": [
//           "na"
//         ],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 1,
//         "group": 30,
//         "created": "2020-03-04T12:10:06.799797Z",
//         "modified": "2020-11-06T14:36:18.888713Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 135,
//         "name": "demo",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "16.00"
//         ],
//         "tags": [
//           "r"
//         ],
//         "available_meals": [
//           "lunch",
//           "dinner"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/chef_spl.png",
//         "description": "",
//         "ingredients": [
//           "potato"
//         ],
//         "is_available": true,
//         "customizations": [],
//         "item_type": 2,
//         "group": 30,
//         "created": "2019-11-26T17:30:14.595717Z",
//         "modified": "2020-11-06T14:35:48.546279Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 126,
//         "name": "Drinks break",
//         "types": [
//           "R",
//           "L"
//         ],
//         "costs": [
//           "250.00",
//           "300.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/mocktail.png",
//         "description": "Have a tasty Drinks break",
//         "ingredients": [],
//         "is_available": true,
//         "customizations": [],
//         "item_type": 0,
//         "group": 8,
//         "created": "2019-06-24T12:08:56.801437Z",
//         "modified": "2020-11-06T14:40:42.477806Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 102,
//         "name": "Egg Burger",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "99.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/sandwich.png",
//         "description": "Have a tasty Egg Burger",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 19,
//         "created": "2019-06-24T12:08:56.801493Z",
//         "modified": "2020-11-06T14:49:19.844235Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 111,
//         "name": "Falafel balls w/ Hummus sunt in cul at primis suscipit, quo enim consetetur",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "159.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/main.png",
//         "description": "Have a tasty Loaded Nachos with dips. Lorem ipsum dolor sit amet, mucius neglegentur an has. Mei at primis suscipit, quo enim dicta lucilius deserunt eum id. Ne per meliore facilisis repudiandae, qui omnium officiis complectitur at, his lobortis hendrerit at. His ullum liber no, an quo aperiri sensibus, vis sanctus noluisse ei.",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 21,
//         "created": "2019-06-24T12:08:56.801556Z",
//         "modified": "2020-11-06T14:31:36.289738Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 103,
//         "name": "Falafel Burger",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "109.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/sandwich.png",
//         "description": "Have a tasty Falafel Burger",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 19,
//         "created": "2019-06-24T12:08:56.801612Z",
//         "modified": "2020-11-06T14:49:19.854424Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 112,
//         "name": "Falafel laffah wrap",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "169.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/main.png",
//         "description": "Have a tasty Falafel laffah wrap",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 21,
//         "created": "2019-06-24T12:08:56.801667Z",
//         "modified": "2020-11-06T14:31:36.298747Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 116,
//         "name": "Falafel Platter",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "199.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/main.png",
//         "description": "Have a tasty Falafel Platter",
//         "ingredients": [],
//         "is_available": true,
//         "customizations": [],
//         "item_type": 0,
//         "group": 22,
//         "created": "2019-06-24T12:08:56.801722Z",
//         "modified": "2020-11-06T14:14:45.906940Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 105,
//         "name": "French Fries",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "79.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/main.png",
//         "description": "Have a tasty French Fries",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 20,
//         "created": "2019-06-24T12:08:56.801777Z",
//         "modified": "2020-11-06T14:31:33.372501Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 85,
//         "name": "Fried Rice",
//         "types": [
//           "Veg",
//           "Egg",
//           "Paneer"
//         ],
//         "costs": [
//           "99.00",
//           "119.00",
//           "119.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/chinese.png",
//         "description": "Have a tasty Fried Rice (egg or paneer)",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 16,
//         "created": "2019-06-24T12:08:56.801840Z",
//         "modified": "2020-11-06T14:27:20.370306Z",
//         "menus": [
//           2
//         ]
//       },
//       {
//         "pk": 86,
//         "name": "Hakka Noodles",
//         "types": [
//           "R"
//         ],
//         "costs": [
//           "99.00"
//         ],
//         "tags": [],
//         "available_meals": [
//           "brkfst",
//           "lunch",
//           "dinner",
//           "nhtlfe"
//         ],
//         "image": "https://dev.api.check-in.in/static/menu/icons/chinese.png",
//         "description": "Have a tasty Hakka Nooddles (veg)",
//         "ingredients": [],
//         "is_available": false,
//         "customizations": [],
//         "item_type": 0,
//         "group": 16,
//         "created": "2019-06-24T12:08:56.801895Z",
//         "modified": "2020-11-06T14:27:20.380217Z",
//         "menus": [
//           2
//         ]
//       },
//     ]
//     dispatch(loadTrendingDishesSuccess(payload))
//   }, 3000);

// }