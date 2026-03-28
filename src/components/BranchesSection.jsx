import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BRANCH_IDS = [1, 2, 3];
const PHONES = ["+20 111 234 5678", "+20 111 987 6543", "+20 111 555 8899"];

const BranchesSection = () => {
  const { t } = useTranslation();

  const branches = BRANCH_IDS.map((id, i) => ({
    id,
    city: t(`branches.items.${id}.city`),
    address: t(`branches.items.${id}.address`),
    phone: PHONES[i],
  }));

  return (
    <section className="branches" id="branches">
      <span className="branches-subtitle">{t("branches.subtitle")}</span>
      <h2 className="branches-title">{t("branches.title")}</h2>
      <p className="branches-desc">{t("branches.desc")}</p>

      <div className="branches-grid">
        {branches.map((branch) => (
          <div className="branch-card" key={branch.id}>
            <div className="branch-icon">
              <FaMapMarkerAlt />
            </div>
            <h3>{branch.city}</h3>
            <p>{branch.address}</p>
            <span className="branch-phone">
              <FaPhoneAlt /> {branch.phone}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BranchesSection;
