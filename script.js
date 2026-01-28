// Room Plans Data
const ROOM_PLANS = [
    {
        id: 'standard-tent',
        name: '小屋付きサイト',
        subName: '特別な一棟で最高のキャンプを！',
        description: 'キャンプ場から切り出した木材も有効利用し、至る所に手作りのやさしさとぬくもりが感じられる、特別な一棟です。',
        price: 18000,
        capacity: '2名',
        image: 'image/image 41.jpg',
        gallery: [
            'image/image 41.jpg',
            'image/1.jpg',
            'image/2.jpg',
            'image/3.jpg'
        ],
        tags: ['禁煙', 'ペット不可'],
        features: ['冷蔵庫', 'Wi-Fi完備', 'エアコン'],
        availability: 5
    },
    {
        id: 'luxury-dome',
        name: '小屋付きサイト2',
        subName: '夜景を独り占め！',
        description: '前面がフルオープンすることで、とても開放的な雰囲気です。​眠りにつく瞬間まで、寝転がったまま、夜景を見ることができる素敵な小屋に仕上がりました☆',
        price: 28000,
        capacity: '2~4名',
        image: 'image/1.jpg',
        gallery: [
            'image/1.jpg',
            'image/2.jpg',
            'image/3.jpg',
            'image/image 41.jpg'
        ],
        tags: ['禁煙', 'ペット不可'],
        features: ['エアコン完備', '屋外シンク', '屋外フリースペース'],
        availability: 2
    },
    {
        id: 'forest-cabin',
        name: '森さん家',
        subName: '森に包まれる静寂の隠れ家',
        description: '建物横には充分な広さのウッドデッキがあります！この場所でのBBQは、最高です！また、テントやタープも設営できますので、工夫次第で大人数にも対応可。トイレはハナレサイトのトイレを使用します。（徒歩20秒程度）サウナもオプションで使えます。',
        price: 35000,
        capacity: '2〜4名',
        image: 'image/2.jpg',
        gallery: [
            'image/2.jpg',
            'image/3.jpg',
            'image/1.jpg',
            'image/image 41.jpg'
        ],
        tags: ['禁煙', 'ペット可'],
        features: ['屋外フリースペース', '屋外水道', 'エアコン'],
        availability: 3
    },
    {
        id: 'premium-suite',
        name: '天地家',
        subName: '枕木のウッドガーデンなど手作りの優しさとぬくもりが感じられる、特別な一棟。',
        description: 'デッキから見上げる天には星空。デッキから見下ろす地上は夜景。',
        price: 18000,
        capacity: '2〜4名',
        image: 'image/3.jpg',
        gallery: [
            'image/3.jpg',
            'image/2.jpg',
            'image/1.jpg',
            'image/image 41.jpg'
        ],
        tags: ['禁煙', 'ペット不可'],
        features: ['焚き火台', '朝食用レトルト', '室内用テーブル'],
        availability: 1
    },
    {
        id: 'family-tent',
        name: 'ファミリー・テント',
        subName: '家族で楽しむ広々スペース',
        description: '大きな家族やグループに最適な広々としたテント。子供たちが自由に遊べるスペースも確保されています。',
        price: 22000,
        capacity: '4〜6名',
        image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80&w=800'
        ],
        tags: ['ファミリー', '広々'],
        features: ['キングサイズベッド', 'キッズスペース', 'BBQセット'],
        availability: 4
    },
    {
        id: 'romantic-suite',
        name: 'ロマンティック・スイート',
        subName: '二人だけの特別な時間',
        description: 'カップル向けに設計されたロマンティックな空間。特別な記念日に最適なプランです。',
        price: 32000,
        capacity: '2名',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=800'
        ],
        tags: ['カップル', '記念日'],
        features: ['ロマンスパッケージ', 'シャンパン', '専用デッキ'],
        availability: 3
    },
    {
        id: 'eco-lodge',
        name: 'エコ・ロッジ',
        subName: '環境に優しい自然体験',
        description: '環境に配慮したエコフレンドリーなロッジ。自然と調和した持続可能な宿泊体験を提供します。',
        price: 25000,
        capacity: '2〜4名',
        image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000',
        gallery: [
            'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1500534314211-0a24cd03f2c0?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80&w=800'
        ],
        tags: ['エコ', '環境配慮'],
        features: ['ソーラー発電', '雨水利用', 'オーガニック食材'],
        availability: 6
    }
];

