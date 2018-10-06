import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { fetchBands } from '../../actions';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';
import BandTeaser from '../../components/BandTeaser';

class BandList extends Component {
  /**
   *	Props implementation.
   */
  static propTypes = {
    fetchBands: PropTypes.func,
    bands: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchBands();
  }

  render() {
    if (!this.props.bands) {
      return Loading;
    }

    if (this.props.bands === 404) {
      return NotFound;
    }

    return (
      <div>
        {_.map(this.props.bands.list, elem => {
          return <BandTeaser band={elem} key={elem._id} />;
        })}
      </div>
    );
  }
}

function mapStateToProps({ bands }) {
  return {
    bands
  };
}

export default connect(
  mapStateToProps,
  { fetchBands }
)(BandList);
