import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { networkIP } from "../../../../helpers";
import styles from "./styles";
import { Text } from "../../../../components";

const HireMechanic = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `${networkIP}/maintenance`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  if (data.length === 0) {
    // Data is still loading, display a loading state or placeholder
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Data is available, render the component with the data
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={item._id} style={styles.carInfoContainer}>
          {/* <View style={styles.sectionLeft}>
            <Image
              resizeMode={"contain"}
              style={styles.carImage}
              source={require("../../../../../assets/images/placeholder.png")}
            />
          </View> */}

          <View style={styles.sectionRight}>
            <Text style={styles.carText}>
              Vechicle Type: {item.vechicletype}
            </Text>
            <Text style={styles.carText}>Service Type: {item.servicetype}</Text>
            <Text style={styles.carText}>Location: {item.location}</Text>
            <Text style={styles.carText}>Description: {item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default HireMechanic;
