import React, { useEffect, useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { networkIP } from "../../../../helpers";
import styles from "./styles";
import { Text, Button, BackendErrorMessage } from "../../../../components";
import { horizontalScale, verticalScale } from "../../../../utils";

const CarBooking = () => {
  const [data, setData] = useState([]);
  const [backendMessage, setBackendMessage] = useState();

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

  const clearBackendMessage = () => {
    setBackendMessage(null);
  };

  // Data is available, render the component with the data
  return (
    <View style={styles.container}>
      {backendMessage && (
        <BackendErrorMessage
          style={{ left: horizontalScale(120), top: verticalScale(50) }}
          error={backendMessage}
        />
      )}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {data.map((item, index) => (
          <View key={item._id} style={styles.carInfoContainer}>
            <View style={styles.sectionLeft}>
              {item.carImage ? (
                <Image
                  resizeMode={"contain"}
                  style={styles.carImage}
                  source={{ uri: item.carImage }}
                />
              ) : (
                <Image
                  resizeMode={"contain"}
                  style={styles.carImage}
                  source={require("../../../../../assets/images/placeholder.png")}
                />
              )}
            </View>

            <View style={styles.sectionRight}>
              <Text style={styles.carText}>
                Name: <Text style={styles.text}>{item.name}</Text>
              </Text>
              <Text style={styles.carText}>
                Model: <Text style={styles.text}>{item.model}</Text>
              </Text>
              <Text style={styles.carText}>
                Condition: <Text style={styles.text}>{item.condition}</Text>
              </Text>
              <Text style={styles.carText}>
                Price: <Text style={styles.text}>{item.price}</Text>
              </Text>
              <Text style={styles.carText}>
                Description: <Text>{item.description}</Text>
              </Text>
            </View>
            <Button
              onPress={() => {
                setBackendMessage("Request Sent");
                setTimeout(clearBackendMessage, 3000);
              }}
              style={styles.bookNowButton}
              title={"Book Now"}
            />
          </View>
        ))}
      </ScrollView>
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
