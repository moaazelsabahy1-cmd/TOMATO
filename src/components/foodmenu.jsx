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
    img: "public/images/pexels-cup-of-couple-8471703.jpg",
    category: "pizza",
  },
  {
    id: 2,
    price: 150,
    img: "public/images/pexels-polina-tankilevitch-4109077.jpg ",
    category: "pizza",
  },
  {
    id: 3,
    price: 160,
    img: "public/images/pexels-pixabay-315755.jpg",
    category: "pizza",
  },
  {
    id: 4,
    price: 170,
    img: "public/images/pexels-snappr-29839587.jpg",
    category: "pizza",
  },
  {
    id: 5,
    price: 140,
    img: "public/images/pexels-fariphotography-803963.jpg",
    category: "pasta",
  },
  {
    id: 6,
    price: 145,
    img: "public/images/pexels-nadin-sh-78971847-12918198.jpg",
    category: "pasta",
  },
  {
    id: 7,
    price: 130,
    img: "public/images/pexels-change-c-c-974768353-32689480.jpg",
    category: "pasta",
  },
  {
    id: 8,
    price: 180,
    img: "public/images/pexels-adriano-bragi-1288014591-31779545.jpg",
    category: "pasta",
  },
  {
    id: 9,
    price: 100,
    img: "public/images/pexels-enginakyurt-2271107.jpg",
    category: "burger",
  },
  {
    id: 10,
    price: 110,
    img: "public/images/pexels-daniel-reche-718241-3616956.jpg",
    category: "burger",
  },
  {
    id: 11,
    price: 105,
    img: "public/images/pexels-nishess-shakya-401526881-15076692.jpg",
    category: "burger",
  },
  {
    id: 12,
    price: 150,
    img: "public/images/pexels-horizon-content-2100060-3915915.jpg",
    category: "burger",
  },
  {
    id: 13,
    price: 80,
    img: "public/images/pexels-abhinavcoca-291528.jpg",
    category: "desserts",
  },
  {
    id: 14,
    price: 90,
    img: "public/images/istockphoto-1325617678-2048x2048.jpg",
    category: "desserts",
  },
  {
    id: 15,
    price: 70,
    img: "public/images/pexels-bianeyre-1979749.jpg",
    category: "desserts",
  },
  {
    id: 16,
    price: 85,
    img: "public/images/pexels-valeriya-1639567.jpg",
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
