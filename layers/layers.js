var wms_layers = [];


        var lyr_F4Map2D_0 = new ol.layer.Tile({
            'title': 'F4 Map - 2D',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriImagery_2 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_AlexandrianGreeks_3 = new ol.format.GeoJSON();
var features_AlexandrianGreeks_3 = format_AlexandrianGreeks_3.readFeatures(json_AlexandrianGreeks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlexandrianGreeks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlexandrianGreeks_3.addFeatures(features_AlexandrianGreeks_3);
var lyr_AlexandrianGreeks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlexandrianGreeks_3, 
                style: style_AlexandrianGreeks_3,
                popuplayertitle: "AlexandrianGreeks",
                interactive: true,
                title: 'AlexandrianGreeks'
            });

lyr_F4Map2D_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_EsriImagery_2.setVisible(true);lyr_AlexandrianGreeks_3.setVisible(true);
var layersList = [lyr_F4Map2D_0,lyr_GoogleSatelliteHybrid_1,lyr_EsriImagery_2,lyr_AlexandrianGreeks_3];
lyr_AlexandrianGreeks_3.set('fieldAliases', {'id': 'id', 'AlexandrianGreeks — Form responses 1_Field2': 'AlexandrianGreeks — Form responses 1_Field2', 'AlexandrianGreeks — Form responses 1_Field3': 'AlexandrianGreeks — Form responses 1_Field3', 'AlexandrianGreeks — Form responses 1_Field4': 'AlexandrianGreeks — Form responses 1_Field4', 'AlexandrianGreeks — Form responses 1_Field5': 'AlexandrianGreeks — Form responses 1_Field5', 'AlexandrianGreeks — Form responses 1_Field6': 'AlexandrianGreeks — Form responses 1_Field6', 'AlexandrianGreeks — Form responses 1_Field7': 'AlexandrianGreeks — Form responses 1_Field7', 'AlexandrianGreeks — Form responses 1_Field8': 'AlexandrianGreeks — Form responses 1_Field8', 'AlexandrianGreeks — Form responses 1_Field9': 'AlexandrianGreeks — Form responses 1_Field9', 'AlexandrianGreeks — Form responses 1_Field10': 'AlexandrianGreeks — Form responses 1_Field10', 'AlexandrianGreeks — Form responses 1_Field11': 'AlexandrianGreeks — Form responses 1_Field11', 'AlexandrianGreeks — Form responses 1_Field12': 'AlexandrianGreeks — Form responses 1_Field12', 'AlexandrianGreeks — Form responses 1_Field13': 'AlexandrianGreeks — Form responses 1_Field13', 'AlexandrianGreeks — Form responses 1_Field14': 'AlexandrianGreeks — Form responses 1_Field14', 'AlexandrianGreeks — Form responses 1_Field15': 'AlexandrianGreeks — Form responses 1_Field15', 'AlexandrianGreeks — Form responses 1_Field16': 'AlexandrianGreeks — Form responses 1_Field16', 'AlexandrianGreeks — Form responses 1_Field17': 'AlexandrianGreeks — Form responses 1_Field17', 'AlexandrianGreeks — Form responses 1_Field18': 'AlexandrianGreeks — Form responses 1_Field18', 'AlexandrianGreeks — Form responses 1_Field19': 'AlexandrianGreeks — Form responses 1_Field19', 'AlexandrianGreeks — Form responses 1_Field20': 'AlexandrianGreeks — Form responses 1_Field20', 'AlexandrianGreeks — Form responses 1_Field21': 'AlexandrianGreeks — Form responses 1_Field21', 'AlexandrianGreeks — Form responses 1_Field22': 'AlexandrianGreeks — Form responses 1_Field22', 'AlexandrianGreeks — Form responses 1_Field23': 'AlexandrianGreeks — Form responses 1_Field23', 'AlexandrianGreeks — Form responses 1_Field24': 'AlexandrianGreeks — Form responses 1_Field24', 'AlexandrianGreeks — Form responses 1_Field25': 'AlexandrianGreeks — Form responses 1_Field25', 'AlexandrianGreeks — Form responses 1_Field26': 'AlexandrianGreeks — Form responses 1_Field26', 'AlexandrianGreeks — Form responses 1_Field27': 'AlexandrianGreeks — Form responses 1_Field27', 'AlexandrianGreeks — Form responses 1_Field28': 'AlexandrianGreeks — Form responses 1_Field28', 'AlexandrianGreeks — Form responses 1_Field29': 'AlexandrianGreeks — Form responses 1_Field29', 'AlexandrianGreeks — Form responses 1_Field30': 'AlexandrianGreeks — Form responses 1_Field30', 'AlexandrianGreeks — Form responses 1_Field31': 'AlexandrianGreeks — Form responses 1_Field31', 'AlexandrianGreeks — Form responses 1_Field32': 'AlexandrianGreeks — Form responses 1_Field32', 'AlexandrianGreeks — Form responses 1_Field33': 'AlexandrianGreeks — Form responses 1_Field33', });
lyr_AlexandrianGreeks_3.set('fieldImages', {'id': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field2': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field3': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field4': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field5': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field6': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field7': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field8': 'ExternalResource', 'AlexandrianGreeks — Form responses 1_Field9': 'ExternalResource', 'AlexandrianGreeks — Form responses 1_Field10': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field11': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field12': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field13': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field14': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field15': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field16': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field17': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field18': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field19': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field20': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field21': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field22': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field23': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field24': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field25': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field26': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field27': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field28': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field29': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field30': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field31': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field32': 'TextEdit', 'AlexandrianGreeks — Form responses 1_Field33': 'TextEdit', });
lyr_AlexandrianGreeks_3.set('fieldLabels', {'id': 'header label - visible with data', 'AlexandrianGreeks — Form responses 1_Field2': 'no label', 'AlexandrianGreeks — Form responses 1_Field3': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field4': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field5': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field6': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field7': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field8': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field9': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field10': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field11': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field12': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field13': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field14': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field15': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field16': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field17': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field18': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field19': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field20': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field21': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field22': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field23': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field24': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field25': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field26': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field27': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field28': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field29': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field30': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field31': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field32': 'inline label - visible with data', 'AlexandrianGreeks — Form responses 1_Field33': 'inline label - visible with data', });
lyr_AlexandrianGreeks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});