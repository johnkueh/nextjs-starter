import type { AppProps } from "next/app";
import { FirebaseAuthProvider } from "../context/useFirebaseAuth";

function App({ Component, pageProps }: AppProps) {
  return (
    <FirebaseAuthProvider>
      <Component {...pageProps} />
    </FirebaseAuthProvider>
  );
}
export default App;
