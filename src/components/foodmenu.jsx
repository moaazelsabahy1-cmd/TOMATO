import { useState } from "react";
import { useTranslation } from "react-i18next";

const CATEGORY_TABS = [
  { id: "all" },
  { id: "pasta" },
  { id: "pizza" },
  { id: "burger" },
  { id: "desserts" },
];

const menuData = [
  {
    id: 1,
    price: 120,
    img: "/images/7.jpg",
    category: "pizza",
  },
  {
    id: 2,
    price: 150,
    img: "/images/22.jpg",
    category: "pizza",
  },
  {
    id: 3,
    price: 160,
    img: "/images/21.jpg",
    category: "pizza",
  },
  {
    id: 4,
    price: 170,
    img: "/images/24.jpg",
    category: "pizza",
  },
  {
    id: 5,
    price: 140,
    img: "/images/13.jpg",
    category: "pasta",
  },
  {
    id: 6,
    price: 145,
    img: "/images/19.jpg",
    category: "pasta",
  },
  {
    id: 7,
    price: 130,
    img: "/images/6.jpg",
    category: "pasta",
  },
  {
    id: 8,
    price: 180,
    img: "/images/3.jpg",
    category: "pasta",
  },
  {
    id: 9,
    price: 100,
    img: "/images/10.jpg",
    category: "burger",
  },
  {
    id: 10,
    price: 110,
    img: "/images/8.jpg",
    category: "burger",
  },
  {
    id: 11,
    price: 105,
    img: "/images/20.jpg",
    category: "burger",
  },
  {
    id: 12,
    price: 150,
    img: "/images/15.jpg",
    category: "burger",
  },
  {
    id: 13,
    price: 80,
    img: "/images/2.jpg",
    category: "desserts",
  },
  {
    id: 14,
    price: 90,
    img: "/images/1.png",
    category: "desserts",
  },
  {
    id: 15,
    price: 70,
    img: "/images/5.jpg",
    category: "desserts",
  },
  {
    id: 16,
    price: 85,
    img: "/images/26.jpg",
    category: "desserts",
  },
];

function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();

  const filteredMenu =
    selectedCategory === "all"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <section className="food-menu" id="menu">
      <h2 className="menu-title">{t("menu.title")}</h2>

      <div className="menu-tabs">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`menu-tab ${selectedCategory === tab.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(tab.id)}
          >
            {t(`menu.tabs.${tab.id}`)}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <div
              className="menu-card"
              key={item.id}
              onClick={() => setSelectedItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedItem(item);
                }
              }}
            >
              <img
                src={item.img}
                alt={t(`menu.items.${item.id}.name`)}
              />
              <h4>{t(`menu.items.${item.id}.name`)}</h4>
              <span>
                {item.price} {t("menu.currency")}
              </span>
            </div>
          ))
        ) : (
          <p className="no-items">{t("menu.noItems")}</p>
        )}
      </div>

      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <img
              src={selectedItem.img}
              alt={t(`menu.items.${selectedItem.id}.name`)}
            />
            <h3>{t(`menu.items.${selectedItem.id}.name`)}</h3>
            <p>{t(`menu.items.${selectedItem.id}.desc`)}</p>
            <span className="modal-price">
              {selectedItem.price} {t("menu.currency")}
            </span>

            <button type="button" onClick={() => setSelectedItem(null)}>
              {t("menu.close")}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FoodMenu;
