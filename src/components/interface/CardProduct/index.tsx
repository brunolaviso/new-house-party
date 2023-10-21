import { Product } from "../../../types/Product";
import { CardProductWrapper } from "./styles";

interface CardProductProps {
  product: Product;
}

export function CardProduct({ product: { image, name, price } }: CardProductProps) {
  return (
    <CardProductWrapper>
      <div>
        <img
          src={image}
          alt={name}
        />
      </div>
      <span>{name}</span>
      <strong>R$ {price}</strong>
      <button>Presentear</button>
    </CardProductWrapper>
  );
}
