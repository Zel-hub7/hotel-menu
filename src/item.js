import './App.css'


const menuItems = {
    Salad: [
      { name: "Tuna Salad", ingredient: "Drained Tuna in a medium bowl, plain,green, yoghurt,onion,lettuce,tomato", price: "600" },
      { name: "Tomato Salad", ingredient: "Tomato chilli, onion, garrice parsely, Vinagirette Dressing", price: "500" },
      { name: "Lentil and Avocado Salad", ingredient: "cooked lentil, chilli, onion, local mustared, avocado, Tomato, lemon juice", price: "600" },
      { name: "Ethiopian Salad", ingredient: "cabbage,greter, carrot, parsely, chilli, onion, youger paprika(datta), vegetable sauce", price: "550" },
      { name: "Cucumber Salad", ingredient: "cucumber, onion, chilli, mayonnaise red chilli, vegetable sauce, cheese", price: "550" },
      { name: "Chicken Salad", ingredient: "Tomato, crumber, onion, cheese, cooked chicken meat, Vinaigrette Dressing", price: "600" },
      { name: "Mixed Salad", ingredient: "Only green lattice, crumber, sun flower seeds, onion, mixed fruit(mango, papaye, avocado) crouton breads Vinaigrette Dressing", price: "600" },
      { name: "Beans Salad", ingredient: "Lettuce, CHilli, onion, tomato, sweet corn, green beans, crumber, broccolini, mayonayz dressing", price: "700" },
      { name: "White House Special Salad", ingredient: "crumber, sweet corn, boiled egg, slice beef, potato, apple, mayonayz, avocado", price: "1000" },
      { name: "Potato Salad", ingredient: "Potato dice, parsely, red chilli, mint leaves, Vinaigrette Dressing, mayonayz", price: "500" },
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
      { name: "Conbo Fasting", ingredient: "Rice, spagehite, mixed salad, alcha firfir", price: "600" },
      { name: "Grilled Chicken Breast", ingredient: "chicken breast, colander, mustared, camun, soya sauce, B.B souce, sesame beans, custer oil sauce", price: "1000" },
      { name: "Chiken Couttlet", ingredient: "chicken breast, colander, egg, bread crams, white flour", price: "1100" },
      { name: "Half Roasted Chicken", ingredient: "Half chicken, brown sauce, chicken stock, clevery, carrot leek, tomato, onion, garlic, milk soya sauce, organ camun", price: "1500" },
      { name: "Veal Couttlet", ingredient: "Roll fill beef, rozmering, garlic, soya sauce, white flour, bread crams, egg", price: "1200" },
      { name: "Fill Steak", ingredient: "Roll fille beef, rozmerin, colander, garlic, ginger, soya sauce.", price: "1200" },
      { name: "Fill Goulash", ingredient: "Roll fille beef, onio, tomato, chilli, calander, paprika demi place sauce, soya sauce", price: "1000" },
      { name: "Yebeg Tibs(የበግ ጥብስ)", ingredient: "", price: "800" },
    ],
    Pizza: [
      { name: "Meat Lover Pizza", ingredient: "Dough, grefer, chease, minsed Meat, Pizza sauce, Organo, Onion, Tomato, chilli slice, chilli sauce", price: "700" },
      { name: "Vegetable Pizza", ingredient: "Dough, Mixed cooked vegetable, Carrot, zuhnni broklyn, Onion, Tomato, chilli, organo, seed ovules, sweet cone, chilli sauce", price: "600" },
      { name: "Margarita Pizza", ingredient: "Dough, pizza sauce, mozzarella, parmezan, cheese, french basil, Leucine, chilli sauce", price: "650" },
      { name: "Tuna Pizza", ingredient: "Dough, pizza sauce, tomato, chilli, onion, tuna, french basil, leucine, organo, chilli sauce.", price: "700" },
      { name: "Chicken Pizza", ingredient: "Dough pizza sauce, tomato, chilli, onion, cooked,chicken meat, cheese, organo, beef slice, chilli sauce.", price: "700" },
      { name: "Special Pizza", ingredient: "Dough, pizza sauce, tomato, chilli, onion, organo, tuna, cheese, egg, ovel seeds, slice beef, chilli sauce, mushroom", price: "800" },
      { name: "Shawerma with Chicken", ingredient: "", price: "700" },
    ],
    Burger: [
      { name: "Beef Burger(Normal)", ingredient: "minced meat, bread, rozmerino, egg, leek, chilli, persely, celery, soya sauce, colander, french frice, coctel, onion, tomato, lettice", price: "850" },
      { name: "Cheese Burger", ingredient: "miced meat, bread, rozmerino, egg, leek, chilli, persely, lettuce soya sauce, colander, french fried, coctel sauce, tomato, cheese", price: "1000" },
      { name: "Special Burger", ingredient: "3 slice bread(toast), lettuce onion, chilli, tomato, coctel sauce, miniced or teader meat, beef slice, slice cheese, egg", price: "1200" },
      { name: "Chicken Burger", ingredient: "Bread, lettuce, tomato, onion, coctel sauce, chicken breast", price: "1300" },
      { name: "Club Sandwich", ingredient: "6 slice bread, minced meat, chicken, mayo, egg, lettuce, onion, tomato chilli", price: "1500" },
      { name: "Fasting Burger (fekafl Burger)", ingredient: "mashed potato, shinbra, persely, onion, bread, cream, rozmeriono, organo", price: "700" },
      { name: "Fish Sandwich", ingredient: "Fish Telabiya, onion, tomato, lettuce, coctel sauce", price: "800" },
    ],
    Fish: [
      { name: "Fish Couttlet", ingredient: "Fish Telapiya, wheite flour, egg, bread, crams Acheto, mustard garlic", price: "500" },
      { name: "Fish Goulash", ingredient: "Fish Telapiya, Onion, Tomato, Chilli soya sauce garlic", price: "550" },
      { name: "Grilled Nile Perch", ingredient: "Nile Perch, Colander, Lemon SKin, Soya sauce, Organo, sesame beans", price: "750" },
      { name: "Shish Kebab", ingredient: "Desi, Telapiya fish desi, onion, tomato, chilli white flour(pene), bonbo sugar sesame beans", price: "550" },
      { name: "Baked Fish", ingredient: "Nile perch, colander, mustard, lemon skin, soya sauce, sesame beans", price: "700" },
    ],
    Soup: [
      { name: "Chicken Cream Soup", ingredient: "Onion leet, celery, garlic chicken stock, chicken meat with bones, cream and butter, choppe persy.", price: "450" },
      { name: "Vegetable Soup", ingredient: "Onion, leek, clevery, garlic, carrot, zuhnni, french beans, potato, cabage, V.stock, chopped persy", price: "350" },
      { name: "Minstroni Soup", ingredient: "Onion, leek, garlic, clevery, carrot, zuhnni, french beans, potato, cabbage, french tomato, tomato pesto, v.sto", price: "350" },
    ],
    Breakfast: [
      { name: "Omelette with Tea", ingredient: "Onion, egg, chilli Tomato, and toast bread jam", price: "400" },
      { name: "Special Omelette", ingredient: "Egg, onion, chilli, tomato, Minced meat, Toast bread", price: "450" },
      { name: "Scramble Egg", ingredient: "Egg, Onion, chilli, Tomato, Toast brad jam", price: "400" },
      { name: "Cabbage Egg", ingredient: "Cabbage, carrot, onion, red chhilli, and egg, toast, bread", price: "400" },
      { name: "Pan Cake", ingredient: "Egg, white flour, vanila, milk, and jam", price: "315" },
      { name: "Toast Bread with Jam", ingredient: "Three slice berad and Jam", price: "300" },
      { name: "Fried Egg", ingredient: "Butter, egg", price: "350" },
      { name: "Tomato with Egg", ingredient: "Four slice tomato, freach, tomato, concase, toast bread jam", price: "400" },
      { name: "French Toast", ingredient: "Sliced bread, egg, white flour, oil butter", price: "400" },
    ],
    LocalBreakfast: [
      { name: "Fasting Firfir", ingredient: "Chooped onion, chopped tomato, berbere, and water, slice injera, garlic", price: "450" },
      { name: "Special Ful", ingredient: "chopped onion, chopped tomato, over cooked bean, berbere, egg, tomato, chilli, onion, garlic", price: "450" },
      { name: "Dulet", ingredient: "Mineced meat, local butter, mitmita, koererima, and chilli and onion", price: "450" },
      { name: "Chechebsa", ingredient: "white flour, local butter, korerima, berbere.", price: "450" },
      { name: "Special Chechebsa", ingredient: "white flour, local butter, korerima, berbere, honey, egg", price: "500" },
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