// Booking State
let booking = {
    checkIn: '2024-05-20',
    checkOut: '2024-05-21',
    adults: 2,
    children: 0
};

// Create Room Card HTML
function createRoomCard(plan) {
    const galleryImages = (plan.gallery && plan.gallery.length)
        ? plan.gallery
        : [plan.image];

    const thumbnailsHTML = galleryImages.slice(0, 4).map((src, index) => `
        <button 
            class="room-thumb ${index === 0 ? 'room-thumb-active' : ''}" 
            type="button"
            onclick="handleThumbnailClick('${plan.id}', ${index})"
            aria-label="${plan.name} のサムネイル ${index + 1}"
        >
            <img src="${src}" alt="${plan.name} サムネイル ${index + 1}">
        </button>
    `).join('');

    const tagsHTML = plan.tags.map(tag => 
        `<span class="room-tag">${tag}</span>`
    ).join('');

    const featuresHTML = plan.features.slice(0, 2).map(feature => 
        `<div class="room-feature-check">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>${feature}</span>
        </div>`
    ).join('');

    return `
        <div class="room-card" data-plan-id="${plan.id}">
            <div class="room-image-wrapper">
                <img src="${galleryImages[0]}" alt="${plan.name}" class="room-image js-room-main-image">
                <div class="room-tags">
                    ${tagsHTML}
                </div>
            </div>
            <div class="room-content">
                <div>
                    <div class="room-header">
                        <div class="room-info">
                            <h3>${plan.subName}</h3>
                            <h2 class="room-name">${plan.name}</h2>
                        </div>
                        <div class="room-price-wrapper">
                            <p class="room-price-label">1名様あたり (税込)</p>
                            <p class="room-price">¥${plan.price.toLocaleString()}</p>
                        </div>
                    </div>
                    <p class="room-description">${plan.description}</p>
                    <div class="room-features">
                        <div class="room-feature-item">
                            <div class="room-feature-icon">
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <span class="room-feature-text">定員: ${plan.capacity}</span>
                        </div>
                        <div class="room-feature-group">
                            <p class="room-feature-group-label">主な設備</p>
                            <div class="room-feature-list">
                                ${featuresHTML}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="room-footer">
                    <div class="room-gallery">
                        ${thumbnailsHTML}
                    </div>
                    <button class="room-select-btn" onclick="handleSelectPlan('${plan.name}')">
                        <span>選択する</span>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Handle Plan Selection
function handleSelectPlan(planName) {
    alert(`${planName} を選択しました。\n予約を続けますか？`);
}

// Update vertical scroll progress bar (girl image moves with page)
function updateScrollProgress() {
    const thumb = document.querySelector('.scroll-progress-thumb');
    const track = document.querySelector('.scroll-progress');
    if (!thumb || !track) return;

    const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

    const trackHeight = track.clientHeight;
    const thumbHeight = thumb.clientHeight || 22;
    const maxOffset = Math.max(trackHeight - thumbHeight, 0);
    const offset = maxOffset * ratio;

    thumb.style.setProperty('--progress-y', `${offset}px`);
}

// Handle thumbnail click (switch main image inside a card)
function handleThumbnailClick(planId, imageIndex) {
    const plan = ROOM_PLANS.find(p => p.id === planId);
    if (!plan) return;

    const images = (plan.gallery && plan.gallery.length)
        ? plan.gallery
        : [plan.image];

    const safeIndex = (imageIndex >= 0 && imageIndex < images.length) ? imageIndex : 0;
    const newSrc = images[safeIndex];

    const card = document.querySelector(`.room-card[data-plan-id="${planId}"]`);
    if (!card) return;

    const mainImage = card.querySelector('.js-room-main-image');
    if (mainImage) {
        mainImage.src = newSrc;
    }

    const thumbs = card.querySelectorAll('.room-thumb');
    thumbs.forEach((thumb, idx) => {
        if (idx === safeIndex) {
            thumb.classList.add('room-thumb-active');
        } else {
            thumb.classList.remove('room-thumb-active');
        }
    });
}

// Handle Search
function handleSearch() {
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const adults = parseInt(document.getElementById('adults').value);
    const children = parseInt(document.getElementById('children').value);
    
    booking = { checkIn, checkOut, adults, children };
    console.log('Searching with:', booking);
    // You can add search logic here
}

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Pagination State
let currentPage = 1;
const itemsPerPage = 4;
const totalPages = Math.ceil(ROOM_PLANS.length / itemsPerPage);

// Render Room Cards for Current Page
function renderRoomCards() {
    const roomList = document.getElementById('room-list');
    if (!roomList) return;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPlans = ROOM_PLANS.slice(startIndex, endIndex);

    roomList.innerHTML = currentPlans.map(plan => createRoomCard(plan)).join('');
}

// Render Pagination Controls
function renderPagination() {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;

    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let paginationHTML = '<div class="pagination-controls">';
    
    // Previous button
    if (currentPage > 1) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage - 1})">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                <path d="M15 19l-7-7 7-7"></path>
            </svg>
            <span>前へ</span>
        </button>`;
    } else {
        paginationHTML += `<button class="pagination-btn pagination-btn-disabled" disabled>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                <path d="M15 19l-7-7 7-7"></path>
            </svg>
            <span>前へ</span>
        </button>`;
    }

    // Page numbers
    paginationHTML += '<div class="pagination-numbers">';
    for (let i = 1; i <= totalPages; i++) {
        if (i === currentPage) {
            paginationHTML += `<span class="pagination-number pagination-number-active">${i}</span>`;
        } else {
            paginationHTML += `<span class="pagination-number" onclick="goToPage(${i})">${i}</span>`;
        }
    }
    paginationHTML += '</div>';

    // Next button
    if (currentPage < totalPages) {
        paginationHTML += `<button class="pagination-btn" onclick="goToPage(${currentPage + 1})">
            <span>次へ</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                <path d="M9 5l7 7-7 7"></path>
            </svg>
        </button>`;
    } else {
        paginationHTML += `<button class="pagination-btn pagination-btn-disabled" disabled>
            <span>次へ</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                <path d="M9 5l7 7-7 7"></path>
            </svg>
        </button>`;
    }

    paginationHTML += '</div>';
    paginationContainer.innerHTML = paginationHTML;
}

