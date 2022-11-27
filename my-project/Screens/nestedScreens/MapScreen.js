import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 50.516339,
          longitude: 30.602185,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker
          coordinate={{ latitude: 50.516339, longitude: 30.602185 }}
          title="travel photo"
        />
      </MapView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //  alignItems: "center",
    //  justifyContent: "center",
  },
});
export default MapScreen;
