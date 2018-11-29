import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { actBookMarkJob } from '../../actions/JobActions';
import {
  INPUT_BORDER_COLOR,
  COLOR_BG,
} from '../../constant/ColorCode';

class JobList extends Component {
  handleBookmarkPress(jobId) {
    this.props.actBookMarkJob(jobId, this.props.wishList);
  }

  renderJobStatus(job) {
    return (
      <View style={{ paddingLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name='ios-timer' size={20} />
          <Text>{job.created_at}</Text>
      </View>
    );
  }

  renderCompanyLogo(logoURL) {
    console.log(logoURL);
    if (logoURL === null) {
      return <FontAwesome name={'image'} size={60} />;
    }

    return (
      <Image 
        style={{ flex: 1, width: 100, resizeMode: 'contain'}}
        source={{ uri: logoURL }}
      />
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
            {this.renderCompanyLogo(job.company_logo)}
          </View>

          {/* Touch the Job */}
          <TouchableWithoutFeedback
            //onPress={() => this.setState({ modalVisible: true })}
            onPress={() => this.props.navigation.navigate('JobDetailScreen', { jobId: job.id, jobName: job.jobSlot })}
          >
            <View style={jobDetailStyle}>
              <Text style={jobTitleStyle}>
                {job.title}
              </Text>
              <Text>{job.company}</Text>
              <Text>{job.company_url}</Text>
            </View>
          </TouchableWithoutFeedback>

          {/* Touch the Bookmark */}
          <TouchableWithoutFeedback
            onPress={() => this.handleBookmarkPress(job.id)}
          >
            <View style={bookmarkStyle}>
              <FontAwesome
                name={this.props.wishList.includes(job.id) ? 'bookmark' : 'bookmark-o'}
                size={30}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>

        {this.renderJobStatus(job)}
      </View>

    );
  }

  render() {
    // In case when async function fetch job has not yet finished
    if (!this.props.jobList.length) {
      return <View/>;
    }

    return (
      <View style={styles.containerStyle}>
        <FlatList
          data={this.props.jobList}
          renderItem={(job) => this.renderJobListItems(job.item)}
          keyExtractor={job => String(job.id)}
          extraData={this.props.wishList}
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
    flex: 1
  },

  bookmarkStyle: {
    paddingRight: 5,
    alignItems: 'center',
    flex: 1,
  }
});

const mapStateToProps = (state) => {
  return {
    jobList: state.reducerJob.jobList,
    wishList: state.reducerJob.wishList
  };
}

export default connect(mapStateToProps, { actBookMarkJob })(JobList);
