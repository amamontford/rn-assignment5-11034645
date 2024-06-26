import React, { useState, useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import MyCards from './components/MyCards';
import Statistics from './components/Statistics';
import Settings from './components/Settings';
import { enableScreens } from 'react-native-screens';
import { EventRegister } from 'react-native-event-listeners';
import theme from './components/theme/theme';
import themeContext from './components/theme/themeContext';
import { Image } from 'react-native';

enableScreens();

const Tab = createBottomTabNavigator();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
      setDarkMode(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, []);

  const currentTheme = darkMode ? theme.dark : theme.light;

  return (
    <themeContext.Provider value={currentTheme}>
      <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size, focused }) => {
              let iconName;
              switch (route.name) {
                case 'Home':
                  iconName = require('./assets/home.png');
                  break;
                case 'My Cards':
                  iconName = require('./assets/myCards.png');
                  break;
                case 'Statistics':
                  iconName = require('./assets/statistics.png');
                  break;
                case 'Settings':
                  iconName = require('./assets/settings.png');
                  break;
                default:
                  iconName = require('./assets/home.png');
              }
              return <Image source={iconName} style={{ width: size, height: size, tintColor: focused ? 'blue' : color }} />;
            },
            tabBarStyle: {
              backgroundColor: currentTheme.tabBarBackground,
            },
            tabBarActiveTintColor: 'blue',  
            tabBarInactiveTintColor: currentTheme.tabBarInactiveTintColor,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="My Cards" component={MyCards} />
          <Tab.Screen name="Statistics" component={Statistics} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
};

export default App;
