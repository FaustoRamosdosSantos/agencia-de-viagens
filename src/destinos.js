// Seção "Destinos": carrossel com um card por destino.
// Para adicionar um destino, acrescente o nome na lista abaixo.
// O carrossel (Swiper) é iniciado em comportamentos.js.
const lista = [
  'África',
  'Ásia',
  'Austrália',
  'Brasil',
  'Canadá',
  'Caribe',
  'Estados Unidos',
  'França',
  'Grécia',
  'Itália',
  'Patagônia',
]

function slide(nome) {
  return `
          <div class="swiper-slide">
            <figure class="card">
              <!-- placeholder da foto: troque por <img src="..." alt="..." loading="lazy"> -->
              <div class="placeholder">foto do destino</div>
              <figcaption class="card__caption">
                <h3>${nome}</h3>
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
