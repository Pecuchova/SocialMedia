import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is tab 1</Text>
        </View>
    );
};

const Tab2 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is tab 2</Text>
        </View>
    );
};

const Tab3 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is tab 3</Text>
        </View>
    );
};

export const ProfileTabsNavigation = () => {
    return (
        <ProfileTabs.Navigator>
            <ProfileTabs.Screen name={'Tab1'} component={Tab1} />
            <ProfileTabs.Screen name={'Tab2'} component={Tab2} />
            <ProfileTabs.Screen name={'Tab3'} component={Tab3} />
        </ProfileTabs.Navigator>
    );
};

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{ header: () => null, headerShown: false }}
            initialRouteName={Routes.Home}>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.Profile} component={Profile} />
        </Stack.Navigator>
    );
};

export default MainNavigation;

