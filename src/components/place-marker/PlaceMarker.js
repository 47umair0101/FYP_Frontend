import { StyleSheet, Image } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import { horizontalScale, verticalScale } from "../../utils";

const PlaceMarker = ({ item }) => {
  return (
    <Marker
      title={item.name}
      coordinate={{
        latitude: item.geometry.location.lat,
        longitude: item.geometry.location.lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Image
        resizeMode={"contain"}
        style={styles.marker}
        source={require("../../../assets/images/destination.png")}
      />
    </Marker>
  );
};

export default PlaceMarker;

const styles = StyleSheet.create({
  marker: {
    width: horizontalScale(50),
    height: verticalScale(30),
  },
});
