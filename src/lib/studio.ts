export const studio = {
  name: "art & energy",
  shortName: "art&energy",
  practitioner: "Giovanna Ferrari",
  tagline: "Reiki and intuitive art in a quiet studio.",
  description:
    "Art & Energy is a private Reiki studio with Giovanna Ferrari. Sessions combine Usui Reiki with space to rest, listen, and — when it feels right — make a simple drawing of what moved.",
  email: "giovanna.ferrari.art@gmail.com",
  phoneLabel: "By appointment",
  addressLines: ["Private studio", "Visits by appointment"],
  instagram: "@giovanna.ferrari.art",
  instagramUrl: "https://instagram.com/giovanna.ferrari.art",
} as const;

// The place sessions are held. Address is a placeholder — update before going
// live; the exact door is shared on booking (see `location.note`).
export const location = {
  name: "Atithi Studios",
  intro: "The room where sessions are held.",
  addressLines: ["1020 N. Canal Street PA 15215"],
  neighborhood: "Sharpsburg, Pennsylvania",
  note: "The exact door and buzzer are sent when your appointment is confirmed.",
  // OpenStreetMap embed — no API key required.
  mapEmbedSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=-79.9379%2C40.4917%2C-79.9259%2C40.4977&layer=mapnik&marker=40.49474%2C-79.93190",
  mapLink: "https://www.openstreetmap.org/?mlat=40.49474&mlon=-79.93190#map=17/40.49474/-79.93190",
} as const;

export type PriceTier = {
  label: string;
  amount: string;
  note?: string;
};

export type Session = {
  id: string;
  name: string;
  featured?: boolean;
  duration: string;
  durationNote?: string;
  price: string;
  prices?: PriceTier[];
  summary: string;
  details: string;
  forWhom: string;
  link?: { href: string; label: string };
};

export const sessions: Session[] = [
  {
    id: "intuitive-energy-readings",
    name: "Intuitive energy readings",
    duration: "Via email or Zoom",
    price: "from $35",
    prices: [
      { label: "Via email", note: "I only need a picture", amount: "$35" },
      { label: "Via Zoom", amount: "$50" },
    ],
    summary:
      "During an energy reading, I intuitively tune into your energy using a recent picture and map what I perceive through lines, circles, and patterns. This visual map can reveal areas that may feel blocked, overactive, or underactive, offering insight into how these energetic imbalances may be showing up in different areas of your life.",
    details:
      "During an energy reading, I intuitively tune into your energy using a recent picture and map what I perceive through lines, circles, and patterns. This visual map can reveal areas that may feel blocked, overactive, or underactive, offering insight into how these energetic imbalances may be showing up in different areas of your life.",
    forWhom: "",
    link: { href: "/sample-reading", label: "Read a sample energy reading" },
  },
  {
    id: "reiki-and-reading",
    name: "Reiki + Intuitive energy readings",
    duration: "1.5 hrs",
    price: "$140",
    summary:
      "First I do an intuitive energy reading to map your energy centers to explore where you may be experiencing energetic blocks, overactivity, or depletion. This mapping provides a guide for what areas may benefit from attention. We then use Reiki to focus on those areas, supporting the flow and balance of your energy.",
    details:
      "First I do an intuitive energy reading to map your energy centers to explore where you may be experiencing energetic blocks, overactivity, or depletion. This mapping provides a guide for what areas may benefit from attention. We then use Reiki to focus on those areas, supporting the flow and balance of your energy.",
    forWhom: "",
  },
  {
    id: "reiki",
    name: "Reiki",
    duration: "30 min or 1 hour",
    price: "from $75",
    prices: [
      { label: "30 min", amount: "$75" },
      { label: "1 hour", amount: "$125" },
    ],
    summary:
      "Relax, restore, and reconnect through a gentle Reiki energy healing session.",
    details:
      "Relax, restore, and reconnect through a gentle Reiki energy healing session.",
    forWhom: "",
  },
  {
    id: "make-a-painting",
    name: "If life throws you lemons, make a painting",
    duration: "2 hrs",
    price: "$95",
    summary:
      "A playful, intuitive painting session where you turn your feelings, experiences, and whatever life throws your way into art. No painting experience needed, just bring yourself, and I'll guide you through the process. All materials provided.",
    details:
      "A playful, intuitive painting session where you turn your feelings, experiences, and whatever life throws your way into art. No painting experience needed, just bring yourself, and I'll guide you through the process. All materials provided.",
    forWhom: "",
  },
];

