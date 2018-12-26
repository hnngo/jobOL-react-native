import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
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
  constructor(props) {
    super(props);

    this.state = {
      keyword: null,
      isOpen: false,
      swipeToClose: true,
      sliderValue: 0.3
    };
  }

  handleChangeJobKeyword(inputKeyword) {
    this.props.actJobInputKeyword(inputKeyword);
  }

  handleChangeLocation(inputLocation) {
    this.props.actJobInputLocation(inputLocation);
  }

  componentWillMount() {
    this.props.actFetchJobList();
    this.props.actFetchJobList("Back End");
    this.props.actFetchJobList("Front End");
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#fff"}}>
        <Button
          title="Search For Job"
          backgroundColor={COLOR_MAIN}
          onPress={() => this.refs.modalJobSearch.open()}
        />
        <Text style={styles.textStyle}>Result for "{this.state.keyword || "Javascript"}" Job</Text>
        <JobList {...this.props} />
        <Text style={styles.textStyle}>Recommended Jobs For Back-End</Text>
        <JobList {...this.props} jobList={this.props.recJobBEndList} wishList={this.props.wishList} />
        <Text style={styles.textStyle}>Recommended Jobs For Front-End</Text>
        <JobList {...this.props} jobList={this.props.recJobFEndList} wishList={this.props.wishList} />

        {/* Modal Components */}
        <Modal
          isOpen={false}
          style={styles.modalStyle}
          position="center"
          ref="modalJobSearch"
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
              this.setState({ keyword: this.props.keyword });
              this.props.actFetchJobList(this.props.keyword, this.props.location);
              this.refs.modalJobSearch.close();
            }}
          />
        </Modal>
      </ScrollView>
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
  
  textStyle: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10,
  }
});

const mapStateToProps = ({ reducerJob }) => {
  return {
    jobList: reducerJob.jobList,
    wishList: reducerJob.wishList,
    keyword: reducerJob.inputKeyword,
    location: reducerJob.inputLocation,
    recJobBEndList: reducerJob.recJobBEndList,
    recJobFEndList: reducerJob.recJobFEndList,
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