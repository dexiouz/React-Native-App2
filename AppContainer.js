import { createStackNavigator, createAppContainer } from "react-navigation";
import Likes from "./src/components/Likes";
import Todo from "./src/components/Todo";
import FlatListExample from "./src/components/FlatListExample";
import Touchables from "./src/components/Touchables";
import Menu from "./src/components/Menu";
const AppNavigator = createStackNavigator(
  {
    Likes,
    Todo,
    Touchables,
    FlatListExample,
    Menu
  },
  {
    initialRouteName: "Todo",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#222e50"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
