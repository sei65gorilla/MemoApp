import { Stack } from "expo-router"

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: "#4891FF"
    },
    headerTintColor: "#ffffff",
    headerTitle: "Memo App",
    headerBackTitle: "Back",
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: "bold"
    }
  }}/>
}

export default Layout
