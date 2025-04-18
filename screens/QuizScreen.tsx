import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/StackNavigator';

// gelen route tipini tanımlıyoruz
type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

const QuizScreen = () => {
  const route = useRoute<QuizScreenRouteProp>();
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seçilen Kategori: {category}</Text>
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d81b60',
  },
});
