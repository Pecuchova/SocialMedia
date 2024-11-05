import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./routes";
import Home from "../screens/Home/Home"

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}
            initialRouteName={Routes.HOME} >
            <Stack.Screen name={Routes.HOME} component={Home} />
        </Stack.Navigator>
    );
};

export default MainNavigation;

