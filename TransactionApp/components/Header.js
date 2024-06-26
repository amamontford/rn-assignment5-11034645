import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import themeContext from './theme/themeContext';

const Header = () => {
  const theme = useContext(themeContext);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileTextContainer}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={[styles.welcomeText, { color: theme.color }]}>Welcome back,</Text>
          <Text style={[styles.userName, { color: theme.color }]}>Eric Atsu</Text>
        </View>
      </View>
      <View style={[styles.searchButton, { backgroundColor: theme.buttonBackground }]}>
        <Image source={require('../assets/search.png')} style={[styles.searchIcon, { tintColor: theme.color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  profileTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  welcomeText: {
    fontSize: 18,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 29,
    width: 42,
    height: 42,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  profileImage: {
    width: 53,
    height: 53,
    borderRadius: 20,
  },
});

export default Header;
