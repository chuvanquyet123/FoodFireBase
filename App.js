import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginNavigation from './NavigationFiles/LoginNavigation';
import Wellcome from './view/Wellcome';

export default function App() {
  return (
    
      <LoginNavigation/>
      // <Wellcome/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
