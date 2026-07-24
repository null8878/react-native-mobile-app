import React from 'react';
import { View, StyleSheet } from 'react-native';
import { List, Switch, Divider } from 'react-native-paper';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [notifications, setNotifications] = React.useState(true);
  const [biometrics, setBiometrics] = React.useState(false);

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Appearance</List.Subheader>
        <List.Item
          title="Dark Mode"
          right={() => <Switch value={darkMode} onValueChange={setDarkMode} />}
        />
        <Divider />
      </List.Section>

      <List.Section>
        <List.Subheader>Notifications</List.Subheader>
        <List.Item
          title="Push Notifications"
          right={() => <Switch value={notifications} onValueChange={setNotifications} />}
        />
        <Divider />
      </List.Section>

      <List.Section>
        <List.Subheader>Security</List.Subheader>
        <List.Item
          title="Biometric Authentication"
          right={() => <Switch value={biometrics} onValueChange={setBiometrics} />}
        />
        <Divider />
        <List.Item title="Change Password" left={props => <List.Icon {...props} icon="lock" />} />
        <Divider />
        <List.Item title="Two-Factor Auth" left={props => <List.Icon {...props} icon="shield-lock" />} />
      </List.Section>

      <List.Section>
        <List.Subheader>About</List.Subheader>
        <List.Item title="Version" description="1.0.0" />
        <Divider />
        <List.Item title="Terms of Service" left={props => <List.Icon {...props} icon="file-document" />} />
        <Divider />
        <List.Item title="Privacy Policy" left={props => <List.Icon {...props} icon="shield" />} />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
