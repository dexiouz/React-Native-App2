/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import MyApp from "./MyApp";
import List from "./src/components/List";
import FlatList from "./src/components/FlatListExample";
import Touchables from "./src/components/Touchables";
import AppContainer from "./AppContainer";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => AppContainer);
