import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomModal = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.header}>{props.header}</Text>
        <View style={styles.content}>
          <Text style={styles.contentText}>{props.content}</Text>
          <View style={styles.buttonsContainer}>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.onPressCancel;
                }}
              >
                <Text style={styles.btnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                onPress={() => {
                  props.onPressOkay;
                }}
              >
                <Text style={styles.btnText}>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    top: 0,
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",

    // backgroundColor: 'black',
  },
  boxContainer: {
    width: "80%",

    backgroundColor: "#fc6a4f",
    borderColor: "#fc6a4f",
    borderWidth: 1,
    borderRadius: 25,
  },
  header: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
  content: {
    backgroundColor: "white",
    width: "90%",

    alignSelf: "center",
    margin: 10,
    borderRadius: 20,
    padding: 10,
  },
  contentText: {
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    alignItems: "center",
  },
  btnContainer: {
    padding: 10,
    backgroundColor: "#1f4185",
    borderRadius: 20,
    elevation: 5,
    width: "35%",
    alignItems: "center",
  },
  btnText: {
    color: "white",
  },
});
