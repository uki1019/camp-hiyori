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
        ...document.querySelectorAll('.room-card')
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

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', init);




