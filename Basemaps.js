import { _ } from './gettext';

export default [
  {
    attribution:
      " ",
    maxZoom: 21,
    minZoom: 0,
    label: _("ESRI Satellite"),
    url:
      "//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  },
  {
    attribution:
      ' ',
    maxZoom: 21,
    minZoom: 0,
    label: _("OSM Mapnik"),
    url: "//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

  },
  {
    attribution: "Map data: &copy; Google Maps",
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    maxZoom: 21,
    minZoom: 0,
    label: _("Google Maps Hybrid"),
    url: "//{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
  }
];
