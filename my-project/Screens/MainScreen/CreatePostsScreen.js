import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Location from "expo-location";
import { useFonts } from "expo-font";
import { Camera } from "expo-camera";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setPhoto(photo.uri);
    console.log("photo", photo);
  };
  const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status);
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && (
          <View style={styles.takePhotoContainer}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 200, borderRadius: 10 }}
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.snapContainer}
          activeOpacity={0.8}
          onPress={takePhoto}
        >
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendBtn}
          activeOpacity={0.8}
          onPress={sendPhoto}
        >
          <Text style={styles.sendTitle}>Опубликовать</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  camera: {
    //  height: "70%",
    //  marginTop: 40,
    //   marginHorizontal: 10,
    //   borderRadius: 10,
    flex: 1, //фото зона открывается на весь єкран
    alignItems: "center",
    justifyContent: "flex-end",
  },
  snap: {
    marginTop: 200,
    color: "#fff",
  },
  snapContainer: {
    width: 70,
    height: 70,
    borderRadius: "50%",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 50,
    left: 10,
    borderColor: "black",
    borderWidth: 1,
    // height: 200,
    // width: 200,
  },
  sendBtn: {
    backgroundColor: "#FF6C00",
    marginTop: 27,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginHorizontal: 16,
  },
  sendTitle: {
    color: "#FFFFFF",
    fontSize: 16,

    //  textAlign: "center",
  },
});
export default CreatePostsScreen;
