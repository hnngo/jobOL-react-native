import React, { Component } from 'react';
import { connect } from 'react-redux';
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
              "id" : 1,
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
              "id" : 2,
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
              "id" : 3,
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
              "id" : 4,
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
              "id" : 5,
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
              "id" : 6,
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
        <JobList jobList={DEBUG_JOB_LIST_DATA.publicData.jobs} {...this.props}/>
      );
    }
    //----DEBUG----//

    return (
      <JobList {...this.props} />
    );
  }
}

const mapStateToProps = (state) => {
  const jobList = state.reducerJob.jobList;
  return { jobList };
};

export default connect(mapStateToProps, { actFetchJobList })(JobScreen);


// Job feeds
// 