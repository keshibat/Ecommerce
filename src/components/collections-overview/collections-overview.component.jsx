import React from 'react';
import { connect } from 'react-redux';
import { createStrcuturedSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollections } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverView = ({ collections }) => (
  <div className='collecitons-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
const mapStateToProps = createStrcuturedSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverView);
