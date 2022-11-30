import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Location from "expo-location";

import { Camera } from "expo-camera";
import db from "../../firebase/config";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [comment, setComment] = useState("");
  const [location, setLocation] = useState(null);

  const takePhoto = async () => {
    const { uri } = await camera.takePictureAsync();
    let location = await Location.getCurrentPositionAsync();
    setLocation(location);
    console.log("latitude", location.coords.latitude);
    console.log("longitude", location.coords.longitude);
    setPhoto(uri);
    console.log("photo uri", uri);
  };
  const sendPhoto = () => {
    uploadPhotoToServer();
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };
  const uploadPhotoToServer = async () => {
    try {
      const response = await fetch(photo);
      const file = await response.blob();
      const postId = Date.now().toString();
      await db.storage().ref(`postImage/${postId}`).put(file);
      const processedPhoto = await db
        .storage()
        .ref("postImage")
        .child(postId)
        .getDownloadURL();
      return processedPhoto;
    } catch (error) {
      console.log("error.message", error.message);
      console.log("error.code", error.code);
    }
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
      <Text>Создать публикацию</Text>
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
        <View style={styles.inputContainer}>
          <Text style={styles.text}>Загрузите фото</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} onChangeText={setComment} />
        </View>
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
  inputContainer: {
    marginHorizontal: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#fff",
    borderBottomColor: "#20b2aa",
  },
});
export default CreatePostsScreen;
