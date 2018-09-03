import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import Router from "./src/router/";

export default class App extends Component {
  render() {
    return <Router />;
  }
}
