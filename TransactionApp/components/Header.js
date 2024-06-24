import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.profileTextContainer}>
        <Image source={require('../assets/profile.png')} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
      </View>
      <Image source={require('../assets/search.png')} style={styles.searchIcon} />
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
    marginLeft: 8, // Add some space between the profile image and text
  },
  welcomeText: {
    fontSize: 18,
    color: '#777',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  profileImage: {
    width: 53,
    height: 53,
    borderRadius: 20,
  },
});

export default Header;
