// src/screens/ExerciseScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LEVELS, Level } from '../data/levels';

export default function ExerciseScreen() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
  const [feedback, setFeedback] = useState<string | null>(null);

  const currentLevel: Level | undefined = LEVELS[currentLevelIndex];

  const handleConfirmCorrect = () => {
    setFeedback('Correct! 🎉');
  };

  const handleNextLevel = () => {
    if (currentLevelIndex < LEVELS.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
      setFeedback(null);
    } else {
      setFeedback('All levels completed!');
    }
  };

  if (!currentLevel) {
    return (
      <View style={styles.container}>
        <Text>All levels completed!</Text>
        <Button
          title="Restart"
          onPress={() => {
            setCurrentLevelIndex(0);
            setFeedback(null);
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guitar Tutor</Text>

      <View style={styles.card}>
        <Text style={styles.label}>{currentLevel.label}</Text>
        <Text style={styles.target}>
          Target note: {currentLevel.targetNote}
          {currentLevel.targetOctave}
        </Text>
      </View>

      <View style={styles.section}>
        <Button title="I played the correct note" onPress={handleConfirmCorrect} />
        {feedback && <Text style={styles.feedback}>{feedback}</Text>}
      </View>

      <View style={styles.section}>
        <Button title="Next level" onPress={handleNextLevel} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  target: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  section: {
    marginTop: 16,
  },
  feedback: {
    marginTop: 8,
    fontSize: 16,
  },
});