import React, { useState, useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Platform,
  KeyboardAvoidingView,
  Pressable,
  Button,
} from "react-native";

const initialState = {
  username: "",
  email: "",
  password: "",
};

export const RegistrationScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  console.log(isShowKeyboard);

  const [type, setType] = useState(false);
  const handleClick = () => setType("text");

  const KeyboardHide = () => {
    setIsShowKeyboard(true);
    console.log(setIsShowKeyboard);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require("../../assets/imageBG.png")}
        style={styles.image}
      >
        <TouchableWithoutFeedback onPress={KeyboardHide}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <View
                onLayout={() => setIsShowKeyboard(true)}
                style={{
                  ...styles.inputForm,
                  marginBottom: isShowKeyboard ? 20 : 300,
                }}
              >
                <Text style={styles.title}>Регистрация</Text>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.input}
                    placeholder={"Логин"}
                    value={state.username}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        username: value,
                      }))
                    }
                    autoCapitalize={"none"}
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                </View>
                <View style={styles.inputWrap}>
                  <TextInput
                    style={styles.input}
                    placeholder={"Адрес электронной почты"}
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                    autoCapitalize={"none"}
                    onFocus={() => setIsShowKeyboard(true)}
                  />
                </View>

                <View style={styles.inputSection}>
                  <TextInput
                    // style={styles.input}
                    style={styles.inputPassword}
                    type={type}
                    placeholder={"Пароль"}
                    secureTextEntry={true}
                    //   {type ? false : true}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    onFocus={() => setIsShowKeyboard(true)}
                  />

                  <Pressable style={styles.show} onPress={handleClick}>
                    <Text style={styles.showText}>Показать</Text>
                  </Pressable>
                </View>
                <TouchableOpacity activeOpacity={0.6} style={styles.button}>
                  <Text style={styles.btnTitle}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8}>
                  <Text
                    style={styles.text}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Уже есть аккаунт? Войти
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    justifyContent: "flex-end",
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    //  justifyContent: "flex-end",
    marginHorizontal: 1,
    //  marginBottom: 100,
  },
  title: {
    marginTop: 32,
    marginBottom: 33,
    textAlign: "center",
    fontSize: 30,
    color: "#212121",
    fontFamily: "Roboto-Medium",
  },
  inputWrap: {
    marginHorizontal: 16,
  },

  input: {
    height: 50,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    color: "#212121",
    fontFamily: "Roboto-Regular",
  },
  text: {
    color: "#1B4371",
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    fontFamily: "Roboto-Regular",
  },
  button: {
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
  btnTitle: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto-Regular",

    //  textAlign: "center",
  },
  inputForm: {
    marginBottom: 45,
  },
  show: {
    position: "absolute",
    right: 116,
    transform: [{ translateX: 100 }],
  },
  inputSection: {
    marginHorizontal: 16,
    position: "relative",
    height: 50,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    color: "#212121",
    fontFamily: "Roboto-Regular",

    justifyContent: "center",
    alignItems: "baseline",
  },
  inputPassword: {
    //   position: "absolute",
  },
  showText: {
    color: "#1B4371",
  },
});
