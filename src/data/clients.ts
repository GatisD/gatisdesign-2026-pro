export interface ClientLogo {
  name: string;
  url?: string;
  // Plain text representation (no logo image needed)
  text: string;
}

export const TOP_CLIENTS: ClientLogo[] = [
  { name: "Tenter", text: "Tenter", url: "https://tenter.lv" },
  { name: "Estire", text: "ESTIRE", url: "https://estire.lv" },
  { name: "ROIS", text: "ROIS", url: "https://rois.lv" },
  { name: "Box Latvia", text: "Box Latvia" },
  { name: "Apmeklē.lv", text: "Apmeklē.lv" },
  { name: "MLM Cargo", text: "MLM Cargo" },
  { name: "Tavasdurvis", text: "Tavasdurvis" },
  { name: "ARM Metals", text: "ARM Metals" },
];
