import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SQLiteProvider, useSQLiteContext, } from 'expo-sqlite';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './secreens/AllPlaces';
import AddPlace from './secreens/AddPlace';
import * as SQLite from 'expo-sqlite';
import IconButton from './comps/IconButton';
// import AppLoading from 'expo-app-loading';
import { useEffect,useState } from 'react';
import Nzw from './secreens/Nzw';
import { init } from './comps/DataBase'; 

const Stack =createNativeStackNavigator();

export default function App() {
  return (
      <>
          <SQLiteProvider databaseName="test4.db" onInit={init}>
              <StatusBar style="auto" />
              <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: '#1aacf0' },
                        headerTintColor: '#221c30',
                        contentStyle: { backgroundColor: '#221c30' },
                    }}
                >
                  <Stack.Screen
                      name="AllPlaces"
                      component={AllPlaces}
                      options={({ navigation }) => ({
                          title: 'All Places',
                          headerRight: ({ tincolor }) => (
                              <IconButton
                                  icon="add"
                                  color={tincolor}
                                  onPress={() => {
                                      navigation.navigate('Nzw');
                                  }}
                                  size={24}
                              />
                          ),
                      })}
                  />
                  <Stack.Screen name="Nzw" component={Nzw} />
                  </Stack.Navigator>
              </NavigationContainer>
          </SQLiteProvider>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
});




















 // useEffect(() => {
  //   init().then(() => {
  //     setDbInitialized(true);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

  // if (!dbInitialized) {
  //   return <AppLoading />;
  // }