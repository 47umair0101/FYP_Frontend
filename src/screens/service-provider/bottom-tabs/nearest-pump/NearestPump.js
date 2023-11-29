import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { BackButton, GoogleMapView, Text } from "../../../../components";
import { colors } from "../../../../utils/colors";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { scaleFontSize } from "../../../../utils";
import GlobalApi from "../../../../config/GlobalApi";
import PlaceList from "./PlaceList";
import { UserLocationContext } from "../../../../config/UserLocationContext";

const gas_station = "gas_station";
const car_wash = "car_wash";
const car_repair = "car_repair";

const NearestPump = () => {
  const [nearBySearch, setNearBySearch] = useState(gas_station);
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  const getNearBySearchPlace = () => {
    GlobalApi.nearByPlace(
      location.coords.latitude,
      location.coords.longitude,
      nearBySearch
    ).then((res) => {
      // console.log(res.data.results);
      setPlaceList(res?.data?.results);
    });
  };

  useEffect(() => {
    getNearBySearchPlace();
  }, [nearBySearch]);

  return (
    <View style={styles.container}>
      <BackButton />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        nestedScrollEnabled={true}
      >
        <View style={styles.header}>
          <Text style={styles.headerText} headingType={2}>
            Nearest Petrol Pump
          </Text>
          <Image
            resizeMode={"contain"}
            style={styles.headerImage}
            source={require("../../../../../assets/images/nearest-petrol-pump.png")}
          />
        </View>

        {/* Google Map View */}
        <View style={styles.mapContainer}>
          <GoogleMapView placeList={placeList} />
        </View>
        {/* gas_station */}
        <View style={styles.nearBySearchButtonsContainer}>
          <TouchableOpacity
            onPress={() => {
              setNearBySearch(gas_station);
            }}
            style={
              nearBySearch === gas_station
                ? styles.nearBySearchButtonSelected
                : styles.nearBySearchButton
            }
          >
            <Image
              source={require("../../../../../assets/images/petrol_pump.png")}
              resizeMode={"contain"}
              style={styles.nearBySearchIcon}
            />
            <Text style={styles.nearBySearchButtonText}>Petrol Pumps</Text>
          </TouchableOpacity>
          {/* car_wash */}
          <TouchableOpacity
            onPress={() => {
              setNearBySearch(car_wash);
            }}
            style={
              nearBySearch === car_wash
                ? styles.nearBySearchButtonSelected
                : styles.nearBySearchButton
            }
          >
            <Image
              source={require("../../../../../assets/images/car_wash.png")}
              resizeMode={"contain"}
              style={styles.nearBySearchIcon}
            />
            <Text style={styles.nearBySearchButtonText}>Car Wash</Text>
          </TouchableOpacity>
          {/* car_repair */}
          <TouchableOpacity
            onPress={() => {
              setNearBySearch(car_repair);
            }}
            style={
              nearBySearch === car_repair
                ? styles.nearBySearchButtonSelected
                : styles.nearBySearchButton
            }
          >
            <Image
              source={require("../../../../../assets/images/car_repair.png")}
              resizeMode={"contain"}
              style={styles.nearBySearchIcon}
            />
            <Text style={styles.nearBySearchButtonText}>Car Repair</Text>
          </TouchableOpacity>
        </View>
        {placeList ? <PlaceList placeList={placeList} /> : null}
      </ScrollView>
    </View>
  );
};

export default NearestPump;
