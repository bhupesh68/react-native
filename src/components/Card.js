import React from 'react';
import { View } from 'react-native';

const Card = props => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 2,
    borderBottomRadius: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
  }
};

export default Card;
