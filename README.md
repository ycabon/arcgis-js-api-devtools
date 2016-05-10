Custom formatting for objects created with ArcGIS API 4 for JavaScript.

#### Usage

```js
    require({
      packages: [
        { name: "arcgis-devtools", location: "https://rawgit.com/ycabon/arcgis-js-api-devtools/master/dist" }
      ]
    }, [
      "arcgis-devtools",

      "esri/Map"
    ], function(
      arcgisDevtools,
      Map
    ) {
      arcgisDevtools.install();

      var map = new Map({
        basemap: "dark-gray",
        ground: "world-elevation"
      });

      console.log(map);
    });
```
