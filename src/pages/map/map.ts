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
      content: `<h5>Asia Imbiss Ly</h5><p><b>Standort</b></p><p>Strasse: Marschallstr. 1a</p><p>Ort: 13585 Berlin</p><p>Tel.: 030/3751421</p><p><b>Lieferzeiten</b></p><p>So.-Fr. von 12<sup>00</sup> bis 22<sup>00</sup> Uhr</p><p>Sa. RUHETAG</p><p><a target="_blank" style="text-decoration: none" href="https://www.google.com/maps/place/Asia+Imbiss-Ly/@52.550007,13.201773,18z/data=!4m5!3m4!1s0x0:0xc8c88f17ec32802f!8m2!3d52.5507547!4d13.1996328?hl=de-DE">In Google Maps ansehen</a></p>`
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
