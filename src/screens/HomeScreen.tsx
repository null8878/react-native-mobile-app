import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Text, FAB, ActivityIndicator, Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store';
import type { RootState, AppDispatch } from '../store';

export default function HomeScreen({ navigation }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector((state: RootState) => state.items);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const filteredItems = items.filter((item: any) =>
    item.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search items"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={styles.search}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={filteredItems}
        keyExtractor={(item: any) => item.id?.toString()}
        renderItem={({ item }) => (
          <Card
            style={styles.card}
            onPress={() => navigation.navigate('Details', { item })}
          >
            <Card.Title title={item.name} subtitle={item.category} />
            <Card.Content>
              <Text variant="bodyMedium">{item.description}</Text>
              <Text variant="titleMedium" style={styles.price}>
                ${item.price}
              </Text>
            </Card.Content>
          </Card>
        )}
      />
      <FAB icon="plus" style={styles.fab} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  search: { marginBottom: 16 },
  card: { marginBottom: 12 },
  price: { marginTop: 8, fontWeight: 'bold', color: '#6750A4' },
  error: { color: 'red', marginBottom: 8 },
  fab: { position: 'absolute', right: 16, bottom: 16, backgroundColor: '#6750A4' },
});
