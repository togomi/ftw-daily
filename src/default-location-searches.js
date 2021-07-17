import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
const defaultLocations = [
  {
    id: 'default-toronto',
    predictionPlace: {
      address: "Toronto, Canada",
      // country: 'Canada',
      // district: "Toronto",
      bounds: new LatLngBounds(new LatLng(43.859812, -79.158795), new LatLng(43.574366, -79.605701)),
    },
  },
  {
    id: 'default-vancouver',
    predictionPlace: {
      address: "Vancouver, Canada",
      // country: 'Canada',
      // district: "Vancouver",
      bounds: new LatLngBounds(new LatLng(49.319296, -123.019192), new LatLng(49.199421, -123.219693)),
    },
  },
];
export default defaultLocations;
