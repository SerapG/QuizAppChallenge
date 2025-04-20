import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Props type for the OptionItem component
type Props = {
    text: string; // Option label text
    index: number; // Index of the option (used for selection)
    isSelected: boolean; // Whether this option is currently selected
    isCorrect: boolean; // Whether this option is the correct answer
    isAnswered: boolean; // Whether any option has already been selected
    onPress: (index: number) => void; // Callback when an option is pressed
};

// Functional component for a single quiz option
const OptionItem = ({ text, index, isSelected, isCorrect, isAnswered, onPress }: Props) => {
    let backgroundColor = '#f06292';

    // Update background color based on selection and correctness
    if (isAnswered) {
        if (isSelected && isCorrect) backgroundColor = 'green'; // Correct selection
        else if (isSelected && !isCorrect) backgroundColor = 'red'; // Incorrect selection
    }

    return (
        <TouchableOpacity
            style={[styles.option, { backgroundColor }]}
            onPress={() => onPress(index)}
            disabled={isAnswered} // Disable button after selection
        >
            <Text style={styles.optionText}>{text}</Text>
        </TouchableOpacity>
    );
};

export default OptionItem;

const styles = StyleSheet.create({
    option: {
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        alignItems: 'center',
    },
    optionText: {
        color: '#fff',
        fontSize: 16,
    },
});
