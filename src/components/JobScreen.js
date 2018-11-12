import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import JobList from './jobScreenStack/jobList';
import { actFetchJobList } from '../actions';

class JobScreen extends Component {
  componentWillMount() {
    this.props.actFetchJobList();
  }

  render() {
    //----DEBUG----//
    // Fake job list
    if (1) {
      const DEBUG_JOB_LIST_DATA = {
        "publicData" : {
          "jobs" : {
            "job_num_1" : {
              "cpnyContact" : {
                "linken" : "abcde",
                "mail" : "abcde",
                "phone" : "012345"
              },
              "cpnyLocation" : "Singapore",
              "cpnyLogo" : "www.google.com",
              "cpnyName" : "name#1",
              "cpnyWebsite" : "www.google.com",
              "jobJD" : "Loremis Pull",
              "jobSlot" : "Full Stack Web Developer",
              "jobStatus" : "Urgent"
            },
            "job_num_2" : {
              "cpnyContact" : {
                "linken" : "abcde",
                "mail" : "abcde",
                "phone" : "012345"
              },
              "cpnyLocation" : "Singapore",
              "cpnyLogo" : "www.google.com",
              "cpnyName" : "name#2",
              "cpnyWebsite" : "www.google.com",
              "jobJD" : "Loremis Pull",
              "jobSlot" : "Full Stack Web Developer",
              "jobStatus" : "Urgent"
            },
            "job_num_3" : {
              "cpnyContact" : {
                "linken" : "abcde",
                "mail" : "abcde",
                "phone" : "012345"
              },
              "cpnyLocation" : "Singapore",
              "cpnyLogo" : "www.google.com",
              "cpnyName" : "name#3",
              "cpnyWebsite" : "www.google.com",
              "jobJD" : "Loremis Pull",
              "jobSlot" : "Full Stack Web Developer",
              "jobStatus" : "Urgent"
            },
            "job_num_4" : {
              "cpnyContact" : {
                "linken" : "abcde",
                "mail" : "abcde",
                "phone" : "012345"
              },
              "cpnyLocation" : "Singapore",
              "cpnyLogo" : "www.google.com",
              "cpnyName" : "name#4",
              "cpnyWebsite" : "www.google.com",
              "jobJD" : "Loremis Pull",
              "jobSlot" : "Full Stack Web Developer",
              "jobStatus" : "Urgent"
            },
            "job_num_5" : {
              "cpnyContact" : {
                "linken" : "abcde",
                "mail" : "abcde",
                "phone" : "012345"
              },
              "cpnyLocation" : "Singapore",
              "cpnyLogo" : "www.google.com",
              "cpnyName" : "name#5",
              "cpnyWebsite" : "www.google.com",
              "jobJD" : "Loremis Pull",
              "jobSlot" : "Full Stack Web Developer",
              "jobStatus" : "Urgent"
            },
            "job_num_6" : {
              "cpnyContact" : {
                "linken" : "abcde",
                "mail" : "abcde",
                "phone" : "012345"
              },
              "cpnyLocation" : "Singapore",
              "cpnyLogo" : "www.google.com",
              "cpnyName" : "name#6",
              "cpnyWebsite" : "www.google.com",
              "jobJD" : "Loremis Pull",
              "jobSlot" : "Full Stack Web Developer",
              "jobStatus" : "Urgent"
            }
          }
        }
      };

      return (
        <JobList jobList={DEBUG_JOB_LIST_DATA.publicData.jobs} />
      );
    }
    //----DEBUG----//

    return (
      <JobList {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const jobList = state.reducerJob;
  return { jobList };
};

export default connect(mapStateToProps, { actFetchJobList })(JobScreen);


// Job feeds
// 