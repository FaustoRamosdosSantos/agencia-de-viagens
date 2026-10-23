// Seção "Destinos": carrossel com um card por destino.
// Para adicionar um destino: coloque a foto em public/ e acrescente uma linha na lista.
// O carrossel (Swiper) é iniciado em comportamentos.js.
const base = import.meta.env.BASE_URL

const lista = [
  { nome: 'África', arquivo: 'destino-africa.jpg', alt: 'Girafas ao pôr do sol na savana africana' },
  { nome: 'Ásia', arquivo: 'destino-asia.jpg', alt: 'Bangalôs sobre a água, na Ásia' },
  { nome: 'Austrália', arquivo: 'destino-australia.jpeg', alt: 'Canguru na areia clara, com o mar azul-turquesa ao fundo' },
  { nome: 'Brasil', arquivo: 'destino-brasil.webp', alt: 'Dunas brancas e lagoas dos Lençóis Maranhenses' },
  { nome: 'Canadá', arquivo: 'destino-canada.jpeg', alt: 'Lago turquesa cercado por montanhas com neve' },
  { nome: 'Caribe', arquivo: 'destino-caribe.jpeg', alt: 'Banco de areia branca e mar transparente' },
  { nome: 'Estados Unidos', arquivo: 'destino-eua.jpg', alt: 'Skyline de uma cidade dos Estados Unidos' },
  { nome: 'França', arquivo: 'destino-franca.jpg', alt: 'Campos de lavanda na França' },
  { nome: 'Grécia', arquivo: 'destino-grecia.jpg', alt: 'Casas brancas e cúpulas azuis à beira da caldeira' },
  { nome: 'Itália', arquivo: 'destino-italia.jpeg', alt: 'Vila colorida sobre o penhasco, com flores em primeiro plano' },
  { nome: 'Patagônia', arquivo: 'destino-patagonia.jpeg', alt: 'Picos de granito recortados sobre um lago' },
]

function slide(destino) {
  return `
          <div class="swiper-slide">
            <figure class="card">
              <img src="${base}${destino.arquivo}" alt="${destino.alt}" loading="lazy" />
              <figcaption class="card__caption">
                <h3>${destino.nome}</h3>
              </figcaption>
            </figure>
          </div>`
}

export function destinos() {
  const slides = lista.map(slide).join('')

  return `
<section class="section" id="destinos">
  <div class="container container--narrow center">
    <p class="eyebrow">Destinos</p>
    <h2 class="section__title reveal">Alguns destinos que adoro transformar em experiência para você</h2>
  </div>

  <div class="gallery reveal">
    <div class="swiper" id="galeria">
      <div class="swiper-wrapper">${slides}
      </div>
    </div>

    <!-- Setas (desktop) e dots de progresso -->
    <button class="nav-arrow nav-arrow--prev" aria-label="Destino anterior"></button>
    <button class="nav-arrow nav-arrow--next" aria-label="Próximo destino"></button>
    <div class="gallery__dots"></div>
  </div>
</section>
`
}