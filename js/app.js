var mapLeft = new mapboxgl.Map({
  container: 'before',
  style: styles[0].url,
  center: [-1.2471735, 50.8625412],
  zoom: 13,
  maxZoom: 16,
  attributionControl: false
});
mapLeft.addControl(new mapboxgl.AttributionControl(), 'bottom-left');

var mapRight = new mapboxgl.Map({
  container: 'after',
  style: styles[0].url,
  center: [-1.2471735, 50.8625412],
  zoom: 13,
  maxZoom: 16
});

// A selector or reference to HTML element
var container = '#comparison-container';

var map = new mapboxgl.Compare(mapLeft, mapRight, container, {
  // Set this to enable comparing two maps by mouse movement:
  // mousemove: true
});

// Function to get layer url by ID
function getLayer(id) {
  let obj = styles.find(obj => obj.id == id);
  return obj.url;
}

// Function to generate map options
function genOptions(side) {
  let html = `<select name="${side}">`;
  for (style in styles) {
    let selected = style == 0 ? ' selected' : '';
    html += '<option value="' + styles[style].id + '"' + selected + ' />' + styles[style].name + '</option>';
  }
  html += '</select>';
  for (overlay in overlays) {
    html += '<hr/><input value="' + overlays[overlay].id + '" type="checkbox" name="' + side + '-overlays" /><label for="' + overlays[overlay].id + '">' + overlays[overlay].name + '</label><br />';
  }
  document.getElementById(side).innerHTML = html;
}

genOptions('menu-left');
genOptions('menu-right');

var inputsLeft = document.getElementsByName('menu-left')[0];
var inputsRight = document.getElementsByName('menu-right')[0];

var overlaysLeft = document.getElementsByName('menu-left-overlays');
var overlaysRight = document.getElementsByName('menu-right-overlays');

// Switch layer function
function switchLayer(value, map) {
  let url = getLayer(value);
  map.setStyle(url);
  (function() {
    const waiting = () => {
      if (!map.isStyleLoaded()) {
        setTimeout(waiting, 200);
      } else {
        refreshOverlays(map);
      }
    };
    waiting();
  })();
}

// Switch overlays function
function switchOverlay(input, map) {
  let overlay = overlays.filter(d => d.id == input.value)[0];
  let id = overlay.id;
  let tiles = overlay.tiles;
  let maxzoom = overlay.maxzoom;
  let attribution = overlay.attribution;
  let layers = overlay.layers;
  if (input.checked) {
    if (!map.getSource(id)) {
      map.addSource(id, {
        'type': 'vector',
        'tiles': tiles,
        'maxzoom': maxzoom,
        'attribution': attribution
      });
    }
    for (layer in layers) {
      if (!map.getLayer(layers[layer].id)) {
        map.addLayer(layers[layer]);
      }
    }
  } else {
    for (layer in layers) {
      if (map.getLayer(layers[layer].id)) {
        map.removeLayer(layers[layer].id);
      }
    }
  }
}

function refreshOverlays(map) {
  if (map == mapLeft) {
    for (i in overlaysLeft) {
      if (overlaysLeft[i].checked) {
        switchOverlay(overlaysLeft[i], map);
      }
    }
  } else if (map == mapRight) {
    for (i in overlaysRight) {
      if (overlaysRight[i].checked) {
        switchOverlay(overlaysRight[i], map);
      }
    }
  }
}

// Add event listeners
inputsLeft.onchange = () => { switchLayer(inputsLeft.value, mapLeft) };
inputsRight.onchange = () => { switchLayer(inputsLeft.value, mapRight) };

for (var i = 0; i < overlaysLeft.length; i++) {
  let value = overlaysLeft[i].value;
  overlaysLeft[i].onclick = (e) => { switchOverlay(e.target, mapLeft) };
}
for (var i = 0; i < overlaysRight.length; i++) {
  let value = overlaysRight[i].value;
  overlaysRight[i].onclick = (e) => { switchOverlay(e.target, mapRight) };
}