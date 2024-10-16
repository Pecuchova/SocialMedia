import React from "react";
import { SafeAreaView, TouchableOpacity, View, Text, FlatList } from "react-native";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import globalStyle from "./assets/styles/globalStyle";
import UserStory from "./components/UserStory/UserStory";

const App = () => {
  const userStories = [
    {
      firstName: "Joseph",
      id: 1,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Angel",
      id: 2,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "White",
      id: 3,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Olivier",
      id: 4,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Janka",
      id: 5,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nicolas",
      id: 6,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Adam",
      id: 7,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Noah",
      id: 8,
      profileImage: require("./assets/images/default_profile.png"),
    },
    {
      firstName: "Nathaniel",
      id: 9,
      profileImage: require("./assets/images/default_profile.png"),
    },
  ];

  return (
    <SafeAreaView>
      <View
        style={globalStyle.header}>
        <Title title={"Let's Explore"} />
        <TouchableOpacity style={globalStyle.envelopeIcon}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color={"#898DAE"} />
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>
              2
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={globalStyle.userStoryContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={userStories}
          renderItem={({ item }) =>
            <UserStory
              firstName={item.firstName}
              profileImage={item.profileImage}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default App;