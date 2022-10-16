import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProductSection from "../components/ProductSection";
import RatingReview from "../components/RatingReview";
import RelatedProducts from "../components/RelatedProducts";
import Review from "../components/review";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductSection />
      <RelatedProducts />
      <RatingReview />
      <Review/>
    </>
  );
}
