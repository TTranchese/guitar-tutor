import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LEVELS, Level } from '../data/levels';

const STORAGE_KEY = 'maxLevelReached';

export default function ExerciseScreen() {
    const [currentLevelIndex, setCurrentLevelIndex] = useState( 0 );
    const [isCorrect, setIsCorrect] = useState<boolean | null>( null );

    const currentLevel = LEVELS[currentLevelIndex];

    // Simulazione: per ora l'utente preme "Ho suonato corretto" manualmente
    // (poi sostituiremo con la pitch detection)
    const handleConfirmCorrect = () => {
        setIsCorrect( true );
    };

    const handleNextLevel = () => {
        if ( currentLevelIndex < LEVELS.length - 1 ) {
            const nextIndex = currentLevelIndex + 1;
            setCurrentLevelIndex( nextIndex );
            setIsCorrect( null );
        }
    };

    if ( !currentLevel ) {
        return (
            <View style={styles.container}>
                <Text>Completato!</Text>
                <Button title="Ricomincia" onPress={() => {
                    setCurrentLevelIndex( 0 );
                    setIsCorrect( null );
                }} />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chitarra Tutor</Text>

            <View style={styles.card}>
                <Text style={styles.label}>{currentLevel.label}</Text>
                <Text style={styles.target}>
                    Nota da suonare: {currentLevel.targetNote}{currentLevel.targetOctave}
                </Text>
            </View>

            {isCorrect === true ? (
                <View style={styles.feedbackCorrect}>
                    <Text style={styles.feedbackText}>Corretto! 🎉</Text>
                    <Button title="Prossimo" onPress={handleNextLevel} />
                </View>
            ) : (
                <View>
                    <Button title="Ho suonato la nota corretta" onPress={handleConfirmCorrect} />
                    {isCorrect === false && (
                        <Text style={styles.feedbackWrong}>Riprova</Text>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    card: {
        marginBottom: 32,
    },
    label: {
        fontSize: 18,
        marginBottom: 8,
    },
    target: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    feedbackCorrect: {
        alignItems: 'center',
    },
    feedbackText: {
        fontSize: 18,
        marginBottom: 16,
    },
    feedbackWrong: {
        marginTop: 12,
        color: 'red',
        textAlign: 'center',
    },
} );