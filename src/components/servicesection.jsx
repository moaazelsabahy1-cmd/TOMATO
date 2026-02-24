import React from "react";
import { FaAward, FaGlobe, FaTruck, FaComments } from "react-icons/fa";


const services = [
  {
    id: 1,
    title: "Trusted Over the Years",
    description:
      "Our success is built on the trust of our clients in our products and services for decades.",
    icon: <FaAward />,
  },
  {
    id: 2,
    title: "Local & Imported Products",
    description:
      "We provide a wide range of high-quality local and imported products from top brands.",
    icon: <FaGlobe />,
  },
  {
    id: 3,
    title: "Wholesale & Distribution",
    description:
      "Reliable and fast distribution services for markets and restaurants nationwide.",
    icon: <FaTruck />,
  },
  {
    id: 4,
    title: "Easy & Fast Communication",
    description:
      "We ensure quick response and smooth communication through multiple channels.",
    icon: <FaComments />,
  },
];

const ServicesSection = () => {
  return (
    <section className="services">
      <span className="services-subtitle">What We Offer</span>
      <h2 className="services-title">Our Services</h2>
      <p className="services-desc">
        We work to meet market needs with the highest standards of quality and safety.
      </p>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.id}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;