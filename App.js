import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./navigation/navigation";
import { StoreProvider, rootStore } from "./store/store";
import * as Sentry from "@sentry/react-native";

Sentry.init({
  dsn: "https://00f2373d3bb6407f959c22e70dbd48a1@o1332191.ingest.sentry.io/6596576",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

function App() {
  return (
    <StoreProvider value={rootStore}>
      <SafeAreaProvider>
        <Navigation>
          <StatusBar />
        </Navigation>
      </SafeAreaProvider>
    </StoreProvider>
  );
}


export default Sentry.wrap(App)