/**
 * StarAnime — Data & Routing
 * Struktur halaman:
 *   index.html      → beranda (grid anime, search, hero)
 *   anime.html      → detail anime + daftar episode + batch download
 *   episode.html    → player episode + download per kualitas + prev/next
 */

/* ============================================================
   DATA ANIME
   Tambah anime baru dengan format yang sama.
   ============================================================ */
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
    aired: "14 Jul 2018 – 29 Sep 2018",
    season: "Summer 2018",
    duration: "24 menit/episode",
    quality: "BD (Sub Indo)",
    country: "JP",
    source: "Manga",
    genres: ["Comedy", "Seinen", "Slice of Life", "Adult Cast", "Gag Humor"],
    studio: "Zero-G",
    score: 8.44,
    members: 841789,
    rating: "PG-13",
    synopsis: "Iori Kitahara pindah ke kota pesisir Izu untuk tahun pertama kuliahnya, tinggal di atas Grand Blue — toko selam milik pamannya. Iori memimpikan kuliah yang ideal, namun justru terjerumus ke dalam aktivitas minum-minum para anggota Klub Selam yang santai. Dipengaruhi seniornya Shinji dan Ryuujirou, ia terpaksa ikut pesta-pesta aneh mereka. Sepupunya Chisa yang ketat akhirnya memergokinya, memicu bencana. Grand Blue mengadaptasi manga komedi populer karya Kenji Inoue & Kimitake Yoshioka dan mengikuti petualangan Iori bersama teman-teman eksentrik barunya sambil belajar menyelam.",
    cover: "https://picsum.photos/seed/grandblue-detail/400/600",
    episodes: {
      1:  { title: "Ep 1 — Iori Kitahara", cover: "https://picsum.photos/seed/gb1/320/180" },
      2:  { title: "Ep 2 — Shinji & Ryuujirou", cover: "https://picsum.photos/seed/gb2/320/180" },
      3:  { title: "Ep 3 — Perkenalan Klub Selam", cover: "https://picsum.photos/seed/gb3/320/180" },
      4:  { title: "Ep 4 — Malam Pertama di Izu", cover: "https://picsum.photos/seed/gb4/320/180" },
      5:  { title: "Ep 5 — Chisa Menemukan Iori", cover: "https://picsum.photos/seed/gb5/320/180" },
      6:  { title: "Ep 6 — Pesta di Grand Blue", cover: "https://picsum.photos/seed/gb6/320/180" },
      7:  { title: "Ep 7 — Latihan Menyelam", cover: "https://picsum.photos/seed/gb7/320/180" },
      8:  { title: "Ep 8 — Kompetisi Absurd", cover: "https://picsum.photos/seed/gb8/320/180" },
      9:  { title: "Ep 9 — Wajah Baru", cover: "https://picsum.photos/seed/gb9/320/180" },
      10: { title: "Ep 10 — Drama di Laut", cover: "https://picsum.photos/seed/gb10/320/180" },
      11: { title: "Ep 11 — Pertapaan", cover: "https://picsum.photos/seed/gb11/320/180" },
      12: { title: "Ep 12 — Akhir yang Manis", cover: "https://picsum.photos/seed/gb12/320/180" }
    },
    streaming: {
      // GANTI VIDEO_ID_NYA DENGAN ID YOUTUBE / EMBED LINK ASLI SETIAP EPISODE
      base: "https://www.youtube.com/embed/VIDEO_ID_GRAND_BLUE",
      note: "Streaming video akan muncul di sini setelah Link Asli Diisi"
    },
    download: {
      "360p": { server: "MiteDrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK 360p" },
      "480p": { server: "Usersdrive", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK 480p" },
      "720p": { server: "Berkasdrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK 720p" },
      "720p-alt": { server: "Terabox", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK 720p (Alt)" }
    },
    batch: {
      title: "Batch Grand Blue Season 1 (12 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: [
      { id: "grand-blue-s2", title: "Grand Blue Season 2", cover: "https://picsum.photos/seed/gbs2/320/180" }
    ]
  },

  "naruto": {
    id: 1,
    title: "Naruto",
    japanese: "ナルト",
    indonesian: "Naruto",
    alt: "Naruto, ナルト",
    type: "TV",
    episodes: 220,
    status: "Selesai Tayang",
    aired: "2002 – 2007",
    season: "Multiple",
    duration: "23 menit/episode",
    quality: "Sub Indo",
    country: "JP",
    source: "Manga",
    genres: ["Action", "Adventure", "Comedy", "Drama"],
    studio: "Pierrot",
    score: 8.69,
    members: 2319000,
    rating: "PG-13",
    synopsis: "Naruto Uzumaki adalah ninja perbatasan dari Konoha, desa yang menyembunyikan Jinchuriki — monster jahat yang dikurung di dalam tubuh manusia. Naruto membawa Kyuubi, rubah sembilan ekor, dan selama bersekolah ia terus-menerus diejek. Namun, ia bertekad menjadi Hokage — pemimpin desa — dan diundang untuk bergabung dengan tim ninjanya untuk perjuangan yang lebih besar.",
    cover: "https://picsum.photos/seed/naruto/400/600",
    episodes: {
      1:  { title: "Ep 1 — Enter: Naruto Uzumaki!", cover: "https://picsum.photos/seed/np1/320/180" },
      2:  { title: "Ep 2 — My Name is Konohamaru!", cover: "https://picsum.photos/seed/np2/320/180" },
      3:  { title: "Ep 3 — Sasuke and Sakura: Friends or Foes?", cover: "https://picsum.photos/seed/np3/320/180" },
      4:  { title: "Ep 4 — Sasuke's Ninja Way!", cover: "https://picsum.photos/seed/np4/320/180" },
      5:  { title: "Ep 5 — The Fugitive Ninja Team!", cover: "https://picsum.photos/seed/np5/320/180" },
      6:  { title: "Ep 6 — Land of Waves: The Introduction!", cover: "https://picsum.photos/seed/np6/320/180" },
      7:  { title: "Ep 7 — Raiders of the Underground", cover: "https://picsum.photos/seed/np7/320/180" },
      8:  { title: "Ep 8 — The Search for Tsunade", cover: "https://picsum.photos/seed/np8/320/180" },
      9:  { title: "Ep 9 — The Third Hokage's Legacy", cover: "https://picsum.photos/seed/np9/320/180" },
      10: { title: "Ep 10 — The Might of the Twelve Sages", cover: "https://picsum.photos/seed/np10/320/180" }
    },
    streaming: {
      base: "https://www.youtube.com/embed/VIDEO_ID_NARUTO",
      note: "GANTI DENGAN LINK YOUTUBE EPISODE"
    },
    download: {
      "360p": { server: "Berkasdrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Usersdrive", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "Terabox", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "Naruto Shippuden Batch (220 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: [
      { id: "naruto-shippuden", title: "Naruto Shippuden", cover: "https://picsum.photos/seed/naruto-s/320/180" }
    ]
  },

  "one-piece": {
    id: 2,
    title: "One Piece",
    japanese: "ワンピース",
    indonesian: "One Piece",
    alt: "One Piece, ワンピース",
    type: "TV",
    episodes: 1117,
    status: "Ongoing",
    aired: "1999 – Sekarang",
    season: "Multiple",
    duration: "24 menit/episode",
    quality: "Sub Indo",
    country: "JP",
    source: "Manga",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    studio: "Toei Animation",
    score: 8.71,
    members: 3105000,
    rating: "PG",
    synopsis: "Monkey D. Luffy, seorang anak muda yang ingin menjadi Raja Pirate, menaiki kapal Going Merry bersama bajak laut lainnya untuk mencari harta karun One Piece — warisan raja pirate legendaris Gol D. Roger — dan menebus keseimbangan dunia. Dalam perjalanannya ia memenangkan Heartthrob Jose, berlatih dengan Roronoa Zoro, bertemu Nami, Usopp, Sanji, dan bertemu pedagang karangan Drum.",
    cover: "https://picsum.photos/seed/onepiece/400/600",
    episodes: {
      1:  { title: "Ep 1 — Romance Dawn", cover: "https://picsum.photos/seed/op1/320/180" },
      2:  { title: "Ep 2 — Enter Zoro", cover: "https://picsum.photos/seed/op2/320/180" },
      3:  { title: "Ep 3 — Morgan vs. Luffy", cover: "https://picsum.photos/seed/op3/320/180" },
      4:  { title: "Ep 4 — Dept. of Justice", cover: "https://picsum.photos/seed/op4/320/180" },
      5:  { title: "Ep 5 — The Tale of Jango", cover: "https://picsum.photos/seed/op5/320/180" },
      6:  { title: "Ep 6 — The Quest for Arlong Park", cover: "https://picsum.photos/seed/op6/320/180" },
      7:  { title: "Ep 7 — The Fishman's Revenge", cover: "https://picsum.photos/seed/op7/320/180" },
      8:  { title: "Ep 8 — Recollections", cover: "https://picsum.photos/seed/op8/320/180" },
      9:  { title: "Ep 9 — Nami's Choice", cover: "https://picsum.photos/seed/op9/320/180" },
      10: { title: "Ep 10 — Welcome to the World of Fishers", cover: "https://picsum.photos/seed/op10/320/180" }
    },
    streaming: {
      base: "https://www.youtube.com/embed/VIDEO_ID_ONEPICE",
      note: "GANTI DENGAN LINK YOUTUBE EPISODE"
    },
    download: {
      "360p": { server: "Berkasdrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Usersdrive", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "MiteDrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "One Piece Batch (1117 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: []
  },

  "jujutsu-kaisen": {
    id: 3,
    title: "Jujutsu Kaisen",
    japanese: "呪術廻戦",
    indonesian: "Jujutsu Kaisen",
    alt: "Jujutsu Kaisen, 呪術廻戦",
    type: "TV",
    episodes: 47,
    status: "Ongoing",
    aired: "2020 – Sekarang",
    season: "Multiple",
    duration: "24 menit/episode",
    quality: "Sub Indo",
    country: "JP",
    source: "Manga",
    genres: ["Action", "Comedy", "Drama", "Fantasy", "Horror"],
    studio: "MAPPA",
    score: 8.74,
    members: 902300,
    rating: "PG-13",
    synopsis: "Cursed spirits appear when negative emotions reach a critical mass. Yuji Itadori, a high school boy who possesses superhuman physical abilities, encounters a girl who is suffering from a curse. Yuji saves her by removing the curse from her body. He learns that the girl is Nahori — a powerful sorcerer who died protecting him — and that he has inherited a relic in his body containing the fingers of Sukuna, a powerful curse who is known as the King of Curses.",
    cover: "https://picsum.photos/seed/jujutsu/400/600",
    episodes: {
      1:  { title: "Ep 1 — The Cursed Womb", cover: "https://picsum.photos/seed/jjk1/320/180" },
      2:  { title: "Ep 2 — What a Prick!", cover: "https://picsum.photos/seed/jjk2/320/180" },
      3:  { title: "Ep 3 — Death Painting Wonton", cover: "https://picsum.photos/seed/jjk3/320/180" },
      4:  { title: "Ep 4 — Two Tsutomu's", cover: "https://picsum.photos/seed/jjk4/320/180" },
      5:  { title: "Ep 5 — Tochukic Forest", cover: "https://picsum.photos/seed/jjk5/320/180" },
      6:  { title: "Ep 6 — The Power of the Curses", cover: "https://picsum.photos/seed/jjk6/320/180" },
      7:  { title: "Ep 7 — Lessons in Death", cover: "https://picsum.photos/seed/jjk7/320/180" },
      8:  { title: "Ep 8 — Binding Vows", cover: "https://picsum.photos/seed/jjk8/320/180" },
      9:  { title: "Ep 9 — Cursed Speech", cover: "https://picsum.photos/seed/jjk9/320/180" },
      10: { title: "Ep 10 — Black Screen", cover: "https://picsum.photos/seed/jjk10/320/180" }
    },
    streaming: {
      base: "https://www.youtube.com/embed/VIDEO_ID_JJK",
      note: "GANTI DENGAN LINK YOUTUBE EPISODE"
    },
    download: {
      "360p": { server: "MiteDrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Berkasdrive", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "Usersdrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "Jujutsu Kaisen Season 1 Batch (24 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: []
  },

  "spy-x-family": {
    id: 4,
    title: "Spy x Family",
    japanese: "スパイファミリー",
    indonesian: "Spy x Family",
    alt: "Spy x Family, スパイファミリー",
    type: "TV",
    episodes: 25,
    status: "Ongoing",
    aired: "2022 – Sekarang",
    season: "Multiple",
    duration: "24 menit/episode",
    quality: "Sub Indo",
    country: "JP",
    source: "Manga",
    genres: ["Action", "Comedy", "Slice of Life"],
    studio: "Wit Studio",
    score: 8.72,
    members: 620300,
    rating: "PG",
    synopsis: "A spy must create a fake family to infiltrate a school — and he picks a telepathic assassin as wife, and a telepathic teenage daughter as daughter, all because they also happen to be perfect targets for his mission. Chaos ensues.",
    cover: "https://picsum.photos/seed/spyfamily/400/600",
    episodes: {
      1:  { title: "Ep 1 — Operation Strix", cover: "https://picsum.photos/seed/sf1/320/180" },
      2:  { title: "Ep 2 — A Chaotic Family", cover: "https://picsum.photos/seed/sf2/320/180" },
      3:  { title: "Ep 3 — The Beautiful Child", cover: "https://picsum.photos/seed/sf3/320/180" },
      4:  { title: "Ep 4 — Beyond the Iihata River", cover: "https://picsum.photos/seed/sf4/320/180" },
      5:  { title: "Ep 5 — The Role of the Mother", cover: "https://picsum.photos/seed/sf5/320/180" },
      6:  { title: "Ep 6 — Preparation and the Whole Picture", cover: "https://picsum.photos/seed/sf6/320/180" },
      7:  { title: "Ep 7 — Candidate Selection", cover: "https://picsum.photos/seed/sf7/320/180" },
      8:  { title: "Ep 8 — The Wandering Miniminter", cover: "https://picsum.photos/seed/sf8/320/180" },
      9:  { title: "Ep 9 — Lighthouse", cover: "https://picsum.photos/seed/sf9/320/180" },
      10: { title: "Ep 10 — Split Decision", cover: "https://picsum.photos/seed/sf10/320/180" }
    },
    streaming: {
      base: "https://www.youtube.com/embed/VIDEO_ID_SPYFAMILY",
      note: "GANTI DENGAN LINK YOUTUBE EPISODE"
    },
    download: {
      "360p": { server: "Usersdrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Terabox", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "Berkasdrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "Spy x Family Batch (25 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: []
  },

  "my-hero-academia": {
    id: 5,
    title: "My Hero Academia",
    japanese: "僕のヒーローアカデミア",
    indonesian: "Boku no Hero Academia",
    alt: "My Hero Academia, 僕のヒーローアカデミア",
    type: "TV",
    episodes: 138,
    status: "Ongoing",
    aired: "2016 – Sekarang",
    season: "Multiple",
    duration: "24 menit/episode",
    quality: "Sub Indo",
    country: "JP",
    source: "Manga",
    genres: ["Action", "Comedy", "School", "Superhero"],
    studio: "Bones",
    score: 8.43,
    members: 1207800,
    rating: "PG-13",
    synopsis: "To be a hero, Izuku Midoriya must first become a student of U.A. High School's Hero Course. For years, Izuku dreamed of becoming a hero like All Might — the No. 1 Hero in Japan. When he learns that he was born Quirkless, he abandons his dream. However, after a fateful encounter, Izuku's life is changed forever.",
    cover: "https://picsum.photos/seed/myhero/400/600",
    episodes: {
      1:  { title: "Ep 1 — Izuku Midoriya: Origin", cover: "https://picsum.photos/seed/mha1/320/180" },
      2:  { title: "Ep 2 — My Hero", cover: "https://picsum.photos/seed/mha2/320/180" },
      3:  { title: "Ep 3 — The Ultimate Novice Hero", cover: "https://picsum.photos/seed/mha3/320/180" },
      4:  { title: "Ep 4 — All Might's Gone", cover: "https://picsum.photos/seed/mha4/320/180" },
      5:  { title: "Ep 5 — The Full-Caped Crusader", cover: "https://picsum.photos/seed/mha5/320/180" },
      6:  { title: "Ep 6 — Kamino Ward: The Great Hero Gathering", cover: "https://picsum.photos/seed/mha6/320/180" },
      7:  { title: "Ep 7 — Don't Call It a Nap", cover: "https://picsum.photos/seed/mha7/320/180" },
      8:  { title: "Ep 8 — Keep Your Eyes on the Prize", cover: "https://picsum.photos/seed/mha8/320/180" },
      9:  { title: "Ep 9 — Start Your Engines, Fifth Season", cover: "https://picsum.photos/seed/mha9/320/180" },
      10: { title: "Ep 10 — The Wait for the Sugar Daddy", cover: "https://picsum.photos/seed/mha10/320/180" }
    },
    streaming: {
      base: "https://www.youtube.com/embed/VIDEO_ID_MHA",
      note: "GANTI DENGAN LINK YOUTUBE EPISODE"
    },
    download: {
      "360p": { server: "Terabox", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Berkasdrive", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "Usersdrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "My Hero Academia Batch (138 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: []
  },

  "chainsaw-man": {
    id: 6,
    title: "Chainsaw Man",
    japanese: "チェンソーマン",
    indonesian: "Chainsaw Man",
    alt: "Chainsaw Man, チェンソーマン",
    type: "TV",
    episodes: 12,
    status: "Selesai Tayang",
    aired: "2022 – 2022",
    season: "Fall 2022",
    duration: "24 menit/episode",
    quality: "Sub Indo",
    country: "JP",
    source: "Manga",
    genres: ["Action", "Comedy", "Drama", "Horror"],
    studio: "MAPPA",
    score: 8.62,
    members: 812000,
    rating: "PG-13",
    synopsis: "Denji is broke, lives in a shack with his deadbeat father Pochita (a Devil Hunter), and his pet devil dog. After Pochita sacrifices himself to save Denji, Denji inherits the Chainsaw Devil's heart and gains the power to transform his body into a chainsaw. With nothing left to lose, he joins Public Safety and fights alongside Aki Hayakawa and Power.",
    cover: "https://picsum.photos/seed/chainsaw/400/600",
    episodes: {
      1:  { title: "Ep 1 — Chainsaw Man", cover: "https://picsum.photos/seed/csm1/320/180" },
      2:  { title: "Ep 2 — Introducing Power", cover: "https://picsum.photos/seed/csm2/320/180" },
      3:  { title: "Ep 3 — To the Rejected Cemetery", cover: "https://picsum.photos/seed/csm3/320/180" },
      4:  { title: "Ep 4 — Tomorrow Exists", cover: "https://picsum.photos/seed/csm4/320/180" },
      5:  { title: "Ep 5 — Full-Course Expect Death", cover: "https://picsum.photos/seed/csm5/320/180" },
      6:  { title: "Ep 6 — The Third Devil Hunter Kill", cover: "https://picsum.photos/seed/csm6/320/180" },
      7:  { title: "Ep 7 — You Are My Grandpa", cover: "https://picsum.photos/seed/csm7/320/180" },
      8:  { title: "Ep 8 — The Kai", cover: "https://picsum.photos/seed/csm8/320/180" },
      9:  { title: "Ep 9 — From Gerry to the Defeated", cover: "https://picsum.photos/seed/csm9/320/180" },
      10: { title: "Ep 10 — Super Crime Elimination Squad", cover: "https://picsum.photos/seed/csm10/320/180" }
    },
    streaming: {
      base: "https://www.youtube.com/embed/VIDEO_ID_CHAINSAW",
      note: "GANTI DENGAN LINK YOUTUBE EPISODE"
    },
    download: {
      "360p": { server: "MiteDrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Usersdrive", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "Berkasdrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "Chainsaw Man Batch (12 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: []
  },

  "attack-on-titan": {
    id: 7,
    title: "Attack on Titan",
    japanese: "進撃の巨人",
    indonesian: "Shingeki no Kyojin",
    alt: "Attack on Titan, 進撃の巨人, Shingeki no Kyojin",
    type: "TV",
    episodes: 87,
    status: "Selesai Tayang",
    aired: "2013 – 2023",
    season: "Multiple",
    duration: "24 menit/episode",
    quality: "Sub Indo",
    country: "JP",
    source: "Manga",
    genres: ["Action", "Drama", "Fantasy", "Military", "Supernatural"],
    studio: "WIT",
    score: 8.56,
    members: 1603000,
    rating: "PG-13",
    synopsis: "After his hometown is destroyed and his mother killed by inexplicably colossal humanoid creatures, young Eren Jaeger vows to cleanse the world of the titans that pain his kind. He vows to kill every last titan, even if he has to sacrifice his own humanity.",
    cover: "https://picsum.photos/seed/aot/400/600",
    episodes: {
      1:  { title: "Ep 1 — To You, in 2000 Years", cover: "https://picsum.photos/seed/aot1/320/180" },
      2:  { title: "Ep 2 — That Day", cover: "https://picsum.photos/seed/aot2/320/180" },
      3:  { title: "Ep 3 — A Dim Homeland", cover: "https://picsum.photos/seed/aot3/320/180" },
      4:  { title: "Ep 4 — The Night of the Closing Ceremony", cover: "https://picsum.photos/seed/aot4/320/180" },
      5:  { title: "Ep 5 — First Battle: The Struggle for Trost", cover: "https://picsum.photos/seed/aot5/320/180" },
      6:  { title: "Ep 6 — The Battle Begins", cover: "https://picsum.photos/seed/aot6/320/180" },
      7:  { title: "Ep 7 — The Things You Should See", cover: "https://picsum.photos/seed/aot7/320/180" },
      8:  { title: "Ep 8 — An Objective Is Not a Dream", cover: "https://picsum.photos/seed/aot8/320/180" },
      9:  { title: "Ep 9 — A Sound Argument", cover: "https://picsum.photos/seed/aot9/320/180" },
      10: { title: "Ep 10 — Mina's Window", cover: "https://picsum.photos/seed/aot10/320/180" }
    },
    streaming: {
      base: "https://www.youtube.com/embed/VIDEO_ID_AOT",
      note: "GANTI DENGAN LINK YOUTUBE EPISODE"
    },
    download: {
      "360p": { server: "Berkasdrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Terabox", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "Usersdrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "Attack on Titan Batch (87 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: []
  },

  "demon-slayer": {
    id: 8,
    title: "Demon Slayer",
    japanese: "鬼滅の刃",
    indonesian: "Kimetsu no Yaiba",
    alt: "Demon Slayer, 鬼滅の刃, Kimetsu no Yaiba",
    type: "TV",
    episodes: 44,
    status: "Ongoing",
    aired: "2019 – Sekarang",
    season: "Multiple",
    duration: "24 menit/episode",
    quality: "Sub Indo",
    country: "JP",
    source: "Manga",
    genres: ["Action", "Drama", "Historical", "Supernatural"],
    studio: "ufotable",
    score: 8.54,
    members: 1289400,
    rating: "PG-13",
    synopsis: "Ever since the short sword slayings shook the world, humans have lived in fear. Tanjiro Kamado, a young charcoal seller, has earned the admiration of even the toughest humans with his generous heart and fragile strength. But in the shadow of his extraordinary kindness, there's a secret: he's been born with a strange and wonderful power — the ability to see things in the dark.",
    cover: "https://picsum.photos/seed/demonslayer/400/600",
    episodes: {
      1:  { title: "Ep 1 — Cruelty", cover: "https://picsum.photos/seed/dbs1/320/180" },
      2:  { title: "Ep 2 — Tsuguko", cover: "https://picsum.photos/seed/dbs2/320/180" },
      3:  { title: "Ep 3 — The Village", cover: "https://picsum.photos/seed/dbs3/320/180" },
      4:  { title: "Ep 4 — The Boy and the Girl", cover: "https://picsum.photos/seed/dbs4/320/180" },
      5:  { title: "Ep 5 — The Letter", cover: "https://picsum.photos/seed/dbs5/320/180" },
      6:  { title: "Ep 6 — Across the Valley", cover: "https://picsum.photos/seed/dbs6/320/180" },
      7:  { title: "Ep 7 — The Demon Slayers", cover: "https://picsum.photos/seed/dbs7/320/180" },
      8:  { title: "Ep 8 — The Game Begins", cover: "https://picsum.photos/seed/dbs8/320/180" },
      9:  { title: "Ep 9 — The Haunted House", cover: "https://picsum.photos/seed/dbs9/320/180" },
      10: { title: "Ep 10 — The House of Asakusa", cover: "https://picsum.photos/seed/dbs10/320/180" }
    },
    streaming: {
      base: "https://www.youtube.com/embed/VIDEO_ID_DEMONSLAYER",
      note: "GANTI DENGAN LINK YOUTUBE EPISODE"
    },
    download: {
      "360p": { server: "Usersdrive", url: "#", size: "±350 MB", note: "GANTI DENGAN LINK" },
      "480p": { server: "Berkasdrive", url: "#", size: "±550 MB", note: "GANTI DENGAN LINK" },
      "720p": { server: "MiteDrive", url: "#", size: "±1.2 GB", note: "GANTI DENGAN LINK" }
    },
    batch: {
      title: "Demon Slayer Batch (44 Episode)",
      note: "GANTI DENGAN LINK BATCH",
      url: "#"
    },
    related: []
  }
};

/* ============================================================
   HELPERS
   ============================================================ */
function getQuery(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function goTo(path) {
  window.location.href = path;
}

function el(tag, attrs, children) {
  const node = document.createElement(tag);
  if (attrs) Object.entries(attrs).forEach(([k, v]) => {
    if (k === "className") node.className = v;
    else if (k === "innerHTML") node.innerHTML = v;
    else node.setAttribute(k, v);
  });
  if (children) {
    if (Array.isArray(children)) children.forEach(c => node.appendChild(c));
    else node.appendChild(children);
  }
  return node;
}

/* ============================================================
   RENDER BERANDA (index.html)
   ============================================================ */
function renderIndex() {
  const main = document.getElementById("main");
  main.innerHTML = "";

  // Hero
  const hero = el("section", { className: "hero" });
  const heroInner = el("div", { className: "hero-inner" }, [
    el("div", { className: "hero-text" }, [
      el("span", { className: "hero-badge" }, "★ HOTTEST"),
      el("h1", { style: "font-size: 30px; font-weight: 800; margin: 8px 0 6px; line-height: 1.2" },
        "Streaming Anime Sub Indo"),
      el("p", { style: "color: var(--text-secondary); font-size: 14px; line-height: 1.6; margin-bottom: 16px" },
        "Portal streaming & download anime subtitle Indonesia. Update tiap hari — ongoing, selesai, movies, donghua, dan batch."),
      el("div", { className: "hero-stats" }, [
        el("div", { className: "stat" }, [el("span", { className: "stat-value", style: "color: var(--accent)" }, "12.800+"), el("span", { className: "stat-label" }, "Episode")]),
        el("div", { className: "stat" }, [el("span", { className: "stat-value", style: "color: var(--accent)" }, "5.200+"), el("span", { className: "stat-label" }, "Anime")]),
        el("div", { className: "stat" }, [el("span", { className: "stat-value", style: "color: var(--accent)" }, "50+"), el("span", { className: "stat-label" }, "Studio")]),
        el("div", { className: "stat" }, [el("span", { className: "stat-value", style: "color: var(--accent)" }, "100%"), el("span", { className: "stat-label" }, "Sub Indo")])
      ]),
      el("div", { style: "display: flex; gap: 10px; flex-wrap: wrap" }, [
        el("a", { href: "index.html", className: "btn btn-primary", style: "padding: 10px 20px; font-size: 14px" }, "Lihat Populer →"),
        el("a", { href: "anime.html?anime=grand-blue", className: "btn btn-outline", style: "padding: 10px 20px; font-size: 14px" }, "Grand Blue")
      ])
    ]),
    el("div", { className: "hero-cover" }, [
      el("img", { src: "https://picsum.photos/seed/star-anime-hero/600/400", alt: "StarAnime", style: "width:100%; border-radius: 12px; box-shadow: 0 8px 32px rgba(0,0,0,0.5);" })
    ])
  ]);
  hero.appendChild(heroInner);
  main.appendChild(hero);

  // 📌 Grid: function builder
  function animeGrid(title, items, linkAll) {
    const section = el("section", { className: "section" });
    section.appendChild(el("div", { className: "section-header" }, [
      el("h2", { style: "font-size: 18px; font-weight: 700" }, title),
      linkAll ? el("a", { href: "#", style: "font-size: 13px; color: var(--accent)" }, "Lihat Semua →") : null
    ].filter(Boolean)));

    const grid = el("div", { className: "grid" });
    items.forEach(key => {
      const a = ANIME_DB[key];
      if (!a) return;
      const card = el("a", { href: `anime.html?anime=${key}`, className: "card" });
      const thumb = el("div", { className: "thumb" });
      thumb.appendChild(el("img", { src: a.cover, alt: a.title, loading: "lazy",
        onError: "this.onerror=null; this.src='https://picsum.photos/seed/fallback/320/180'" }));
      const overlay = el("div", { className: "overlay", style: "opacity:0; transition:opacity 0.2s" });
      overlay.appendChild(el("div", { className: "play-btn" }, "▶"));
      thumb.appendChild(overlay);
      card.appendChild(thumb);

      const info = el("div", { className: "info" });
      info.appendChild(el("div", { className: "title" }, a.title));
      info.appendChild(el("div", { className: "sub" }, `${a.episodes} Ep · ${a.status}`));
      card.appendChild(info);
      grid.appendChild(card);
    });
    section.appendChild(grid);
    return section;
  }

  // Featured: Grand Blue + 2 lainnya
  main.appendChild(animeGrid("🔥 Populer Hari Ini", ["grand-blue", "one-piece", "jujutsu-kaisen"], true));

  // Ongoing
  main.appendChild(animeGrid("📺 Anime Ongoing", ["one-piece", "jujutsu-kaisen", "spy-x-family", "my-hero-academia"], true));

  // Finished
  main.appendChild(animeGrid("✅ Anime Selesai (Batch)", ["grand-blue", "naruto", "chainsaw-man", "attack-on-titan"], true));

  // Movie
  main.appendChild(animeGrid("🎬 Anime Movie", [], false));
  const movieSection = main.lastElementChild;
  const movieGrid = movieSection.querySelector(".grid");
  ["one-piece-film-red", "suzume", "spirit-away", "your-name"].forEach(key => {
    const movie = el("a", { href: "#", className: "card" });
    const thumb = el("div", { className: "thumb" });
    thumb.appendChild(el("img", { src: `https://picsum.photos/seed/${key}/320/180`, alt: key, loading: "lazy",
      onError: "this.onerror=null; this.src='https://picsum.photos/seed/fallback/320/180'" }));
    movie.appendChild(thumb);
    const info = el("div", { className: "info" });
    info.appendChild(el("div", { className: "title" }, key.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())));
    info.appendChild(el("div", { className: "sub" }, "Movie · Sub Indo"));
    movie.appendChild(info);
    movieGrid.appendChild(movie);
  });

  // Genre
  main.appendChild(animeGrid("🏷️ Genre Anime", [], false));
  const genreSection = main.lastElementChild;
  const genreGrid = genreSection.querySelector(".grid");
  ["Action", "Comedy", "Fantasy", "Seinen", "Slice of Life", "Drama"].forEach(g => {
    const item = el("a", { href: "#", className: "card" });
    const thumb = el("div", { className: "thumb" });
    thumb.appendChild(el("img", { src: `https://picsum.photos/seed/genre-${g.toLowerCase()}/320/180`, alt: g, loading: "lazy",
      onError: "this.onerror=null; this.src='https://picsum.photos/seed/fallback/320/180'" }));
    item.appendChild(thumb);
    const info = el("div", { className: "info" });
    info.appendChild(el("div", { className: "title" }, g));
    info.appendChild(el("div", { className: "sub" }, "Semua anime"));
    item.appendChild(info);
    genreGrid.appendChild(item);
  });

  // Studio
  main.appendChild(animeGrid("🎨 Studio Anime", [], false));
  const studioSection = main.lastElementChild;
  const studioGrid = studioSection.querySelector(".grid");
  ["Zero-G", "Pierrot", "MAPPA", "WIT", "ufotable", "Bones"].forEach(s => {
    const item = el("a", { href: "#", className: "card" });
    const thumb = el("div", { className: "thumb" });
    thumb.appendChild(el("img", { src: `https://picsum.photos/seed/studio-${s.toLowerCase().replace(/\s/g,'-')}/320/180`, alt: s, loading: "lazy",
      onError: "this.onerror=null; this.src='https://picsum.photos/seed/fallback/320/180'" }));
    item.appendChild(thumb);
    const info = el("div", { className: "info" });
    info.appendChild(el("div", { className: "title" }, s));
    info.appendChild(el("div", { className: "sub" }, "Studio anime"));
    item.appendChild(info);
    studioGrid.appendChild(item);
  });
}

/* ============================================================
   RENDER DETAIL ANIME (anime.html)
   ============================================================ */
function renderAnimeDetail(key) {
  const a = ANIME_DB[key];
  if (!a) {
    document.getElementById("main").innerHTML = `<div style="padding:40px;color:var(--text-secondary)">Anime <strong>${key}</strong> tidak ditemukan.</div>`;
    document.querySelector(".breadcrumb").innerHTML = `<a href="index.html">Beranda</a> / <span>Tidak ditemukan</span>`;
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

  const relatedHtml = a.related.length > 0
    ? a.related.map(r => `
        <a href="anime.html?anime=${r.id}" class="card">
          <div class="thumb">
            <img src="${r.cover}" alt="${r.title}" loading="lazy"
              onError="this.onerror=null; this.src='https://picsum.photos/seed/fallback/320/180'">
            <div class="overlay"><div class="play-btn">▶</div></div>
          </div>
          <div class="info">
            <div class="title">${r.title}</div>
            <div class="sub">${r.title.includes("Season") ? "Season" : "Serial"}</div>
          </div>
        </a>
      `).join("")
    : `<p style="color:var(--text-muted);font-size:13px">Belum ada serial terkait.</p>`;

  document.getElementById("main").innerHTML = `
    <div class="breadcrumb" style="margin-bottom:16px; font-size:12px; color:var(--text-muted)">
      <a href="index.html">Beranda</a> / <a href="anime.html?anime=${key}">${a.title}</a>
    </div>

    <section class="anime-hero">
      <div class="anime-cover">
        <img src="${a.cover}" alt="${a.title}" loading="lazy"
          style="width:100%; border-radius: 8px; box-shadow: 0 8px 24px rgba(0,0,0,0.5);"
          onError="this.onerror=null; this.src='https://picsum.photos/seed/fallback-anime/320/180'">
      </div>
      <div class="anime-info">
        <span class="hero-badge" style="margin-bottom:10px; display:inline-block">★ ${a.genres.slice(0,2).join(" · ")}</span>
        <h1 style="font-size: 30px; font-weight: 800; margin-bottom: 4px; line-height: 1.2">${a.title}</h1>
        <p style="color:var(--text-muted); font-size:12px; margin-bottom:8px">${a.alt}</p>
        <p style="color:var(--text-secondary); font-size:13px; line-height:1.7; margin-bottom:14px">${a.synopsis}</p>

        <div class="meta-grid">
          ${metaItems.map(m => `
            <div class="meta-item">
              <span class="meta-label">${m.label}</span>
              <span class="meta-value">${m.value}</span>
            </div>
          `).join("")}
        </div>

        <div style="margin-top:12px">${genresHtml}</div>

        <div class="anime-actions" style="margin-top:16px">
          <a href="episode.html?anime=${key}&ep=1" class="btn btn-primary">▶ Nonton Episode 1</a>
          <a href="#batch" class="btn btn-outline">📦 Batch Download</a>
        </div>
      </div>
    </section>

    <section class="episode-section">
      <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Daftar Episode (${a.episodes})</h3>
      <div class="episode-grid">${episodeItems}</div>
    </section>

    <section class="download-section" id="batch">
      <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">📦 Batch Download</h3>
      ${a.batch ? `
        <div class="download-links">
          <div class="download-link">
            <span class="quality" style="color:var(--accent); font-weight:700">BATCH</span>
            <span class="server">${a.batch.title}</span>
            <span class="size" style="color:var(--text-muted); font-size:11px">GANTI DENGAN LINK</span>
            <a href="${a.batch.url}" class="btn btn-primary btn-sm" onclick="event.preventDefault(); alert('Link batch: ${a.batch.note}')">Download Batch</a>
          </div>
        </div>
      ` : `<p style="color:var(--text-muted);font-size:13px">Belum tersedia batch download.</p>`}
    </section>

    <section class="related-section">
      <h3 style="font-size:16px; font-weight:700; margin-bottom:12px">Serial Terkait</h3>
      <div class="related-grid">${relatedHtml}</div>
    </section>
  `;

  document.querySelector(".breadcrumb").innerHTML = `
    <a href="index.html">Beranda</a> / <a href="anime.html?anime=${key}">${a.title}</a>
  `;
}

/* ============================================================
   RENDER EPISODE PLAYER (episode.html)
   ============================================================ */
function renderEpisode(key, epNum) {
  const a = ANIME_DB[key];
  if (!a) {
    document.getElementById("main").innerHTML = `<div style="padding:40px;color:red">Anime tidak ditemukan.</div>`;
    return;
  }
  const ep = a.episodes[epNum];
  if (!ep) {
    document.getElementById("main").innerHTML = `<div style="padding:40px;color:red">Episode ${epNum} tidak ditemukan.</div>`;
    return;
  }

  document.title = `Episode ${epNum} — ${a.title} — StarAnime`;

  const prevEp = epNum > 1 ? epNum - 1 : null;
  const nextEp = epNum < a.episodes ? epNum + 1 : null;

  const downloadItems = Object.entries(a.download).map(([q, d]) => `
    <div class="download-link">
      <span class="quality" style="color:var(--accent); font-weight:700; min-width:50px">${q}</span>
      <span class="server" style="color:var(--text-muted); font-size:12px">${d.server}</span>
      <span class="size" style="color:var(--text-muted); font-size:11px">${d.size}</span>
      <a href="${d.url}" class="btn btn-primary btn-sm" onclick="event.preventDefault(); alert('Link ${q}: ${d.note}')">📥 Download</a>
      <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(a.title + ' episode ' + epNum)}" target="_blank" class="btn btn-outline btn-sm" title="Cari video di YouTube">▶ Streaming</a>
    </div>
  `).join("");

  document.getElementById("main").innerHTML = `
    <div class="breadcrumb" style="margin-bottom:16px; font-size:12px; color:var(--text-muted)">
      <a href="index.html">Beranda</a>
      <span class="sep">/</span>
      <a href="anime.html?anime=${key}">${a.title}</a>
      <span class="sep">/</span>
      <span>Episode ${epNum}</span>
    </div>

    <section class="player-section">
      <div class="player-header">
        <div class="player-meta">
          <h2 style="font-size:18px; font-weight:700; color:var(--text-primary); margin-bottom:2px">Episode ${epNum} — ${ep.title}</h2>
          <p style="color:var(--text-muted); font-size:12px">${a.title} · ${a.quality} · ${a.duration}</p>
        </div>
        <div class="player-episode-info">
          <a href="episode.html?anime=${key}&ep=${prevEp}" class="btn btn-outline btn-sm" ${prevEp ? "" : "style='opacity:0.4;pointer-events:none'"}>◀ Prev</a>
          <span style="font-size:13px; color:var(--text-muted); padding: 0 8px; align-self:center">${epNum} / ${a.episodes}</span>
          <a href="episode.html?anime=${key}&ep=${nextEp}" class="btn btn-outline btn-sm" ${nextEp ? "" : "style='opacity:0.4;pointer-events:none'"}>Next ▶</a>
        </div>
      </div>

      <div class="player-frame">
        <div class="player-placeholder">
          <div style="text-align:center; padding: 20px">
            <div style="font-size:48px; margin-bottom:8px; opacity:0.7">🎬</div>
            <p style="color:var(--text-secondary); font-size:13px; margin-bottom:4px">Video player akan muncul di sini</p>
            <p style="color:var(--text-muted); font-size:12px">${a.streaming.note}</p>
            <p style="color:var(--text-muted); font-size:11px; margin-top:8px">Embed base: <code style="background:var(--bg-card); padding:2px 6px; border-radius:4px; font-size:11px; word-break:break-all">${a.streaming.base}</code></p>
          </div>
        </div>
      </div>
    </section>

    <section class="download-section">
      <h3 style="font-size:16px; font-weight:700; margin-bottom:8px">📥 Download Episode ${epNum}</h3>
      <p style="color:var(--text-muted); font-size:12px; margin-bottom:12px">Sub Indo · ${a.quality} · ${a.duration}</p>
      <div class="download-links">${downloadItems}</div>
    </section>

    <footer class="episode-footer" style="display:flex; gap:12px; margin-top:24px; flex-wrap:wrap">
      <a href="anime.html?anime=${key}" class="btn btn-primary">← Daftar Episode ${a.title}</a>
      <a href="index.html" class="btn btn-outline">← Beranda</a>
    </footer>
  `;
}

/* ============================================================
   ROUTER UTAMA
   ============================================================ */
window.goToEpisode = function(key, ep) {
  goTo(`episode.html?anime=${key}&ep=${ep}`);
};

function init() {
  const path = window.location.pathname;
  const animeKey = getQuery("anime");
  const epNum = getQuery("ep");

  if (path.includes("episode.html") && animeKey && epNum) {
    renderEpisode(animeKey, Number(epNum));
  } else if (path.includes("anime.html") && animeKey) {
    renderAnimeDetail(animeKey);
  } else {
    renderIndex();
  }

  // Highlight nav aktif
  document.querySelectorAll(".nav a").forEach(link => {
    const href = link.getAttribute("href");
    if (href === "index.html" && !path.includes("anime.html") && !path.includes("episode.html")) {
      link.classList.add("active");
    } else if (href.includes("anime.html")) {
      link.classList.add("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
