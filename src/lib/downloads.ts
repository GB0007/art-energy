export type StudioFile = {
  filename: string;
  name: string;
  detail: string;
  type: string;
};

export const studioFiles: StudioFile[] = [
  {
    filename: "art-energy-business-card.pdf",
    name: "Business card (PDF)",
    detail: "Front and back, standard US size 3.5 × 2 in. Send this to the printer.",
    type: "application/pdf",
  },
  {
    filename: "art-energy-business-card-bleed.pdf",
    name: "Business card with bleed (PDF)",
    detail: "3.75 × 2.25 in. Use this if the printer asks for 0.125 in bleed.",
    type: "application/pdf",
  },
  {
    filename: "business-card-front.png",
    name: "Business card — front (PNG)",
    detail: "300 dpi preview of the front.",
    type: "image/png",
  },
  {
    filename: "business-card-back.png",
    name: "Business card — back (PNG)",
    detail: "300 dpi preview of the back.",
    type: "image/png",
  },
  {
    filename: "business-card-front-and-back.png",
    name: "Business card — front and back (PNG)",
    detail: "Both sides side by side, for a quick look.",
    type: "image/png",
  },
  {
    filename: "art-energy-postcard.pdf",
    name: "Postcard (PDF)",
    detail: "Front and back, 4.25 × 5.5 in. Send this to the printer.",
    type: "application/pdf",
  },
  {
    filename: "art-energy-postcard-bleed.pdf",
    name: "Postcard with bleed (PDF)",
    detail: "4.5 × 5.75 in. Use this if the printer asks for 0.125 in bleed.",
    type: "application/pdf",
  },
  {
    filename: "postcard-front.png",
    name: "Postcard — front (PNG)",
    detail: "300 dpi preview of the front.",
    type: "image/png",
  },
  {
    filename: "postcard-back.png",
    name: "Postcard — back (PNG)",
    detail: "300 dpi preview of the back.",
    type: "image/png",
  },
  {
    filename: "postcard-front-and-back.png",
    name: "Postcard — front and back (PNG)",
    detail: "Both sides side by side, for a quick look.",
    type: "image/png",
  },
  {
    filename: "art-energy-mark.svg",
    name: "Logo (SVG)",
    detail: "The stacked watercolor mark.",
    type: "image/svg+xml",
  },
  {
    filename: "art-energy-mark-circular.png",
    name: "Circular logo (PNG)",
    detail: "The five watercolor circles arranged as an overlapping cluster.",
    type: "image/png",
  },
  {
    filename: "art-energy-lockup.svg",
    name: "Logo with words (SVG)",
    detail: "The mark plus “art & energy” underneath.",
    type: "image/svg+xml",
  },
  {
    filename: "art-and-energy-folder.zip",
    name: "Whole studio folder (ZIP)",
    detail: "Logos, your original drawing, brand notes, and website copy.",
    type: "application/zip",
  },
];

export function downloadHref(filename: string) {
  return `/api/download/${encodeURIComponent(filename)}`;
}

export function fileByName(filename: string) {
  return studioFiles.find((file) => file.filename === filename);
}
