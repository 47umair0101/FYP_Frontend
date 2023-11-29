import React, { useEffect, useState } from "react";
import { View, Image } from "react-native";
import { networkIP } from "../../../../helpers";
import styles from "./styles";
import { Text } from "../../../../components";

const CarBooking = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = `${networkIP}/car`;

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
          <View style={styles.sectionLeft}>
            <Image
              resizeMode={"contain"}
              style={styles.carImage}
              source={require("../../../../../assets/images/placeholder.png")}
            />
          </View>

          <View style={styles.sectionRight}>
            <Text style={styles.carText}>Name: {item.name}</Text>
            <Text style={styles.carText}>Model: {item.model}</Text>
            <Text style={styles.carText}>Condition: {item.condition}</Text>
            <Text style={styles.carText}>Price: {item.price}</Text>
            <Text style={styles.carText}>Description: {item.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CarBooking;

// return (
//   <View style={{ flex: 1 }}>
//     <Text>CarBooking</Text>
//     {data.map((item, index) => (
//       <View key={index}>
//         <Text>{item._id}</Text>
//         <Text>{item.model}</Text>
//         <Text>{item.name}</Text>
//       </View>
//     ))}
//   </View>
// );

// Car Booking
// ---------------------------
// Name
// Car Model
// City
// Date
// Car
// User:Abstraction

// @Prop()
//     carImage: string;

//     @Prop()
//     name: string;

//     @Prop()
//     model: string;

//     @Prop()
//     condition:string;

//     @Prop()
//     price:string;

//     @Prop()
//     description:string;
