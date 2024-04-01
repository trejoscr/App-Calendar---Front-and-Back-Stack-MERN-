import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"
import { Provider } from "react-redux"
import { store } from "./store"

export const CanlendarApp = () => {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
    </Provider>
  )
}