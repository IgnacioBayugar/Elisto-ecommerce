export async function getCategories() {
  const response = await fetch('https://dummyjson.com/products/category-list');
  const categories = await response.json();
  return categories;
}
