import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchBand } from '../../actions';
import NotFound from '../../components/NotFound';
import Loading from '../../components/Loading';

class BandDetail extends Component {
  /**
   *	Props implementation.
   */
  static propTypes = {
    fetchBand: PropTypes.func,
    band: PropTypes.object,
    code: PropTypes.number,
    match: PropTypes.object
  };

  componentDidMount() {
    this.props.fetchBand(this.props.match.params.id);
  }

  render() {
    if (this.props.code === 404) {
      return NotFound;
    }

    if (!this.props.band) {
      return Loading;
    }

    //console.log('render', this.props);
    return (
      <div>
        <h1>{this.props.band.name}</h1>
      </div>
    );
  }
}

function mapStateToProps({ bands }, ourProps) {
  //console.log('mapStateToProps', bands);
  return {
    code: bands.code,
    band: bands.list[ourProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { fetchBand }
)(BandDetail);
