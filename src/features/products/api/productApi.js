export async function fetchProductsByCategory(limitPerCategory = 10) {
  try {
    const categoriesRes = await fetch('https://dummyjson.com/products/categories');
    const categories = await categoriesRes.json();

    if (!Array.isArray(categories)) return [];

    const fetches = categories.map(categoryObj =>
      fetch(`https://dummyjson.com/products/category/${categoryObj.slug}?limit=${limitPerCategory}`)
        .then(res => res.json())
        .then(data => Array.isArray(data.products) ? data.products : [])
        .catch(() => [])
    );

    const productsByCategory = await Promise.all(fetches);
    return productsByCategory.flat();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
}
