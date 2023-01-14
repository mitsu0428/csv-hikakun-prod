/* eslint-disable react/react-in-jsx-scope */
import "../styles/globals.css";
import { AppProps } from "next/app";
import { googleTagManagerId } from "../utils/gtm";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "./components/atoms/GoogleTagManager";
import HeaderComponents from "./components/organisms/HeaderNavigation";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GoogleTagManager
      googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
    />
    <HeaderComponents />
    <Component {...pageProps} />
  </>
);

export default App;
