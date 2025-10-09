import { useParams, Link } from "react-router-dom";
import Gallery from "../components/Gallery";
import "./Category.css";

export default function Category() {
  const { slug } = useParams();

  const map = {
    portrait: {
      title: "Portrait",
      images: [
        "/photo/portrait/portrait1.jpg",
        "/photo/portrait/portrait2.jpg",
        "/photo/portrait/portrait3.jpg",
        "/photo/portrait/portrait4.jpg",
      ],
    },
    food: {
      title: "Food Photography",
      images: [
        "/photo/food/food1.jpg",
        "/photo/food/food2.jpg",
        "/photo/food/food3.jpg",
      ],
    },
    editorial: {
      title: "Éditorial",
      images: [
        "/photo/editorial/editorial1.jpg",
        "/photo/editorial/editorial2.jpg",
        "/photo/editorial/editorial3.jpg",
        "/photo/editorial/editorial4.jpg",
        "/photo/editorial/editorial5.jpg",
        "/photo/editorial/editorial6.jpg",
        "/photo/editorial/editorial7.jpg",
      ],
    },
  };

  const data = map[slug];
  if (!data) {
    return (
      <section className="category-page">
        <Link to="/portfolio" className="back-link">← Retour</Link>
        <h1 className="category-title">Catégorie introuvable</h1>
      </section>
    );
  }

  return (
    <section className="category-page">
      <div className="category-header">
        <Link to="/portfolio" className="back-link">← Retour</Link>
        <h1 className="category-title">{data.title}</h1>
      </div>
      <Gallery images={data.images} />
    </section>
  );
}