// Go to specific page
function goToPage(page) {
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderRoomCards();
    renderPagination();
    applyScrollReveal();
    // Scroll to room list
    const roomList = document.getElementById('room-list');
    if (roomList) {
        roomList.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Scroll reveal animations
let __revealObserver;
function applyScrollReveal() {
    const targets = [
        ...document.querySelectorAll('.filter-container'),
        ...document.querySelectorAll('.room-card'),
        ...document.querySelectorAll('.northman-feature-card')
    ];
    if (targets.length === 0) return;

    // Mark base class (idempotent)
    for (const el of targets) el.classList.add('reveal');

    if (!('IntersectionObserver' in window)) {
        for (const el of targets) el.classList.add('is-visible');
        return;
    }

    if (!__revealObserver) {
        __revealObserver = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    entry.target.classList.add('is-visible');
                    __revealObserver.unobserve(entry.target);
                }
            },
            { root: null, threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
        );
    }

    for (const el of targets) __revealObserver.observe(el);
}

// Initialize App
function init() {
    renderRoomCards();
    renderPagination();
    applyScrollReveal();
    initNorthmanScrollCards();

    // Update booking state when inputs change
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    const adultsSelect = document.getElementById('adults');
    const childrenSelect = document.getElementById('children');

    if (checkInInput) {
        checkInInput.addEventListener('change', (e) => {
            booking.checkIn = e.target.value;
        });
    }

    if (checkOutInput) {
        checkOutInput.addEventListener('change', (e) => {
            booking.checkOut = e.target.value;
        });
    }

    if (adultsSelect) {
        adultsSelect.addEventListener('change', (e) => {
            booking.adults = parseInt(e.target.value);
        });
    }

    if (childrenSelect) {
        childrenSelect.addEventListener('change', (e) => {
            booking.children = parseInt(e.target.value);
        });
    }

    // init scroll progress bar
    updateScrollProgress();
    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);
}

