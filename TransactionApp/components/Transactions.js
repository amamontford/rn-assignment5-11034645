import React, { useContext } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import themeContext from './theme/themeContext';

const transactions = [
  { id: '1', title: 'Apple Store', category: 'Entertainment', amount: '- $5.99', icon: require('../assets/apple.png') },
  { id: '2', title: 'Spotify', category: 'Music', amount: '- $12.99', icon: require('../assets/spotify.png') },
  { id: '3', title: 'Money Transfer', category: 'Transaction', amount: '$300', icon: require('../assets/moneyTransfer.png') },
  { id: '4', title: 'Grocery', category: 'Grocery', amount: '- $88', icon: require('../assets/grocery.png') },
];

const TransactionItem = ({ title, category, amount, icon }) => {
  const theme = useContext(themeContext);

  const getTintColor = (icon) => {
    if (icon === require('../assets/spotify.png') || icon === require('../assets/grocery.png')) {
      return null; // Keep the original color for Spotify and Grocery icons
    }
    return theme.color; // Apply tint color for other icons
  };

  return (
    <View style={[styles.transactionItem, { backgroundColor: theme.backgroundColor }]}>
      <View style={[styles.iconContainer, { backgroundColor: theme.buttonBackground }]}>
        <Image source={icon} style={[styles.transactionIcon, { tintColor: getTintColor(icon) }]} />
      </View>
      <View style={styles.transactionDetails}>
        <Text style={[styles.transactionTitle, { color: theme.color }]}>{title}</Text>
        <Text style={[styles.transactionCategory, { color: theme.color }]}>{category}</Text>
      </View>
      <Text style={[styles.transactionAmount, { color: theme.color }]}>{amount}</Text>
    </View>
  );
};

const Transactions = () => {
  const theme = useContext(themeContext);

  return (
    <View style={[styles.transactionsContainer, { backgroundColor: theme.backgroundColor }]}>
      <View style={styles.transactionsHeader}>
        <Text style={[styles.transactionsTitle, { color: theme.color }]}>Transaction</Text>
        <Text style={[styles.sellAll, { color: theme.color }]}>Sell All</Text>
      </View>
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem {...item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsContainer: {
    flex: 1,
  },
  transactionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sellAll: {
    fontSize: 14,
    color: '#356899',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  iconContainer: {
    backgroundColor: '#F2F2F3', // Light background color
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  transactionIcon: {
    width: 24, 
    height: 24, 
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
  },
  transactionCategory: {
    fontSize: 14,
    color: '#777',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Transactions;
