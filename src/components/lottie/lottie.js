import React from "react";
import LottieView from "lottie-react-native";

export default function Lottie() {
  return (
    <LottieView
      source={require("./taskLottie.json")}
      style={{width: 400, height: 500}}
      autoPlay
      loop
    />
  );
}