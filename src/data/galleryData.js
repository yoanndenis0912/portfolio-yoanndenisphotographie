// ✅ Import explicite de toutes les images pour éviter les erreurs de chemin
// Portrait
import portrait1 from "/photo/portrait/portrait1.jpg";
import portrait2 from "/photo/portrait/portrait2.jpg";
import portrait3 from "/photo/portrait/portrait3.jpg";
import portrait4 from "/photo/portrait/portrait4.jpg";

// Food
import food1 from "/photo/food/food1.jpg";
import food2 from "/photo/food/food2.jpg";
import food3 from "/photo/food/food3.jpg";

// Editorial
import editorial1 from "/photo/editorial/editorial1.jpg";
import editorial2 from "/photo/editorial/editorial2.jpg";
import editorial3 from "/photo/editorial/editorial3.jpg";
import editorial4 from "/photo/editorial/editorial4.jpg";
import editorial5 from "/photo/editorial/editorial5.jpg";
import editorial6 from "/photo/editorial/editorial6.jpg";
import editorial7 from "/photo/editorial/editorial7.jpg";

// ✅ Structure des galeries
export const galleryData = {
  portrait: [
    { src: portrait1, caption: "Portrait 1" },
    { src: portrait2, caption: "Portrait 2" },
    { src: portrait3, caption: "Portrait 3" },
    { src: portrait4, caption: "Portrait 4" },
  ],
  food: [
    { src: food1, caption: "Food 1" },
    { src: food2, caption: "Food 2" },
    { src: food3, caption: "Food 3" },
  ],
  editorial: [
    { src: editorial1, caption: "Editorial 1" },
    { src: editorial2, caption: "Editorial 2" },
    { src: editorial3, caption: "Editorial 3" },
    { src: editorial4, caption: "Editorial 4" },
    { src: editorial5, caption: "Editorial 5" },
    { src: editorial6, caption: "Editorial 6" },
    { src: editorial7, caption: "Editorial 7" },
  ],
};