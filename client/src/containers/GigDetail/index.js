import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGig } from '../../actions';

class GigDetail extends Component {
  /**
   *	Props implementation.
   */
  static propTypes = {
    fetchGig: PropTypes.func,
    gig: PropTypes.object,
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchGig(this.props.match.params.id);
  }

  render() {
    console.log(this.props);

    if (!this.props.gig) {
      return null;
    }

    //console.log('render', this.props);
    return (
      <div>
        <h1>{this.props.gig.title}</h1>
        <p>Location: {this.props.gig.location}</p>
        <p>Fee: {this.props.gig.fee}</p>
        <p>Description: {this.props.gig.description}</p>
      </div>
    );
  }
}

function mapStateToProps({ gigs }, ourProps) {
  //console.log('mapStateToProps', gigs);
  return {
    gig: gigs[ourProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { fetchGig }
)(GigDetail);
