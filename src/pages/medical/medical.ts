import { Component, OnInit, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated"

@IonicPage()
@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html'
})
export class MedicalPage implements OnInit{

  currentItems: any = [];
  private chart: am4maps.MapChart;
  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, private zone: NgZone) { }
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      am4core.useTheme(am4themes_animated);
      let chart = am4core.create("chartdiv", am4maps.MapChart);

      chart.geodata = am4geodata_worldLow;
      chart.projection = new am4maps.projections.Miller();

// Series for World map
let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

// Exclude Antartica
polygonSeries.exclude = ["AQ"];

// Make map load polygon (like country names) data from GeoJSON
polygonSeries.useGeodata = true;

// Configure series
let polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = chart.colors.getIndex(0).lighten(0.5);

// Create hover state and set alternative fill color
let hs = polygonTemplate.states.create("hover");
hs.properties.fill = chart.colors.getIndex(0);

// Add image series
let imageSeries = chart.series.push(new am4maps.MapImageSeries());
imageSeries.mapImages.template.propertyFields.longitude = "longitude";
imageSeries.mapImages.template.propertyFields.latitude = "latitude";
imageSeries.data = [ {
  "title": "Brussels",
  "latitude": 50.8371,
  "longitude": 4.3676
}, {
  "title": "Copenhagen",
  "latitude": 55.6763,
  "longitude": 12.5681
}, {
  "title": "Paris",
  "latitude": 48.8567,
  "longitude": 2.3510
}, {
  "title": "Reykjavik",
  "latitude": 64.1353,
  "longitude": -21.8952
}, {
  "title": "Moscow",
  "latitude": 55.7558,
  "longitude": 37.6176
}, {
  "title": "Madrid",
  "latitude": 40.4167,
  "longitude": -3.7033
}, {
  "title": "London",
  "latitude": 51.5002,
  "longitude": -0.1262,
  "url": "http://www.google.co.uk"
}, {
  "title": "Peking",
  "latitude": 39.9056,
  "longitude": 116.3958
}, {
  "title": "New Delhi",
  "latitude": 28.6353,
  "longitude": 77.2250
}, {
  "title": "Tokyo",
  "latitude": 35.6785,
  "longitude": 139.6823,
  "url": "http://www.google.co.jp"
}, {
  "title": "Ankara",
  "latitude": 39.9439,
  "longitude": 32.8560
}, {
  "title": "Buenos Aires",
  "latitude": -34.6118,
  "longitude": -58.4173
}, {
  "title": "Brasilia",
  "latitude": -15.7801,
  "longitude": -47.9292
}, {
  "title": "Ottawa",
  "latitude": 45.4235,
  "longitude": -75.6979
}, {
  "title": "Washington",
  "latitude": 38.8921,
  "longitude": -77.0241
}, {
  "title": "Kinshasa",
  "latitude": -4.3369,
  "longitude": 15.3271
}, {
  "title": "Cairo",
  "latitude": 30.0571,
  "longitude": 31.2272
}, {
  "title": "Pretoria",
  "latitude": -25.7463,
  "longitude": 28.1876
} ];

// add events to recalculate map position when the map is moved or zoomed
chart.events.on( "ready", updateCustomMarkers );
chart.events.on( "mappositionchanged", updateCustomMarkers );
function updateCustomMarkers( event ) {
  console.log("IN THE UPDATE FUNCTION")
  // go through all of the images
  imageSeries.mapImages.each(function(image) {
    // check if it has corresponding HTML element
    if (!image.dummyData || !image.dummyData.externalElement) {
      // create onex
      image.dummyData = {
        externalElement: createCustomMarker(image)
      };
    }

    // reposition the element accoridng to coordinates
    let xy = chart.geoPointToSVG( { longitude: image.longitude, latitude: image.latitude } );
    image.dummyData.externalElement.style.top = xy.y + 'px';
    image.dummyData.externalElement.style.left = xy.x + 'px';
  });

}

// this function creates and returns a new marker element
function createCustomMarker( image ) {
  console.log("INSIDE THE CUSTOM MARKER FUNCTION")
  
  let chart = image.dataItem.component.chart;

  // create holder
  let holder = document.createElement( 'div' );
  holder.className = 'map-marker';
  holder.title = image.dataItem.dataContext.title;
  holder.style.position = 'absolute';

  // maybe add a link to it?
  if ( undefined != image.url ) {
    holder.onclick = function() {
      window.location.href = image.url;
    };
    holder.className += ' map-clickable';
  }

  // create dot
  let dot = document.createElement( 'div' );
  dot.className = 'dot';
  holder.appendChild( dot );

  // create pulse
  let pulse = document.createElement( 'div' );
  pulse.className = 'pulse';
  holder.appendChild( pulse );

  // append the marker to the map container
  chart.svgContainer.htmlElement.appendChild( holder );

  return holder;
}


    });
  }
  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    this.currentItems = this.items.query({
      name: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
  ngOnInit(){
  
  }
  

}


