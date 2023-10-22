import { Product } from "../../../types/Product";
import { CardProductWrapper } from "./styles";

interface CardProductProps {
  product: Product;
  handleOpenModal: () => void;
}

export function CardProduct({
  product: { image, name, price },
  handleOpenModal
}: CardProductProps) {
  return (
    <>
      <CardProductWrapper>
        <div>
          <img src={image} alt={name} />
        </div>
        <span>{name}</span>
        <strong>R$ {price}</strong>
        <button onClick={handleOpenModal}>Presentear</button>
      </CardProductWrapper>
    </>
  );
}
