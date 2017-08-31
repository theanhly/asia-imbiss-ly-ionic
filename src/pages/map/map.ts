import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';

//import { ConferenceData } from '../../providers/conference-data';



declare var google: any;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public platform: Platform) {
  }

  ionViewDidLoad() {
    let mapEle = this.mapElement.nativeElement
    let map = new google.maps.Map(mapEle, {
      center: {
        "lat": 52.550753,
        "lng": 13.199634,
      },
      zoom: 16,
      fullscreenControl: false,
      mapTypeControlOptions: {  position: google.maps.ControlPosition.TOP_RIGHT },
    });

    let infoWindow = new google.maps.InfoWindow({
      content: `<h5>Asia Imbiss Ly</h5><p><b>Standort</b></p><p>Strasse: Marschallstr. 1a</p><p>Ort: 13585 Berlin</p><p>Tel.: 030/3751421</p><p><b>Lieferzeiten</b></p><p>So.-Fr. von 12<sup>00</sup> bis 22<sup>00</sup> Uhr</p><p>Sa. RUHETAG</p>`
    });

    let marker = new google.maps.Marker({
      position: {
        "lat": 52.550753,
        "lng": 13.199634,
      },
      map: map,
      title: "Test",
    });

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    });

    google.maps.event.addListenerOnce(map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }
}
