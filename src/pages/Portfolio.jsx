import { Link } from "react-router-dom";
import { galleryData } from "../data/galleryData";

const categories = [
  { slug: "portrait", title: "Portrait" },
  { slug: "food", title: "Food Photography" },
  { slug: "editorial", title: "Editorial" },
];

export default function Portfolio() {
  return (
    <main className="project-page">
      <h1 className="center-title">PORTFOLIO</h1>

      <div className="grid">
        {categories.map((cat) => {
          const categoryImages = galleryData[cat.slug] || [];
          const firstImg = categoryImages.length > 0 ? categoryImages[0].src : null;
          

          return (
            <Link
              to={`/portfolio/${cat.slug}`}
              key={cat.slug}
              className="project"
            >
              {firstImg ? (
                <img
                  src={firstImg}
                  alt={cat.title}
                  className="project-thumb"
                />
              ) : (
                <div className="project-thumb-fallback">{cat.title}</div>
              )}

              <div className="project-title">{cat.title}</div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}