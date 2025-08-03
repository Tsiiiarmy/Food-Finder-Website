const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Fetch a random meal
export async function getRandomMeal() {
  const res = await fetch(`${BASE_URL}/random.php`);
  const data = await res.json();
  return data.meals[0];
}

// Get a set of random meals
export async function getTopMeals(count = 3) {
  try {
    const responses = await Promise.all(
      Array.from({ length: count }).map(() =>
        fetch(`${BASE_URL}/random.php`)
      )
    );

    const data = await Promise.all(responses.map((res) => res.json()));
    return data.map((d) => d.meals[0]);
  } catch (error) {
    console.error("Error fetching top meals:", error);
    return [];
  }
}


// Search meals by name
export async function searchMeals(query = "") {
  const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
}

// Get meals by category (with full details for category & area)
export async function getMealsByCategory(category) {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await res.json();

  if (!data.meals) return [];

// fetch full details for each meal
  const detailedMeals = await Promise.all(
    data.meals.map(async (meal) => {
      const detailRes = await fetch(`${BASE_URL}/lookup.php?i=${meal.idMeal}`);
      const detailData = await detailRes.json();
      return detailData.meals[0];
    })
  );

  return detailedMeals;
}