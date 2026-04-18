// Systematic transformation for API data to financial product model
export function transformToFinancialProduct(apiProduct) {
  // Map categories to financial categories
  const categoryMapping = {
    electronics: 'investment',
    jewelery: 'savings',
    "men's clothing": 'insurance',
    "women's clothing": 'crypto'
  };
  const category = categoryMapping[apiProduct.category] || 'investment';

  // Map price to minimum investment (scale appropriately)
  const minInvestment = Math.round(apiProduct.price * 1000);

  // Assign risk based on category (systematic, not random)
  const riskMapping = {
    investment: 'medium',
    savings: 'low',
    insurance: 'low',
    crypto: 'high'
  };
  const riskLevel = riskMapping[category];

  // Assign return based on risk (consistent relationship)
  const returnMapping = {
    low: () => 5.5, // fixed for demo, could be 3-7
    medium: () => 12.8, // fixed for demo, could be 7-12
    high: () => 25.0 // fixed for demo, could be 12-27
  };

  // Assign liquidity and time horizon
  function assignLiquidity(category, riskLevel) {
    if (category === 'crypto') return 'easy';
    if (riskLevel === 'high') return 'easy';
    if (riskLevel === 'medium') return 'moderate';
    if (riskLevel === 'low' && category === 'insurance') return 'locked';
    return 'easy';
  }
  function assignTimeHorizon(riskLevel) {
    if (riskLevel === 'high') return 'long';
    if (riskLevel === 'medium') return 'long';
    if (riskLevel === 'low') return 'short';
    return 'short';
  }

  return {
    id: apiProduct.id,
    name: apiProduct.title,
    category: category,
    description: apiProduct.description,
    minInvestment: minInvestment,
    riskLevel: riskLevel,
    expectedReturn: parseFloat(returnMapping[riskLevel]().toFixed(2)),
    liquidity: assignLiquidity(category, riskLevel),
    timeHorizon: assignTimeHorizon(riskLevel),
    image: apiProduct.image
  };
}
