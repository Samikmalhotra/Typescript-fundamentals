import {User} from './User'
import {Company} from './Company'

declare var google: any;

// Instructions to every pther class if the want to be mappable
interface Mappable{
  location: {
    lat: number;
    lng: number;
  }
}
export class CustomMap{
  private googleMap: google.maps.Map;
  constructor(divId:string){
    this.googleMap = new google.maps.Map(
      document.getElementById(divId), {
      zoom:1,
      center: {
      lat:0,
      lng: 0
      }
    })
  }
  

  addMarker(mappable: Mappable | Company):void{
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    })
  };

  marker.addEventListener('click', () => {
  const infoWindow = new google.maps.InfoWindow({
      content: 'Hi there'
  });
  infoWindow.open(this.googleMap, marker);
  }

}
