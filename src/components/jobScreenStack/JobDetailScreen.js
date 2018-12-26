import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Linking
} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { COLOR_MAIN } from '../../constant/ColorCode';

class JobDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('jobName', '')
    }
  }

  formatText(string) {
    if (string === null || string === undefined) {
      return string;
    }

    return (
      string.replace(/<\/?[a-z][a-z0-9]*>/g, '').replace(/<a/g, '')
    );
    
    // return (
    //   string.replace(/<p>/g, '').replace(/<\/p>/g, '')
    //         .replace(/<a>/g, '').replace(/<\/a>/g, '')
    //         .replace(/<b>/g, '').replace(/<\/b>/g, '')
    // );
  }


  render() {
    const jobDetail = this.props.navigation.getParam('jobDetail', 'NONE');
    console.log(jobDetail);
    
    return (
      <ScrollView style={styles.containerStyle}>
        <View style={{ height: 120, width: 180, alignSelf: 'center' }}>
          <Image 
            style={{ flex: 1, width: 180, resizeMode: 'contain'}}
            source={{ uri: jobDetail.company_logo }}
          />
        </View>

        <Text style={styles.jobTitleStyle}>{jobDetail.title}</Text>
        <Text style={styles.companyTitle}>{jobDetail.company}</Text>
        <Text style={styles.typeJob}>{jobDetail.location}</Text>
        <Text style={styles.typeJob}>({jobDetail.type})</Text>
        <Text>{this.formatText(jobDetail.description)}</Text>
        
        <Button
          borderRadius={6}
          title="Add To Wish List"
          backgroundColor={COLOR_MAIN}
          onPress={() => {}}
          style={{ paddingBottom: 20 }}
        />

        <Button
          borderRadius={6}
          title="Apply Now!!!"
          backgroundColor={COLOR_MAIN}
          onPress={() => Linking.openURL(jobDetail.url)}
        />
        
        <View style={{ height: 50 }}/>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#fff",
    padding: 20
  },

  jobTitleStyle: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },

  companyTitle: {
    alignSelf: 'center',
  },

  typeJob: {
    alignSelf: 'center',
    paddingBottom: 20,
    fontStyle: 'italic'
  }
})

const mapStateToProps = ({ reducerJob }) => {
  return {
    jobList: reducerJob.jobList,
    recJobBEndList: reducerJob.recJobBEndList,
    recJobFEndList: reducerJob.recJobFEndList
  }
}

export default connect(mapStateToProps)(JobDetailScreen);