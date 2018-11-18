import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { 
  View, 
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Modal,
  TouchableHighlight
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { actBookMarkJob } from '../../actions/JobActions';
import { 
  INPUT_BORDER_COLOR,
  COLOR_BG,
} from '../../constant/ColorCode';

class JobList extends Component {
  state = { modalVisible: false };

  handleBookmarkPress(jobId) {
    console.log(this.props.wishlist);
    this.props.actBookMarkJob(jobId, this.props.wishlist);
  }

  renderJobStatus(job) {
    return (
      <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='ios-timer' size={20} />
          <Text>{job.jobStatus}</Text>
      </View>
    );
  }

  renderJobListItems(job) {
    const { 
      logoCompanyStyle, 
      sectionStyle, 
      jobDetailStyle, 
      bookmarkStyle,
      mainInfoStyle,
      jobTitleStyle
    } = styles;

    return (
      <View style={sectionStyle}>
        <View style={mainInfoStyle}>
          <View styles={logoCompanyStyle}>
            <FontAwesome name={'image'} size={60} />
          </View>

          {/* Touch the Job */}
          <TouchableWithoutFeedback
            onPress={() => this.setState({ modalVisible: true })}
          >
            <View style={jobDetailStyle}>
              <Text style={jobTitleStyle}>
                {job.jobSlot}
              </Text>
              <Text>{job.cpnyName}</Text>
              <Text>{job.cpnyWebsite}</Text>
            </View>
          </TouchableWithoutFeedback>
          
          {/* Touch the Bookmark */}
          <TouchableWithoutFeedback
            onPress={() => this.handleBookmarkPress(job.id)}
          >
            <View style={bookmarkStyle}>
              <FontAwesome 
                name={this.props.wishlist.includes(job.id) ? 'bookmark' : 'bookmark-o'}
                size={30}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {this.renderJobStatus(job)}

        {/* Popup Modal */}
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setState({ modalVisible: false })
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>

    );
  }

  render() {
    const data = _.map(this.props.jobList, (job) => job);

    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={data}
          renderItem={(job) => this.renderJobListItems(job.item)}
          keyExtractor={job => String(job.id)}
          
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: COLOR_BG,
    paddingTop: 10,
    paddingBottom: 10,
  },

  sectionStyle: {
    padding: 5,
    borderBottomColor: INPUT_BORDER_COLOR,
    borderBottomWidth: 1,
  },

  mainInfoStyle: {
    flexDirection: 'row'
  },

  jobDetailStyle: {
    paddingLeft: 5,
    flex: 7,
  },

  jobTitleStyle: {
    fontSize: 20, 
    fontWeight: '600'
  },

  logoCompanyStyle: {
    flex: 1,
  },

  bookmarkStyle: {
    paddingRight: 5,
    alignItems: 'center',
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return { wishlist: state.reducerJob.wishlist };
}

export default connect(mapStateToProps, { actBookMarkJob })(JobList);
