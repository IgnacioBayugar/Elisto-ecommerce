export function getCategories(products) {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
}
