import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return (
      <View>
        {this.props.libraries.map(library =>
        <Text>{library.title}</Text>
      )}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
};
export default connect(mapStateToProps)(LibraryList);
