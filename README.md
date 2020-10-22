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

5.Create README.md

6.7.8.Build CartScreen with redux along with delete button
  -Implement Add to Cart Action
  -create addToCart constants, actions and reducers
  -add reducer to store.js
  -use action in CartScreen.js
  -render cartItems.length
  -Build Cart Screen
  -create 2 columns for cart items and cart action
  -cartItems.length === 0 ? cart is empty
  -show item image, name, qty and price
  -Proceed to Checkout button
  -Implement remove from cart action
  -Implement Remove From Cart Action
  -create removeFromCart constants, actions and reducers
  -add reducer to store.js
  -use action in CartScreen.js

9. Added a cookie

10.Removed some error in the project while adding a cookie

11.Connet to mongoose
  -Create Sample Users In MongoDB
  -npm install mongoose
  -connect to mongodb
  -create config.js
  -npm install dotenv
  -export MONGODB_URL
  -create models/userModel.js
  -create userSchema and userModel
  -create userRoute
  -Seed sample data
  -Create Sample Products In MongoDB
  -create models/productModel.js
  -create productSchema and productModel
  -create productRoute
  -Seed sample data

12.Added signin screen(backend)
  -create /signin api
  -check email and password
  -generate token
  -install json web token
  -install dotenv
  -return token and data
  -test it using postman
  -Design SignIn Screen
  -create SigninScreen
  -render email and password fields
  -create signin constants, actions and reducers
  -Update Header based on user login
  -Implement SignIn Action
  -create signin constants, actions and reducers
  -add reducer to store.js
  -use action in SigninScreen.js

13.Added register screen
  -create API for /api/users/register
  -insert new user to database
  -return user info and token
  -create RegisterScreen
  -Add fields
  -Style fields
  -Add screen to App.js
  -create register action and reducer
  -check validation and create user

14.Created productsScreen to create a product and getting it from backend

15.Created edit, delete and create product button



