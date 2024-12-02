import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import TeamInfo from '../components/TeamInfo';
import ScoreBoard from '../components/ScoreBoard';

const HomeScreen = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [teamAName, setTeamAName] = useState('Tim A');
  const [teamBName, setTeamBName] = useState('Tim B');

  const handleScoreA = (value) => {
    setTeamAScore(prevScore => Math.max(prevScore + value, 0));
    checkWinner();
  };

  const handleScoreB = (value) => {
    setTeamBScore(prevScore => Math.max(prevScore + value, 0));
    checkWinner();
  };

  const checkWinner = () => {
    if (teamAScore >= 10) {
      Alert.alert(`${teamAName} menang!`);
      resetScores();
    } else if (teamBScore >= 10) {
      Alert.alert(`${teamBName} menang!`);
      resetScores();
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  const isTeamAAtMax = teamAScore >= 10;
  const isTeamBAtMax = teamBScore >= 10;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TeamInfo teamA={teamAName} teamB={teamBName} />
        <Text style={styles.score}>{teamAScore} - {teamBScore}</Text>
      </View>
      <ScoreBoard
        teamAScore={teamAScore}
        teamBScore={teamBScore}
        onScoreA={handleScoreA}
        onScoreB={handleScoreB}
        onReset={resetScores}
        disableAddA={isTeamAAtMax}
        disableAddB={isTeamBAtMax}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
