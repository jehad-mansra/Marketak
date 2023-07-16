import React, { Fragment } from "react";
import "./home.css";
import {
  ImageSlider,
  Delivery,
  Featuredproducts,
  Testimonials
} from "../Index";
// import AdminDashboard from "../DashboardComponents/adminDashboard";

function Home() {
  return (
    <Fragment>
      <ImageSlider />
      <Delivery />
      <Featuredproducts />
      <Testimonials />
      {/* <AdminDashboard /> */}
    </Fragment>
  );
}
export default Home;