// ===== Navbar hide on scroll (all pages) =====
function initNavbarHideOnScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScrollY = window.scrollY || 0;
  const delta = 6; // minimal scroll to toggle

  function handleScroll() {
    const current = window.scrollY || 0;
    const diff = current - lastScrollY;

    if (Math.abs(diff) < delta) {
      lastScrollY = current;
      return;
    }

    if (current > lastScrollY && current > 40) {
      // scrolling down
      navbar.classList.add('navbar-hidden');
    } else {
      // scrolling up
      navbar.classList.remove('navbar-hidden');
    }

    lastScrollY = current;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
}

// ===== Northman 卡片堆叠滚动效果 =====
// ===== Northman 卡片堆叠滚动效果（稳定版 + 防重复 + 日志）=====
function initNorthmanScrollCards() {
  const scrollRoot = document.querySelector('.js-northman-scroll');
  const stage = document.querySelector('.js-northman-stage');
  const cards = Array.from(document.querySelectorAll('.js-northman-card'));

  console.log('[northman:init]', {
    hasScrollRoot: !!scrollRoot,
    hasStage: !!stage,
    cardsLen: cards.length
  });

  if (!scrollRoot || !stage || cards.length === 0) return;

  // ✅ 防止重复初始化：如果你不小心多次调用，不会叠加监听
  if (scrollRoot.dataset.northmanInited === '1') {
    console.log('[northman] already inited');
    return;
  }
  scrollRoot.dataset.northmanInited = '1';

  const pageCount = cards.length;

  function clamp01(n) {
    return Math.max(0, Math.min(1, n));
  }

  function update() {
    // ✅ 用 rect 算进度：比 offsetTop 稳得多
    const rect = scrollRoot.getBoundingClientRect();
    const vh = window.innerHeight || 0;

    // section 顶到视口顶：0；滚完整段：1
    const total = rect.height - vh;
    const p = clamp01(-rect.top / (total || 1));

    // 调试：你滚动时这个 p 必须变化
    // console.log('[northman:p]', p.toFixed(3));

    const seg = 1 / pageCount;

    // reset
    for (let i = 0; i < pageCount; i++) {
      cards[i].style.setProperty('--enter', '0');
      cards[i].style.setProperty('--shrink', '0');
      cards[i].classList.remove('is-active');
    }

    // enter / shrink
    for (let i = 0; i < pageCount; i++) {
      const enter = clamp01((p - i * seg) / seg);
      cards[i].style.setProperty('--enter', enter.toFixed(3));

      if (i > 0) {
        const shrink = clamp01((p - (i - 1) * seg) / seg);
        cards[i - 1].style.setProperty('--shrink', shrink.toFixed(3));
      }
    }

    const activeIndex = Math.min(pageCount - 1, Math.floor(p / seg));
    cards[activeIndex]?.classList.add('is-active');
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);

  console.log('[northman] update bound ✅');
}

// ===== Guestbook: persist user posts to localStorage =====
const GUESTBOOK_POSTS_STORAGE_KEY = 'guestbook_user_posts_v1';

