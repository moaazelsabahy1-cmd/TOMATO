import { useState } from "react";

const categoryTabs = [
  { id: "all", label: "All Menu" },
  { id: "pasta", label: "Pasta" },
  { id: "pizza", label: "Pizza" },
  { id: "burger", label: "Burger" },
  { id: "desserts", label: "Desserts" },
];

const menuData = [
  // Pizza Items
  {
    id: 1,
    name: "Margherita Pizza",
    desc: "Classic Italian pizza with fresh tomato sauce and mozzarella.",
    price: 120,
    img: "   public/images/pexels-vince-2147491.jpg",
    category: "pizza",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    desc: "Loaded with pepperoni and melted cheese.",
    price: 150,
    img: "public/images/pexels-polina-tankilevitch-4109077.jpg ",
    category: "pizza",
  },
  {
    id: 3,
    name: "Hawaiian Pizza",
    desc: "Pizza with ham, pineapple, and mozzarella cheese.",
    price: 160,
    img: "public/images/pexels-pixabay-315755.jpg",
    category: "pizza",
  },
  {
    id: 4,
    name: "BBQ Chicken Pizza",
    desc: "Grilled chicken with BBQ sauce and red onions.",
    price: 170,
    img: "public/images/pexels-snappr-29839587.jpg",
    category: "pizza",
  },
  // Pasta Items
  {
    id: 5,
    name: "Creamy Pasta",
    desc: "Pasta with creamy mushroom sauce and parmesan.",
    price: 140,
    img: "public/images/pexels-fariphotography-803963.jpg",
    category: "pasta",
  },
  {
    id: 6,
    name: "Spaghetti Carbonara",
    desc: "Classic Italian pasta with eggs, cheese, and bacon.",
    price: 145,
    img: "public/images/pexels-nadin-sh-78971847-12918198.jpg",
    category: "pasta",
  },
  {
    id: 7,
    name: "Penne Arrabbiata",
    desc: "Spicy pasta with tomato sauce and red chili peppers.",
    price: 130,
    img: "public/images/pexels-change-c-c-974768353-32689480.jpg",
    category: "pasta",
  },
  {
    id: 8,
    name: "Lasagna",
    desc: "Layered pasta with meat sauce, cheese, and béchamel.",
    price: 180,
    img: "public/images/pexels-adriano-bragi-1288014591-31779545.jpg",
    category: "pasta",
  },
  // Burger Items
  {
    id: 9,
    name: "Classic Burger",
    desc: "Juicy beef patty with lettuce, tomato, and special sauce.",
    price: 100,
    img: "public/images/pexels-enginakyurt-2271107.jpg",
    category: "burger",
  },
  {
    id: 10,
    name: "Cheese Burger",
    desc: "Classic burger with melted cheddar cheese.",
    price: 110,
    img: "public/images/pexels-daniel-reche-718241-3616956.jpg",
    category: "burger",
  },
  {
    id: 11,
    name: "Chicken Burger",
    desc: "Grilled chicken breast with mayo and fresh vegetables.",
    price: 105,
    img: "public/images/pexels-nishess-shakya-401526881-15076692.jpg",
    category: "burger",
  },
  {
    id: 12,
    name: "Double Burger",
    desc: "Two beef patties with double cheese and bacon.",
    price: 150,
    img: "public/images/pexels-horizon-content-2100060-3915915.jpg",
    category: "burger",
  },
  // Desserts Items
  {
    id: 13,
    name: "Chocolate Cake",
    desc: "Rich chocolate cake with creamy frosting.",
    price: 80,
    img: "public/images/pexels-abhinavcoca-291528.jpg",
    category: "desserts",
  },
  {
    id: 14,
    name: "Tiramisu",
    desc: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.",
    price: 90,
    img: "public/images/istockphoto-1325617678-2048x2048.jpg",
    category: "desserts",
  },
  {
    id: 15,
    name: "Ice Cream Sundae",
    desc: "Vanilla ice cream with chocolate sauce and toppings.",
    price: 70,
    img: "public/images/pexels-bianeyre-1979749.jpg",
    category: "desserts",
  },
  {
    id: 16,
    name: "Cheesecake",
    desc: "Creamy cheesecake with berry topping.",
    price: 85,
    img: "public/images/pexels-valeriya-1639567.jpg",
    category: "desserts",
  },
];

function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredMenu =
    selectedCategory === "all"
      ? menuData
      : menuData.filter((item) => item.category === selectedCategory);

  return (
    <section className="food-menu" id="menu">
      <h2 className="menu-title">Our Menu</h2>

      {/* Category Tabs */}
      <div className="menu-tabs">
        {categoryTabs.map((tab) => (
          <button
            key={tab.id}
            className={`menu-tab ${selectedCategory === tab.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <div className="menu-grid">
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <div
              className="menu-card"
              key={item.id}
              onClick={() => setSelectedItem(item)}
            >
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <span>{item.price} EGP</span>
            </div>
          ))
        ) : (
          <p className="no-items">لا توجد أصناف في هذا القسم.</p>
        )}
      </div>

      {/* Popup / Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selectedItem.img} alt={selectedItem.name} />
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.desc}</p>
            <span className="modal-price">
              {selectedItem.price} EGP
            </span>

            <button onClick={() => setSelectedItem(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FoodMenu;