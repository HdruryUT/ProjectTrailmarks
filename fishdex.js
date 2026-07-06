/* ===================================================================
   GULO — Catch Dex data: every fish in Utah.

   To mark a fish as caught, change  caught: false  ->  caught: true
   (optionally add  by  and  date ).

   To show a real photo in a caught fish's slot, drop the image in
   assets/dex/ and add a  photo  field, e.g.:
       caught: false,
       photo: "assets/dex/rainbow-trout.jpg"
   The page, category bars, and grand total all update automatically.
   =================================================================== */

const FISH_OF_UTAH = [
  // ---- Cold Water Sport Fish ----
  { group: "Cold Water Sport Fish", name: "Bonneville Cutthroat", sci: "Oncorhynchus clarkii utah", where: "Weber & Provo Rivers, Bonneville Basin tributaries", caught: false },
  { group: "Cold Water Sport Fish", name: "Bear Lake Cutthroat", sci: "Oncorhynchus clarkii utah", where: "Bear Lake (Utah/Idaho border)", caught: false },
  { group: "Cold Water Sport Fish", name: "Colorado Cutthroat", sci: "Oncorhynchus clarkii pleuriticus", where: "Boulder Mountain Lakes, Green River drainage", caught: false },
  { group: "Cold Water Sport Fish", name: "Yellowstone Cutthroat", sci: "Oncorhynchus clarkii bouvieri", where: "Snake River headwaters, northern Utah", caught: false },
  { group: "Cold Water Sport Fish", name: "Rainbow Trout", sci: "Oncorhynchus mykiss", where: "Provo River, Strawberry, Scofield Reservoir", caught: false },
  { group: "Cold Water Sport Fish", name: "Brook Trout", sci: "Salvelinus fontinalis", where: "High-elevation mountain streams & lakes", caught: false },
  { group: "Cold Water Sport Fish", name: "Tiger Trout", sci: "Salmo trutta × Salvelinus fontinalis", where: "Scofield, Palisade, Miller Flat", caught: false },
  { group: "Cold Water Sport Fish", name: "Splake", sci: "Salvelinus namaycush × S. fontinalis", where: "Fish Lake, Joe's Valley, Miller Flat", caught: false },
  { group: "Cold Water Sport Fish", name: "Lake Trout", sci: "Salvelinus namaycush", where: "Flaming Gorge, Fish Lake, Bear Lake", caught: false },
  { group: "Cold Water Sport Fish", name: "Brown Trout", sci: "Salmo trutta", where: "Provo, Weber & Green Rivers", caught: false },
  { group: "Cold Water Sport Fish", name: "Arctic Grayling", sci: "Thymallus arcticus", where: "High Uinta Mountain lakes & streams", caught: false },
  { group: "Cold Water Sport Fish", name: "Mountain Whitefish", sci: "Prosopium williamsoni", where: "Provo, Weber & Logan Rivers", caught: false },
  { group: "Cold Water Sport Fish", name: "Bonneville Whitefish", sci: "Prosopium williamsoni", where: "Endemic to Bear Lake", caught: false },
  { group: "Cold Water Sport Fish", name: "Kokanee Salmon", sci: "Oncorhynchus nerka", where: "Strawberry, Flaming Gorge, Fish Lake", caught: false },
  { group: "Cold Water Sport Fish", name: "Golden Trout", sci: "Oncorhynchus mykiss aguabonita", where: "Uinta Mountains, Echo Lake, Atwood Creek", caught: false },

  // ---- Warm Water Sport Fish ----
  { group: "Warm Water Sport Fish", name: "Largemouth Bass", sci: "Micropterus salmoides", where: "Utah Lake, Sand Hollow, Lake Powell", caught: false },
  { group: "Warm Water Sport Fish", name: "Smallmouth Bass", sci: "Micropterus dolomieu", where: "Lake Powell, Jordanelle, Flaming Gorge", caught: false },
  { group: "Warm Water Sport Fish", name: "Wiper", sci: "Morone saxatilis × M. chrysops", where: "Mona, Newcastle, DMAD Reservoir", caught: false },
  { group: "Warm Water Sport Fish", name: "Striped Bass", sci: "Morone saxatilis", where: "Lake Powell, Sand Hollow Reservoir", caught: false },
  { group: "Warm Water Sport Fish", name: "White Bass", sci: "Morone chrysops", where: "Utah Lake, DMAD, Gunnison Bend", caught: false },
  { group: "Warm Water Sport Fish", name: "Northern Pike", sci: "Esox lucius", where: "Yuba Reservoir, Utah Lake, Redmond", caught: false },
  { group: "Warm Water Sport Fish", name: "Tiger Muskie", sci: "Esox masquinongy × E. lucius", where: "Pineview, Johnson, Joe's Valley", caught: false },
  { group: "Warm Water Sport Fish", name: "Yellow Perch", sci: "Perca flavescens", where: "Rockport, Echo, Pineview Reservoir", caught: false },
  { group: "Warm Water Sport Fish", name: "Walleye", sci: "Sander vitreus", where: "Utah Lake, Willard Bay, Lake Powell", caught: false },

  // ---- Sunfish & Crappie ----
  { group: "Sunfish & Crappie", name: "Bluegill", sci: "Lepomis macrochirus", where: "Sand Hollow, Mantua, Utah Lake", caught: false },
  { group: "Sunfish & Crappie", name: "Green Sunfish", sci: "Lepomis cyanellus", where: "Mantua, Utah Lake, community ponds", caught: false },
  { group: "Sunfish & Crappie", name: "Black Crappie", sci: "Pomoxis nigromaculatus", where: "Pineview, Mantua, Utah Lake", caught: false },
  { group: "Sunfish & Crappie", name: "White Crappie", sci: "Pomoxis annularis", where: "DMAD, Starvation, Gunnison Bend", caught: false },

  // ---- Catfish, Suckers, Chubs & Carp ----
  { group: "Catfish, Suckers, Chubs & Carp", name: "Channel Catfish", sci: "Ictalurus punctatus", where: "Utah Lake, Jordan River, Lake Powell", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "Black Bullhead Catfish", sci: "Ameiurus melas", where: "Utah Lake, Mantua, community ponds", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "Bluehead Sucker", sci: "Catostomus discobolus", where: "Colorado River tributaries in Utah", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "Flannelmouth Sucker", sci: "Catostomus latipinnis", where: "San Juan, Colorado River, Lake Powell", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "June Sucker", sci: "Chasmistes liorus", where: "Endemic to Utah Lake & tributaries", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "Razorback Sucker", sci: "Xyrauchen texanus", where: "Colorado, Green, San Juan (endangered)", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "Roundtail Chub", sci: "Gila robusta", where: "Green & Colorado Rivers", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "Humpback Chub", sci: "Gila cypha", where: "Colorado & Green Rivers (endangered)", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "Bonytail Chub", sci: "Gila elegans", where: "Colorado & Green Rivers (endangered)", caught: false },
  { group: "Catfish, Suckers, Chubs & Carp", name: "Common Carp", sci: "Cyprinus carpio", where: "Utah Lake, Lake Powell, Willard Bay & ponds", caught: false },

  // ---- Minnows & Small Fish ----
  { group: "Minnows & Small Fish", name: "Redside Shiner", sci: "Richardsonius balteatus", where: "Streams & rivers across northern Utah", caught: false },
  { group: "Minnows & Small Fish", name: "Speckled Dace", sci: "Rhinichthys osculus", where: "Small mountain streams statewide", caught: false },
  { group: "Minnows & Small Fish", name: "Western Mosquitofish", sci: "Gambusia affinis", where: "Shallow ponds, marshes, slow streams", caught: false },
  { group: "Minnows & Small Fish", name: "Bonneville Cisco", sci: "Prosopium gemmifer", where: "Endemic to Bear Lake", caught: false },

  // ---- Sculpin & Burbot ----
  { group: "Sculpin & Burbot", name: "Mottled Sculpin", sci: "Cottus bairdii", where: "Cold mountain streams & spring creeks", caught: false },
  { group: "Sculpin & Burbot", name: "Bear Lake Sculpin", sci: "Cottus extensus", where: "Endemic to Bear Lake", caught: false },
  { group: "Sculpin & Burbot", name: "Burbot", sci: "Lota lota", where: "Flaming Gorge Reservoir", caught: false }
];

