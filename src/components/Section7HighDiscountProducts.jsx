import products from "../data/Products";
import HighDiscountCard from "./HighDiscountCard";

function Section7HighDiscountProducts() {
  const highDiscount = [
    products[3],
    products[3],
    products[3],
    products[16],
    products[16],
    products[16],
    products[2],
    products[2],
    products[2],
  ];

  const columns = 3;
  const total = highDiscount.length;
  const itemsInLastRow = total % columns || columns;
  const lastRowStart = total - itemsInLastRow;

  return (
    <div className="grid grid-cols-3 gap-8">
      {highDiscount.map((product, index) => {
        const hasBorder = index < lastRowStart;
        return (
          <HighDiscountCard
            key={index}
            product={product}
            hasBorder={hasBorder}
          />
        );
      })}
    </div>
  );
}

export default Section7HighDiscountProducts;