export type BookingOption = {
  id: string;
  sessionId: string;
  label: string;
};

export const bookingOptions: BookingOption[] = [
  {
    id: "intuitive-energy-readings-email",
    sessionId: "intuitive-energy-readings",
    label: "Intuitive energy readings $35 via email",
  },
  {
    id: "intuitive-energy-readings-zoom",
    sessionId: "intuitive-energy-readings",
    label: "Intuitive energy readings $50 via Zoom",
  },
  {
    id: "reiki-and-reading",
    sessionId: "reiki-and-reading",
    label: "Reiki + Intuitive energy readings · 1.5 hrs · $140",
  },
  {
    id: "reiki-30",
    sessionId: "reiki",
    label: "Reiki · 30 min · $75",
  },
  {
    id: "reiki-60",
    sessionId: "reiki",
    label: "Reiki · 1 hour · $125",
  },
  {
    id: "make-a-painting",
    sessionId: "make-a-painting",
    label: "If life throws you lemons, make a painting · 2 hrs · $95",
  },
];

export function resolveBookingOptionId(param: string) {
  if (bookingOptions.some((option) => option.id === param)) return param;
  const matches = bookingOptions.filter((option) => option.sessionId === param);
  return matches.length === 1 ? matches[0].id : "";
}

export const sampleReading = {
  href: "/sample-reading",
  staticHref: "sample-reading.html",
  cta: "Read a sample energy reading",
  eyebrow: "Sample energy reading",
  title: "Man of Sadness",
  image: {
    src: "/gallery/10energy.jpg",
    alt: "Man of Sadness, an energy mapping drawing in a sketchbook",
    width: 843,
    height: 1024,
  },
  bookHref: "/?session=intuitive-energy-readings&intent=booking#contact",
  staticBookHref: "?session=intuitive-energy-readings&intent=booking#contact",
  bookLabel: "Book now",
  closeLabel: "Close",
  preamble: [
    "If this is your first time reading one of my assessments, let me explain how I conduct my readings.",
    "I begin by focusing on the client's photograph until I feel connected to their energy. Once that connection is established, I often experience a strong vibration throughout my body. When I receive confirmation, I allow the process to unfold.",
    "My hand moves through automatic drawing. I do not consciously decide where the lines should go. I allow the lines to flow without judgement.",
    "The drawing represents the client's energetic centers. These are not intended to represent the traditional seven chakras. Rather, they are intuitive representations of how I perceive energy flowing and interacting throughout the person's energetic field.",
    "Each cluster represents a distinct energetic center. Their size, shape, density, and the way they connect with one another provide intuitive insights into emotional patterns, mental processes, and areas where energy appears to flow freely or become restricted.",
    "The interpretations that follow are based on the intuitive impressions I received during the reading. They are intended as symbolic insights for reflection rather than psychological or medical diagnoses.",
  ],
  sections: [
    {
      heading: "Mental and Throat Energy Centers",
      paragraphs: [
        "The querent's mental energy appeared relatively organized. The lines were structured with minimal overlap, suggesting an active and focused mind.",
        "What immediately stood out was the strong conjunction between the mental and throat energy centers.",
        "Intuitively, this suggested someone who processes thoughts quickly and communicates in a spontaneous, direct way. He may sometimes express thoughts before fully processing the emotions behind them.",
        "I also have the impression of someone who experiences emotional fluctuations. He could appear calm and composed one moment, then suddenly become frustrated or overwhelmed before returning to his usual state.",
        "On the right side of the throat center, several energy lines drifted away from the main cluster rather than remaining integrated within it. To me, this represented emotional energy being released through communication.",
        "My intuitive impression was that, during moments of emotional stress or conflict, frustration may sometimes be expressed through words that feel sharper than intended.",
      ],
    },
    {
      heading: "Heart Energy Center",
      paragraphs: [
        "The heart center appeared to be of average size, suggesting a healthy capacity for love and emotional connection. However, its internal structure was noticeably more complex and disorganized than the mental and throat centers.",
        "Around the outer edge of the cluster, the energy formed an intricate, guarded pattern. This suggested emotional protectiveness and a possible difficulty allowing others to fully access his vulnerable side.",
        "The most striking feature was a dense black energetic blockage near the center of the heart.",
        "Intuitively, I perceived this as accumulated emotional pain that appeared to have been carried for many years. While loneliness in adulthood may have contributed to this feeling, I imagine tough earlier emotional experiences, particularly those connected to childhood.",
        "Energetically, I sensed someone who deeply desires closeness and intimacy while simultaneously carrying a fear of emotional vulnerability. This creates an internal conflict: a longing to love and be loved while also feeling the need to protect oneself from emotional pain. This energetic pattern appeared to be one possible factor impacting negatively his romantic relationships.",
      ],
    },
    {
      heading: "Solar Plexus and Sacral Energy Centers",
      paragraphs: [
        "The sacral center appeared highly contracted, almost as though it were collapsing inward. It was also noticeably smaller than the other energetic centers.",
        "My intuitive impression was that this contraction reflected an early emotional wound involving shame, criticism, or the feeling that his authentic self was not fully accepted.",
        "In my experience, when this center appears restricted, themes involving confidence, intimacy, creativity, emotional expression, and feeling safe in relationships often emerge.",
        "I also sensed that this energetic contraction could correspond symbolically with tension held in the lower abdomen or digestive discomfort. However, energetic impressions should never be interpreted as medical diagnoses.",
        "The solar plexus, often associated with self-worth, personal power, and relationships with authority figures, appeared closely connected to this contracted sacral energy.",
        "It felt like unresolved emotional dynamics involving a father or father figure whose communication style may have felt intimidating, critical, or emotionally difficult during childhood.",
        "This was shared as an intuitive impression for reflection, not as a conclusion about what objectively happened or as an assignment of blame.",
      ],
    },
    {
      heading: "Conclusion",
      paragraphs: [
        "When I encounter this type of energetic pattern, I often see themes related to emotional protection, fear of vulnerability, criticism, abandonment, or unresolved emotional experiences.",
        "However, I want to be careful not to create assumptions about a person's past or place blame on family members. I cannot know the intentions, struggles, or experiences of someone's parents.",
        "Parents can deeply love their children and still have emotional limitations, communication patterns, or difficulties meeting certain emotional needs.",
        "As a result, a child may unconsciously learn that vulnerability feels unsafe or that difficult emotions should be hidden rather than expressed.",
        "These emotional patterns can continue influencing adult relationships without conscious awareness.",
        "The healing process involves reconnecting with authentic emotions, developing emotional awareness, practicing self-compassion, and releasing beliefs formed around love, safety, and self-worth.",
      ],
    },
  ],
  afterword:
    "During a Reiki session I would focus my energy on the lower chakras specifically solar, sacral and root to rebalance the energy related to safety, anger towards self and others, and freedom of expression.",
} as const;

