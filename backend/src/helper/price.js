function roundUp(num, precision) {
  return Math.ceil(num * precision) / precision;
}

function calculatePromotionalPrice({ price, discount }) {
  const promotionalPrice =
    Number(price || 0) - (Number(discount || 0) * Number(price || 0)) / 100;

  return roundUp(promotionalPrice, 100);
}

export { calculatePromotionalPrice };
