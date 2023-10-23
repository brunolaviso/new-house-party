import { Product } from "../../../types/Product";
import { CardProductWrapper } from "./styles";

interface CardProductProps {
  product: Product;
  handleOpenModal: () => void;
}

export function CardProduct({
  product: { image, name, price, guess },
  handleOpenModal
}: CardProductProps) {
  return (
    <a href="https://www.google.com" target="_blank">
      <CardProductWrapper>
        <div>
          <img src={image} alt={name} />
        </div>
        <span>{name}</span>
        <strong>R$ {price}</strong>
        <button onClick={handleOpenModal} disabled={!!guess}>
          {guess ? "Reservado" : "Presentear"}
        </button>
      </CardProductWrapper>
    </a>
  );
}
