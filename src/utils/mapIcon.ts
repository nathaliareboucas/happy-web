import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [42, 52],
  iconAnchor: [21, 52],
  popupAnchor: [165, 7]
});

export default mapIcon;