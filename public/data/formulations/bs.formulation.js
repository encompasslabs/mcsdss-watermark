(function() {
  'use strict';

  var formulationConfiguration = {
    // Object loaded from formulationViewList into AnalysisView for exploration and utilization.
    // Comprised of multiple entities that describe the available charts, graphs, tables, and other presentation options.
    // Each config entitiy includes the keys/values required to map the data across the views.
    // Each available component is a directive and should be configured at instantiation by the view controller.

    // General
    generalConfig: {
      // TBD
    },

    // Table
    datatableConfig: {
      datasources: {
        tabledata: [ './data/BSGAM_Heads_Wells_Drains_Zones_Master.csv' ]
      }
    },

    // Graph
    graphConfig: {
      datasources: {
        continuumData: ['./data/AquiferYield_ContinuumData_BartonSprings.csv']
      },
      graphTitle: 'Identifying Desired Future Conditions (DFCs)',
      xAxisLabel: 'Total Pumping in ft3 (for entire model)',
      yAxisLabel: 'Total Storage Volume in ft (monthly ave)',
      toolTipHtml: 'TBD'
    },

    // Map
    mapConfig: {
      datasources: {
        usaGeojson : './data/geojson/USA.geo.json',
        texasGeojson : './data/geojson/TX.geo.json',
        majorAquifersGeojson : './data/geojson/NEW_major_aquifers_dd_reduced100.geo.json',
        eaaBoundaryZonesGeojson : './data/geojson/eaa_boundary_EPSG-3081.geo.json',
        aquiferZonesGeojson : './data/geojson/eaa-aquifer-zones-2014.geo.json',
        bsgam_kzonesGeojson : './data/geojson/BSGAMKZ.geo.json',
        bsgam_kzones_mergedGeojson : './data/geojson/BSGAMKZones.merged.WGS84.lco15.geo.json',
      }
    }
  };

})();