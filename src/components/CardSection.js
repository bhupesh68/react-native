import React from 'react';
import { View } from 'react-native';

const CardSection = props => (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    position: 'relative'
  }
};
export default CardSection;
