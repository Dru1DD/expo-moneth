import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./navigation/navigation";
import { StoreProvider, rootStore } from "./store/store";

export default function App() {
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
