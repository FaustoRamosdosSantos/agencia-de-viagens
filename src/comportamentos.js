// Comportamentos do site: carrossel, animação de entrada no scroll e menu.
// Precisa rodar DEPOIS que o main.js desenha as seções (ver main.js).
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

function iniciarCarrossel() {
  new Swiper('#galeria', {
    slidesPerView: 1.08,
    spaceBetween: 16,
    grabCursor: true, // arraste com o mouse no desktop
    speed: 600,
    pagination: {
      el: '.gallery__dots',
      clickable: true,
    },
    navigation: {
      nextEl: '.nav-arrow--next',
      prevEl: '.nav-arrow--prev',
    },
    breakpoints: {
      // quantos cards aparecem por largura de tela
      768: { slidesPerView: 1.6, spaceBetween: 24 },
      1024: { slidesPerView: 2.2, spaceBetween: 28 },
    },
  })
}

function iniciarReveal() {
  const alvos = document.querySelectorAll('.reveal')

  if (!('IntersectionObserver' in window)) {
    alvos.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible')
          observador.unobserve(entrada.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  alvos.forEach((el) => observador.observe(el))
}

function iniciarMenu() {
  const botao = document.getElementById('menuBtn')
  const painel = document.getElementById('menuPainel')
  const overlay = document.getElementById('menuOverlay')

  if (!botao || !painel || !overlay) return

  const abrir = () => {
    botao.classList.add('is-open')
    painel.classList.add('is-open')
    overlay.classList.add('is-open')
    botao.setAttribute('aria-expanded', 'true')
    botao.setAttribute('aria-label', 'Fechar menu')
    document.body.classList.add('menu-aberto')
  }

  const fechar = () => {
    botao.classList.remove('is-open')
    painel.classList.remove('is-open')
    overlay.classList.remove('is-open')
    botao.setAttribute('aria-expanded', 'false')
    botao.setAttribute('aria-label', 'Abrir menu')
    document.body.classList.remove('menu-aberto')
  }

  botao.addEventListener('click', () => {
    if (painel.classList.contains('is-open')) fechar()
    else abrir()
  })

  overlay.addEventListener('click', fechar)

  // Numa página única, clicar num item do menu leva à seção e fecha o painel
  painel.querySelectorAll('a').forEach((link) => link.addEventListener('click', fechar))

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && painel.classList.contains('is-open')) {
      fechar()
      botao.focus()
    }
  })
}

export function iniciarComportamentos() {
  iniciarCarrossel()
  iniciarReveal()
  iniciarMenu()
}
