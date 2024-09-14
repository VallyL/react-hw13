import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/ store";
import Filter from "./components/ Filter";
import UserList from "./components/UserList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>User List</h1>
        <Filter />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
