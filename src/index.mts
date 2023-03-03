import * as cbor from '@ipld/dag-cbor';

// a map of all support codecs.This map is used to select the appropriate codec
// when generating a CID to compare against a provided CID
const codecs = {
  [cbor.code]: cbor
};