function loadGuestbookPosts() {
  try {
    const raw = localStorage.getItem(GUESTBOOK_POSTS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.warn('Failed to load guestbook posts:', e);
    return [];
  }
}

function saveGuestbookPosts(posts) {
  try {
    localStorage.setItem(GUESTBOOK_POSTS_STORAGE_KEY, JSON.stringify(posts));
  } catch (e) {
    console.warn('Failed to save guestbook posts:', e);
  }
}

function addGuestbookPostToStorage(post) {
  const posts = loadGuestbookPosts();
  posts.unshift(post);
  // keep latest 30
  if (posts.length > 30) posts.length = 30;
  saveGuestbookPosts(posts);
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

// ✅ 1️⃣ 先定义：生成便利贴的函数（可从 storage 恢复，也可新建并保存）
function createUserPost(message, opts = {}) {
  const postsContainer = document.querySelector('.posts-container');
  if (!postsContainer) {
    console.error('posts-container not found');
    return;
  }

  const fromStorage = !!opts.fromStorage;
  const data = opts.data || null;
  const uploadedImages = opts.uploadedImages || [];

  // background image (postme1-6)
  const bgIndex = fromStorage && data?.bgIndex ? data.bgIndex : (Math.floor(Math.random() * 6) + 1);
  const postmeImage = `image/postme${bgIndex}.png`;

  // position + rotation
  let spawnTop = 200;
  let spawnLeft = 200;
  let rotateDeg = Math.random() * 12 - 6;

  if (fromStorage && data) {
    spawnTop = Number(data.top ?? spawnTop);
    spawnLeft = Number(data.left ?? spawnLeft);
    rotateDeg = Number(data.rotate ?? rotateDeg);
  } else {
    const presetPosts = postsContainer.querySelectorAll('.post-item');
    const containerRect = postsContainer.getBoundingClientRect();

    if (presetPosts.length > 0) {
      const anchor = presetPosts[Math.floor(Math.random() * presetPosts.length)];
      const r = anchor.getBoundingClientRect();

      const ax = r.left - containerRect.left;
      const ay = r.top - containerRect.top;

      spawnLeft = ax + (Math.random() * 240 - 120);
      spawnTop = ay + (Math.random() * 240 - 120);
    }
  }

  // Clamp within container visual area (avoid flying too far)
  // NOTE: width is controlled by CSS; here we just keep reasonable bounds
  spawnLeft = clamp(spawnLeft, -50, postsContainer.clientWidth - 50);
  spawnTop = clamp(spawnTop, -150, postsContainer.clientHeight + 150);

  const postItem = document.createElement('div');
  postItem.className = 'user-post-item';
  postItem.style.left = `${spawnLeft}px`;
  postItem.style.top = `${spawnTop}px`;
  postItem.style.transform = `rotate(${rotateDeg}deg)`;

  // Build content HTML
  let contentHTML = `
    <div class="user-post-wrapper">
      <img src="${postmeImage}" class="user-post-image" alt="user post">
      <div class="user-post-content">
  `;

  // Get images to show
  const imagesToShow = fromStorage && data?.uploadedImages ? data.uploadedImages : uploadedImages;
  const hasText = message && message.trim().length > 0;
  const hasImages = imagesToShow && imagesToShow.length > 0;

  // Calculate text area height to position images correctly
  // When images exist, shift text and images up by 25px
  const verticalOffset = hasImages ? -45 : 0;
  
  // Add text if exists
  if (hasText) {
    // Counter-rotate text to keep it horizontal (opposite of postItem rotation)
    const textCounterRotate = -rotateDeg;
    contentHTML += `
      <div class="user-post-text" style="transform: translate(-50%, calc(-50% + ${verticalOffset}px)) rotate(${textCounterRotate}deg);">
        <div class="user-post-text-content">${message}</div>
      </div>
    `;
  }

  // Add uploaded images if exist - always positioned below text area
  if (hasImages) {
    // Calculate starting position: below text area with spacing
    // Text is centered at 50%, so images start below center with spacing
    // Apply vertical offset to shift images up when they exist
    const imageStartTop = hasText ? 'calc(50% + 3px)' : 'calc(50% + 10px)'; // 3px spacing below text
    // Counter-rotate images to keep them horizontal (opposite of postItem rotation)
    const imageCounterRotate = -rotateDeg;
    
    imagesToShow.forEach((imgSrc, index) => {
      const imageSpacing = 50; // Spacing between images
      const topOffset = index * imageSpacing + verticalOffset; // Apply vertical offset
      
      contentHTML += `
        <div class="user-post-uploaded-image" style="top: ${imageStartTop}; left: 50%; transform: translate(-50%, ${topOffset}px) rotate(${imageCounterRotate}deg);">
          <img src="${imgSrc}" alt="uploaded image ${index + 1}">
        </div>
      `;
    });
  }

  contentHTML += `
      </div>
    </div>
  `;

  postItem.innerHTML = contentHTML;
  postsContainer.appendChild(postItem);

  // Persist (only for new posts)
  if (!fromStorage) {
    addGuestbookPostToStorage({
      id: `${Date.now()}_${Math.random().toString(16).slice(2)}`,
      message,
      bgIndex,
      uploadedImages: imagesToShow || [],
      left: spawnLeft,
      top: spawnTop,
      rotate: rotateDeg,
      createdAt: Date.now()
    });
  }
}

// Message Form functionality for Guestbook Page
function initMessageForm() {
    const form = document.getElementById('messageForm');
    const photoInput = document.getElementById('messagePhoto');
    const preview = document.getElementById('messagePreview');
    
    if (!form || !photoInput || !preview) return;

    // Render saved posts on page load
    const savedPosts = loadGuestbookPosts();
    for (const p of savedPosts) {
      // Show post if it has message or images
      if (p?.message || (p?.uploadedImages && p.uploadedImages.length > 0)) {
        createUserPost(p.message || '', { fromStorage: true, data: p });
      }
    }
    
    let selectedFiles = [];

    // Handle photo selection
    photoInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        files.forEach(file => {
            if (file.type.startsWith('image/')) {
                selectedFiles.push(file);
                addPreviewItem(file);
            }
        });
    });

    // Add preview item
    function addPreviewItem(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const previewItem = document.createElement('div');
            previewItem.className = 'message-preview-item';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = 'Preview';
            
            const removeBtn = document.createElement('button');
            removeBtn.className = 'message-preview-remove';
            removeBtn.type = 'button';
            removeBtn.innerHTML = `
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            `;
            removeBtn.onclick = () => {
                selectedFiles = selectedFiles.filter(f => f !== file);
                previewItem.remove();
            };
            
            previewItem.appendChild(img);
            previewItem.appendChild(removeBtn);
            preview.appendChild(previewItem);
        };
        reader.readAsDataURL(file);
    }