export const series = {
  name: "Four-session series",
  price: "€320",
  note: "Four one hour Reiki sessions, used within three months.",
};

export const visitSteps = [
  {
    n: "01",
    title: "Arrive",
    body: "Come a few minutes early. Shoes at the door, water on the side table. There is a place to sit if you need the city to drop away.",
  },
  {
    n: "02",
    title: "Speak, or not",
    body: "We start with whatever is useful: a symptom, a season of life, or almost nothing. You are not required to have a story.",
  },
  {
    n: "03",
    title: "The treatment",
    body: "You remain clothed. A blanket if you want one. Music only if you ask. Most of the hour is still.",
  },
  {
    n: "04",
    title: "Return",
    body: "Sit up slowly. Tea, a few words, and the next date if you want one. No packages, no pressure to return.",
  },
];

export const notes = [
  {
    quote:
      "I came skeptical and left with the kind of rest I usually only get after a long swim. The room is simple. That helped.",
    name: "M.R.",
    context: "First visit",
  },
  {
    quote:
      "The drawing at the end surprised me. I am not an artist. I still have the page on my desk.",
    name: "A.L.",
    context: "Art & Energy",
  },
  {
    quote:
      "Distant sessions on Thursdays got me through a month I could not leave the apartment. Clear, unsentimental, kind.",
    name: "S.K.",
    context: "Distant Reiki",
  },
];

