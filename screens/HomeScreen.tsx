import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import Category from '../components/Category';

const categories = [
  { id: 'history', name: 'Tarih' },
  { id: 'general', name: 'Genel Kültür' },
  { id: 'movies', name: 'Filmler' },
  { id: 'music', name: 'Müzik' },
];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff0f5' }}>
      <FlatList
        data={categories}
        renderItem={({ item }) => <Category category={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
        }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
