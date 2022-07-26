import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </Provider>
  )
}

export default App;