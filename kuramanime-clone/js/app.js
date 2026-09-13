/**
 * StarAnime — data & routing sederhana
 * Layout:
 *   index.html      → beranda (list anime)
 *   anime.html      → detail anime (tombol ke episode)
 *   episode.html    → player episode tunggal (prev/next, download)
 */

// ============================================================
// DATA ANIME
// ============================================================
const ANIME_DB = {
  "grand-blue": {
    id: 2522,
    title: "Grand Blue",
    japanese: "ぐらんぶる",
    indonesian: "Grand Blue Dreaming",
    alt: "Grand Blue Dreaming, ぐらんぶる, ก๊วนป่วนชวนบุ๋งบุ๋ง",
    type: "TV",
    episodes: 12,
    status: "Selesai Tayang",
    aired: "14 Jul 2018 s/d 29 Sep 2018",
    season: "Summer 2018",
    duration: "24 menit per episode",
    quality: "BD",
    country: "JP",
    source: "Manga",
    genres: ["Comedy", "Seinen", "Slice of Life", "Adult Cast", "Gag Humor"],
    studio: "Zero-G",
    score: 8.44,
    members: 841789,
    rating: "PG-13: Usia 13 Tahun ke Atas",
    synopsis: "Iori Kitahara pindah ke kota pesisir Izu untuk tahun pertama kuliahnya di universitas setempat, tinggal di atas Grand Blue, toko selam milik pamannya. Iori memiliki harapan dan impian tinggi tentang pengalaman kuliah yang ideal, tetapi ketika ia masuk ke toko tersebut, ia terjerumus ke dalam aktivitas minum-minum para anggota Klub Selam yang santai dan sering berkunjung ke sana. Dipengaruhi oleh seniornya, Shinji Tokita dan Ryuujirou Kotobuki, Iori terpaksa ikut dalam pesta aneh mereka. Sepupunya, Chisa Kotegawa, kemudian masuk dan memergokinya, membuat Iori mendapat kebencian yang mendalam dari Chisa. Diadaptasi dari manga komedi populer karya Kenji Inoue dan Kimitake Yoshioka, Grand Blue mengikuti petualangan Iori bersama teman-teman barunya yang eksentrik saat ia berusaha mewujudkan impian kuliahnya yang ideal, sambil belajar menyelam.",
    cover: "https://picsum.photos/seed/grandblue-detail/400/600",
    episodes: {
      1:  { title: "Ep 1 — Iori Kitahara", cover: "https://picsum.photos/seed/gb-ep1/320/180" },
      2:  { title: "Ep 2 — Shinji & Ryuujirou", cover: "https://picsum.photos/seed/gb-ep2/320/180" },
      3:  { title: "Ep 3 — Klub Selam", cover: "https://picsum.photos/seed/gb-ep3/320/180" },
      4:  { title: "Ep 4 — Malam Mabuk", cover: "https://picsum.photos/seed/gb-ep4/320/180" },
      5:  { title: "Ep 5 — Chisa Kotegawa", cover: "https://picsum.photos/seed/gb-ep5/320/180" },
      6:  { title: "Ep 6 — Pesta di Grand Blue", cover: "https://picsum.photos/seed/gb-ep6/320/180" },
      7:  { title: "Ep 7 — Latihan Menyelam", cover: "https://picsum.photos/seed/gb-ep7/320/180" },
      8:  { title: "Ep 8 — Kompetisi Absurd", cover: "https://picsum.photos/seed/gb-ep8/320/180" },
      9:  { title: "Ep 9 — Wajah Baru", cover: "https://picsum.photos/seed/gb-ep9/320/180" },
      10: { title: "Ep 10 — Drama Laut", cover: "https://picsum.photos/seed/gb-ep10/320/180" },
      11: { title: "Ep 11 — Pertapaan", cover: "https://picsum.photos/seed/gb-ep11/320/180" },
      12: { title: "Ep 12 — Akhir yang Manis", cover: "https://picsum.photos/seed/gb-ep12/320/180" }
    },
    related: [
      { id: "grand-blue-s2", title: "Grand Blue Season 2", cover: "https://picsum.photos/seed/gbs2/320/180" }
    ],
    // Streaming placeholder — replace with real URL before publishing
    streaming: {
      provider: "YouTube",
      videoId: "VIDEO_ID_GRAND_BLUE_EP1",
      embedUrl: "https://www.youtube.com/embed/VIDEO_ID_GRAND_BLUE_EP1?autoplay=1&rel=0&modestbranding=1",
      note: "GANTI DENGAN LINK YOUTUBE / FILE VIDEO ASLI"
    },
    // Download placeholder — replace with real link before publishing
    download: {
      "360p": { server: "MiteDrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Usersdrive", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "Berkasdrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" },
      "720p-alt": { server: "Terabox", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "Batch Grand Blue Season 1 (12 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    }
  }
  // Tambah anime lain di sini nanti:
  // "naruto": { ... },
  // "one-piece": { ... },
};

// ============================================================
// HELPERS
// ============================================================
function getQuery(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function goTo(path) {
  window.location.href = path;
}

// ============================================================
// RENDER INDEX (Beranda)
// ============================================================
function renderIndex() {
  const main = document.querySelector("#main");
  const animeKeys = Object.keys(ANIME_DB);

  const sections = [
    {
      title: "🔥 Grand Blue — Spotlight",
      id: "spotlight",
      items: ["grand-blue"]
    },
    {
      title: "📺 Anime Ongoing",
      id: "ongoing",
      items: ["grand-blue"] // nanti ditambah anime lain
    },
    {
      title: "✅ Anime Selesai (Batch)",
      id: "finished",
      items: ["grand-blue"]
    }
  ];

  let html = "";
  sections.forEach(s => {
    html += `<div class="section" id="${s.id}">`;
    html += `<div class="section-header"><h2>${s.title}</h2><a href="#" class="link">Lihat Semua →</a></div>`;
    html += `<div class="grid">`;
    s.items.forEach(key => {
      const a = ANIME_DB[key];
      if (!a) return;
      html += `
        <a href="anime.html?anime=${key}" class="card">
          <div class="thumb">
            <img src="${a.cover}" alt="${a.title}" loading="lazy">
            <div class="overlay"><div class="play-btn">▶</div></div>
          </div>
          <div class="info">
            <div class="title">${a.title}</div>
            <div class="sub">${a.episodes} Ep • ${a.status}</div>
          </div>
        </a>
      `;
    });
    html += `</div></div>`;
  });

  main.innerHTML = html;
}

// ============================================================
// RENDER ANIME DETAIL
// ============================================================
function renderAnimeDetail(key) {
  const a = ANIME_DB[key];
  if (!a) {
    document.querySelector("#main").innerHTML = `<p style="color:red">Anime tidak ditemukan.</p>`;
    document.querySelector(".breadcrumb").innerHTML = `<a href="index.html">Beranda</a> → <span>Anime tidak ditemukan</span>`;
    return;
  }

  document.title = `${a.title} — StarAnime`;

  const metaItems = [
    { label: "Tipe", value: a.type },
    { label: "Episode", value: `${a.episodes} eps` },
    { label: "Status", value: a.status },
    { label: "Tayang", value: a.aired },
    { label: "Musim", value: a.season },
    { label: "Durasi", value: a.duration },
    { label: "Kualitas", value: a.quality },
    { label: "Negara", value: a.country },
    { label: "Adaptasi", value: a.source },
    { label: "Studio", value: a.studio },
    { label: "Skor", value: `${a.score} / 10.00` },
    { label: "Peminat", value: a.members.toLocaleString() + " orang" },
    { label: "Rating", value: a.rating }
  ];

  const genresHtml = a.genres.map(g => `<span class="genre-tag">${g}</span>`).join("");

  const episodeItems = Object.entries(a.episodes).map(([num, ep]) => {
    const active = Number(num) === Number(getQuery("ep")) ? "active" : "";
    return `
      <div class="episode-item ${active}" onclick="goToEpisode('${key}', ${num})">
        <div class="ep-num">Episode ${num}</div>
        <div class="ep-badge">${ep.title}</div>
      </div>
    `;
  }).join("");

  const relatedHtml = a.related.map(r => `
    <a href="anime.html?anime=${r.id}" class="card">
      <div class="thumb"><img src="${r.cover}" alt="${r.title}"></div>
      <div class="info"><div class="title">${r.title}</div></div>
    </a>
  `).join("");

  document.querySelector("#main").innerHTML = `
    <div class="anime-detail-hero">
      <div class="anime-cover">
        <img src="${a.cover}" alt="${a.title}" onerror="this.src='https://picsum.photos/seed/fallback-anime/320/180'">
      </div>
      <div class="anime-info">
        <div class="title">${a.title}</div>
        <div class="alt-titles">${a.alt}</div>
        <div class="synopsis">${a.synopsis}</div>
        <div class="anime-meta">
          ${metaItems.map(m => `
            <div class="anime-meta-item">
              <span class="meta-label">${m.label}</span>
              <span class="meta-value">${m.value}</span>
            </div>
          `).join("")}
        </div>
        <div>${genresHtml}</div>
      </div>
    </div>

    <div class="episode-nav">
      <a href="index.html" class="btn btn-outline">← Beranda</a>
      <a href="anime.html?anime=${key}" class="btn btn-primary" style="margin-left:auto">Daftar Episode →</a>
    </div>

    <div class="episode-list">
      <h3>Daftar Episode (${a.episodes} Episode)</h3>
      <div class="episode-grid">${episodeItems}</div>
    </div>

    ${a.batch ? `
    <div class="download-section">
      <h3>📦 Batch Download</h3>
      <div class="download-links">
        <div class="download-link">
          <span class="quality">Batch</span>
          <span class="server">${a.batch.title}</span>
          <a href="${a.batch.url}" class="btn btn-primary btn-sm" onclick="event.preventDefault(); alert('Link batch: ${a.batch.note}')">
            Download Batch
          </a>
        </div>
      </div>
    </div>
    ` : ""}

    <div class="related-section">
      <h3>Serial Terkait</h3>
      <div class="related-grid">${relatedHtml}</div>
    </div>
  `;

  // Breadcrumb
  document.querySelector(".breadcrumb").innerHTML = `
    <a href="index.html">Beranda</a>
    <span class="sep">/</span>
    <a href="anime.html?anime=${key}">${a.title}</a>
  `;
}

// ============================================================
// RENDER EPISODE PLAYER
// ============================================================
function renderEpisode(key, epNum) {
  const a = ANIME_DB[key];
  if (!a) {
    document.querySelector("#main").innerHTML = `<p style="color:red">Episode tidak ditemukan.</p>`;
    return;
  }
  const ep = a.episodes[epNum];
  if (!ep) {
    document.querySelector("#main").innerHTML = `<p style="color:red">Episode ${epNum} tidak ditemukan.</p>`;
    return;
  }

  document.title = `Episode ${epNum} — ${a.title} — StarAnime`;

  const prevEp = epNum > 1 ? epNum - 1 : null;
  const nextEp = epNum < a.episodes ? epNum + 1 : null;

  const downloadItems = Object.entries(a.download).map(([quality, d]) => `
    <div class="download-link">
      <span class="quality">${quality}</span>
      <span class="server">${d.server}</span>
      <span class="size">${d.size}</span>
      <a href="${d.url}" class="btn btn-primary btn-sm" onclick="event.preventDefault(); alert('Link ${quality}: ${d.note}')">
        Download
      </a>
      <a href="https://www.youtube.com/watch?v=${a.streaming.videoId}" target="_blank" class="btn btn-outline btn-sm" title="Streaming Online">
        Streaming
      </a>
    </div>
  `).join("");

  const playerContent = `
    <div class="player-placeholder">
      <div class="big-icon">▶️</div>
      <h3 style="margin-bottom:4px; color:var(--text-primary)">Video Player</h3>
      <p style="font-size:13px; margin-bottom:12px">${a.streaming.note}</p>
      <div style="background:#1a1a24; border:1px solid var(--border); border-radius:8px; padding:20px; text-align:center; max-width:600px; margin:0 auto">
        <p style="font-size:12px; color:var(--text-muted)">
          Embed URL:<br>
          <code style="font-size:11px; word-break:break-all; background:var(--bg-primary); padding:4px 8px; border-radius:4px">${a.streaming.embedUrl}</code>
        </p>
      </div>
    </div>
  `;

  document.querySelector("#main").innerHTML = `
    <div class="breadcrumb" style="margin-bottom:16px; font-size:12px; color:var(--text-muted)">
      <a href="index.html">Beranda</a>
      <span class="sep">/</span>
      <a href="anime.html?anime=${key}">${a.title}</a>
      <span class="sep">/</span>
      <span>Episode ${epNum}</span>
    </div>

    <div class="player-section">
      <div class="episode-nav" style="margin-bottom:16px; background:transparent; border:none; padding:0">
        <span style="font-size:14px">Episode ${epNum}</span>
        <span style="color:var(--text-muted)">/</span>
        <span style="font-size:14px">${a.episodes}</span>
        <h2 style="margin-left:16px; font-size:18px; font-weight:700; color:var(--text-primary)">${ep.title}</h2>
      </div>
      ${playerContent}
    </div>

    <div class="episode-nav">
      ${prevEp ? `<a href="episode.html?anime=${key}&ep=${prevEp}">← Episode ${prevEp}</a>` : `<a href="anime.html?anime=${key}">← Kembali ke Daftar</a>`}
      <span class="ep-current">${epNum} / ${a.episodes}</span>
      ${nextEp ? `<a href="episode.html?anime=${key}&ep=${nextEp}">Episode ${nextEp} →</a>` : `<a href="anime.html?anime=${key}">Selesai →</a>`}
    </div>

    <div class="download-section">
      <h3>📥 Download Episode ${epNum} — ${a.title}</h3>
      <p style="font-size:12px; color:var(--text-muted); margin-bottom:12px">Sub Indo • ${a.quality} Quality • ${a.duration}</p>
      <div class="download-links">${downloadItems}</div>
    </div>

    <div class="related-section">
      <h3>Kembali ke Anime</h3>
      <a href="anime.html?anime=${key}" class="btn btn-primary" style="display:inline-flex">
        ← Daftar Episode ${a.title}
      </a>
      <a href="index.html" class="btn btn-outline" style="display:inline-flex; margin-left:10px">
        ← Beranda
      </a>
    </div>
  `;
}

// ============================================================
// GLOBAL NAV
// ============================================================
function updateNavActive() {
  const path = window.location.pathname;
  const nav = document.querySelectorAll(".nav a");
  nav.forEach(link => {
    const href = link.getAttribute("href");
    if (href === "index.html" && (path.endsWith("index.html") || path.endsWith("/"))) {
      link.classList.add("active");
    } else if (href === "anime.html" && path.includes("anime.html")) {
      link.classList.add("active");
    }
  });
}

// ============================================================
// MAIN ROUTER
// ============================================================
function init() {
  const animeKey = getQuery("anime");
  const epNum = getQuery("ep");

  if (window.location.pathname.includes("episode.html") && animeKey && epNum) {
    renderEpisode(animeKey, Number(epNum));
  } else if (window.location.pathname.includes("anime.html") && animeKey) {
    renderAnimeDetail(animeKey);
  } else {
    renderIndex();
  }

  updateNavActive();

  // expose goToEpisode globally for inline onclick
  window.goToEpisode = function(key, ep) {
    goTo(`episode.html?anime=${key}&ep=${ep}`);
  };
}

document.addEventListener("DOMContentLoaded", init);
