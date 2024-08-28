import { Home } from "@/components/screens/home";
import { StatusBar } from "react-native";

export default function Index() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
}