// Handle form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const message = document.getElementById('messageText').value.trim();

  if (!message && selectedFiles.length === 0) {
    alert('メッセージまたは写真を入力してください。');
    return;
  }

  // Convert uploaded files to base64
  const uploadedImages = [];
  if (selectedFiles.length > 0) {
    for (const file of selectedFiles) {
      try {
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        uploadedImages.push(base64);
      } catch (error) {
        console.error('Failed to convert image to base64:', error);
      }
    }
  }

  // ✅ 关键：生成便利贴（包含文字和图片）
  if (message || uploadedImages.length > 0) {
    createUserPost(message || '', { uploadedImages });
  }

  console.log('Message:', message);
  console.log('Photos:', uploadedImages.length);

  alert('メッセージを送信しました！ありがとうございます。');

  form.reset();
  selectedFiles = [];
  preview.innerHTML = '';
});

// Clear all messages function
function clearAllMessages() {
  if (!confirm('すべてのメッセージを削除しますか？この操作は取り消せません。')) {
    return;
  }

  // Remove all user posts from DOM
  const postsContainer = document.querySelector('.posts-container');
  if (postsContainer) {
    const userPosts = postsContainer.querySelectorAll('.user-post-item');
    userPosts.forEach(post => post.remove());
  }

  // Clear localStorage
  localStorage.removeItem('guestbook_user_posts_v1');

  alert('すべてのメッセージを削除しました。');
}

// Add clear button event listener
const clearBtn = document.getElementById('clearMessagesBtn');
if (clearBtn) {
  clearBtn.addEventListener('click', clearAllMessages);
}
}
// ===== Hero Image Carousel =====
function initHeroCarousel() {
  const slides = document.querySelectorAll('.index-hero-slide');
  if (slides.length === 0) return;

  let currentIndex = 0;
  
  // 初始化：第一张显示
  slides[0].classList.add('active');

  function nextSlide() {
    // 移除当前激活
    slides[currentIndex].classList.remove('active');
    
    // 第一张图片被切换离开后，添加 was-active 标记，让 CSS 可以将其隐藏
    if (currentIndex === 0) {
      slides[0].classList.add('was-active');
    }
    
    // 切换到下一张
    currentIndex = (currentIndex + 1) % slides.length;
    
    // 激活新的一张
    slides[currentIndex].classList.add('active');
  }

  // 每 5 秒切换一次
  setInterval(nextSlide, 5000);
}

// ===== Services Images Scroll Zoom Effect =====
function initServicesScrollZoom() {
  const serviceImages = document.querySelectorAll('.services-small-img, .services-top-img, .services-bottom-img');
  
  if (serviceImages.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 延迟一点添加 class，让动画更自然
        setTimeout(() => {
          entry.target.classList.add('zoom-in');
        }, 100);
      }
    });
  }, {
    threshold: 0.3, // 当图片 30% 进入视口时触发
    rootMargin: '0px 0px -50px 0px' // 稍微提前触发
  });

  serviceImages.forEach(img => observer.observe(img));
}

