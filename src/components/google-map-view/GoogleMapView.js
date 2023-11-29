import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { UserLocationContext } from "../../config/UserLocationContext";
import { colors } from "../../utils/colors";
import { verticalScale, horizontalScale, scaleFontSize } from "../../utils";
import PlaceMarker from "../place-marker/PlaceMarker";

const GoogleMapView = ({ placeList }) => {
  const [mapRegion, setMapRegion] = useState([]);

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  }, [location]);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
        >
          <Marker title="You" coordinate={mapRegion}>
            <Image
              resizeMode={"contain"}
              style={styles.marker}
              source={require("../../../assets/images/pin-map.png")}
            />
          </Marker>
          {placeList.map(
            (item, index) => index < 20 && <PlaceMarker item={item} />
          )}
        </MapView>
      ) : null}
    </View>
  );
};

export default GoogleMapView;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    // borderRadius: 20,
    borderWidth: scaleFontSize(3),
    borderTopWidth: scaleFontSize(4),
    borderBottomWidth: scaleFontSize(4),
    borderColor: colors.yellow,
    width: "100%",
    // marginHorizontal: horizontalScale(15),
    zIndex: 2,
  },
  map: {
    width: "100%",
    height: verticalScale(149),
  },
  marker: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
});
