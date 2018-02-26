import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // cats = [
  //   {
  //     image: "assets/images/felix.jpg",
  //     name: "Felix",
  //     description: "Felix is 12 years old and is the best cat in the world."
  //   },
  //   {
  //     image: "assets/images/donatella.jpg",
  //     name: "Donatella",
  //     description: "Donatella is 1 year old and is so funny."
  //   },
  //   {
  //     image: "assets/images/mapale.jpg",
  //     name: "Mapale",
  //     description: "Mapale is 7 years old is the cutest cat."
  //   },
  //   {
  //     image: "assets/images/milu.jpg",
  //     name: "Milu",
  //     description: "Milu is 5 years old and is bossy."
  //   }
  // ];

  cats = [
    {
      image: "assets/images/felix.jpg",
      name: "Felix",
      description: "Felix tiene 12 años y es el mejor gato del mundo."
    },
    {
      image: "assets/images/donatella.jpg",
      name: "Donatella",
      description: "Donatella tiene 1 año y es muy juguetona."
    },
    {
      image: "assets/images/mapale.jpg",
      name: "Mapale",
      description: "Mapale tiene 7 años y es el mas tierno de todos."
    },
    {
      image: "assets/images/milu.jpg",
      name: "Milu",
      description: "Milu tiene 5 años y le gusta comer mucho."
    }
  ];
}
