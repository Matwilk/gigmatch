import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

BandTeaser.propTypes = {
  band: PropTypes.object
};

function BandTeaser(props) {
  const { band } = props;

  const link = '/band/' + band._id;
  return (
    <div>
      <Link to={link}>{band.name}</Link>
    </div>
  );
}

export default BandTeaser;
