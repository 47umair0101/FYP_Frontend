import { StyleSheet, View, Image } from "react-native";
import { Text } from "../../../../components";
import React, { useEffect, version } from "react";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../../utils";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../../../../utils/colors";

// ../../../../../assets/images/placeholder.png
const API_KEY = "AIzaSyCpKrSe0E_wkadtvY0CNWsj5_njG8zRAOI";

const PlaceItem = ({ place }) => {
  useEffect(() => {
    console.log("----------------------->", place.place_id);
  }, []);
  return (
    <View key={place.place_id} style={styles.container}>
      {place?.photos ? (
        <Image
          resizeMode={"contain"}
          style={styles.image}
          source={{
            uri:
              "https://maps.googleapis.com/maps/api/place/photo" +
              "?maxwidth=400" +
              "&photo_reference=" +
              place?.photos[0]?.photo_reference +
              "&key=" +
              API_KEY,
          }}
        />
      ) : (
        <Image
          resizeMode={"contain"}
          style={styles.image}
          source={require("../../../../../assets/images/placeholder.png")}
        />
      )}
      <View style={styles.placeInfoContainer}>
        <Text style={styles.heading}>{place.name}</Text>
        <Text style={styles.text}>{place.vicinity}</Text>
        <View style={styles.ratingContainer}>
          <Icon name="star" size={18} color={colors.yellow} />
          <Text style={styles.heading}>{place.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    marginVertical: verticalScale(5),
    borderWidth: 1,
    borderColor: colors.yellow,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(5),
    backgroundColor: "#f8f8f8",
    borderRadius: scaleFontSize(5),
    shadowColor: colors.primary,
    elevation: 2,
  },
  image: {
    width: horizontalScale(80),
    height: verticalScale(60),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    marginRight: horizontalScale(12),
    borderRadius: scaleFontSize(4),
  },
  heading: {
    fontSize: scaleFontSize(16),
    fontFamily: "InterMedium",
    marginBottom: 2,
  },
  text: {
    fontSize: scaleFontSize(14),
    fontFamily: "InterMedium",
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  placeInfoContainer: {
    flex: 1,
  },
});
