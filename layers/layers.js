var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_InternationalAirport_1 = new ol.format.GeoJSON();
var features_InternationalAirport_1 = format_InternationalAirport_1.readFeatures(json_InternationalAirport_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InternationalAirport_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InternationalAirport_1.addFeatures(features_InternationalAirport_1);
var lyr_InternationalAirport_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InternationalAirport_1, 
                style: style_InternationalAirport_1,
                popuplayertitle: 'International Airport',
                interactive: true,
    title: 'International Airport<br />\
    <img src="styles/legend/InternationalAirport_1_0.png" /> major<br />\
    <img src="styles/legend/InternationalAirport_1_1.png" /> mid<br />\
    <img src="styles/legend/InternationalAirport_1_2.png" /> small<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_InternationalAirport_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_InternationalAirport_1];
lyr_InternationalAirport_1.set('fieldAliases', {'scalerank': 'scalerank', 'featurecla': 'featurecla', 'type': 'type', 'name': 'name', 'abbrev': 'abbrev', 'location': 'location', 'gps_code': 'gps_code', 'iata_code': 'iata_code', 'wikipedia': 'wikipedia', 'natlscale': 'natlscale', });
lyr_InternationalAirport_1.set('fieldImages', {'scalerank': 'Range', 'featurecla': 'Hidden', 'type': 'Hidden', 'name': 'TextEdit', 'abbrev': 'Hidden', 'location': 'Hidden', 'gps_code': 'Hidden', 'iata_code': 'TextEdit', 'wikipedia': 'TextEdit', 'natlscale': 'Hidden', });
lyr_InternationalAirport_1.set('fieldLabels', {'scalerank': 'inline label - visible with data', 'name': 'inline label - always visible', 'iata_code': 'inline label - visible with data', 'wikipedia': 'inline label - visible with data', });
lyr_InternationalAirport_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});