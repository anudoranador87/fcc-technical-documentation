// =============================================
// BARRA DE PROGRESO DE LECTURA
// =============================================

function actualizarProgreso() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progreso = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = progreso + "%";
}

window.addEventListener("scroll", actualizarProgreso);

// =============================================
// NAV LINK ACTIVO CON INTERSECTIONOBSERVER
// =============================================

const secciones = document.querySelectorAll(".main-section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Quitar activo de todos
        navLinks.forEach((link) => link.classList.remove("active"));

        // Añadir activo al que corresponde
        const id = entry.target.id;
        const linkActivo = document.querySelector(`.nav-link[href="#${id}"]`);
        if (linkActivo) linkActivo.classList.add("active");
      }
    });
  },
  {
    rootMargin: "-20% 0px -70% 0px", // activa cuando la sección está en el tercio superior
  }
);

secciones.forEach((seccion) => observer.observe(seccion));
