import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import featuredBanner from './featuredBanner'
import product from './product'
import services from './services'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([
    featuredBanner,
    product,
    services
  ]),
})
