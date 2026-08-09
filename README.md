## react-native-mobile-app

[![CI](https://github.com/null8878/react-native-mobile-app/actions/workflows/ci.yml/badge.svg)](https://github.com/null8878/react-native-mobile-app/actions)[![Security](https://github.com/null8878/react-native-mobile-app/actions/workflows/security.yml/badge.svg)](https://github.com/null8878/react-native-mobile-app/actions/workflows/security.yml)[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


# React Native Mobile App

Cross-platform mobile application with React Native, featuring offline support, push notifications, and native device integration.

## Features

- Cross-platform iOS and Android
- Offline-first with async storage
- Push notifications (FCM/APNs)
- Biometric authentication
- Camera and image picker
- Location services
- SQLite local database
- Deep linking
- Animated transitions

## Quick Start

```bash
# Install dependencies
npm install

# iOS
cd ios && pod install && cd ..
npx react-native run-ios

# Android
npx react-native run-android
```

## Tech Stack

- React Native 0.73
- React Navigation 6
- Redux Toolkit + RTK Query
- React Native Paper (UI)
- AsyncStorage + SQLite
- React Native Firebase

## License

MIT
