import React, { useState, useRef, useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import BottomSheet from '@gorhom/bottom-sheet';

import HintBottomSheet from '../components/HintBottomSheet';
import OptionItem from '../components/OptionItem';
import questions, { Question } from '../data/questions';

// Define route type for this screen
type QuizScreenRouteProp = RouteProp<RootStackParamList, 'Quiz'>;

const QuizScreen = () => {
  // Access route parameters and navigation
  const route = useRoute<QuizScreenRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { category } = route.params;

  // Get questions for the selected category
  const quizQuestions = questions[category];

  // States for current question, selected option and score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);

  // Current question object
  const currentQuestion: Question = quizQuestions[currentQuestionIndex];

  // When user selects an option
  const handleOptionPress = (index: number) => {
    // Prevent changing answer after selection
    if (selectedOptionIndex !== null) return;

    setSelectedOptionIndex(index);

    const isCorrect = index === currentQuestion.answerIndex;
    // Update score if correct
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Move to next question or show result
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOptionIndex(null);
      } else {
        // Navigate to Result screen with final score
        navigation.navigate('Result', {
          score: score + (isCorrect ? 1 : 0),
          total: quizQuestions.length,
        });
      }
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Show question count like 2/15 */}
      <Text style={styles.counter}>
        {currentQuestionIndex + 1} / {quizQuestions.length}
      </Text>

      {/* Display current question text */}
      <Text style={styles.question}>{currentQuestion.question}</Text>

      {/* Render all options */}
      {currentQuestion.options.map((option, index) => (
        <OptionItem
          key={index}
          text={option}
          index={index}
          isSelected={index === selectedOptionIndex}
          isCorrect={index === currentQuestion.answerIndex}
          isAnswered={selectedOptionIndex !== null}
          onPress={handleOptionPress}
        />
      ))}

      {/* Show Hint Button with BottomSheet */}
      <HintBottomSheet hint={currentQuestion.hint} />

    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0f5',
    padding: 16,
    justifyContent: 'center',
  },
  counter: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
    textAlign: 'right',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#d81b60',
    textAlign: 'center',
  },
  hintButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#d81b60',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    elevation: 4,
  },
  hintText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomSheetContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },

});
