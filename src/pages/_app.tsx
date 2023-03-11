import { pokemonsReducer } from "@/reducers/pokemons";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "@redux-devtools/extension";

export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(pokemonsReducer, composeWithDevTools());

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
