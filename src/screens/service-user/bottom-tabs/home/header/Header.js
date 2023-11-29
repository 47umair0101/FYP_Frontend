import { View, Image, Pressable, TouchableOpacity } from "react-native";
import { Text } from "../../../../../components/";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../../../../utils/colors";
import { useNavigation } from "@react-navigation/native";
import { getItem } from "../../../../../utils/asyncStorage";

const Header = () => {
  const navigation = useNavigation();

  const [profileImage, setProfileImage] = useState();
  const [userName, setUserName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataJSON = await getItem("userData");
        if (userDataJSON) {
          const userData = JSON.parse(userDataJSON);
          setProfileImage(userData.user.profileImage);
          setUserName(userData.user.fullName);
        }
      } catch (error) {
        console.log("Error retrieving user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.headerContainer}>
      {/* Header Section Left */}
      <View style={styles.sectionLeft}>
        {/* Header Image Button */}
        <Pressable style={styles.headerImageButton}>
          {profileImage ? (
            <Image
              style={styles.profileImage}
              resizeMode={"contain"}
              source={{ uri: profileImage }}
            />
          ) : (
            <Image
              style={styles.profileImage}
              resizeMode={"contain"}
              source={require("../../../../../../assets/images/profile.png")}
            />
          )}
        </Pressable>
        {/* Header Text Container */}
        <View style={styles.headerTextContainer}>
          <Text style={styles.textHello}>
            Hello <Text style={styles.helloHand}>👋🏻</Text>
          </Text>
          <Text style={styles.userName}>{userName}</Text>
        </View>
      </View>
      {/* Heaader Section Right */}
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.sectionRight}
      >
        <Icon name="menu" size={30} color={colors.white} />
      </TouchableOpacity>
      {/* Header Banner */}
      <View style={styles.headerBanner}>
        <View style={styles.col1}>
          <Icon name="clipboard" size={30} color={colors.grey} />
        </View>
        <View style={styles.col2}>
          <Text style={styles.completedOrdersText}>
            Your Completed Orders: <Text style={styles.ordersCount}>00</Text>
          </Text>
          <Pressable
            onPress={() => navigation.navigate("Orders")}
            style={styles.linkContainer}
          >
            <Text style={styles.linkText}>Click Here To See More Info</Text>
          </Pressable>
        </View>
        <View style={styles.col3}>
          <Text style={styles.lastOrderDateHeading}>Last Order On</Text>
          <Text style={styles.lastOrderDate}>15 MON</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