// ===== News Cursor Circle Follow =====
function initNewsCursorCircle() {
  const cursorCircle = document.querySelector('.news-cursor-circle');
  const newsItems = document.querySelectorAll('.news-item');
  
  if (!cursorCircle || newsItems.length === 0) return;

  let mouseX = 0;
  let mouseY = 0;
  let circleX = 0;
  let circleY = 0;
  const speed = 0.15; // 跟随速度，越小越平滑

  // 动画循环，让圆形平滑跟随
  function animateCircle() {
    circleX += (mouseX - circleX) * speed;
    circleY += (mouseY - circleY) * speed;
    cursorCircle.style.left = circleX + 'px';
    cursorCircle.style.top = circleY + 'px';
    requestAnimationFrame(animateCircle);
  }
  animateCircle();

  // 监听鼠标移动
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // 鼠标进入 news-item 时显示圆形
  newsItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      cursorCircle.classList.add('active');
    });

    item.addEventListener('mouseleave', () => {
      cursorCircle.classList.remove('active');
    });
  });
}

// ===== Northman Thumb Card Scroll Rotate =====
function initThumbCardScrollRotate() {
  const thumbOverlays = document.querySelectorAll('.northman-thumb-overlay');
  
  if (thumbOverlays.length === 0) return;

  function updateRotation() {
    thumbOverlays.forEach(overlay => {
      const card = overlay.closest('.northman-feature-card');
      if (!card) return;
      
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 计算卡片在视口中的位置比例 (0 = 刚进入底部, 1 = 到达顶部)
      const progress = 1 - (rect.top / windowHeight);
      
      // 限制在 0-1 范围内
      const clampedProgress = Math.max(0, Math.min(1, progress));
      
      // 从 8deg 旋转到 38deg (增加30度)
      const rotation = 8 + (clampedProgress * 10);
      
      overlay.style.transform = `translateY(0) rotate(${rotation}deg)`;
    });
  }

  window.addEventListener('scroll', updateRotation, { passive: true });
  updateRotation(); // 初始化
}

// ===== Section Title Scroll Animate =====
function initServicesTitleAnimate() {
  // 选择所有需要动画的标题
  const titles = document.querySelectorAll('.services-title, .news-heading, .access-title, .conversation-title');
  if (!titles.length) return;

  // 先添加 js-ready 类，启用动画准备状态
  document.body.classList.add('js-ready');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 }); // 降低阈值，更快触发

  titles.forEach(title => observer.observe(title));
}

// ===== News Modal =====
function initNewsModal() {
  const newsItems = document.querySelectorAll('.news-item');
  const modal = document.getElementById('newsModal');
  if (!newsItems.length || !modal) return;

  const overlay = modal.querySelector('.news-modal-overlay');
  const closeBtn = modal.querySelector('.news-modal-close');
  const modalImage = document.getElementById('modalNewsImage');
  const modalMeta = document.getElementById('modalNewsMeta');
  const modalTitle = document.getElementById('modalNewsTitle');
  const modalSubtitle = document.getElementById('modalNewsSubtitle');
  const modalDesc = document.getElementById('modalNewsDesc');

  // Open modal when clicking news item
  newsItems.forEach(item => {
    item.addEventListener('click', () => {
      // Get data from the clicked item
      const img = item.querySelector('.news-thumb img');
      const meta = item.querySelector('.news-meta');
      const title = item.querySelector('.news-title');
      const subtitle = item.querySelector('.news-subtitle');
      const desc = item.querySelector('.news-desc');

      // Populate modal
      if (img) modalImage.src = img.src;
      if (meta) modalMeta.textContent = meta.textContent;
      if (title) modalTitle.textContent = title.textContent;
      if (subtitle) modalSubtitle.textContent = subtitle.textContent;
      if (desc) modalDesc.textContent = desc.textContent;

      // Show modal
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const isGuestbookPage = document.body.classList.contains('guestbook-page');

  initNavbarHideOnScroll();
  initMessageForm();
  initHeroCarousel(); // 初始化轮播
  initServicesScrollZoom(); // 初始化服务图片滚动放大效果
  initThumbCardScrollRotate(); // 初始化小卡片滚动旋转效果
  initNewsCursorCircle(); // 初始化 News 鼠标跟随圆形
  initServicesTitleAnimate(); // Our Services 标题滚动动画
  initNewsModal(); // 初始化 News 弹窗

  if (!isGuestbookPage) init(); // init 里已经会跑 initNorthmanScrollCards()
});


