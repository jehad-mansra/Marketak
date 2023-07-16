import React from "react";
import Member from "./Member";
import "./AboutUS.css";
function AboutUS() {
  return (
    <div class="about-us-container">
      <img
        src="https://www.efficy.com/wp-content/uploads/2019/03/crm-for-e-commerce-900x412.jpg"
        alt="pic"
        className="img-hero-about-us"
      />
      <h1>
        About <span>US</span>
      </h1>

      <div className="about-us-content">
        <h4 className="about-us-questions">Who are we?</h4>
        <p className="about-us-answer">
          At Shopfy , we are a team of talented and passionate students from
          Orange Coding Academy, driven by a shared vision to revolutionize the
          e-commerce industry. With our combined expertise in programming and
          design, we have created a cutting-edge e-commerce application that
          caters to the needs of modern shoppers. .
        </p>
        <h4 className="about-us-questions">What do we serve?</h4>
        <p className="about-us-answer">
          in our e-commerce platforms offer a vast of products across numerous
          categories, providing convenience, choice, and accessibility to
          customers worldwide. With the ability to shop anytime and anywhere,
          e-commerce has transformed the retail landscape and continues to shape
          the way people shop for their desired products and services.
        </p>

        <h2 className="section-title">MEET OUR TEAM</h2>
        <div className="Team-members">
          <Member
            name="Abduallah Mazahreh "
            prag="The product owner defines features, prioritizes requirements, collaborates with stakeholders, and ensures successful delivery of the product. They make strategic decisions, handle feedback"
            image="https://resourcefy.me/assets/img/photo/AbdullahMazahreh.jpeg"
          />
          <Member
            name="Moad Alkhouly"
            prag="Designs and develops user interfaces using the React library, building interactive web applications with reusable components and implementing state management for seamless user experiences."
            image="https://resourcefy.me/assets/img/photo/MoathAlkhouly.png"
          />
          <Member
            name="Ahmad Alshobaki"
            prag="Designs and develops user interfaces using the React library, building interactive web applications with reusable components and implementing state management for seamless user experiences."
            image="https://resourcefy.me/assets/img/photo/AhmadAlshobaki.jpg"
          />

          <Member
            name="Jehad manasra"
            prag="Designs and develops user interfaces using the React library, building interactive web applications with reusable components and implementing state management for seamless user experiences."
            image="https://resourcefy.me/assets/img/photo/JehadManasra.jpg"
          />

          <Member
            name="Tariq abu kharmh"
            prag="The scrum master facilitates agile practices, guides the development team, removes obstacles, and ensures adherence to the scrum framework. They foster collaboration, promote self-organization."
            image="https://resourcefy.me/assets/img/photo/Tariqabukharmh.jfif"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
