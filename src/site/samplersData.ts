export type Sampler = {
  size: string | null;
  top: string;
  binding: string | null;
  backing: string | null;
  sw: string[];
  /** Photo slug in /public/images, matched to this list entry by Kathy's own
   *  description of the top, binding and backing. null = no photo yet. */
  photo?: string | null;
  /** false when two list entries could plausibly fit the same photo and Kathy
   *  still needs to confirm which. */
  confirmed?: boolean;
};

// Transcribed verbatim from Kathy's "Willadene's Quilts Sampler List" (Aug 2026).
// Swatch colors are derived from her own fabric wording - they are a color key,
// not a picture of the quilt. Photographs replace them when Kathy sends them.
export const SAMPLERS: Sampler[] = [
  { size: "12 x 12", top: "lime green/red holly", binding: null, backing: null, sw: ["#A6C34A", "#7E9A86", "#B23B3B"], photo: "s00" },
  { size: null, top: "blue with gold stars/log cabin", binding: "blue and gold star binding", backing: "blue and gold star backing", sw: ["#6B8CB0", "#C08A3E"], photo: "s01" },
  { size: "15 3/4 x 15 3/4", top: "green/red/red check stars/gray & white border/red & white 2nd border/green outer border", binding: "red/white stripe binding", backing: "green holly backing", sw: ["#7E9A86", "#B23B3B", "#9A958E", "#F6F2EA"], photo: "s02" },
  { size: "15 3/4 x 15 3/4", top: "small block square/white blocks \"X\"", binding: "blue/pink flower binding", backing: "blue/pink flower binding", sw: ["#F6F2EA", "#6B8CB0", "#E0A5B4"], photo: "s03" },
  { size: "12 x 16", top: "brown/pink/redish blocks", binding: "brown/pink binding", backing: "tan/rust flowers backing", sw: ["#6E5343", "#E0A5B4", "#B23B3B", "#CDB394", "#A55A32"], photo: "s04" },
  { size: "13 1/2 x 13 1/2", top: "blue/white newsprint/centergold & red star/newsprint corners/blue border", binding: "yellow/red flowers binding", backing: "yellow/red flowers backing", sw: ["#6B8CB0", "#F6F2EA", "#EDE7DA", "#C08A3E", "#B23B3B"], photo: "s05" },
  { size: "14 x 14", top: "yellow center/multi color outer circles/green outer border", binding: "green & white stripe binding", backing: "light blue/pink/green floral backing", sw: ["#E3C05A", "#B4576F", "#7E9A86", "#F6F2EA", "#AFC9DE"], photo: "s06" },
  { size: "14 x 15", top: "dark color triangle Stars& gold inner border/rust outer border", binding: "tan binding", backing: "rust backing", sw: ["#4A4550", "#C08A3E", "#A55A32", "#CDB394"], photo: "s07" },
  { size: "20 1/2 x 29", top: "green/yellow/red \"tree\"  with white borders", binding: "green & white binding", backing: "yellow flowers backing", sw: ["#7E9A86", "#E3C05A", "#B23B3B", "#F6F2EA"], photo: null },
  { size: "18 x 18", top: "multi color star blocks/white sashing w/red check inserts", binding: "red/white check binding", backing: "green  & pink flowers/ pink flowers backing", sw: ["#B4576F", "#F6F2EA", "#B23B3B", "#7E9A86", "#E0A5B4"], photo: "s09" },
  { size: "15 x 15", top: "pink/red/yellow/blue with white center x/black & white polka dot border with block", binding: "black/white stripe binding", backing: null, sw: ["#E0A5B4", "#B23B3B", "#E3C05A", "#6B8CB0", "#F6F2EA"], photo: "s10" },
  { size: "15 x 15", top: "brown center/tan 2nd border/brown/tan/red outer border leaf applique", binding: "brown binding", backing: "light tan/cream stripe", sw: ["#6E5343", "#CDB394", "#B23B3B", "#F2E7D4"], photo: "s11" },
  { size: "11 x 11", top: "red/green/pink/green stars", binding: "black/white stripe binding", backing: "newspaper print backing", sw: ["#B23B3B", "#7E9A86", "#E0A5B4", "#2A2A2A", "#F6F2EA"], photo: "s12", confirmed: false },
  { size: "11 x 11", top: "orange polka dot/green w/white daisy", binding: "red/white daisy binding", backing: "Orange/white/green flowers", sw: ["#D9813C", "#EDE7DA", "#7E9A86", "#F6F2EA", "#B23B3B"], photo: "s13", confirmed: false },
  { size: "9 x 9", top: "1/2 triangle/blue/green", binding: "green/gold binding", backing: "brown/white/bright floral backing", sw: ["#6B8CB0", "#7E9A86", "#C08A3E", "#6E5343", "#F6F2EA"], photo: "s14", confirmed: false },
  { size: "14 x 24 1/2", top: "fan/black & White polka dot border", binding: "black/white stripe binding", backing: "rust/green/light blue blacks backing", sw: ["#2A2A2A", "#F6F2EA", "#EDE7DA", "#A55A32", "#7E9A86"], photo: "s15" },
  { size: "9 x 16", top: "Teal/gray sampler with gray stripe binding", binding: null, backing: "black/black backing", sw: ["#4E8C8A", "#9A958E", "#2A2A2A"], photo: "s16" },
  { size: "26 x 26", top: "multi colored star/white centers", binding: "blue floral binding", backing: null, sw: ["#B4576F", "#B23B3B", "#F6F2EA", "#6B8CB0"], photo: "s17" },
];

/** Three samplers Kathy photographed that do not obviously match any entry on her
 *  list of eighteen. Shown separately rather than guessed into a row. */
export const UNLISTED = [
  { photo: "s-x-pinwheels", note: "Pinwheels in teal and pink, floral border, scalloped binding" },
  { photo: "s-x-novelty-stars", note: "Sewing-notion novelty prints, stars in every colour, striped binding" },
  { photo: "s-x-tiny-squares", note: "Hundreds of tiny squares, table-runner shape" },
];
