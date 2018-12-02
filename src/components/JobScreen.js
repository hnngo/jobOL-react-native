import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modalbox';
import JobList from './jobScreenStack/JobList';
import { FontAwesome } from '@expo/vector-icons';
import { InputLoginForm } from './common/InputLoginForm'
import {
  actFetchJobList,
  actJobInputKeyword,
  actJobInputLocation
} from '../actions';
import { COLOR_MAIN } from '../constant/ColorCode';

class JobScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      // <Button
      //   title="Search"
      //   backgroundColor="rgba(0, 0, 0, 0)"
      //   color="rgba(0, 122, 255, 1)"
      //   onPress={() => navigation.navigate('setting')}
      // />
      <TouchableWithoutFeedback
        onPress={() => {}}
      >
        <FontAwesome name="search" size={24} />
      </TouchableWithoutFeedback>
    )
  })

  state = { isOpen: false,
    swipeToClose: true,
    sliderValue: 0.3 };

  handleChangeJobKeyword(inputKeyword) {
    this.props.actJobInputKeyword(inputKeyword);
  }

  handleChangeLocation(inputLocation) {
    this.props.actJobInputLocation(inputLocation);
  }

  componentWillMount() {
    this.props.actFetchJobList();
  }

  render() {
    return (
      <View>
        <Button
          title="Search For Job"
          backgroundColor={COLOR_MAIN}
          onPress={() => this.refs.modal4.open()}
        />
        <JobList {...this.props} />
        
        {/* Modal Components */}
        <Modal
          isOpen={this.state.isOpen}
          style={styles.modalStyle}
          position="center"
          ref="modal4"
          isDisabled={false}
          swipeToClose={true}
        >
          <InputLoginForm
            placeholder='javascript, pytho, back-end'
            onChangeText={(text) => this.handleChangeJobKeyword(text)}
            value={this.props.keyword}
            returnKeyType='done'
          />
          <InputLoginForm
            placeholder='US, NY, Alberta, LA'
            onChangeText={(text) => this.handleChangeLocation(text)}
            value={this.props.location}
            returnKeyType='done'
          />
          <Button
            icon={{ name: 'search', type: 'font-awesome' }}
            title="Search"
            onPress={() => {
              this.props.actFetchJobList(this.props.keyword, this.props.location);
              this.refs.modal4.close();
            }}
          />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 260,
    width: 260,
    backgroundColor: '#fff',
    borderRadius: 20,
  },

  text: {

  }
})

const mapStateToProps = ({ reducerJob }) => {
  return {
    keyword: reducerJob.inputKeyword,
    location: reducerJob.inputLocation,
  }
}

export default connect(mapStateToProps, {
  actFetchJobList,
  actJobInputKeyword,
  actJobInputLocation
})(JobScreen);


// Job feeds
// Sample Job in java python
// Sample Job near you