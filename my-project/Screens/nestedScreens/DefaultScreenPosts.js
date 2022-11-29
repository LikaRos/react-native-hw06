import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Image, Button } from "react-native";

const DefaultScreenPosts = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  console.log("route.params", route.params);
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: item.photo }}
              style={{
                height: 200,
                width: 350,
                borderRadius: 10,
                marginHorizontal: 10,
              }}
            />
          </View>
        )}
      />
      <Button title="Go to Map" onPress={() => navigation.navigate("Map")} />
      <Button
        title="Go to Comments"
        onPress={() => navigation.navigate("Comments")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default DefaultScreenPosts;
