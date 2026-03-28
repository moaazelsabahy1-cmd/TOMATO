import React from "react";
import { FaAward, FaGlobe, FaTruck, FaComments } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const SERVICE_IDS = [1, 2, 3, 4];
const ICONS = [<FaAward key="a" />, <FaGlobe key="g" />, <FaTruck key="t" />, <FaComments key="c" />];

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = SERVICE_IDS.map((id, i) => ({
    id,
    title: t(`services.items.${id}.title`),
    description: t(`services.items.${id}.description`),
    icon: ICONS[i],
  }));

  return (
    <section className="services" id="services">
      <span className="services-subtitle">{t("services.subtitle")}</span>
      <h2 className="services-title">{t("services.title")}</h2>
      <p className="services-desc">{t("services.desc")}</p>

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
