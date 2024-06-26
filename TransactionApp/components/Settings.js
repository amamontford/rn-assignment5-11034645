import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { EventRegister } from 'react-native-event-listeners';
import themeContext from './theme/themeContext';

const Settings = () => {
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.item}>
        <Text style={[styles.itemText, { color: theme.color }]}>Language</Text>
        <Ionicons name="chevron-forward" size={20} color={theme.color} />
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, { color: theme.color }]}>My Profile</Text>
        <Ionicons name="chevron-forward" size={20} color={theme.color} />
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, { color: theme.color }]}>Contact Us</Text>
        <Ionicons name="chevron-forward" size={20} color={theme.color} />
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, { color: theme.color }]}>Change Password</Text>
        <Ionicons name="chevron-forward" size={20} color={theme.color} />
      </View>
      <View style={styles.item}>
        <Text style={[styles.itemText, { color: theme.color }]}>Privacy Policy</Text>
        <Ionicons name="chevron-forward" size={20} color={theme.color} />
      </View>
      <View style={styles.themeContainer}>
        <Text style={[styles.themeText, { color: theme.color }]}>Theme</Text>
        <Switch
          value={darkMode}
          onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit('ChangeTheme', value);
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  itemText: {
    fontSize: 16,
  },
  themeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  themeText: {
    fontSize: 16,
  },
});

export default Settings;
