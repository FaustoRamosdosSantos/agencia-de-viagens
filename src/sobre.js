// Seção "Sobre mim": foto (placeholder), texto de apresentação e citação.
export function sobre() {
  return `
<section class="section section--alt" id="sobre">
  <div class="container about">

    <div class="about__photo-wrap reveal">
      <!-- placeholder da foto: troque por <img class="about__photo" src="..." alt="Retrato de Fausto Ramos"> -->
      <div class="placeholder">foto</div>
    </div>

    <div class="about__text reveal">
      <p class="eyebrow">Sobre mim</p>
      <h2 class="section__title">Viajar é a minha paixão — <em>e a arte de fazer isso bem é a minha profissão.</em></h2>

      <p>
        Sou o Fausto, fundador desta agência de viagens. Sou apaixonado pela vida e, sobretudo,
        pela arte de transformar um destino em uma experiência verdadeiramente única —
        desenhada exclusivamente para quem a vive.
      </p>
      <p>
        Viajante por vocação, sempre fui referência entre amigos e colegas: elaboro roteiros
        fora do óbvio, com um olhar refinado para os detalhes que fazem toda a diferença.
      </p>
      <p>
        Foi essa vocação que me levou a criar esta agência — dedicada a quem busca mais do que
        uma viagem: busca uma experiência pensada exclusivamente para o seu estilo, seu tempo,
        suas expectativas e que esteja alinhada com o seu budget.
      </p>

      <blockquote class="about__quote">
        Nunca dois roteiros iguais, porque nenhum viajante é igual ao outro.
      </blockquote>
    </div>

  </div>
</section>
`
}
