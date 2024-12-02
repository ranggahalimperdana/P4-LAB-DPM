import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScoreBoard = ({ teamAScore, teamBScore, onScoreA, onScoreB, onReset, disableAddA, disableAddB }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => onScoreA(1)} 
          disabled={disableAddA}
        >
          <Text style={styles.buttonText}>+</Text>
          <Text style={styles.labelText}>Tim A</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => onScoreB(1)} 
          disabled={disableAddB}
        >
          <Text style={styles.buttonText}>+</Text>
          <Text style={styles.labelText}>Tim B</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => onScoreA(-1)}>
          <Text style={styles.buttonText}>-</Text>
          <Text style={styles.labelText}>Tim A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => onScoreB(-1)}>
          <Text style={styles.buttonText}>-</Text>
          <Text style={styles.labelText}>Tim B</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.resetButton]} onPress={onReset}>
        <Text style={styles.buttonText}>RESET SKOR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 10,
    margin: 5,
    elevation: 3,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center', // Center the text
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 24, // Larger font size for better visibility
    textAlign: 'center',
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 14, // Smaller font size for labels
    textAlign: 'center',
  },
  resetButton: {
    backgroundColor: '#f44336',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default ScoreBoard;
