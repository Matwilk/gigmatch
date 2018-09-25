import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchGigs } from '../../actions';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import GigTeaser from '../../components/GigTeaser';

class GigList extends Component {
  /**
   *	Props implementation.
   */
  static propTypes = {
    fetchGigs: PropTypes.func,
    gigs: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchGigs();
  }

  render() {
    if (!this.props.gigs) {
      return Loading;
    }

    if (this.props.gigs === 404) {
      return NotFound;
    }

    return (
      <div>
        {_.map(this.props.gigs.list, elem => {
          return <GigTeaser gig={elem} />;
        })}
      </div>
    );
  }
}

function mapStateToProps({ gigs }) {
  return {
    gigs
  };
}

export default connect(
  mapStateToProps,
  { fetchGigs }
)(GigList);
