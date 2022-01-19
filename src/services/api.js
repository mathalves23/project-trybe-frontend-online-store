export async function getCategories() {
  // Implemente aqui
  const apiUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(apiUrl).then((res) => res.json());
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const apiUrl = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const teste = await fetch(apiUrl).then((res) => res.json());
  return teste;
}
