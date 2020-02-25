var wms_layers = [];

var lyr_MN2017ColorNAIP_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://imageserver.gisdata.mn.gov/cgi-bin/wms?VERSION%3D1.3.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "fsa2017",
                                "format": "image/jpeg",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "MN 2017 Color NAIP",
                            opacity: 1.000000,


                          });
              wms_layers.push([lyr_MN2017ColorNAIP_0, 0]);
var format_2footcontours_1 = new ol.format.GeoJSON();
var features_2footcontours_1 = format_2footcontours_1.readFeatures(json_2footcontours_1,
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2footcontours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2footcontours_1.addFeatures(features_2footcontours_1);
var lyr_2footcontours_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2footcontours_1,
                style: style_2footcontours_1,
                interactive: true,
    title: '2 foot contours<br />\
    <img src="styles/legend/2footcontours_1_0.png" /> 0<br />\
    <img src="styles/legend/2footcontours_1_1.png" /> 1<br />\
    <img src="styles/legend/2footcontours_1_2.png" /> <br />'
        });

lyr_MN2017ColorNAIP_0.setVisible(true);lyr_2footcontours_1.setVisible(true);
var layersList = [lyr_MN2017ColorNAIP_0,lyr_2footcontours_1];
lyr_2footcontours_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', 'LABEL': 'LABEL', 'INDEX': 'INDEX', });
lyr_2footcontours_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', 'LABEL': 'Range', 'INDEX': 'Range', });
lyr_2footcontours_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', 'LABEL': 'header label', 'INDEX': 'no label', });
lyr_2footcontours_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
