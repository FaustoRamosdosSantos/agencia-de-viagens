// Seção "Contato" (WhatsApp e e-mail) e o rodapé.
// Troque os dois valores abaixo pelos contatos reais.
const whatsapp = 'https://wa.me/5500000000000'
const email = 'seu.email@exemplo.com'

export function contato() {
  const ano = new Date().getFullYear()

  return `
<section class="section section--alt center" id="contato">
  <div class="container container--narrow">
    <p class="eyebrow">Contato</p>
    <h2 class="section__title reveal">Vamos planejar a próxima viagem?</h2>
    <p class="lead reveal">Diga-me o seu destino e nós traçamos o caminho juntos.</p>

    <!-- Logo do WhatsApp: balão verde com o telefone vazado em branco.
         Sem texto visível, o aria-label é a única descrição para leitor de tela. -->
    <a class="btn-whats reveal" href="${whatsapp}"
       target="_blank" rel="noopener" aria-label="Conversar pelo WhatsApp">
      <svg viewBox="0 0 32 32" width="56" height="56" aria-hidden="true" focusable="false">
        <path fill="#25D366" d="M16 0a16 16 0 0 0-13.7 24.3L0 32l7.9-2.2A16 16 0 1 0 16 0z" />
        <path fill="#FFFFFF" d="M11.7 8.6c-.3-.6-.5-.6-.8-.7h-.7c-.2 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.8 1.6 4c.2.3 2.7 4.3 6.7 5.9 3.3 1.3 4 1 4.7.9.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.7-.5-.4-.2-2.3-1.1-2.6-1.2-.4-.2-.6-.2-.9.2-.2.3-1 1.2-1.2 1.4-.2.3-.4.3-.8.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.3 0-.5.2-.7l.6-.7c.2-.2.2-.4.3-.7.1-.2 0-.5 0-.7-.1-.2-.9-2.2-1.2-2.9z" />
      </svg>
    </a>

    <p class="contact__mail reveal">
      <a href="mailto:${email}">${email}</a>
    </p>
  </div>
</section>

<footer class="footer">
  <p>© ${ano} Fausto Ramos · Todos os direitos reservados</p>
</footer>
`
}
