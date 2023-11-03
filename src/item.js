import './App.css'
import img from './img/food.jpg'

const menuItems = {
    Salad: [
      { name: "Tuna Salad", ingredient: "Drained Tuna in a medium bowl, plain,green, yoghurt,onion,lettuce,tomato", price: "600" },
      { name: "Tomato Salad", ingredient: "", price: "500" },
      { name: "Lentil and Avocado Salad", ingredient: "", price: "600" },
      { name: "Ethiopian Salad", ingredient: "", price: "550" },
      { name: "Cucumber Salad", ingredient: "", price: "550" },
      { name: "Chicken Salad", ingredient: "", price: "600" },
      { name: "Mixed Salad", ingredient: "", price: "600" },
      { name: "Beans Salad", ingredient: "", price: "00" },
      { name: "White House Special Salad", ingredient: "", price: "1000" },
      { name: "Potato Salad", ingredient: "", price: "500" },
    ],
    Juice: [
      { name: "Fruit Punch", ingredient: "Apple, Mango, Papaye, Watermelon, Strawberry, green and red apple", price: "600" },
      { name: "Papaye Juice", ingredient: "Papaye Slice, Lemmon, Sugar, Water, Vinto", price: "300" },
      { name: "Special Juice", ingredient: "Papaye Juice, Mango Juice, Avocado Juice, Vinto and Honey", price: "350" },
      { name: "Watermelon and Ginger Juice", ingredient: "Slice watermelon, ginger juice, Sugar", price: "250" },
      { name: "Apple Juice", ingredient: "Applce Slice, and Water, vinto", price: "250" },
      { name: "Avocado Juice", ingredient: "Avocado, Sugar, Lemon, Water, Vinto", price: "250" },
    ],
    Lunch: [
      { name: "Conbo Fasting", ingredient: "", price: "600" },
      { name: "Grilled Chicken Breast", ingredient: "", price: "1000" },
      { name: "Chiken Couttlet", ingredient: "", price: "1100" },
      { name: "Half Roasted Chicken", ingredient: "", price: "1500" },
      { name: "Veal Couttlet", ingredient: "", price: "1200" },
      { name: "Fill Steak", ingredient: "", price: "1200" },
      { name: "Fill Goulash", ingredient: "", price: "1000" },
      { name: "Yebeg Tibs(የበግ ጥብስ)", ingredient: "", price: "800" },
    ],
    Pizza: [
      { name: "Meat Lover Pizza", ingredient: "", price: "700" },
      { name: "Vegetable Pizza", ingredient: "", price: "600" },
      { name: "Margarita Pizza", ingredient: "", price: "650" },
      { name: "Tuna Pizza", ingredient: "", price: "700" },
      { name: "Chicken Pizza", ingredient: "", price: "700" },
      { name: "Special Pizza", ingredient: "", price: "800" },
      { name: "Shawerma with Chicken", ingredient: "", price: "700" },
    ],
    Burger: [
      { name: "Beef Burger(Normal)", ingredient: "", price: "850" },
      { name: "Cheese Burger", ingredient: "", price: "1000" },
      { name: "Special Burger", ingredient: "", price: "1200" },
      { name: "Chicken Burger", ingredient: "", price: "1300" },
      { name: "Club Sandwich", ingredient: "", price: "1500" },
      { name: "Fasting Burger (fekafl Burger)", ingredient: "", price: "700" },
      { name: "Fish Sandwich", ingredient: "", price: "800" },
    ],
    Fish: [
      { name: "Fish Couttlet", ingredient: "", price: "500" },
      { name: "Fish Goulash", ingredient: "", price: "550" },
      { name: "Grilled Nile Perch", ingredient: "", price: "750" },
      { name: "Shish Kebab", ingredient: "", price: "550" },
      { name: "Baked Fish", ingredient: "", price: "700" },
    ],
    Soup: [
      { name: "Chicken Cream Soup", ingredient: "", price: "450" },
      { name: "Vegetable Soup", ingredient: "", price: "350" },
      { name: "Minstroni Soup", ingredient: "", price: "350" },
    ],
    Breakfast: [
      { name: "Omelette with Tea", ingredient: "", price: "400" },
      { name: "Special Omelette", ingredient: "", price: "450" },
      { name: "Scramble Egg", ingredient: "", price: "400" },
      { name: "Cabbage Egg", ingredient: "", price: "400" },
      { name: "Pan Cake", ingredient: "", price: "315" },
      { name: "Toast Bread with Jam", ingredient: "", price: "300" },
      { name: "Fried Egg", ingredient: "", price: "350" },
      { name: "Tomato with Egg", ingredient: "", price: "400" },
      { name: "French Toast", ingredient: "", price: "400" },
    ],
    LocalBreakfast: [
      { name: "Fasting Firfir", ingredient: "", price: "450" },
      { name: "Special Ful", ingredient: "", price: "450" },
      { name: "Dulet", ingredient: "", price: "450" },
      { name: "Chechebsa", ingredient: "", price: "450" },
      { name: "Special Chechebsa", ingredient: "", price: "500" },
    ],
  };


  const Item = ({ selectedCategory }) => {
    const filteredItems = menuItems[selectedCategory] || [];
  
    return (
      <div className="all-items">
        <div className="description">
        <h2 className="food-name cat">{selectedCategory}</h2>
          <div className="menu-items">
            {filteredItems.map(item => (
                
              <div key={item.name}>
                <div className="food-item">
                  <div className="food-image">
                    <img id='imgs' src={img} alt="Food" />
                  </div>
                  <div className="food-details">
                    <p className="food-name">{item.name}</p>
                    <p className="des">{item.ingredient}</p>
                    <div className="prices">
                      <h3 id="price">Price</h3>
                      <h3 id="pr">{item.price}Br</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default Item;