async function getMeals(limit) {
    const meals = []
    let i = 0
    while (i < limit) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
        const data = await response.json();
        if (!meals.some(meal => meal.idMeal === data.meals[0].idMeal)) {
            meals.push(parseMeal(data.meals[0]));
            i++;
        }
    }
    return meals;
}

async function getMealById(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const meals = data.meals;
    if (meals) {
        return parseMeal(data.meals[0]);
    }

}

async function getMealByName(name) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    const response = await fetch(url);
    const data = await response.json();
    const meals = data.meals;
    if (meals) {
        for (let i = 0; i < meals.length; i++) {
            meals[i] = parseMeal(meals[i]);
        }
        return meals;
    }
}

async function getRandomMeal() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    const data = await response.json();
    return parseMeal(data.meals[0]);
}

function parseMeal(oldMeal) {
    console.log(oldMeal)
    const newMeal = {
        idMeal: oldMeal.idMeal,
        strMeal: oldMeal.strMeal,
        strDrinkAlternate: oldMeal.strDrinkAlternate,
        strCategory: oldMeal.strCategory,
        strArea: oldMeal.strArea,
        strInstructions: oldMeal.strInstructions,
        instructions: oldMeal.strInstructions.split('STEP').filter(instruction => instruction.trim() !== ""),
        strMealThumb: oldMeal.strMealThumb,
        strTags: oldMeal.strTags ? oldMeal.strTags.split(',').filter(tag => tag.trim() !== "") : [],
        strYoutube: oldMeal.strYoutube,
        ingredients: [],
        measures: [],
        strSource: oldMeal.strSource,
        strImageSource: oldMeal.strImageSource,
        strCreativeCommonsConfirmed: oldMeal.strCreativeCommonsConfirmed,
        dateModified: oldMeal.dateModified
    }

    for (let i = 1; i <= 1000; i++) {
        const ingredient = oldMeal[`strIngredient${i}`];
        if (ingredient?.length > 2) {
            newMeal.ingredients.push(ingredient);
        }
    }
    for (let i = 1; i <= 1000; i++) {
        const measure = oldMeal[`strMeasure${i}`];
        if (measure?.length > 3) {
            newMeal.measures.push(measure);
        }
    }

    if (newMeal.instructions.length === 1) {
        newMeal.instructions = newMeal.instructions[0]
            .split("\n")
            .filter(instruction => instruction.trim() !== "")
    }
    return newMeal;
}

export { getMeals, getMealById,getMealByName, getRandomMeal }
