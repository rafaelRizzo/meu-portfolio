const NAVIGATION_KEYS = new Set(["Tab", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"])

/**
 * Marca no <html> como o usuário está navegando (`data-input="keyboard" | "pointer"`).
 * O index.css só mostra o anel de foco no modo teclado: o `:focus-visible` nativo também liga
 * quando se aperta qualquer tecla (espaço, "/", PageDown) com um botão focado depois de um clique.
 */
export function trackInputModality() {
  const root = document.documentElement

  window.addEventListener(
    "keydown",
    (event) => {
      if (NAVIGATION_KEYS.has(event.key)) root.dataset.input = "keyboard"
    },
    true,
  )
  window.addEventListener("pointerdown", () => (root.dataset.input = "pointer"), true)
}
