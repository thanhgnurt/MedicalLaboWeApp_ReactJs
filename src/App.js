import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import AppContainer from "./containers/AppContainer";
import GlobalLoading from "./components/GlobalLoading";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <GlobalLoading />
          <AppContainer />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
