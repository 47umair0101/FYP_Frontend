import { View } from "react-native";
import { Text } from "../../../../components";
import React from "react";
import styles from "./styles";
import Header from "./header/Header";
import MainMenu from "./main-menu/MainMenu";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MainMenu />
    </View>
  );
};

export default Home;
