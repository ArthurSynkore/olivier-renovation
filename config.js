/**
 * ============================================================
 *  OLIVIER RÉNOVATION — Configuration du site
 *  Modifiez ce fichier pour mettre à jour toutes les infos
 * ============================================================
 */

const CONFIG = {

  // ──────────────────────────────────────────────
  //  INFOS ENTREPRISE
  // ──────────────────────────────────────────────
  company: {
    name:        "Olivier Rénovation",
    tagline:     "Peintre professionnel en Normandie",
    specialty:   "Peinture intérieure & extérieure",
    city:        "Normandie",
    region:      "Normandie",
    phone:       "06 XX XX XX XX",          // ← Mettez votre numéro ici
    phoneHref:   "tel:+336XXXXXXXX",         // ← Format href (ex: tel:+33612345678)
    email:       "contact@olivier-renovation.fr",
    siret:       "",                         // Optionnel
    assurance:   "Décennale n°XXXXXXXX",    // Optionnel

    // Logo : chemin vers votre image (laisser "" pour afficher le texte à la place)
    // Déposez votre fichier dans photos/ puis indiquez le chemin ici
    // Exemples : "photos/logo.png"  "photos/logo.svg"
    logo:        "",
  },

  // ──────────────────────────────────────────────
  //  RÉSEAUX SOCIAUX (laisser vide "" pour masquer)
  // ──────────────────────────────────────────────
  social: {
    facebook:    "",
    instagram:   "",
    google:      "",   // Lien vers fiche Google My Business
  },

  // ──────────────────────────────────────────────
  //  FORMULAIRE DE CONTACT & WEBHOOK N8N
  // ──────────────────────────────────────────────
  form: {
    // Si webhook activé → les données sont envoyées vers n8n
    // Si false → utilise mailto: (email de secours)
    useWebhook:  false,
    webhookUrl:  "https://votre-instance-n8n.com/webhook/XXXXXXXX",
    emailFallback: "contact@olivier-renovation.fr",
  },

  // ──────────────────────────────────────────────
  //  CONTENU — SERVICES
  // ──────────────────────────────────────────────
  services: [
    {
      icon:  "🏠",
      title: "Peinture Intérieure",
      desc:  "Murs, plafonds, boiseries — finitions soignées pour transformer vos pièces en un espace qui vous ressemble.",
    },
    {
      icon:  "🏗️",
      title: "Peinture Extérieure",
      desc:  "Façades, volets, portails — protection durable contre les intempéries avec des peintures haute performance.",
    },
    {
      icon:  "🎨",
      title: "Ravalement de Façade",
      desc:  "Diagnostic, préparation des supports, application — votre façade retrouve son éclat pour des années.",
    },
    {
      icon:  "🛠️",
      title: "Papier Peint & Revêtements",
      desc:  "Pose de papier peint, enduits décoratifs, béton ciré — pour des intérieurs originaux et tendance.",
    },
    {
      icon:  "⭐",
      title: "Petits Travaux",
      desc:  "Retouches, reprises après déménagement, petites réparations — intervention rapide et soignée.",
    },
    {
      icon:  "📋",
      title: "Devis Gratuit",
      desc:  "Déplacement gratuit en Normandie. Devis détaillé et transparent, sans engagement.",
    },
  ],

  // ──────────────────────────────────────────────
  //  CONTENU — AVIS CLIENTS
  // ──────────────────────────────────────────────
  reviews: [
    {
      name:   "Marie-Claire D.",
      city:   "Rouen",
      stars:  5,
      date:   "Janvier 2025",
      text:   "Olivier a refait toutes les pièces de notre appartement. Travail impeccable, finitions parfaites et délais respectés. Je recommande vivement !",
    },
    {
      name:   "Jean-Pierre M.",
      city:   "Caen",
      stars:  5,
      date:   "Novembre 2024",
      text:   "Ravalement de façade de notre maison : résultat magnifique. Professionnel sérieux, propre et ponctuel. Le prix était très correct.",
    },
    {
      name:   "Sophie & Luc T.",
      city:   "Le Havre",
      stars:  5,
      date:   "Septembre 2024",
      text:   "Super prestation pour notre salon et cuisine. Très bon conseil sur les couleurs, peinture de qualité et finitions au top. À recommander les yeux fermés.",
    },
  ],

  // ──────────────────────────────────────────────
  //  DESIGN — COULEURS
  // ──────────────────────────────────────────────
  colors: {
    primary:    "#1B3A5C",   // Bleu marine professionnel
    accent:     "#E8A020",   // Or chaud (dynamisme)
    light:      "#F5F7FA",   // Gris très clair (fond sections)
    white:      "#FFFFFF",
    text:       "#2C3E50",
    textMuted:  "#6B7280",
  },

};

// Export pour usage dans les scripts inline
window.SITE_CONFIG = CONFIG;
