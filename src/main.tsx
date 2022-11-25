import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css';
import { RouterProvider } from 'react-router-dom';

import { createBrowserRouter } from "react-router-dom";
import { Root } from "./routes";
import StoreContext from "./app/store/provider"
import Store from './app/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
]);

const store = new Store();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <RouterProvider router={router} />
    </StoreContext.Provider>
  </React.StrictMode>
)
