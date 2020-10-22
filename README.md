# e-commerce-site

1. Website template
  -created index.html
  -add default HTML code
  -link to style.css
  -created header, main and footer
  -style elements
  -Display Products
  -Create React App
  -Create Rating and Product Component
  -Use BrowserRouter and Route for Home Screen
  -Create HomeScreen.js
  -Add product list code there
  -Create ProductScreen.js
  -Add new Route from product details to App.js
  -Create 3 columns for product image, info and action
  -(Create Node.JS Server)Update package.json set type: module
  -create server.js
  -create route for /api/products
  -Load Products From Backend
  -edit HomeScreen.js
  -define products, loading and error.
  -create useEffect
  -define async fetchData and call it
  -install axios
  -get data from /api/products
  -show them in the list
  -create Loading Component
  -create Message Box Component
  -use them in HomeScreen
 
2.Add Redux to Home Screen(manage state redux)
  -npm install redux react-redux
  -Create store.js
  -initState= {products:[]}
  -reducer = (state, action) => switch LOAD_PRODUCTS: {products: action.payload}
  -export default createStore(reducer, initState)
  -Edit HomeScreen.js
  -shopName = useSelector(state=>state.products)
  -const dispatch = useDispatch()
  -useEffect(()=>dispatch({type: LOAD_PRODUCTS, payload: data})
  -Add store to index.js
  
 3.Add Redux to Product Screen
  -create product details constants, actions and reducers
  -add reducer to store.js
  -use action in ProductScreen.js
  -add /api/product/:id to backend api
  
4.Handle the countInStock and quantity button with add to cart button redirects to card screen
  -Handle Add To Cart in ProductScreen.js

5.
