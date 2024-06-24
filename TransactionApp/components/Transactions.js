import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', title: 'Apple Store', category: 'Entertainment', amount: '- $5.99', icon: require('../assets/apple.png') },
  { id: '2', title: 'Spotify', category: 'Music', amount: '- $12.99', icon: require('../assets/spotify.png') },
  { id: '3', title: 'Money Transfer', category: 'Transaction', amount: '$300', icon: require('../assets/moneyTransfer.png') },
  { id: '4', title: 'Grocery', category: 'Grocery', amount: '- $88', icon: require('../assets/grocery.png') },
];

const TransactionItem = ({ title, category, amount, icon }) => (
  <View style={styles.transactionItem}>
    <Image source={icon} style={styles.transactionIcon} />
    <View style={styles.transactionDetails}>
      <Text style={styles.transactionTitle}>{title}</Text>
      <Text style={styles.transactionCategory}>{category}</Text>
    </View>
    <Text style={styles.transactionAmount}>{amount}</Text>
  </View>
);

const Transactions = () => {
  return (
    <View style={styles.transactionsContainer}>
      <View style={styles.transactionsHeader}>
        <Text style={styles.transactionsTitle}>Transaction</Text>
        <Text style={styles.sellAll}>Sell All</Text>
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
  transactionIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
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
