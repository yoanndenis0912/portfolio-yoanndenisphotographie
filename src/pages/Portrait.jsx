import React from "react";
import Carrousel from "../components/Carrousel";

export default function Portrait() {
  const images = [
    "/photo/portrait/portrait1.jpg",
    "/photo/portrait/portrait2.jpg",
    "/photo/portrait/portrait3.jpg",
  ];

  return <Carrousel images={images} titre="Portrait" />;
}