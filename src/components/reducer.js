import { useReducer } from "react";
import productData from '../data/products.json';

const initialState = {
  products: productData || [],
  product: {},
  count: 0,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        count: state.count + action.payload.value,
      }

    case 'ADD_PRODUCT':
      return {
        ...state,
        product: action.payload.product
      }

    default:
      return state;
  }
}

function App() {


  const [state, dispatch] = useReducer(productReducer, initialState);

  console.log(state);

  const handleClick = () => {
    dispatch({
      type: 'INCREASE',
      payload: {
        value: 1
      }
    })
  }

  const handleProduct = (product) => (event) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: {
        product
      }
    })
  }

  return (
    <div className="App">


      <h1> {state.count} </h1>
      <button onClick={handleClick}>click</button>

      {
        state.products.map((product => (
          <div key={product.id}>
            <h3 className="my-3">
              {product.title}
            </h3>
            <button onClick={handleProduct(product)}>Click</button>
          </div>
        )))
      }

    </div>
  );
}

export default App;
