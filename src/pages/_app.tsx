import "../styles/globals.css";
import { AppProps } from "next/app";
import { googleTagManagerId } from "../utils/gtm";
import GoogleTagManager, {
  GoogleTagManagerId,
} from "./components/GoogleTagManager";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <>
    <GoogleTagManager
      googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
    />
    <Component {...pageProps} />
  </>
);

export default App;
