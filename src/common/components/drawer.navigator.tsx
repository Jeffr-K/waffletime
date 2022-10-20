import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// https://velog.io/@minkyeong-ko/React-Native-Drawer%EC%99%80-Stack-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name={} component={} options={} />
    </Drawer.Navigator>
  )
}
