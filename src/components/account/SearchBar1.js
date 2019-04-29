import React from 'react';
import { SearchBar } from 'react-native-elements';
import { TextInput } from 'react-native';
import Main from './Main';

export default class SearchBar1 extends React.Component {
  state = {
    term: '',
  };

  updateSearch = term => {
    this.setState({ term });
  };

  goBack() {
    const { navigation } = this.props;
    console.log('in searchbar');
    navigation.state.params.onTermSubmit(this.state.term);
    console.log('in searchbar2');
    navigation.goBack(this.state.term);
    //navigation.navigate('Main', { term: this.state.data });
    //navigation.state.params.onTermSubmit(this.state.term);
  }

  render() {
    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={this.state.term}
        platform='android'
        onSubmitEditing={() => this.goBack()}
      />
    );
  }
}
