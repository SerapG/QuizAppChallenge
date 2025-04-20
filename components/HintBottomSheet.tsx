import React, { useRef, useMemo, useState, useEffect } from 'react';
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import BottomSheet, {
    BottomSheetView,
} from '@gorhom/bottom-sheet';

type Props = {
    hint: string;
};

const HintBottomSheet = ({ hint }: Props) => {
    // Ref to control the BottomSheet programmatically
    const bottomSheetRef = useRef<BottomSheet>(null);

    // Snap point determines how much of the screen BottomSheet will cover
    const snapPoints = useMemo(() => ['50%'], []);

    // Track whether the BottomSheet is currently open or closed
    const [isOpen, setIsOpen] = useState(false);

    // Updates isOpen state based on BottomSheet index
    const handleSheetChanges = (index: number) => {
        setIsOpen(index !== -1);
    };

    // Toggle BottomSheet open or closed
    const toggleSheet = () => {
        if (isOpen) {
            bottomSheetRef.current?.close();
        } else {
            bottomSheetRef.current?.expand();
        }
    };

    return (
        <>
            {/* Hint button shown in bottom-right corner */}
            <TouchableOpacity
                style={styles.hintButton}
                onPress={toggleSheet}
            >
                <Text style={styles.hintText}>İpucu</Text>
            </TouchableOpacity>

            {/* BottomSheet for displaying hint text */}
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                enablePanDownToClose
                backgroundStyle={styles.sheetBackground}
                handleIndicatorStyle={styles.handleIndicator}
            >
                {/* Content of the BottomSheet */}
                <BottomSheetView style={styles.sheetContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        <Text style={styles.hintContent}>{hint}</Text>
                    </ScrollView>
                </BottomSheetView>
            </BottomSheet>
        </>
    );
};

export default HintBottomSheet;

const styles = StyleSheet.create({
    hintButton: {
        position: 'absolute',
        bottom: 30,
        right: 20,
        backgroundColor: '#d81b60',
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 20,
        elevation: 4,
        zIndex: 10,
    },
    hintText: {
        color: 'white',
        fontWeight: 'bold',
    },
    sheetBackground: {
        backgroundColor: 'white',
    },
    handleIndicator: {
        backgroundColor: '#ccc',
    },
    sheetContainer: {
        flex: 1,
        padding: 20,
    },
    scrollContainer: {
        paddingBottom: 40,
    },
    hintContent: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
    },
});