import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({ component: Home });

const WA = "https://chat.whatsapp.com/H5GxyjZ3UsPBw5O9JqS3GE?s=cl&p=a&ilr=4";
const TT = "https://www.tiktok.com/@migajeros_mlbb_?_r=1&_t=ZS-9AEUw0K8WbU";
const gallery = [
  { title: "Dúo de leyenda", note: "El cariño también gana partidas", pos: "0% 0%", kind: "fanart" },
  { title: "Celebramos juntos", note: "Cada temporada deja recuerdos", pos: "33.333% 0%", kind: "event" },
  { title: "El universo MLBB", note: "Héroes, skins y mucho estilo", pos: "66.666% 0%", kind: "heroes" },
  { title: "Poder en cada partida", note: "La energía de nuestro escuadrón", pos: "100% 0%", kind: "power" },
  { title: "Fanny main", note: "Un cable más y sale la jugada", pos: "0% 100%", kind: "fanny" },
  { title: "Skin check", note: "Cuando el lobby se pone serio", pos: "33.333% 100%", kind: "skins" },
  { title: "Vexana mood", note: "Oscura, elegante e imparable", pos: "66.666% 100%", kind: "vexana" },
];

function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = document.querySelectorAll<HTMLElement>(".mig-reveal");
    root.classList.add("mig-motion-ready");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("mig-motion-ready");
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -45px 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      root.classList.remove("mig-motion-ready");
    };
  }, []);

  return (
    <main className="mig-site" id="inicio">
      <div className="mig-topline"><span>COMUNIDAD OFICIAL · MOBILE LEGENDS BANG BANG</span><span>RESPETO · AMISTAD · JUEGO EN EQUIPO</span></div>
      <nav className="mig-nav">
        <a href="#inicio" className="mig-logo"><span className="mig-logo-mark">M</span><span>LOS <b>MIGAJEROS</b><small>COMUNIDAD MLBB</small></span></a>
        <div className="mig-nav-links"><a href="#nosotros">La comunidad</a><a href="#momentos">Galería</a><a href="#normas">Reglamento</a></div>
        <a className="mig-nav-join" href="#unete">ENTRAR AL GRUPO <span>↗</span></a>
      </nav>

      <header className="mig-hero">
        <div className="mig-hero-orb mig-orb-one"/><div className="mig-hero-orb mig-orb-two"/>
        <div className="mig-hero-copy">
          <div className="mig-chip"><span/> TU SQUAD. TU LUGAR. TU COMUNIDAD.</div>
          <h1>NO SOMOS<br/>SOLO <em>JUGADORES.</em></h1>
          <p>Somos LOS MIGAJEROS. Un punto de encuentro para quienes viven Mobile Legends, comparten buenas partidas y convierten cada momento en una historia.</p>
          <div className="mig-hero-actions"><a className="mig-primary" href="#unete">DESCUBRE LA COMUNIDAD <span>↓</span></a><a className="mig-secondary" href={TT} target="_blank" rel="noreferrer">NUESTRO TIKTOK ↗</a></div>
          <div className="mig-hero-proof"><div className="mig-avatar-stack"><i>M</i><i>ML</i><i>★</i></div><span>Una comunidad hecha por jugadores,<br/><b>para jugadores.</b></span></div>
        </div>
        <div className="mig-hero-art" role="img" aria-label="Foto principal de la comunidad: una cocinera sonriente con un cachorro vestido de chef"/>
        <div className="mig-hero-sticker">PLAY<br/><b>TOGETHER</b><span>✦</span></div>
        <div className="mig-hero-bottom"><span>01 / BIENVENIDO A LOS MIGAJEROS</span><span>DESLIZA PARA CONOCERNOS ↓</span></div>
      </header>

      <div className="mig-marquee" aria-label="Valores de la comunidad"><div className="mig-marquee-track"><span>✦ BUENA VIBRA</span><i>✧</i><span>JUEGA A TU MANERA</span><i>✧</i><span>AMISTAD SIN RANGO</span><i>✧</i><span>UNA SOLA SQUAD</span><i>✧</i><span>✦ BUENA VIBRA</span><i>✧</i><span>JUEGA A TU MANERA</span><i>✧</i><span>AMISTAD SIN RANGO</span><i>✧</i><span>UNA SOLA SQUAD</span><i>✧</i></div></div>

      <section className="mig-music" aria-label="Reproductor de música">
        <div className="mig-music-copy"><span className="mig-section-tag">BANDA SONORA MIGAJERA</span><strong>UN POCO DE MÚSICA MIENTRAS EXPLORAS</strong><small>Actívala cuando quieras. La reproducción no comienza automáticamente.</small></div>
        <div className="mig-music-player"><span className="mig-music-note">♫</span><div className="mig-music-track"><b>COQUETA</b><small>Bocchi the Rock x Grupo Frontera x Fuerza Regida (Live)</small></div><audio controls preload="none" aria-label="Reproducir Coqueta" src="/audio/los-migajeros-coqueta.mp3">Tu navegador no puede reproducir este audio.</audio></div>
      </section>

      <section className="mig-intro mig-reveal" id="nosotros">
        <div className="mig-section-tag">MÁS QUE UN GRUPO</div>
        <div className="mig-intro-grid"><h2>UNIDOS POR EL JUEGO.<br/><em>CONECTADOS POR ALGO MÁS.</em></h2><div><p>En LOS MIGAJEROS cada partida es una excusa para conocernos, reírnos, mejorar y compartir la pasión por Mobile Legends.</p><p>No importa tu rango ni tu main: lo importante es la buena vibra, el respeto y las ganas de jugar en equipo.</p></div></div>
        <div className="mig-values-row"><div><b>01</b><span>BUENA VIBRA</span></div><div><b>02</b><span>RESPETO MUTUO</span></div><div><b>03</b><span>PASIÓN POR MLBB</span></div><div><b>04</b><span>AMISTAD REAL</span></div></div>
      </section>

      <section className="mig-gallery mig-reveal" id="momentos">
        <div className="mig-gallery-head"><div><div className="mig-section-tag">NUESTRO LADO MÁS MIGAJERO</div><h2>HÉROES, MEMES<br/>Y <em>MOMENTOS.</em></h2></div><p>Un poquito del universo que compartimos. Porque en esta comunidad siempre hay una historia, una skin favorita o un meme que merece quedarse.</p></div>
        <div className="mig-mosaic">{gallery.map((item, i) => <article className={`mig-tile mig-tile-${i + 1} mig-reveal`} key={item.kind}><div className="mig-tile-image" style={{ backgroundPosition: item.pos }}/><div className="mig-tile-caption"><span>{item.title}</span><small>{item.note}</small></div><b className="mig-tile-index">0{i + 1}</b></article>)}</div>
      </section>

      <section className="mig-quote mig-reveal"><div className="mig-quote-symbol">“</div><p>La mejor jugada no siempre es la que consigue una victoria. A veces es encontrar un equipo con el que quieras volver a jugar.</p><span>ESO ES SER MIGAJERO.</span></section>

      <section className="mig-rules mig-reveal" id="normas">
        <div className="mig-rules-head"><div><div className="mig-section-tag">EL CÓDIGO DEL GRUPO</div><h2>BUENA VIBRA.<br/><em>REGLAS CLARAS.</em></h2></div><p>Queremos que todos se sientan cómodos y seguros. Para cuidar este espacio, estas son las reglas que compartimos.</p></div>
        <div className="mig-rule-list">
          <article><span className="mig-rule-no">01</span><div><h3>RESPETO ENTRE TODOS</h3><p>Trata a los demás integrantes con respeto. Evita insultos, provocaciones y comportamientos que dañen la convivencia.</p></div><span className="mig-rule-icon">✦</span></article>
          <article><span className="mig-rule-no">02</span><div><h3>PRIVACIDAD</h3><ul><li>No compartir información privada de otros miembros.</li><li>No filtrar conversaciones privadas sin permiso.</li><li>No publicar datos personales de otros usuarios.</li></ul></div><span className="mig-rule-icon">◈</span></article>
          <article><span className="mig-rule-no">03</span><div><h3>SISTEMA DE ADVERTENCIAS</h3><p>Las advertencias aplican únicamente para faltas leves: spam, más de 5 stickers seguidos, flood, insultos leves o incumplir alguna regla sin mala intención.</p><p>Cada integrante tendrá 3 advertencias. Al llegar a la tercera, los administradores decidirán si corresponde la expulsión según la gravedad y la reincidencia.</p></div><span className="mig-rule-icon">!</span></article>
          <article className="mig-rule-direct"><span className="mig-rule-no">04</span><div><h3>SANCIÓN DIRECTA</h3><p>Estas conductas pueden ocasionar expulsión inmediata, sin advertencias previas:</p><ul><li>Gore.</li><li>Pornografía o contenido sexual explícito.</li><li>Acoso grave y amenazas.</li><li>Compartir virus o enlaces maliciosos.</li><li>Estafas.</li><li>Filtrar información privada de otros miembros.</li><li>Discriminación grave o suplantación de identidad.</li></ul></div><span className="mig-rule-icon">×</span></article>
        </div>
        <div className="mig-rule-foot">La administración evaluará las faltas según su gravedad y reincidencia para proteger la seguridad, privacidad y tranquilidad del grupo.</div>
      </section>

      <section className="mig-join mig-reveal" id="unete"><div className="mig-join-glow"/><div className="mig-section-tag">TU PRÓXIMA PARTIDA EMPIEZA AQUÍ</div><h2>¿TE GUARDAMOS<br/>UN <em>LUGAR?</em></h2><p>Entra a nuestra comunidad, conoce a los demás Migajeros y comparte tu pasión por Mobile Legends.</p><div className="mig-join-actions"><a className="mig-whatsapp" href={WA} target="_blank" rel="noreferrer"><span>ÚNETE A WHATSAPP</span><b>↗</b></a><a className="mig-tiktok" href={TT} target="_blank" rel="noreferrer"><span>SÍGUENOS EN TIKTOK</span><b>↗</b></a></div><small>Al entrar, recuerda leer y respetar nuestro reglamento.</small></section>
      <footer className="mig-footer"><a href="#inicio" className="mig-logo"><span className="mig-logo-mark">M</span><span>LOS <b>MIGAJEROS</b><small>COMUNIDAD MLBB</small></span></a><span>HECHO CON PASIÓN POR LA COMUNIDAD.</span><a href="#inicio">VOLVER ARRIBA ↑</a></footer>
    </main>
  );
}
