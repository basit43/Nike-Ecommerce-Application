import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native'
import ProductDetailsScreen from './src/Screens/ProductDetailsScreen';
import ShoppingCart from './src/Screens/ShoppingCart';
import Navigation from './src/navigation';
import ProductScreen from './src/Screens/ProductScreen';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store} >
      <Navigation />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
