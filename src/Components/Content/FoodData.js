import React from 'react';

// recipeName, ingredienet, description

const foods = [
  {
    recipeName: "Pizza Napoletana",
    origin: "Italy",
    ingredienet: ["00 flour", "tomatoes", "mozzarella di Bufala Campana", "basil", "olive oil", "oregano", "yeast", "salt"],
    description: "This iconic Neapolitan pizza is known for its thin, airy crust with charred spots. It comes in two main variations: marinara (with tomato sauce, garlic, and oregano) and margherita (with tomatoes, mozzarella, and fresh basil)."
  },
  {
    recipeName: "Picanha",
    origin: "Brazil",
    ingredienet: ["Beef (sirloin cap)", "salt"],
    description: "Picanha is a prized cut of beef in Brazil, often grilled and sliced off a skewer. It has a fat cap that adds flavor and juiciness, making it a staple in Brazilian churrasco (barbecue)."
  },
  {
    recipeName: "Pastel de Nata",
    origin: "Portugal",
    ingredienet: ["Flour", "sugar", "milk", "butter", "cinnamon", "eggs", "salt"],
    description: "These traditional Portuguese egg custard tarts are known for their flaky crust and creamy filling, often sprinkled with cinnamon. They originated in Lisbon and are enjoyed worldwide."
  },
  {
    recipeName: "Sushi",
    origin: "Japan",
    ingredienet: ["Vinegared rice", "raw fish (such as tuna or salmon)", "seaweed", "vegetables", "soy sauce", "wasabi", "pickled ginger"],
    description: "Sushi is a Japanese dish featuring vinegared rice combined with various ingredienet, including raw fish and vegetables. It is often served with soy sauce, wasabi, and pickled ginger for added flavor."
  },
  {
    recipeName: "Tacos",
    origin: "Mexico",
    ingredienet: ["Corn or flour tortillas", "meat (such as beef, chicken, or pork)", "cheese", "lettuce", "tomatoes", "onions", "cilantro", "lime", "salsa"],
    description: "Tacos are a traditional Mexican dish consisting of a tortilla filled with various ingredienet. They are versatile and can be customized with different meats, vegetables, and toppings."
  },
  {
    recipeName: "Croissant",
    origin: "France",
    ingredienet: ["Flour", "butter", "sugar", "yeast", "milk", "salt"],
    description: "Croissants are flaky, buttery pastries that originated in France. They are made by layering dough with butter and folding it multiple times to create a light, airy texture."
  }
];

const FoodData = () => {
  return (
    {foods}
  );
};

export default FoodData;