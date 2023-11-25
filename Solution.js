const fs = require("fs");

function readJsonFile(fname) {
  try {
    const data = fs.readFileSync(fname, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}

// list all the food items
const foods = readJsonFile("food.json");
console.log("List of all Food items");
console.log(foods);

// Function to fiter the food items by category
function filterFoods(foods, category) {
  return foods.filter((food) => food.category === category);
}

// list all the food items with category vegetables
const vegetables = filterFoods(foods, "Vegetable");
console.log("Food items with category Vegetable");
console.log(vegetables);

// list all the food items with category protien
const fruits = filterFoods(foods, "Fruit");
console.log("Food items with category Fruit");
console.log(fruits);

// list all the food items with category protien
const protein = filterFoods(foods, "Protein");
console.log("Food items with category Protein");
console.log(protein);

// list all the food items with category nuts
const nuts = filterFoods(foods, "Nuts");
console.log("Food items with category Nuts");
console.log(nuts);

// list all the food items with category grains
const grains = filterFoods(foods, "Grain");
console.log("Food items with category Grain");
console.log(grains);

// list all the food items with category dairy
const dairy = filterFoods(foods, "Dairy");
console.log("Food items with category Dairy");
console.log(dairy);

// list all the food items with calorie above 100
function filterFoodsByCalorie(foods, minCal) {
  return foods.filter((food) => food.calorie > minCal);
}
const highCalFoods = filterFoodsByCalorie(foods, 100);
console.log("Food items with calorie above 100");
console.log(highCalFoods);

// list all the food items with calorie below 100
function filterFoodsByCalorie(foods, maxCal) {
  return foods.filter((food) => food.calorie < maxCal);
}
const lowCalFoods = filterFoodsByCalorie(foods, 100);
console.log("Food items with calorie below 100");
console.log(lowCalFoods);

// list all the food items with highest protien content to lowest
function sortProtein(foods) {
  return foods.slice().sort((a, b) => b.protiens - a.protiens);
}
console.log("Food items with highest protein content to lowest");
console.log(sortProtein);

// list all the food items with lowest cab content to highest
function sortCarbohydrate(foods) {
  return foods.slice().sort((a, b) => a.cab - b.cab);
}
const sortCarbs = sortCarbohydrate(foods);
console.log("Food items with lowest cab content to highest");
console.log(sortCarbs);