import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Avatar, List, Divider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

export default function ProfileScreen() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <Avatar.Text size={80} label={user?.username?.[0] || 'U'} style={styles.avatar} />
      <Text variant="headlineMedium" style={styles.name}>
        {user?.username || 'Guest User'}
      </Text>
      <Text variant="bodyLarge" style={styles.email}>
        {user?.email || 'Not logged in'}
      </Text>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text variant="headlineSmall">42</Text>
          <Text variant="bodySmall">Items</Text>
        </View>
        <View style={styles.stat}>
          <Text variant="headlineSmall">128</Text>
          <Text variant="bodySmall">Favorites</Text>
        </View>
        <View style={styles.stat}>
          <Text variant="headlineSmall">15</Text>
          <Text variant="bodySmall">Lists</Text>
        </View>
      </View>

      <List.Section>
        <List.Subheader>Account</List.Subheader>
        <List.Item title="Edit Profile" left={props => <List.Icon {...props} icon="account-edit" />} />
        <Divider />
        <List.Item title="Notifications" left={props => <List.Icon {...props} icon="bell" />} />
        <Divider />
        <List.Item title="Privacy" left={props => <List.Icon {...props} icon="shield" />} />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  avatar: { alignSelf: 'center', marginTop: 20, backgroundColor: '#6750A4' },
  name: { textAlign: 'center', marginTop: 12, fontWeight: 'bold' },
  email: { textAlign: 'center', color: 'gray', marginBottom: 20 },
  stats: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  stat: { alignItems: 'center' },
});