// Reusable fish silhouette
const FISH_SVG = `<svg viewBox="0 0 100 54" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true">
  <path d="M8 27 C22 8, 52 6, 72 20 C76 16, 84 12, 92 12 C88 20, 88 24, 90 27 C88 30, 88 34, 92 42 C84 42, 76 38, 72 34 C52 48, 22 46, 8 27 Z"/>
  <circle cx="26" cy="24" r="3" fill="#f4efe4"/>
</svg>`;

// Load the live, CMS-editable list from data/fish.json.
// Falls back to the embedded list above when opened via file:// (e.g. double-click).
async function loadFish() {
  try {
    const r = await fetch("data/fish.json", { cache: "no-store" });
    if (!r.ok) throw new Error("no json");
    const j = await r.json();
    if (j && Array.isArray(j.fish) && j.fish.length) return j.fish;
  } catch (e) { /* offline / file:// — use fallback */ }
  return FISH_OF_UTAH;
}

let DEX_LIST = [];
let DEX_PERSON = "haiden"; // "haiden" or "mario"

const isCaught = (f, person) => person === "mario" ? !!f.mario : !!f.haiden;
const photoOf  = (f, person) => person === "mario" ? (f.marioPhoto || "") : (f.haidenPhoto || "");

function renderDex(list, person) {
  const root = document.getElementById("dex");
  if (!root) return;

  const total = list.length;
  const caught = list.filter(f => isCaught(f, person)).length;
  const pct = Math.round((caught / total) * 100);

  // progress bar
  document.getElementById("dexCount").textContent = `${caught} / ${total} species caught`;
  document.getElementById("dexPct").textContent = `${pct}%`;
  requestAnimationFrame(() => { document.getElementById("dexFill").style.width = pct + "%"; });

  // group in original order
  const groups = [];
  list.forEach(f => {
    let g = groups.find(x => x.name === f.group);
    if (!g) { g = { name: f.group, fish: [] }; groups.push(g); }
    g.fish.push(f);
  });

  root.innerHTML = groups.map((g) => {
    const got = g.fish.filter(f => isCaught(f, person)).length;
    const gpct = Math.round((got / g.fish.length) * 100);
    const done = got === g.fish.length;
    const cards = g.fish.map(f => {
      const got1 = isCaught(f, person);
      const photo = photoOf(f, person);
      const cls = got1 ? "dex-card dex-card--caught" : "dex-card dex-card--locked";
      const stamp = got1 ? "✓ Caught" : "Locked";
      const media = (got1 && photo)
        ? `<img class="dex-card__photo" src="${photo}" alt="${f.name}">`
        : `<div class="dex-card__fish">${FISH_SVG}</div>`;
      return `<div class="${cls}">
        <span class="dex-card__stamp">${stamp}</span>
        ${media}
        <div class="dex-card__name">${f.name}</div>
        <div class="dex-card__sci">${f.sci}</div>
        <div class="dex-card__where">${f.where}</div>
      </div>`;
    }).join("");
    return `<div class="dex-group">
      <div class="dex-group__head">
        <h2>${g.name}</h2>
        <span class="dex-group__tally ${done ? "dex-group__tally--done" : ""}">${done ? "✓ Complete · " : ""}${got}/${g.fish.length}</span>
      </div>
      <div class="dex-group__bar"><div class="dex-group__fill ${done ? "dex-group__fill--done" : ""}" data-gpct="${gpct}"></div></div>
      <div class="dex-grid">${cards}</div>
    </div>`;
  }).join("");

  // animate each category's bar to its own completion
  requestAnimationFrame(() => {
    root.querySelectorAll(".dex-group__fill").forEach(el => { el.style.width = el.dataset.gpct + "%"; });
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  DEX_LIST = await loadFish();
  renderDex(DEX_LIST, DEX_PERSON);

  // tab switching between Haiden's and Mario's dex
  const tabs = document.querySelector(".dex-tabs");
  if (tabs) {
    tabs.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-person]");
      if (!btn) return;
      DEX_PERSON = btn.dataset.person;
      tabs.querySelectorAll("[data-person]").forEach(b => b.classList.toggle("active", b === btn));
      renderDex(DEX_LIST, DEX_PERSON);
    });
  }
});
