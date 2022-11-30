import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { authSignOutUser } from "../../redux/auth/authOperations";
import IconButton from "../../components/IconButton";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={signOut}
          style={styles.logOutIcon}
        >
          <IconButton type="log-out" onPress={signOut} />
        </TouchableOpacity>
      </View>

      <Text style={styles.text}>Profile screen</Text>
      <Button title="signOut" onPress={signOut} style={styles.logOutBtn} />
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
  logOutIcon: {
    position: "absolute",
    padding: 10,
    right: "3.5%",
    top: 181,
  },
  logOutBtn: {
    backgroundColor: "#FF6C00",
    marginTop: 27,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF6C00",
    marginHorizontal: 16,
  },
});
export default ProfileScreen;
