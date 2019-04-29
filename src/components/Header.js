import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const logo = require('./images/logo.png');

class Header extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#fff'
    },
    headerLeft: (
      <TouchableOpacity>
        <Image
          style={{height: 22, width: 98, color: '#fff', marginLeft: 25}}
          source={logo} />
      </TouchableOpacity>
    ),
    headerRight: (
      <View style={{ flexDirection: 'row', marginRight: 20 }}>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='cast-connected' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='videocam' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='search' size={25} color={'#555'} />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 5}}>
          <Icon name='account-circle' size={25} color={'#555'}/>
        </TouchableOpacity>
      </View>
    )
  }
}
export default Header;
