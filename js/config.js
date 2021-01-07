const styles = [
  {
    'id': 'ons-light',
    'name': 'OpenMapTiles (ONS style)',
    'url': './data/style-omt.json'
  },
  {
    'id': 'ons-dark',
    'name': 'OpenMapTiles (ONS dark)',
    'url': './data/style-dark.json'
  },
  {
    'id': 'zoomstack-ons',
    'name': 'OS Zoomstack (ONS style)',
    'url': './data/style-os.json'
  },
  {
    'id': 'zoomstack-outdoor',
    'name': 'OS Zoomstack (outdoor style)',
    'url': './data/style-outdoor.json'
  },
  {
    'id': 'os-1900',
    'name': 'Ordnance Survey 1900s',
    'url': {
      'version': 8,
      'sources': {
        'os-1900': {
          'type': 'raster',
          'tiles': [
            'https://nls-1.tileserver.com/fpsUZbqQLWLT/{z}/{x}/{y}.png'
          ],
          'tileSize': 256,
          'attribution': '<a href="https://maps.nls.uk/geo/explore/side-by-side/" target="_blank">Ordnance Survey / National Library of Scotland</a>',
          'maxzoom': 17
        }
      },
      'layers': [
        {
          'id': 'os-1900',
          'type': 'raster',
          'source': 'os-1900'
        }
      ],
      "sprite": "https://openmaptiles.github.io/positron-gl-style/sprite",
      "glyphs": "https://cdn.ons.gov.uk/maptiles/osm/fontsv1/{fontstack}/{range}.pbf",
    }
  },
  {
    'id': 'os-1937',
    'name': 'Ordnance Survey 1937-61',
    'url': {
      'version': 8,
      'sources': {
        'os-1937': {
          'type': 'raster',
          'tiles': [
            'https://nls-1.tileserver.com/fpsUZbIoj0Oa/{z}/{x}/{y}.png'
          ],
          'tileSize': 256,
          'attribution': '<a href="https://maps.nls.uk/geo/explore/side-by-side/" target="_blank">Ordnance Survey / National Library of Scotland</a>',
          'maxzoom': 15
        }
      },
      'layers': [
        {
          'id': 'os-1937',
          'type': 'raster',
          'source': 'os-1937'
        }
      ],
      "sprite": "https://openmaptiles.github.io/positron-gl-style/sprite",
      "glyphs": "https://cdn.ons.gov.uk/maptiles/osm/fontsv1/{fontstack}/{range}.pbf",
    }
  },
  {
    'id': 'esri',
    'name': 'ESRI Satellite Imagery',
    'url': {
      'version': 8,
      'sources': {
        'esri': {
          'type': 'raster',
          'tiles': [
            'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}?blankTile=false'
          ],
          'tileSize': 256,
          'attribution': 'ESRI World Imagery',
          'maxzoom': 14
        }
      },
      'layers': [
        {
          'id': 'esri',
          'type': 'raster',
          'source': 'esri'
        }
      ],
      "sprite": "https://openmaptiles.github.io/positron-gl-style/sprite",
      "glyphs": "https://cdn.ons.gov.uk/maptiles/osm/fontsv1/{fontstack}/{range}.pbf",
    }
  },
  {
    'id': 'openstreetmap',
    'name': 'OpenStreetMap',
    'url': {
      'version': 8,
      'sources': {
        'osm-tiles': {
          'type': 'raster',
          'tiles': [
            'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
          ],
          'tileSize': 256,
          'attribution': '<a href="https://openstreetmap.org" target="_blank">OpenStreetMap</a>',
          'maxzoom': 17
        }
      },
      'layers': [
        {
          'id': 'osm-tiles',
          'type': 'raster',
          'source': 'osm-tiles'
        }
      ],
      "sprite": "https://openmaptiles.github.io/positron-gl-style/sprite",
      "glyphs": "https://cdn.ons.gov.uk/maptiles/osm/fontsv1/{fontstack}/{range}.pbf",
    }
  }
];
const overlays = [
  {
    'id': 'composite',
    'name': 'OS Roads 2020 (overlay)',
    'tiles': ["https://cdn.ons.gov.uk/maptiles/zoomstack/v2/{z}/{x}/{y}.pbf"],
    'layers': overLayers
  }
];