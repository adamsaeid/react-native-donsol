import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { setDeck } from '../store';

const Game = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDeck(['card1', 'card2', 'card3']));
  }, []);

  const deck = useSelector((state) => state.deck);

  return (
    <View>
      {
        deck.map((card, index) => 
          <Text key={index}>{card}</Text>
        )
      }
    </View>
  );
}

export default Game;
