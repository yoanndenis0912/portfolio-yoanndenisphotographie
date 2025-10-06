import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

const categories = [
  { title: "Portrait", slug: "portrait", img: "/photo/portrait/portrait1.jpg" },
  { title: "Food Photography", slug: "food", img: "/photo/food/food1.jpg" },
  { title: "Éditorial", slug: "editorial", img: "/photo/editorial/editorial1.jpg" },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-grid">
        {categories.map((c) => (
          <Link key={c.slug} to={`/portfolio/${c.slug}`} className="portfolio-card">
            <div className="thumb">
              <img src={c.img} alt={c.title} />
            </div>
            <h2 className="card-title">{c.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}