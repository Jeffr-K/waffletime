import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import React from "react"
import { Button, Text, View } from "react-native"
import { RootStackParamList } from "../../../App";

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Profile">
type Props = { navigation: ProfileScreenNavigationProp; };

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  )
}