// Short bio, in the studio's voice (see documents/art&energy/brand.md).
export const bio = {
  name: "Giovanna Ferrari",
  role: "Reiki practitioner · artist",
  portrait: {
    src: "/me.jpg",
    alt: "Giovanna Ferrari",
    width: 836,
    height: 1397,
  },
  lines: [
    "My journey to get here wasn't easy. It was full of trials, errors, and moments when I didn't quite know who I was or what I truly wanted. When I was younger, I often allowed other people and society's expectations to make decisions for me. I knew that money was highly valued, so I chose a profession that was well paid and that I seemed to be good at: product design.",
    "For nearly 20 years, I worked as a product designer for large corporations. From the outside, I had built a successful career, but inside, I increasingly felt disconnected from myself and from the kind of life I wanted to live.",
    "Eventually, I decided to step away and explore what had always brought me back to myself: art, creativity, and practices that nurture connection and presence. Painting became a way for me to express and process things I couldn't always put into words. I began exploring meditation, yoga, and other holistic practices, and later traveled to India to deepen my meditation practice.",
    "That path eventually led me back to school. I am currently pursuing a master's degree in Marriage and Family Counseling, while also working as a certified Reiki practitioner and exploring the intersection of creativity, healing, and emotional well-being.",
    "Art & Energy grew from this journey. It is a space where I share some of the tools that have helped me reconnect with myself—Reiki, intuitive art, meditation, and creative expression.",
    "My intention is simple: to create a quiet space where you can slow down, listen inward, and reconnect with yourself.",
  ],
} as const;

export const reiki = {
  heading: "What is Reiki?",
  body: [
    "Reiki is a holistic energy practice based on the concept of channeling universal life-force energy through the practitioner and into the recipient. During a session, the practitioner works intuitively with the body’s energy centers, or chakras, and energy pathways, often referred to as meridians, with the intention of restoring balance and supporting the body’s natural healing process.",
    "Our energy can feel out of balance for many reasons, including stress, lifestyle, emotional experiences, trauma, and periods of physical or mental exhaustion. Reiki sessions are intended to help rebalance and realign this energy, promoting a sense of relaxation, grounding, and overall well-being. Many people also use Reiki as a complementary practice alongside other approaches when experiencing physical discomfort or pain.",
    "Reiki is not contagious, and the practice is not based on absorbing or exchanging the practitioner’s personal energy. The practitioner acts as a channel rather than transferring their own energy to the recipient.",
  ],
  disclaimer:
    "Reiki is a complementary wellness practice, not a substitute for Western medicine or professional medical or mental-health treatment. It can be used alongside conventional care as a way to support relaxation, self-awareness, and the healing process.",
} as const;

// Mikao Usui's Gokai are traditionally five precepts, gathered by the opening
// vow "just for today" — presented here as the vow plus the five.
export const reikiPrinciples = [
  {
    romaji: "Kyō dake wa",
    title: "Just for today",
    body: "The vow that holds the rest — not a promise for all time, only for the day in front of you.",
  },
  {
    romaji: "Ikaru na",
    title: "Do not anger",
    body: "Notice anger as it rises. Let it be seen without letting it steer.",
  },
  {
    romaji: "Shinpai su na",
    title: "Do not worry",
    body: "Worry lives in the past and the future. Bring the attention back to what is here.",
  },
  {
    romaji: "Kansha shite",
    title: "Be grateful",
    body: "A quiet, active thanks — for ordinary things, for the hour, for the breath.",
  },
  {
    romaji: "Gyō o hageme",
    title: "Work honestly",
    body: "Do your work with care and diligence, without pretense.",
  },
  {
    romaji: "Hito ni shinsetsu ni",
    title: "Be kind to every living thing",
    body: "Kindness extended outward — and, just as plainly, to yourself.",
  },
] as const;

