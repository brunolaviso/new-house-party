import { useEffect, useState } from "react";
import { CardProduct } from "./components/interface/CardProduct";
import { Section } from "./components/interface/Section";
import { GridCardProducts, Hero, ImagePlaceWrapper } from "./styles";
import { api } from "./services/api";
import { Product } from "./types/Product";
import { Modal } from "./components/interface/Modal";
// import { Header } from "./components/interface/Header";
import { Countdown } from "./components/interface/Countdown";
import { Footer } from "./components/interface/Footer";

interface ProductRecord {
  id: string;
  fields: Product;
  createdTime: string;
}

export function App() {
  const [products, setProducts] = useState<ProductRecord[]>([]);
  const [open, setOpen] = useState(false);
  const [currentProductId, setCurrentProductId] = useState("");

  function fetchProducts() {
    api
      .get("products", {
        params: {
          view: "Grid view",
        },
      })
      .then((response) => {
        setProducts(response.data.records);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function handleOpenModal() {
    setOpen(true);
  }

  return (
    <>
      {/* <Header /> */}
      <Hero>
        <h1>Yasmin e Bruno</h1>
        <p>02 de dezembro</p>
        <span className="scroll-down-arrow" />
      </Hero>
      <Countdown />
      <Section title="Prólogo">
        <p>
          Não poderíamos estar mais felizes em compartilhar este grande passo
          com familiares e amigos tão queridos e que tanto nos apoiam. Queremos
          muito sua presença neste dia tão importante, com muita festa, amor e
          carinho em uma comemoração que irá nos marcar para sempre!
        </p>
        <p>
          Para facilitar a organização deste dia incrível criamos esse site para
          compartilhar com vocês os detalhes do nosso chá de casa nova.
        </p>
        <p>
          Separamos, ainda, uma Lista de Presentes dos itens que mais precisamos
          para o nosso lar, fique à vontade para selecionar o presente que mais
          combina com você e a nossa história juntos!
        </p>
      </Section>
      <Section title="O casal" backgroundcolor="#e7fcf1">
        <p>
          De uma amizade de colegial nasceu um amor que já perdura há cinco
          anos. Entre muitas risadas, conquistas e aventuras, traçamos nossa
          história, rodeados de pessoas que sempre nos apoiaram e participaram
          de cada boa memória que guardamos em nossos corações. Agora, chegou a
          hora de darmos mais um passo para a nossa pequena família que
          formamos.
        </p>
        <p>
          Nos unir em uma nova cidade pode parecer assustador, mas ao lado das
          pessoas certas sabemos que podemos enfrenta qualquer desafio. Por
          isso, pensamos em cada detalhe desse dia especial, para que possamos
          aproveitar todos juntos o início desse novo capítulo de nossa
          história.
        </p>
      </Section>
      <Section title="Lista de presentes">
        <p>
          Para nos presentear, você poderá escolher qualquer item da Lista de
          Presentes, ou escolher algum presente de sua preferência e nos
          surpreender! Todos as fotos e links (é só você clicar na imagem do
          presente) são meramente ilustrativos, não sendo necessário comprar de
          uma loja específica. Os itens de decoração, quadros e porta-retratos
          não necessitam ser do tema da foto ou da loja escolhida, deixamos isso
          livre para a sua imaginação.
        </p>
        <p>
          Caso no ícone do presente esteja escrito "reservado" significa quem
          alguém chegou primeiro! Agora você pode escolher outra coisa que
          combine com você!
        </p>
        <p className="italic">
          {`Para enviar o presente direto para o nosso novo Lar e não levar no dia
          do Chá de Casa Nova, nosso novo endereço é: ${
            import.meta.env.VITE_HOUSE_ADDRESS
          }`}
        </p>

        <GridCardProducts>
          {products.map((product: ProductRecord) => (
            <CardProduct
              key={product.id}
              product={product.fields}
              handleOpenModal={handleOpenModal}
              productId={product.id}
              setCurrentProductId={setCurrentProductId}
            />
          ))}
        </GridCardProducts>
      </Section>
      <Section title="Local do evento" backgroundcolor="#e7fcf1">
        <p>
          Nossa comemoração será realizada na edicula solaris. Serviremos
          churrasco e cervejinha. Caso queira trazer algo diferente para beber é
          por sua conta e risco.
        </p>
        <p>
          R. Antônio Petri, 345 - Distrito Industrial, Barra Bonita - SP,
          17340-000
          <br />A partir das 12h
        </p>
        <p>
          Aguardamos vocês para comemorar conosco esse momento tão especial!
        </p>
        <ImagePlaceWrapper>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPSVp8IdxPKhiEmU77fPznHJWHGuO-P7AORntEZ=s680-w680-h510"
            alt=""
          />
        </ImagePlaceWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14746.973005355649!2d-48.5649292!3d-22.4762806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c74f8f3d2eb7ed%3A0xdd5ced171ba944de!2zRWTDrWN1bGEgU29sw6FyaXM!5e0!3m2!1spt-BR!2sbr!4v1697859473827!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        ></iframe>
      </Section>
      <Footer />
      <Modal
        open={open}
        setOpen={setOpen}
        currentProductId={currentProductId}
        fetchProducts={fetchProducts}
      />
    </>
  );
}
