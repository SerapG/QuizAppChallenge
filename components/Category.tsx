import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';

// Define the shape of a category item
type Category = {
  id: string;
  name: string;
}

// Define the props expected by the Category component
type Props = {
  category: Category;
};

// Define the navigation type for type-safe navigation
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// Category functional component
const Category = ({ category: { id, name } }: Props) => {

  // Initialize navigation with correct typing
  const navigation = useNavigation<NavigationProp>();

  const handlePressed = () => {
    // Navigate to the Quiz screen and pass the selected category id as a parameter
    navigation.navigate('Quiz', { category: id }); // kategoriyi parametre olarak gönderiyoruz
  };

  return (
    // Touchable card for the category
    <TouchableOpacity style={styles.card} onPress={handlePressed}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

export default Category


const styles = StyleSheet.create({
  card: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#f06292',
    margin: 8,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});