// Menu sanduíche (botão redondo + painel lateral) e o hero com a marca.
// O comportamento do menu (abrir/fechar) fica em comportamentos.js.
export function hero() {
  return `
<!-- ===== MENU: botão fixo que abre um painel lateral ===== -->
<button class="menu-btn" id="menuBtn" type="button"
        aria-label="Abrir menu" aria-expanded="false" aria-controls="menuPainel">
  <svg class="icone-abrir" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" aria-hidden="true">
    <line x1="5" y1="8" x2="19" y2="8" /><line x1="5" y1="12" x2="19" y2="12" /><line x1="5" y1="16" x2="19" y2="16" />
  </svg>
  <svg class="icone-fechar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" aria-hidden="true">
    <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
  </svg>
</button>

<div class="menu-overlay" id="menuOverlay"></div>

<nav class="menu-painel" id="menuPainel" aria-label="Seções do site">
  <ul>
    <li><a href="#sobre">Sobre mim</a></li>
    <li><a href="#destinos">Destinos</a></li>
    <li><a href="#contato">Contato</a></li>
  </ul>
</nav>

<!-- ===== HERO: marca em texto (no lugar do logo) ===== -->
<header class="hero" id="topo">
  <h1 class="hero__marca">Fausto Ramos</h1>
  <p class="hero__sub">Viagens &amp; Turismo</p>
</header>
`
}
