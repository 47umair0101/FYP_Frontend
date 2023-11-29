import { FlatList, StyleSheet, View } from "react-native";
import { Text } from "../../../../components";
import React, { useEffect, version } from "react";
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from "../../../../utils";
import PlaceItem from "./PlaceItem";

const PlaceList = ({ placeList }) => {
  // useEffect(() => {
  //   // console.log("11111111111111", placeList);
  // }, []);
  return (
    <View style={styles.container}>
      <Text headingType={3} style={styles.heading}>
        Found {placeList.length} places
      </Text>

      <FlatList
        scrollEnabled={false}
        data={placeList}
        keyExtractor={(item, index) => item.place_id.toString()}
        renderItem={({ item }) => <PlaceItem place={item} />}
      />
    </View>
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginBottom: verticalScale(10),
  },
  heading: {
    fontSize: scaleFontSize(16),
  },
});
