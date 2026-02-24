import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const branches = [
  {
    id: 1,
    city: "Cairo",
    address: "Nasr City, Abbas El Akkad Street",
    phone: "+20 111 234 5678",
  },
  {
    id: 2,
    city: "Giza",
    address: "Dokki, Tahrir Street",
    phone: "+20 111 987 6543",
  },
  {
    id: 3,
    city: "Alexandria",
    address: "Smouha, Fawzy Moaz Street",
    phone: "+20 111 555 8899",
  },
];

const BranchesSection = () => {
  return (
    <section className="branches">
      <span className="branches-subtitle">Our Locations</span>
      <h2 className="branches-title">Our Branches</h2>
      <p className="branches-desc">
        Visit any of our branches and enjoy the same quality everywhere.
      </p>

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
