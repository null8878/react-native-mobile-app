import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button, Divider } from 'react-native-paper';

export default function DetailsScreen({ route, navigation }: any) {
  const { item } = route.params || {};

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: item?.image || 'https://via.placeholder.com/400' }} />
        <Card.Content>
          <Text variant="headlineMedium" style={styles.title}>{item?.name}</Text>
          <Text variant="bodyLarge" style={styles.price}>${item?.price}</Text>
          <Divider style={styles.divider} />
          <Text variant="bodyMedium">{item?.description}</Text>
        </Card.Content>
      </Card>

      <View style={styles.actions}>
        <Button mode="contained" onPress={() => {}} style={styles.button}>
          Add to Cart
        </Button>
        <Button mode="outlined" onPress={() => navigation.goBack()} style={styles.button}>
          Go Back
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { marginBottom: 16 },
  title: { marginTop: 12, fontWeight: 'bold' },
  price: { marginTop: 8, color: '#6750A4', fontWeight: 'bold' },
  divider: { marginVertical: 12 },
  actions: { gap: 12 },
  button: { paddingVertical: 4 },
});
