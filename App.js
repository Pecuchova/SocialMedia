import React from "react";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Title from "./components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const App = () => {
  return (
 <SafeAreaView>
  <View 
  style={{
    marginRight: 17, 
    marginLeft: 27, 
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }}>
    <Title title={"Let's Explore"}/>
    <TouchableOpacity style={{
      padding:14, 
      borderRadius: 100, 
      backgroundColor:"#F9FAFB"
      }}>
      <FontAwesomeIcon icon={faEnvelope} color= {"#898DAE"} />
    </TouchableOpacity>
  </View>
 </SafeAreaView>
  );
}

export default App;