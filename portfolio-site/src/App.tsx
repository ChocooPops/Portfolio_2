// Portfolio – Nahil Rahmani
// Single-file React component using TailwindCSS (no external UI kit required)
// Tip: drop your images into /assets and keep the same filenames as in the data below.
// To export as a static site, mount this component at "/" in your router or render it in index.tsx.

import { useMemo, useState, useEffect } from "react";
import {
  Github, Mail, Phone, MapPin, Link as LinkIcon, ChevronLeft, ChevronRight,
  Download, GraduationCap, BriefcaseBusiness, Layers, Code, Cpu, Database, Settings,
  // 👇 ajoute bien ces trois-là
  User, Film, Gamepad2,
} from "lucide-react";

export default function PortfolioSite() {
  // === DATA (reprend tes infos) ================================================================
  const data = useMemo(() => ({
    hero: {
      name: "Nahil RAHMANI",
      title: "Développeur Full‑Stack | BUT Informatique (IUT Lyon 1)",
      qualities: ["Persévérant", "Astucieux", "Créatif"],
      location: "Lyon (69008)",
      email: "rahmaninahil@gmail.com",
      phone: "06 99 48 12 66",
      github: "https://github.com/ChocooPops?tab=repositories",
      site: "https://www.nahil-rahmani.fr",
      cvUrl: "/CV_RAHMANI_NAHIL.pdf" // Place le PDF à la racine publique
    },
    profil: {
      photo: "profile.jpg", // optionnel: place /public/assets/profile.jpg
      presentation: `Étudiant en BUT Informatique (IUT Lyon 1), je suis passionné par la création d’applications utiles et soignées.
  J’aime concevoir des interfaces propres, structurer le back proprement (SOLID, patterns) et livrer des projets
  robustes. Je suis curieux, persévérant et j’adore apprendre en construisant.`,
      etudes: [
        { titre: "BUT Informatique", ecole: "IUT Lyon 1 — Villeurbanne", annee: "2022 → 2025", details: "Parcours développement, qualité et déploiement." },
        { titre: "Baccalauréat général (Mention Bien)", ecole: "Lycée La Martinière Monplaisir — Lyon", annee: "2019 → 2022", details: "Spécialités scientifiques et projets perso." },
      ],
      passions: [
        { id: "code", icon: "Code", titre: "Programmation", desc: "Projets web & logiciels, qualité de code, petites libs utiles." },
        { id: "cinema", icon: "Film", titre: "Cinéma", desc: "Analyse d’image, narration, inspirations pour l’UX et le motion." },
        { id: "jeu", icon: "Gamepad2", titre: "Jeu vidéo", desc: "Game design, pixel-art, prototypes (runner, A-RPG…)." },
      ]
    },
    accueil: {
      imageCarrousel: [
        "citrouille.png",
        "sportify.png",
        "sportyJump.png",
        "graphe.png",
        "kebab.png",
        "crossyRoad.png",
      ],
      imageCarrouselMobile: [
        "citrouille.png",
        "sportifyMobile.png",
        "sportyJump.png",
        "graphe.png",
        "kebabMobile.png",
        "crossyRoad.png",
      ],
    },
    technologies: {
      LangageTechno: [
        { id: 0, nom: "HTML", image: "html.png", description: "Langage de balisage conçu pour représenter les pages Web.", lien: "https://developer.mozilla.org/fr/docs/Web/HTML" },
        { id: 1, nom: "CSS", image: "css.png", description: "Feuilles de style en cascade.", lien: "https://developer.mozilla.org/fr/docs/Web/CSS" },
        { id: 2, nom: "JavaScript", image: "js.png", description: "Langage de script pour pages Web interactives.", lien: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
        { id: 9, nom: "TypeScript", image: "typescript.png", description: "Sur‑ensemble typé de JavaScript.", lien: "https://www.typescriptlang.org" },
        { id: 3, nom: "Java", image: "java.png", description: "Langage orienté objet haut niveau.", lien: "https://www.java.com/fr/" },
        { id: 4, nom: "C", image: "c.png", description: "Langage impératif bas niveau.", lien: "https://www.cprogramming.com/" },
        { id: 5, nom: "PHP", image: "php.png", description: "Langage serveur pour le Web.", lien: "https://www.php.net/" },
        { id: 6, nom: "Kotlin", image: "kotlin.png", description: "Langage pour JVM et Android.", lien: "https://kotlinlang.org/" },
        { id: 7, nom: "SQL", image: "sql.png", description: "Requêtes sur SGBDR.", lien: "https://www.oracle.com/fr/database/technologies/appdev/sql.html" },
        { id: 8, nom: "NoSQL", image: "nosql.png", description: "Bases non relationnelles.", lien: "https://en.wikipedia.org/wiki/NoSQL" },
      ],
      BDTechno: [
        { id: 0, nom: "Oracle SQL", image: "oracle.png", description: "SGBDR Oracle.", lien: "https://www.oracle.com/fr/database/sqldeveloper/" },
        { id: 1, nom: "phpMyAdmin", image: "phpMyAdmin.png", description: "Admin MySQL/MariaDB.", lien: "https://www.phpmyadmin.net/" },
        { id: 2, nom: "MongoDB", image: "mongoDB.png", description: "Base orientée documents.", lien: "https://www.mongodb.com/fr-fr" },
      ],
      EDITechno: [
        { id: 0, nom: "NetBeans", image: "netbeans.png", description: "IDE pour Java & co.", lien: "https://netbeans.apache.org/front/main/index.html" },
        { id: 1, nom: "Visual Studio Code", image: "visualStudioCode.png", description: "Éditeur extensible.", lien: "https://code.visualstudio.com/" },
        { id: 2, nom: "Android Studio", image: "androidStudio.png", description: "IDE Android.", lien: "https://developer.android.com/studio" },
        { id: 3, nom: "Apps Script", image: "appScript.png", description: "Scripts côté Google.", lien: "https://developers.google.com/apps-script?hl=fr" },
      ],
      FrameworkTechno: [
        { id: 0, nom: "Symfony", image: "symfony.png", description: "Framework PHP MVC.", lien: "https://symfony.com/" },
        { id: 1, nom: "Vue.js", image: "vue.png", description: "Framework SPA.", lien: "https://vuejs.org/" },
        { id: 2, nom: "Angular", image: "angular.png", description: "Framework TypeScript.", lien: "https://angular.dev" },
        { id: 3, nom: "NestJS", image: "nestjs.png", description: "Framework Node côté serveur.", lien: "https://nestjs.com" },
      ],
      OutilTechno: [
        { id: 0, nom: "Docker", image: "docker.png", description: "Conteneurisation.", lien: "https://www.docker.com/" },
        { id: 1, nom: "n8n", image: "n8n.png", description: "Automatisation no‑code.", lien: "https://n8n.io/" },
        { id: 2, nom: "AppSheet", image: "appsheet.png", description: "Apps sans code.", lien: "https://about.appsheet.com/home/" },
        { id: 3, nom: "Notion", image: "notion.png", description: "Notes & projets.", lien: "https://www.notion.so/fr-fr" },
        { id: 4, nom: "GitHub", image: "github.png", description: "Forge Git.", lien: "https://github.com/" },
        { id: 5, nom: "GitLab", image: "gitlab.png", description: "CI/CD & forge.", lien: "https://about.gitlab.com/" },
        { id: 6, nom: "Figma", image: "figma.png", description: "UI/UX & prototypage.", lien: "https://www.figma.com/fr-fr/" },
        { id: 7, nom: "Aseprite", image: "aseprite.png", description: "Pixel art & anim.", lien: "https://aseprite.org/" },
      ],
    },
    projets: {
      majeurs: [
        {
          id: 0,
          nom: "LCGraphe",
          image: ["Graphe/graphe1.png", "Graphe/graphe2.png", "Graphe/graphe3.png", "Graphe/graphe4.png", "Graphe/graphe5.png", "Graphe/graphe6.png"],
          description: "IHM & plus court chemin : guidage A→B via graphe (CSV : listes d’adjacence/successeurs).",
          lien: "https://github.com/ChocooPops/Graphe"
        },
        {
          id: 1,
          nom: "CrousKebab",
          image: ["Kebab/kebab1.png", "Kebab/kebab2.png", "Kebab/kebab3.png", "Kebab/kebab4.png", "Kebab/kebab5.png"],
          description: "Vitrine statique d’un resto Crous (produits, géolocalisation, engagements étudiants).",
          lien: "https://github.com/ChocooPops/CrousResto"
        },
        {
          id: 2,
          nom: "Sportify",
          image: ["Sportify/sportify1.png", "Sportify/sportify2.png", "Sportify/sportify3.png", "Sportify/sportify4.png", "Sportify/sportify5.png", "Sportify/sportify6.png", "Sportify/sportify7.png", "Sportify/sportify8.png", "Sportify/sportify9.png", "Sportify/sportify10.png"],
          description: "Réseau social sport : posts, commentaires, likes, pronostics, avatar & badges, mini‑jeu, points pari.",
          lien: "https://github.com/ChocooPops/Sportify"
        },
      ],
      mineurs: [
        { id: 0, nom: "MVC_Qual.dev", image: ["TP1.png"], description: "IHM MVC : stats d’une promo, histogramme, camembert, CRUD étudiant.", lien: "https://github.com/ChocooPops/TPMVC_etu" },
        { id: 1, nom: "Graphics_Editor Shape", image: ["TP2.png"], description: "Éditeur de scènes (Composite/Factory) : formes groupables, hiérarchie, arborescence.", lien: "https://github.com/ChocooPops/Graphics_Editor_Shape" },
        { id: 2, nom: "Weather_API", image: ["TP3.png"], description: "Météo via API → SQLite3. Pollu/qualité air/temperature par ville.", lien: "https://github.com/ChocooPops/TPWeather_etu" },
        { id: 3, nom: "Pendu", image: ["pendu1.png"], description: "Jeu Web avec auth, mot aléatoire (4k mots SQL), classement, 8 essais.", lien: "https://github.com/ChocooPops/Jeu_du_Pendu" },
      ],
      perso: [
        { id: 0, nom: "Ezougla’s Adventure", image: ["Ezougla/ezougla1.gif", "Ezougla/ezougla2.gif", "Ezougla/ezougla3.gif", "Ezougla/ezougla4.png", "Ezougla/ezougla5.png", "Ezougla/ezougla6.png"], description: "A‑RPG pixel‑art (inspiré Zelda 80‑90) : DA maison, combat/défense.", lien: "https://github.com/ChocooPops/Citrouille-s_Adventure" },
        { id: 1, nom: "Crazy Road", image: ["CrazyRoad/crazyRoad1.png", "CrazyRoad/crazyRoad2.png", "CrazyRoad/crazyRoad3.png", "CrazyRoad/crazyRoad4.png"], description: "Runner 2D type Crossy Road, génération procédurale, évitement d’obstacles.", lien: "https://github.com/ChocooPops/Crazy_Road" },
        { id: 3, nom: "Projet_Bezna", image: ["Bezna/bezna1.png", "Bezna/bezna2.png", "Bezna/bezna3.png", "Bezna/bezna4.png", "Bezna/bezna5.png", "Bezna/bezna6.png"], description: "RPG tour par tour Web : compte, avatar, terrain, 6 monstres (assets pixel‑art maison).", lien: "https://github.com/ChocooPops/Jeu-vid-o-Tour-par-Tour" },
      ],
    },
    competences: [
      {
        id: 0, titre: "Administrer des systèmes informatiques communicants complexes", description: [
          "Configuration IP & communication réseau",
          "Maitrise de protocoles réseau",
          "Analyse de trames (Wireshark)",
        ]
      },
      {
        id: 1, titre: "Création d’une base de données", description: [
          "SQL de base : SELECT/CREATE/UPDATE/DELETE/INSERT",
          "Procédures & fonctions avancées (PL/SQL)",
          "Triggers (PL/SQL)",
          "Recueil de besoins côté client",
        ]
      },
      {
        id: 2, titre: "Optimiser des applications complexes", description: [
          "Modèle MVC, packaging objets",
          "Design Patterns : Composite, Factory, Strategy",
          "Qualité & conventions (SOLID)",
        ]
      },
      {
        id: 3, titre: "Réaliser et développer une application", description: [
          "IHM en langage orienté objet",
          "Site/app Web dynamique déployable",
          "Front‑end (HTML/CSS/JS)",
          "Back‑end (PHP/SQL)",
        ]
      },
      {
        id: 4, titre: "Montage & configuration d’un poste de dev", description: [
          "Programmation système (Bash, assembleur, C shell)",
          "Windows & Linux : install, config, gestion",
          "Notions de virtualisation",
          "Commandes Linux essentielles",
          "Montage matériel d’un PC de A à Z",
        ]
      },
      {
        id: 5, titre: "Travailler & collaborer en équipe", description: [
          "Git/GitForge (flow, PR, branches)",
          "Cahier des charges (SMART, MoSCoW, GANTT)",
          "Méthodes AGILE",
        ]
      },
    ],
    experiences: [
      {
        titre: "Développeur PHP (alternance)", org: "DGFIP – Lyon", date: "sept. 2024 → sept. 2025", points: [
          "Dev & optimisation de scripts PHP",
          "Migration OracleSQL → PostgreSQL",
          "Ségrégation d’environnements",
          "Bugfix sur applis internes",
        ]
      },
      {
        titre: "Développeur low‑code (stage)", org: "Webedia – Levallois‑Perret", date: "avr. 2024 → juin 2024", points: [
          "Préparation de postes utilisateurs",
          "Dév. d’une app mobile (AppSheet/Apps Script)",
          "Automatisation via n8n & APIs",
        ]
      },
      {
        titre: "Président du club informatique", org: "Lycée La Martinière – Lyon", date: "sept. 2021 → juil. 2022", points: [
          "Remise en service de 5+ PC (budget 800€)",
          "Montage complet de 4 PC",
          "Admin systèmes pour la salle de jeux/loisirs",
        ]
      },
    ],
    formation: [
      { titre: "BUT Informatique", org: "IUT Doua – Villeurbanne", date: "sept. 2022 → sept. 2025" },
      { titre: "Master IA (à venir)", org: "Epitech – Lyon 7e", date: "oct. 2025 → sept. 2027" },
      { titre: "Baccalauréat général (mention Bien)", org: "Lycée La Martinière Monplaisir – Lyon", date: "2019 → 2022" },
    ],
  }), []);

  // === STATE ===================================================================================
  const [active, setActive] = useState("accueil");
  const [cat, setCat] = useState<"majeurs" | "mineurs" | "perso">("majeurs");
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const ids = ["accueil", "profil", "projets", "technos", "competences", "experiences", "formation", "contact"];
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = id; break;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // === HELPERS =================================================================================
  const Section = (props: any) => (
    <section {...props} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${props.className || ""}`} />
  );

  const Anchor = ({ id, children }: { id: string; children: any }) => (
    <div id={id} className="scroll-mt-24">{children}</div>
  );

  const Button = ({ href, onClick, icon: Icon, children }: any) => (
    <a
      href={href}
      onClick={onClick}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-2xl border border-slate-300/20 px-4 py-2 text-sm font-medium hover:opacity-90 active:scale-[.98] transition"
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </a>
  );

  const Badge = ({ children }: any) => (
    <span className="inline-flex items-center rounded-full bg-slate-200/50 dark:bg-slate-700/60 px-3 py-1 text-xs font-medium mr-2 mb-2">
      {children}
    </span>
  );

  const Card = ({ children }: any) => (
    <div className="rounded-2xl border border-slate-200/20 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/60 shadow-sm p-5 backdrop-blur">
      {children}
    </div>
  );

  const PlaceholderImg = ({ text }: { text: string }) => (
    <div className="w-full aspect-video grid place-items-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-xl text-slate-500 text-xs select-none">
      <span className="opacity-70">{text}</span>
    </div>
  );

  function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
    const [idx, setIdx] = useState(0);
    const go = (d: number) => setIdx((p) => (p + d + images.length) % images.length);
    const src = images[idx];
    const [error, setError] = useState(false);
    return (
      <div className="relative">
        {error ? (
          <PlaceholderImg text={`${title} – ${src}`} />
        ) : (
          <img
            src={`assets/${src}`}
            alt={`${title} – ${src}`}
            className="w-full aspect-video object-cover rounded-xl border border-slate-200/20 dark:border-slate-800/60"
            onError={() => setError(true)}
          />
        )}
        <button onClick={() => go(-1)} className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/30 dark:border-slate-700/50 backdrop-blur hover:scale-105"><ChevronLeft className="w-4 h-4" /></button>
        <button onClick={() => go(1)} className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 dark:bg-slate-900/70 border border-slate-200/30 dark:border-slate-700/50 backdrop-blur hover:scale-105"><ChevronRight className="w-4 h-4" /></button>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
          {images.map((_, i) => (
            <span key={i} className={`h-1.5 w-6 rounded-full ${i === idx ? "bg-slate-900/80 dark:bg-white/80" : "bg-slate-400/40"}`}></span>
          ))}
        </div>
      </div>
    );
  }

  const TechIcon = ({ icon, title }: { icon: any; title: string }) => (
    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
      {icon}
      <span className="font-medium">{title}</span>
    </div>
  );

  // === RENDER ==================================================================================
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-slate-50">
        {/* NAV */}
        <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-slate-950/50 border-b border-slate-200/30 dark:border-slate-800/50">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
            <a href="#accueil" className="font-semibold tracking-tight">&lt;nahil.dev/&gt;</a>
            <div className="hidden md:flex items-center gap-1 text-sm">
              {[
                { id: "projets", label: "Projets" },
                { id: "profil", label: "Profil" },
                { id: "technos", label: "Technologies" },
                { id: "competences", label: "Compétences" },
                { id: "experiences", label: "Expériences" },
                { id: "formation", label: "Formation" },
                { id: "contact", label: "Contact" },
              ].map(item => (
                <a key={item.id} href={`#${item.id}`} className={`px-3 py-2 rounded-xl hover:bg-slate-100/70 dark:hover:bg-slate-800/60 ${active === item.id ? "bg-slate-100/80 dark:bg-slate-800/70 font-semibold" : ""}`}>{item.label}</a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button href={data.hero.github} icon={Github}>GitHub</Button>
              <button onClick={() => setDark(d => !d)} className="px-3 py-2 rounded-xl border border-slate-300/20 text-sm hover:opacity-90">
                {dark ? "☾" : "☀"}
              </button>
            </div>
          </nav>
        </header>

        {/* ACCUEIL / HERO */}
        <Anchor id="accueil">
          <Section className="py-14">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-xs px-2 py-1 rounded-full border border-slate-300/20 bg-white/70 dark:bg-slate-900/60 mb-4">
                  <Code className="w-4 h-4" /> <span>Développement Web & Logiciel</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                  {data.hero.name}
                </h1>
                <p className="mt-3 text-lg text-slate-600 dark:text-slate-300 max-w-prose">
                  {data.hero.title}. Passionné par la qualité de code (SOLID, design patterns) et le déploiement d’applications.
                </p>
                <div className="mt-4">
                  {data.hero.qualities.map((q) => <Badge key={q}>{q}</Badge>)}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button href={data.hero.cvUrl} icon={Download}>Télécharger le CV</Button>
                </div>
                <div className="mt-6 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {data.hero.location}</div>
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <a href={`mailto:${data.hero.email}`} className="underline decoration-dotted">{data.hero.email}</a></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <a href={`tel:${data.hero.phone.replace(/\s/g, '')}`} className="underline decoration-dotted">{data.hero.phone}</a></div>
                </div>
              </div>
              <div>
                <Card>
                  <h3 className="font-semibold mb-3">Aperçu visuel</h3>
                  <ProjectCarousel images={data.accueil.imageCarrousel} title="Aperçu projets" />
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Glisse pour parcourir quelques visuels (place tes fichiers dans <code>/assets</code>).</p>
                </Card>
              </div>
            </div>
          </Section>
        </Anchor>

        <Anchor id="profil">
          <Section className="py-14">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-5 h-5" />
              <h2 className="text-2xl font-bold">Profil</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Carte Présentation */}
              <Card>
                <h3 className="font-semibold mb-2">Qui suis-je ?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {data.profil.presentation}
                </p>
                {data.profil.photo && (
                  <div className="mt-4">
                    <img
                      src={`assets/${data.profil.photo}`}
                      alt="Photo de profil"
                      className="w-full aspect-video object-cover rounded-xl border border-slate-200/20 dark:border-slate-800/60"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                )}
              </Card>

              {/* Carte Études */}
              <Card>
                <h3 className="font-semibold mb-2">Études</h3>
                <ul className="space-y-3">
                  {data.profil.etudes.map((e: any, i: number) => (
                    <li key={i} className="text-sm">
                      <div className="font-medium">{e.titre}</div>
                      <div className="text-slate-600 dark:text-slate-300">{e.ecole}</div>
                      <div className="text-xs text-slate-500">{e.annee}</div>
                      {e.details && <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">{e.details}</div>}
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Carte Passions */}
              <Card>
                <h3 className="font-semibold mb-2">Passions</h3>
                <ul className="space-y-3">
                  {data.profil.passions.map((p: any) => (
                    <li key={p.id} className="flex items-start gap-3">
                      {/* Icône dynamique */}
                      <div className="mt-0.5">
                        {p.icon === "Code" && <Code className="w-4 h-4" />}
                        {p.icon === "Film" && <Film className="w-4 h-4" />}
                        {p.icon === "Gamepad2" && <Gamepad2 className="w-4 h-4" />}
                      </div>
                      <div className="text-sm">
                        <div className="font-medium">{p.titre}</div>
                        <div className="text-slate-600 dark:text-slate-300">{p.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Section>
        </Anchor>

        {/* PROJETS */}
        <Anchor id="projets">
          <Section className="py-14">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5" />
              <h2 className="text-2xl font-bold">Projets</h2>
            </div>

            <div className="flex gap-2 mb-6">
              {([
                { key: "majeurs", label: "Majeurs" },
                { key: "mineurs", label: "Mineurs" },
                { key: "perso", label: "Perso" },
              ] as const).map(t => (
                <button key={t.key}
                  onClick={() => setCat(t.key)}
                  className={`px-4 py-2 rounded-2xl border cursor-pointer text-sm ${cat === t.key ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent" : "border-slate-300/30 dark:border-slate-700/50"}`}>
                  {t.label}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.projets[cat].map((p: any) => (
                <Card key={p.id}>
                  <ProjectCarousel images={p.image} title={p.nom} />
                  <div className="mt-4">
                    <h3 className="font-semibold text-lg">{p.nom}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
                    <div className="mt-3">
                      <Button href={p.lien} icon={LinkIcon}>Voir le code</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        </Anchor>

        {/* TECHNOLOGIES */}
        <Anchor id="technos">
          <Section className="py-14">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-5 h-5" />
              <h2 className="text-2xl font-bold">Technologies</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <TechBlock title="Langages" icon={<Code className="w-4 h-4" />} items={data.technologies.LangageTechno} />
              <TechBlock title="Bases de données" icon={<Database className="w-4 h-4" />} items={data.technologies.BDTechno} />
              <TechBlock title="Éditeurs / IDE" icon={<Settings className="w-4 h-4" />} items={data.technologies.EDITechno} />
              <TechBlock title="Frameworks & Outils" icon={<Cpu className="w-4 h-4" />} items={[...data.technologies.FrameworkTechno, ...data.technologies.OutilTechno]} />
            </div>
          </Section>
        </Anchor>

        {/* COMPÉTENCES */}
        <Anchor id="competences">
          <Section className="py-14">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-5 h-5" />
              <h2 className="text-2xl font-bold">Compétences</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.competences.map((c: any) => (
                <Card key={c.id}>
                  <details open>
                    <summary className="cursor-pointer font-semibold">{c.titre}</summary>
                    <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                      {c.description.map((d: string, i: number) => <li key={i}>{d}</li>)}
                    </ul>
                  </details>
                </Card>
              ))}
            </div>
          </Section>
        </Anchor>

        {/* EXPÉRIENCES */}
        <Anchor id="experiences">
          <Section className="py-14">
            <div className="flex items-center gap-3 mb-6">
              <BriefcaseBusiness className="w-5 h-5" />
              <h2 className="text-2xl font-bold">Expériences</h2>
            </div>
            <div className="space-y-6">
              {data.experiences.map((e: any, i: number) => (
                <Card key={i}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">{e.titre} <span className="opacity-70">— {e.org}</span></h3>
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{e.date}</div>
                  </div>
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-slate-700 dark:text-slate-300">
                    {e.points.map((p: string, j: number) => <li key={j}>{p}</li>)}
                  </ul>
                </Card>
              ))}
            </div>
          </Section>
        </Anchor>

        {/* FORMATION */}
        <Anchor id="formation">
          <Section className="py-14">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5" />
              <h2 className="text-2xl font-bold">Formation</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {data.formation.map((f: any, i: number) => (
                <Card key={i}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{f.titre}</h3>
                    <span className="text-sm text-slate-600 dark:text-slate-300">{f.date}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{f.org}</p>
                </Card>
              ))}
            </div>
          </Section>
        </Anchor>

        {/* CONTACT */}
        <Anchor id="contact">
          <Section className="py-14">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-5 h-5" />
              <h2 className="text-2xl font-bold">Contact</h2>
            </div>
            <Card>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <TechIcon icon={<Mail className="w-4 h-4" />} title={<a href={`mailto:${data.hero.email}`} className="underline decoration-dotted">{data.hero.email}</a>} />
                <TechIcon icon={<Phone className="w-4 h-4" />} title={<a href={`tel:${data.hero.phone.replace(/\s/g, '')}`} className="underline decoration-dotted">{data.hero.phone}</a>} />
                <TechIcon icon={<MapPin className="w-4 h-4" />} title={data.hero.location} />
              </div>
            </Card>
          </Section>
        </Anchor>

        {/* FOOTER */}
        <footer className="py-10 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} — Nahil Rahmani. Site portfolio construit avec React + Tailwind.</p>
        </footer>
      </div>
    </div>
  );

  function TechBlock({ title, items, icon }: { title: string; items: any[]; icon: any }) {
    return (
      <Card>
        <div className="flex items-center gap-2 mb-4">
          {icon}
          <h3 className="font-semibold">{title}</h3>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {items.map((t: any) => (
            <li key={t.id} className="flex gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200/30 dark:border-slate-700/50 bg-white/70 dark:bg-slate-900/60 grid place-items-center">
                {/* Fallback si l’icône n’est pas présente */}
                <img src={`assets/techno/${t.image}`} alt={t.nom} className="w-10 h-10 object-contain p-1" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }} />
                <span className="text-[10px] px-1 text-slate-500">{t.nom}</span>
              </div>
              <div>
                <div className="font-medium leading-tight">{t.nom}</div>
                <div className="text-xs text-slate-600 dark:text-slate-300">{t.description}</div>
                <a href={t.lien} target="_blank" rel="noreferrer" className="text-xs underline decoration-dotted">Doc</a>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    );
  }
}
