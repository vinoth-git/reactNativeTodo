import React from "react";
import CheckBox from "@react-native-community/checkbox";
import { FlatList, StyleSheet, Text, View, Button } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function ListItem({ value, setValue }) {
  //console.log(value);
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.contain}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <SvgComponent
            style={styles.svg}
          />
          <Text
            style={{
              color: "#000",
              fontSize: 24,
              textDecorationLine: item.isCompleted ? "line-through" : "none",
            }}
          >
            {item.text}
          </Text>
        </View>
        <View style={styles.Btns}>
          <CheckBox
            disabled={false}
            value={item.isCompleted}
            onValueChange={(newValue) => {
              let a = {
                id: item.id,
                text: item.text,
                isCompleted: !item.isCompleted,
              };
              value[index] = a;
              setValue([...value]);
            }}
          />
          <Button
            style={styles.btn}
            title="Delete"
            color={"#f55c47"}
            onPress={() => {
              let a = value.filter((c) => {
                return c !== item;
              });
              setValue(a);
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={value}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  contain: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 16,
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    backgroundColor: "#a5e1ad",
  },
  btn: {
    color: "white",
    padding: 8,
  },
  Btns: {
    display: "flex",
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
  },
  svg: {
    width: 18,
    height: 18,
    color: "black",
    marginRight: 10,
    marginTop: "auto",
    marginBottom: "auto",
  },
});

export function SvgComponent(props) {
  return (
    <Svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="sticky-note"
      className="prefix__svg-inline--fa prefix__fa-sticky-note prefix__fa-w-14"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      {...props}
    >
      <Path
        fill="currentColor"
        d="M448 348.106V80c0-26.51-21.49-48-48-48H48C21.49 32 0 53.49 0 80v351.988c0 26.51 21.49 48 48 48h268.118a48 48 0 0033.941-14.059l83.882-83.882A48 48 0 00448 348.106zm-128 80v-76.118h76.118L320 428.106zM400 80v223.988H296c-13.255 0-24 10.745-24 24v104H48V80h352z"
      />
    </Svg>
  );
}
