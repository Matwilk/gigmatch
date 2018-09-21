import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

GigTeaser.propTypes = {
  gig: PropTypes.object
};

function GigTeaser(props) {
  // if (!props || !props.gig) {
  //   return null;
  // }
  console.log('GigTeaser', props);
  const { gig } = props;

  const link = '/gig/' + gig._id;
  return (
    <div>
      <Link to={link}>{gig.title}</Link>
      <p>Location: {gig.location}</p>
      <p>Fee: {gig.fee}</p>
      <p>Description: {gig.description}</p>
      <p>Date: {gig.date}</p>
    </div>
  );
}

export default GigTeaser;
