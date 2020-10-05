import infoTemplate from './utils/infoTemplate.js';
import mapStyle from './utils/mapStyle.js';

const $map = document.querySelector("#map");

const ICON_MARKER = './assets/image/icon.svg';

const map = new window.google.maps.Map($map, {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 3,
  styles: mapStyle
});

const getData = async () => {
  const res = await fetch(
    "https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest"
  );
  const data = await res.json();
  return data;
};

const info = new window.google.maps.InfoWindow();

const dataLog = async () => {
  const data = await getData();

  data.forEach((item) => {
    if (item.confirmed > 0) {
      const marker = new window.google.maps.Marker({
        position: {
          lat: item.location.lat,
          lng: item.location.lng,
        },
        map,
        icon: ICON_MARKER
      });

      marker.addListener("click", () => {
        info.setContent(infoTemplate(item))
        info.open(map, marker);
      });
    }
  });
};

dataLog();
