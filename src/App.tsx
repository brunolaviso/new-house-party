import { useEffect, useState } from "react";
import { CardProduct } from "./components/interface/CardProduct";
import { Section } from "./components/interface/Section";
import { GridCardProducts, ImagePlaceWrapper } from "./styles";
import { api } from "./services/api";
import { Product } from "./types/Product";

interface ProductRecord {
  id: string;
  fields: Product;
  createdTime: string;
}

export function App() {
  const [products, setProducts] = useState<ProductRecord[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setProducts(response.data.records));
  }, []);

  return (
    <>
      <Section backgroundcolor="#e7fcf1">
        <p>
          Criamos esse site para compartilhar com vocês os detalhes da
          organização do nosso chá de casa nova.
        </p>
        <p>
          Para nos presentear, escolha qualquer item da Lista de Presentes.
          Fiquem à vontade.
        </p>
        <p>
          Não poderíamos estar mais felizes em compartilhar este grande passo
          com familiares e amigos tão queridos e que tanto nos apoiam. Queremos
          muito sua presença neste dia tão importante, com muita festa, amor e
          carinho em uma comemoração que irá nos marcar para sempre!
        </p>
      </Section>
      <Section title="O casal">Ainda nao finalizado</Section>
      <Section title="Lista de presentes">
        <GridCardProducts>
          {products.map((product: ProductRecord) => (
            <CardProduct key={product.id} product={product.fields} />
          ))}
        </GridCardProducts>
      </Section>
      <Section title="Edicula Pipipi Popopo" backgroundcolor="#e7fcf1">
        <p>Aguardamos vocês às 12h! Vamos fazer um churrasco com cervejinha!</p>
        <ImagePlaceWrapper>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPSVp8IdxPKhiEmU77fPznHJWHGuO-P7AORntEZ=s680-w680-h510"
            alt=""
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14746.973005355649!2d-48.5649292!3d-22.4762806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c74f8f3d2eb7ed%3A0xdd5ced171ba944de!2zRWTDrWN1bGEgU29sw6FyaXM!5e0!3m2!1spt-BR!2sbr!4v1697859473827!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </ImagePlaceWrapper>
      </Section>
    </>
  );
}
