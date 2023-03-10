import { pokemonsReducer } from "@/reducers/pokemons";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";

export default function App({ Component, pageProps }: AppProps) {
  const store = createStore(pokemonsReducer);

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
