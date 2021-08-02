/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  ImageBackground
} from 'react-native';

const HomeScreen = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/**The homescreen should contain three views */}

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>{/**first view */}
        <Pressable 
          title="Farms and Agro Products"
          onPress={() => navigation.navigate("FishFarming")} 
          style={{padding: 5}} 
        >
          <ImageBackground source={require('./src/img/fish_farming.jpg')} resizeMode="cover" style={{flex: 1,width: undefined, height:undefined, }}>
            <Text style={styles.text}>Fish Farming</Text>
          </ImageBackground>
        </Pressable>
      </View>
      {/**first view ends*/}

      {/**second view starts*/}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 9,}}>
        <Pressable 
          onPress={() => navigation.navigate("HoneyFarming")} 
          style={{padding: 5}} 
        >
          <ImageBackground source={require('./src/img/honey_farm.jpeg')} resizeMode="cover" style={{flex: 1,width: undefined, height:undefined, }}>
            <Text style={styles.text}>Honey Farms</Text>
          </ImageBackground>
        </Pressable>
      </View>
      {/**second view ends*/}
      
      {/**third view starts*/}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Pressable 
          title="Farms and Agro Products"
          onPress={() => navigation.navigate("FarmAgroProducts")}
          style={{padding: 5}} 
        >
          <ImageBackground source={require('./src/img/agro_products.jpg')} resizeMode="cover" style={{flex: 1,width: undefined, height:undefined, }}>
            <Text style={styles.text}>Farms and Agro Products</Text>
          </ImageBackground>
        </Pressable>
      </View>
      {/**third view ends*/}
      
      
    </SafeAreaView>
  );
};

const FarmAgroProducts = ({navigation}) => {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Back To Previous screen"
        onPress={() => navigation.goBack()}
      />
      
    </View>
  );
};

const HoneyFarming = ({navigation}) => {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      
      <Button
        title="Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Back To Previous screen"
        onPress={() => navigation.goBack()}
      />
      
    </View>
  );
};


const FishFarming = ({navigation}) => {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Fish Farming Products </Text>
      
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor: '#009387'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Easy Agro Market'
        }}/>
        <Stack.Screen name="FishFarming" component={FishFarming} options={{
          title: 'Fish Farming'
        }}/>
        <Stack.Screen name="HoneyFarming" component={HoneyFarming} options={{
          title: 'Honey Farm'
        }}/>
        <Stack.Screen name="FarmAgroProducts" component={FarmAgroProducts} options={{
          title: 'Farm and Agro Products'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};
const styles = StyleSheet.create({
 
  text: {
    color: "#dce0da",
    fontSize: 42,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    
  }
});

export default App;
