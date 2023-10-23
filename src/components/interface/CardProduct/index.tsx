import { Product } from "../../../types/Product";
import { CardProductWrapper } from "./styles";

interface CardProductProps {
  product: Product;
  productId: string;
  handleOpenModal: () => void;
  setCurrentProductId: (id: string) => void;
}

export function CardProduct({
  product: { image, name, price, link, guess },
  productId,
  setCurrentProductId,
  handleOpenModal,
}: CardProductProps) {
  return (
    <CardProductWrapper>
      <a href={link} target="_blank">
        <img src={image} alt={name} />
      </a>
      <span>{name}</span>
      <strong>R$ {price}</strong>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCurrentProductId(productId);
          handleOpenModal();
        }}
        disabled={!!guess}
      >
        {guess ? "Reservado" : "Presentear"}
      </button>
    </CardProductWrapper>
  );
}
