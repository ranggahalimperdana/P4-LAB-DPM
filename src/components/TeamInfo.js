import React from 'react';
import { View, Text } from 'react-native';

const TeamInfo = ({ teamA, teamB }) => {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{teamA} vs {teamB}</Text>
    </View>
  );
};

export default TeamInfo;