export type Artwork = {
  src: string;
  title?: string;
  width: number;
  height: number;
  wide?: boolean;
};

// Energy-mapping drawings from `public/gallery`. Every image in that folder
// is listed here so the homepage, sample reading, and static preview stay in sync.
// Only real names are shown as titles; generic file labels stay off the page.
export const gallery: Artwork[] = [
  {
    src: "/gallery/1energy.jpg",
    title: "Mother and Son",
    width: 1100,
    height: 1467,
  },
  {
    src: "/gallery/2energy.jpeg",
    width: 4032,
    height: 3024,
  },
  {
    src: "/gallery/3energy.jpeg",
    width: 5712,
    height: 4284,
  },
  {
    src: "/gallery/4energy.jpeg",
    width: 4032,
    height: 3024,
  },
  {
    src: "/gallery/5energy.jpeg",
    width: 5712,
    height: 4284,
  },
  {
    src: "/gallery/6energy.jpeg",
    width: 4032,
    height: 3024,
  },
  {
    src: "/gallery/7energy.jpeg",
    width: 5712,
    height: 4284,
  },
  {
    src: "/gallery/8energy.jpeg",
    width: 2651,
    height: 3792,
  },
  {
    src: "/gallery/9energy.jpeg",
    width: 4284,
    height: 5712,
  },
  {
    src: "/gallery/10energy.jpg",
    width: 843,
    height: 1024,
  },
  {
    src: "/gallery/11energy.jpeg",
    width: 4032,
    height: 3024,
  },
  {
    src: "/gallery/12energy.jpeg",
    width: 4032,
    height: 3024,
  },
  {
    src: "/gallery/13energy.jpeg",
    width: 3477,
    height: 4854,
  },
  {
    src: "/gallery/14energy.jpeg",
    width: 4284,
    height: 5712,
  },
  {
    src: "/gallery/15energy.jpeg",
    width: 4091,
    height: 5267,
  },
  {
    src: "/gallery/16energy.jpeg",
    width: 5712,
    height: 4284,
  },
];

export const galleryCopy = {
  eyebrow: "Energy mapping",
  heading: "Samples from the sessions",
  intro:
    "This is not art, this is energy mapped into a drawing. During a session I tap into your energy and I see how it's distributed in your body and get messages for you. After a treatment, paper and a few dry materials are on the table. What arrives is a wordless map of the hour, colour, line, the shape of what settled. These are details from that practice. Tap any piece to see it whole.",
  sampleCta: "Read a sample reading",
} as const;

export const atelier = {
  eyebrow: "Visual art",
  heading: "Transformative art to evoke personal evolution",
  body: "My art is the manifestation of the transformative power of art, where negative emotions are liberated and transformed into new possibilities for healing, strength, and self-discovery.",
  primary: {
    label: "Explore my art",
    href: "https://giovannaferrariart.com",
  },
  secondary: {
    label: "Come paint with me",
    href: "/?session=make-a-painting&intent=booking#contact",
  },
  images: [
    {
      src: "/Art/energy.jpeg",
      alt: "Energy",
      width: 2128,
      height: 3477,
    },
    {
      src: "/Art/a_storm_approaching.jpg",
      alt: "A storm approaching",
      width: 1500,
      height: 1500,
    },
  ],
} as const;

export const nav = [
  { href: "/#about", label: "About me" },
  { href: "/#sessions", label: "Sessions" },
  { href: "/#gallery", label: "Energy mapping" },
  { href: "/#atelier", label: "Visual art" },
  { href: "/#contact", label: "Contact" },
] as const;
