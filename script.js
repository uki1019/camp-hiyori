// ===== 套餐数据 (PLANS) =====
const PLANS = [
    {
        id: 'graduation',
        name: '■期間限定■【卒業旅行応援】〈スタンダードコース〉「1泊2食BBQ付」が12,000円ぽっきり♪思い出作りにおすすめ！',
        tag: '期間限定',
        basePrice: 12000,
        period: '2026/01/28 〜 2026/03/31',
        meals: '朝夕食付',
        image: 'image/t1.png',
        features: ['BBQセット', 'ホットサンド朝食', '温泉無料'],
        description: `■プラン内容■
気軽にグランピングを楽しんでみたい方に♪
夕食にBBQ♪朝食にホットサンドが付いた【1泊2食付☆お手軽グランピング】
初めてのグランピングにもおすすめです♪

■-宿泊特典-■
隣接する三田天然温泉「寿ノ湯」の下記サービスをご利用いただけます。
●【7つの湯＆サウナ】入り放題！
●【岩盤浴＆ライブラリー】1回無料！
●【ソフトクリーム】食べ放題！
●【コーヒー】飲み放題！
※利用期間／チェックイン〜チェックアウト日の22:00まで

■-夕食-■
【コース】BBQスタンダードコース　※お子様は「キッズメニュー」になります
【場所】テント外パーソナルスペース（ウッドデッキ）にて
　火起こし不要！調整が楽なガスタイプのBBQコンロです♪
【時間】17:00 〜 20:00

■-朝食-■
【内容】ホットサンド（食材）、スープ、サラダ、コーヒー
　※ホットサンドは食材をお届けします。ご自身でお作りいただき、焼きたてアツアツをお召し上がりください。
【場所】ご宿泊テント内 or テント外パーソナルスペース（ウッドデッキ）
【時間】7:00 〜 10:00`,
        benefits: ['7つの湯＆サウナ入り放題', '岩盤浴1回無料', 'ソフトクリーム食べ放題']
    },
    {
        id: 'anniversary',
        name: '【記念日】ウェディングのパティシエが作るケーキ＆スパークリングワイン|1泊2食付|豪華オプション有♪',
        tag: '記念日',
        basePrice: 25000,
        meals: '朝夕食付＋ケーキ＆ワイン',
        image: 'image/t2.png',
        features: ['特製ケーキ', 'スパークリングワイン', '豪華オプション'],
        description: `■プラン内容■
大切な記念日を、星空の下で特別に祝いませんか？
ウェディング経験のあるパティシエが作る特製ケーキと、厳選されたスパークリングワインをご用意。
誕生日、プロポーズ、結婚記念日など、人生の大切な瞬間を最高の空間で演出いたします。

■-記念日特典-■
●パティシエ特製ホールケーキ（12cm）
●スパークリングワイン1本
●メッセージプレート付き
※オプションで花束（+3,000円）、バルーン装飾（+2,000円）も承ります

■-夕食-■
【コース】BBQプレミアムコース（厳選肉＆シーフード）
【場所】テント外パーソナルスペース（ウッドデッキ）にて
【時間】17:00 〜 20:00
※ケーキはご希望の時間にお届けいたします

■-朝食-■
【内容】特製フレンチトースト、サラダ、フルーツ、コーヒー
【場所】ご宿泊テント内 or テント外パーソナルスペース
【時間】7:00 〜 10:00

■-宿泊特典-■
●温泉「寿ノ湯」利用無料
●レイトチェックアウト11:00まで無料`,
        benefits: ['温泉利用可', 'レイトチェックアウト']
    },
    {
        id: 'premium',
        name: '【プレミアムコース】＜1泊2食BBQ付＞ 骨付きラムにシーフードで極上グランピング！温泉無料♪',
        tag: 'プレミアム',
        basePrice: 28000,
        meals: '朝夕食付（グレードアップ）',
        image: 'image/t3.png',
        features: ['骨付きラム', 'シーフード', '温泉無料'],
        description: `■プラン内容■
最高級の食材で、贅沢なアウトドア体験を。
メインは柔らかくジューシーな骨付きラムと、新鮮な海の幸を豪快に焼き上げます。
特別な日のご褒美に、ぜひお越しください。

■-夕食-■
【コース】BBQプレミアムコース
【メニュー】
・骨付きラムチョップ
・有頭海老＆ホタテ＆イカのシーフード盛り合わせ
・国産牛カルビ
・季節の焼き野菜盛り合わせ
・焼きおにぎり
・デザート
【場所】テント外パーソナルスペース（ウッドデッキ）にて
【時間】17:00 〜 20:00

■-朝食-■
【内容】グルメブレックファスト（ベーコンエッグ、サラダ、パン、スープ、コーヒー）
【場所】ご宿泊テント内 or テント外パーソナルスペース
【時間】7:00 〜 10:00

■-宿泊特典-■
●温泉「寿ノ湯」入り放題
●岩盤浴1回無料
●ウェルカムドリンク付き`,
        benefits: ['温泉無料', '岩盤浴1回無料']
    },
    {
        id: 'group',
        name: '★団体割★【スタンダードコース】＜1泊2食BBQ＞肉や魚介の豪華BBQとサウナで整う15000円旅♪',
        tag: '団体割',
        basePrice: 15000,
        meals: '朝夕食付',
        image: 'image/t4.png',
        features: ['豪華BBQ', 'サウナ付き', '団体割引'],
        description: `■プラン内容■
4名以上のグループでお得に楽しめる団体割引プラン！
お肉も魚介も両方楽しめる豪華BBQセットに、サウナでととのう体験もセット。
会社の仲間、サークルの友達、ご家族で、ワイワイ楽しい時間を過ごしませんか？

■-ご利用条件-■
●4名様以上のグループでご予約ください
●学生グループは学生証のご提示をお願いいたします

■-夕食-■
【コース】BBQスタンダードコース（肉＆魚介）
【メニュー】
・牛カルビ＆豚ロース
・海老＆イカ
・ソーセージ盛り合わせ
・季節の野菜
・焼きそば
【場所】共用BBQスペース or テント外パーソナルスペース
【時間】17:00 〜 20:00

■-朝食-■
【内容】ホットサンド、スープ、サラダ、コーヒー
【場所】ご宿泊テント内 or テント外パーソナルスペース
【時間】7:00 〜 10:00

■-宿泊特典-■
●温泉「寿ノ湯」入り放題
●サウナ利用無料
●コーヒー飲み放題`,
        benefits: ['温泉無料', 'サウナ利用可']
    },
    {
        id: 'basic',
        name: '【ベーシックコース】＜1泊2食BBQ付＞ 可愛いテントで気軽にアウトドア満喫♪［宿泊者特典付］',
        tag: 'ベーシック',
        basePrice: 18000,
        meals: '朝夕食付',
        image: 'image/1.jpg',
        features: ['BBQセット', '宿泊者特典', '初心者OK'],
        description: `■プラン内容■
キャンプ初心者でも安心！手ぶらで楽しめるベーシックプランです。
可愛くておしゃれなテントで、気軽にアウトドア体験ができます。
道具の準備や火起こしはスタッフがサポートいたしますので、初めての方も安心してお越しください。

■-夕食-■
【コース】BBQベーシックコース
【メニュー】
・牛カルビ
・豚ロース
・鶏もも肉
・ソーセージ
・季節の野菜
・焼きおにぎり
【場所】テント外パーソナルスペース（ウッドデッキ）にて
【時間】17:00 〜 20:00

■-朝食-■
【内容】ホットサンド（食材）、スープ、サラダ、コーヒー
【場所】ご宿泊テント内 or テント外パーソナルスペース
【時間】7:00 〜 10:00

■-宿泊特典-■
●温泉「寿ノ湯」利用無料
●ソフトクリーム食べ放題
●コーヒー飲み放題

■-ドリンクチョイス-■
下記よりお選びいただけます
【1】フリードリンク（アルコール＆ソフトドリンク）1,650円
【2】フリードリンク（ソフトドリンクのみ）880円
【3】フリードリンク（ソフトドリンクのみ・お子様）440円
【4】管理棟にてご自身で購入 お申込み0円`,
        benefits: ['温泉利用可', '宿泊者特典付']
    }
];

// ===== 房型数据 (ROOMS) =====
const ROOMS = [
    {
        id: 'cottage-1',
        name: '【小屋付きサイト】-スタンダード-／Wi-Fi／携帯充電可',
        priceModifier: 0,
        capacity: '2〜4名様',
        image: 'image/tw1.png',
        gallery: ['image/tw1.png', 'image/tw2.png', 'image/tw3.png'],
        description: 'キャンプ場から切り出した木材を使用した、手作りの温もりを感じる特別な一棟。',
        tags: ['可愛さ優先'],
        features: ['冷蔵庫', 'Wi-Fi', 'エアコン']
    },
    {
        id: 'cottage-2',
        name: '【小屋付きサイト2】-デラックス-／Wi-Fi／携帯充電可',
        priceModifier: 3000,
        capacity: '2〜5名様',
        image: 'image/tw4.png',
        gallery: ['image/tw4.png', 'image/tw5.png', 'image/tw6.png'],
        description: '前面がフルオープンで開放的。寝転がったまま夜景を楽しめる素敵な小屋です。',
        tags: ['可愛さ優先', '広さ優先'],
        features: ['エアコン', '屋外シンク', '屋外フリースペース']
    },
    {
        id: 'forest',
        name: '【森さん家】プレミアムドーム／Wi-Fi／携帯充電可',
        priceModifier: 5000,
        capacity: '2〜6名様',
        image: 'image/tw7.png',
        gallery: ['image/tw7.png', 'image/tw8.png', 'image/tw9.png'],
        description: '広々としたウッドデッキ付き。テントやタープも設営可能で大人数にも対応。サウナもオプションで利用可。',
        tags: ['広さ優先', '居心地優先'],
        features: ['屋外フリースペース', '屋外水道', 'エアコン']
    },
    {
        id: 'tenchi',
        name: '【天地家】星空ビューサイト／Wi-Fi／携帯充電可',
        priceModifier: 2000,
        capacity: '2〜4名様',
        image: 'image/tw10.png',
        gallery: ['image/tw10.png', 'image/tw11.png', 'image/tw12.png'],
        description: 'デッキから見上げる天には星空、見下ろす地上は夜景。手作りの優しさとぬくもりが感じられる特別な一棟。',
        tags: ['居心地優先'],
        features: ['焚き火台', '室内テーブル', 'エアコン']
    }
];

// ===== 选择状态 =====
let selectedPlan = null;
let selectedRoom = null;
let guestCount = 2; // 默认2人

// 旧数据保留用于兼容
const ROOM_PLANS = PLANS.map(p => ({
    id: p.id,
    name: p.name,
    subName: p.description,
    description: p.description,
    price: p.basePrice,
    capacity: '2〜4名',
    image: p.image,
    gallery: [p.image],
    tags: [p.tag, p.meals],
    features: p.features,
    availability: 5
}));

// Booking State
let booking = {
    checkIn: '2024-05-20',
    checkOut: '2024-05-21',
    adults: 2,
    children: 0
};

// Current Step State
let currentStep = 1;

// ===== Step Control Functions =====
function goToStep(step) {
    currentStep = step;
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((el, idx) => {
        el.classList.remove('active', 'completed');
        if (idx + 1 < step) el.classList.add('completed');
        if (idx + 1 === step) el.classList.add('active');
    });
    
    // Show/hide sections
    document.querySelectorAll('.booking-section').forEach(section => {
        section.classList.remove('active');
    });
    const activeSection = document.getElementById(`step${step}-section`);
    if (activeSection) activeSection.classList.add('active');
    
    // Update button text
    updateNextButton();
    
    // Scroll to top of main content
    window.scrollTo({ top: 300, behavior: 'smooth' });
}

function handleNextStep() {
    if (currentStep === 1 && selectedPlan) {
        goToStep(2);
    } else if (currentStep === 2 && selectedRoom) {
        goToStep(3);
    } else if (currentStep === 3) {
        // Validate customer info before proceeding
        if (validateCustomerInfo()) {
            goToStep(4);
            renderBookingSummary();
        }
    } else if (currentStep === 4) {
        // Final confirmation - could redirect or show modal
        alert('ご予約ありがとうございます！');
    }
}

function validateCustomerInfo() {
    const name = document.getElementById('customer-name').value.trim();
    const kana = document.getElementById('customer-kana').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const email = document.getElementById('customer-email').value.trim();
    const agreeTerms = document.getElementById('agree-terms').checked;
    
    if (!name) {
        alert('お名前を入力してください。');
        document.getElementById('customer-name').focus();
        return false;
    }
    if (!kana) {
        alert('フリガナを入力してください。');
        document.getElementById('customer-kana').focus();
        return false;
    }
    if (!phone) {
        alert('電話番号を入力してください。');
        document.getElementById('customer-phone').focus();
        return false;
    }
    if (!email) {
        alert('メールアドレスを入力してください。');
        document.getElementById('customer-email').focus();
        return false;
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('正しいメールアドレスを入力してください。');
        document.getElementById('customer-email').focus();
        return false;
    }
    if (!agreeTerms) {
        alert('利用規約とプライバシーポリシーに同意してください。');
        return false;
    }
    return true;
}

function getCustomerInfo() {
    return {
        name: document.getElementById('customer-name').value.trim(),
        kana: document.getElementById('customer-kana').value.trim(),
        phone: document.getElementById('customer-phone').value.trim(),
        email: document.getElementById('customer-email').value.trim(),
        address: document.getElementById('customer-address').value.trim(),
        requests: document.getElementById('customer-requests').value.trim()
    };
}

function updateNextButton() {
    const btn = document.getElementById('next-step-btn');
    const btnText = document.getElementById('next-btn-text');
    
    if (currentStep === 1) {
        btn.disabled = !selectedPlan;
        btnText.textContent = selectedPlan ? 'お部屋を選ぶ' : 'プランを選択';
    } else if (currentStep === 2) {
        btn.disabled = !selectedRoom;
        btnText.textContent = selectedRoom ? 'お客様情報へ' : 'お部屋を選択';
    } else if (currentStep === 3) {
        btn.disabled = false;
        btnText.textContent = '確認画面へ';
    } else if (currentStep === 4) {
        btn.disabled = false;
        btnText.textContent = '予約を確定する';
    }
}

function updatePriceBar() {
    const planNameEl = document.getElementById('selected-plan-name');
    const roomNameEl = document.getElementById('selected-room-name');
    const totalPriceEl = document.getElementById('total-price');
    
    if (selectedPlan) {
        planNameEl.textContent = selectedPlan.name;
        
        // 计算总价：套餐价格 × 人数 + 房型追加
        let total = selectedPlan.basePrice * guestCount;
        if (selectedRoom) {
            roomNameEl.textContent = '+ ' + selectedRoom.name + ` (${guestCount}名様)`;
            total += selectedRoom.priceModifier;
        } else {
            roomNameEl.textContent = `(${guestCount}名様)`;
        }
        
        totalPriceEl.textContent = '¥' + total.toLocaleString();
    } else {
        planNameEl.textContent = 'プランを選択してください';
        roomNameEl.textContent = '';
        totalPriceEl.textContent = '¥--';
    }
    
    updateNextButton();
}

// ===== Plan Card Rendering =====
function createPlanCard(plan) {
    const isSelected = selectedPlan && selectedPlan.id === plan.id;
    
    // 根据 tag 设置不同的颜色 class
    let tagClass = '';
    if (plan.tag === '期間限定') tagClass = 'limited';
    else if (plan.tag === '記念日') tagClass = 'anniversary';
    else if (plan.tag === 'プレミアム') tagClass = 'premium';
    else if (plan.tag === '団体割') tagClass = 'group';
    else if (plan.tag === 'ベーシック') tagClass = 'basic';
    
    const featuresHTML = plan.features.slice(0, 3).map(f => 
        `<span class="plan-card-feature">${f}</span>`
    ).join('');
    
    // 解析详情内容为结构化 HTML
    const detailHTML = parseDetailContent(plan.description);
    
    return `
        <div class="plan-card ${isSelected ? 'selected' : ''}" data-plan-id="${plan.id}">
            <img src="${plan.image}" alt="${plan.name}" class="plan-card-image" onclick="selectPlan('${plan.id}')">
            <div class="plan-card-content">
                <div class="plan-card-top" onclick="selectPlan('${plan.id}')">
                    <div class="plan-card-info">
                        <span class="plan-card-tag ${tagClass}">${plan.tag}</span>
                        <h3 class="plan-card-name">${plan.name}</h3>
                        <p class="plan-card-meals">${plan.meals}</p>
                        <div class="plan-card-features">${featuresHTML}</div>
                    </div>
                    <div class="plan-card-price">
                        <span class="plan-card-price-amount">¥${plan.basePrice.toLocaleString()}</span>
                        <span class="plan-card-price-suffix">〜 / 2名様</span>
                    </div>
                </div>
                <button class="plan-card-toggle" onclick="togglePlanDetail(event, '${plan.id}')">
                    <span>詳細を見る</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 9l6 6 6-6"/>
                    </svg>
                </button>
                <div class="plan-card-details">
                    ${detailHTML}
                </div>
            </div>
        </div>
    `;
}

// 解析详情内容为结构化 HTML
function parseDetailContent(description) {
    if (!description) return '';
    
    // 按 ■ 分割成各个区块
    const sections = description.split(/■-?([^■]+)-?■/).filter(s => s.trim());
    let html = '';
    
    for (let i = 0; i < sections.length; i += 2) {
        const title = sections[i]?.trim();
        const content = sections[i + 1]?.trim();
        
        if (!title || !content) continue;
        
        html += `<div class="plan-detail-section">`;
        html += `<h4 class="plan-detail-title">${title}</h4>`;
        
        // 解析内容行
        const lines = content.split('\n').filter(l => l.trim());
        let hasRows = false;
        
        lines.forEach(line => {
            line = line.trim();
            if (!line) return;
            
            // 检查是否是【标签】格式
            const labelMatch = line.match(/^【([^】]+)】(.*)$/);
            if (labelMatch) {
                hasRows = true;
                const label = labelMatch[1];
                const value = labelMatch[2].trim();
                html += `
                    <div class="plan-detail-row">
                        <span class="plan-detail-label">${label}</span>
                        <span class="plan-detail-value">${value}</span>
                    </div>
                `;
            } else if (line.startsWith('●')) {
                // 列表项
                html += `<div class="plan-detail-item">${line}</div>`;
            } else if (line.startsWith('※') || line.startsWith('　')) {
                // 注释
                html += `<div class="plan-detail-note">${line}</div>`;
            } else if (!hasRows) {
                // 普通文本
                html += `<p class="plan-detail-text">${line}</p>`;
            }
        });
        
        html += `</div>`;
    }
    
    return html;
}

// 展开/收起详情
function togglePlanDetail(event, planId) {
    event.stopPropagation();
    const card = document.querySelector(`.plan-card[data-plan-id="${planId}"]`);
    if (card) {
        card.classList.toggle('expanded');
        const btn = card.querySelector('.plan-card-toggle span');
        if (card.classList.contains('expanded')) {
            btn.textContent = '詳細を閉じる';
        } else {
            btn.textContent = '詳細を見る';
        }
    }
}

function renderPlanCards() {
    const container = document.getElementById('plan-list');
    if (!container) return;
    container.innerHTML = PLANS.map(plan => createPlanCard(plan)).join('');
}

function selectPlan(planId) {
    selectedPlan = PLANS.find(p => p.id === planId);
    selectedRoom = null; // Reset room selection
    renderPlanCards();
    renderRoomCardsNew();
    updatePriceBar();
}

// ===== Room Card Rendering (New) =====
function createRoomCardNew(room) {
    const isSelected = selectedRoom && selectedRoom.id === room.id;
    const modifierClass = room.priceModifier === 0 ? 'free' : '';
    const priceDisplay = room.priceModifier === 0 
        ? '0' 
        : room.priceModifier.toLocaleString();
    
    const tagsHTML = room.tags.map(t => 
        `<span class="room-card-new-tag">【${t}】</span>`
    ).join('');
    
    // 生成多张图片（使用同一张图片模拟，实际可以用 gallery）
    const images = room.gallery || [room.image, room.image, room.image];
    const imagesHTML = images.slice(0, 3).map(img => `
        <div class="room-card-new-image-wrap">
            <img src="${img}" alt="${room.name}" class="room-card-new-image">
            <span class="room-card-new-image-zoom">
                <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
            </span>
        </div>
    `).join('');
    
    return `
        <div class="room-card-new ${isSelected ? 'selected' : ''}" onclick="selectRoom('${room.id}')">
            <div class="room-card-new-header">
                <span class="room-card-new-icon">
                    <svg viewBox="0 0 24 24"><path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/></svg>
                </span>
                <h3 class="room-card-new-name">${room.name}</h3>
            </div>
            <div class="room-card-new-body">
                <div class="room-card-new-tags">${tagsHTML}</div>
                <div class="room-card-new-images">
                    ${imagesHTML}
                </div>
                <div class="room-card-new-right">
                    <div class="room-card-new-price-info">
                        <p class="room-card-new-price-label">追加料金</p>
                        <div class="room-card-new-price">
                            <span class="room-card-new-modifier ${modifierClass}">${priceDisplay}</span>
                            <span class="room-card-new-yen">円</span>
                            <span class="room-card-new-suffix">〜</span>
                        </div>
                    </div>
                    <button class="room-card-new-btn">
                        <span>${isSelected ? '選択中' : '選択する'}</span>
                        <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                    </button>
                </div>
            </div>
            <p class="room-card-new-capacity">定員: ${room.capacity}</p>
        </div>
    `;
}

function renderRoomCardsNew() {
    const container = document.getElementById('room-list');
    if (!container) return;
    container.innerHTML = ROOMS.map(room => createRoomCardNew(room)).join('');
}

function selectRoom(roomId) {
    selectedRoom = ROOMS.find(r => r.id === roomId);
    renderRoomCardsNew();
    updatePriceBar();
}

// ===== Booking Summary =====
function renderBookingSummary() {
    const container = document.getElementById('booking-summary');
    if (!container || !selectedPlan || !selectedRoom) return;
    
    const planTotal = selectedPlan.basePrice * guestCount;
    const roomTotal = selectedRoom.priceModifier;
    const grandTotal = planTotal + roomTotal;
    
    container.innerHTML = `
        <h3 class="summary-title">ご予約内容</h3>
        
        <!-- 人数選択 -->
        <div class="summary-section">
            <h4 class="summary-section-title">ご利用人数</h4>
            <div class="guest-selector">
                <button class="guest-btn" onclick="updateGuestCount(-1)" ${guestCount <= 1 ? 'disabled' : ''}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14"/>
                    </svg>
                </button>
                <div class="guest-count">
                    <span class="guest-count-number">${guestCount}</span>
                    <span class="guest-count-label">名様</span>
                </div>
                <button class="guest-btn" onclick="updateGuestCount(1)" ${guestCount >= 6 ? 'disabled' : ''}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12h14"/>
                    </svg>
                </button>
            </div>
            <p class="guest-note">※ お部屋の定員: ${selectedRoom.capacity}</p>
        </div>
        
        <!-- プラン情報 -->
        <div class="summary-section">
            <h4 class="summary-section-title">プラン情報</h4>
            <div class="summary-row">
                <span class="summary-label">プラン</span>
                <span class="summary-value summary-value-small">${selectedPlan.name}</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">お食事</span>
                <span class="summary-value">${selectedPlan.meals}</span>
            </div>
            <div class="summary-row">
                <span class="summary-label">お部屋</span>
                <span class="summary-value summary-value-small">${selectedRoom.name}</span>
            </div>
        </div>
        
        <!-- 料金明細 -->
        <div class="summary-section summary-section-price">
            <h4 class="summary-section-title">料金明細</h4>
            <div class="summary-price-row">
                <span class="summary-price-label">プラン料金</span>
                <span class="summary-price-calc">¥${selectedPlan.basePrice.toLocaleString()} × ${guestCount}名</span>
                <span class="summary-price-value">¥${planTotal.toLocaleString()}</span>
            </div>
            <div class="summary-price-row">
                <span class="summary-price-label">お部屋追加料金</span>
                <span class="summary-price-calc"></span>
                <span class="summary-price-value">${roomTotal === 0 ? '¥0' : '+¥' + roomTotal.toLocaleString()}</span>
            </div>
            <div class="summary-price-total">
                <span class="summary-price-total-label">合計（税込）</span>
                <span class="summary-price-total-value">¥${grandTotal.toLocaleString()}</span>
            </div>
        </div>
        
        <button class="confirm-btn" onclick="handleNextStep()">
            <span>予約を確定する</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </button>
    `;
    
    // 更新底部价格栏
    updatePriceBar();
}

// 更新人数
function updateGuestCount(delta) {
    const newCount = guestCount + delta;
    if (newCount >= 1 && newCount <= 6) {
        guestCount = newCount;
        renderBookingSummary();
    }
}

// ===== Initialize Booking Page =====
function initBookingPage() {
    renderPlanCards();
    renderRoomCardsNew();
    updatePriceBar();
    goToStep(1);
}

// Create Room Card HTML (Legacy)
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
                    <p class="room-description">${plan.description.replace(/\n/g, '<br>')}</p>
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
  const titles = document.querySelectorAll('.services-title, .news-heading, .access-title, .conversation-title, .concept-tagline, .concept-section-title');
  
  // 选择所有需要淡入的文字和元素
  const fadeTexts = document.querySelectorAll('.fade-in-text');
  const fadeElements = document.querySelectorAll('.fade-in-element');
  
  // 选择时间轴元素
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  // 选择带层次动画的卡片
  const fadeCards = document.querySelectorAll('.fade-in-card');
  
  // 选择箭头动画元素
  const arrowElements = document.querySelectorAll('.guestbook-arrow');
  
  if (!titles.length && !fadeTexts.length && !fadeElements.length && !timelineItems.length && !fadeCards.length && !arrowElements.length) return;

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
  fadeTexts.forEach(text => observer.observe(text));
  fadeElements.forEach(el => observer.observe(el));
  timelineItems.forEach(item => observer.observe(item));
  fadeCards.forEach(card => observer.observe(card));
  arrowElements.forEach(arrow => observer.observe(arrow));
  
  // Footer 滚动显示
  const footer = document.querySelector('.footer');
  if (footer) {
    const footerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          footerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    footerObserver.observe(footer);
  }
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
  const isTicketPage = document.body.classList.contains('ticket-page');

  initNavbarHideOnScroll();
  initMessageForm();
  initHeroCarousel(); // 初始化轮播
  initServicesScrollZoom(); // 初始化服务图片滚动放大效果
  initThumbCardScrollRotate(); // 初始化小卡片滚动旋转效果
  initNewsCursorCircle(); // 初始化 News 鼠标跟随圆形
  initServicesTitleAnimate(); // Our Services 标题滚动动画
  initNewsModal(); // 初始化 News 弹窗
  initConceptImgZoom(); // 初始化 Concept 页面图片滚动缩放
  initTimelineProgress(); // 初始化时间轴进度条
  initExperienceCarousel(); // 初始化体验轮播

  // 初始化 Ticket 预订页面
  if (isTicketPage) {
    initBookingPage();
  }

  if (!isGuestbookPage) init(); // init 里已经会跑 initNorthmanScrollCards()
});

// Experience Carousel
function initExperienceCarousel() {
  const carousels = document.querySelectorAll('.experience-carousel');
  
  carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const cards = carousel.querySelectorAll('.carousel-card');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    
    if (!track || !cards.length || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 30; // card width + gap
    const maxIndex = cards.length - 1;
    
    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
    
    prevBtn.addEventListener('click', () => {
      currentIndex = Math.max(0, currentIndex - 1);
      updateCarousel();
    });
    
    nextBtn.addEventListener('click', () => {
      currentIndex = Math.min(maxIndex, currentIndex + 1);
      updateCarousel();
    });
    
    // Recalculate on resize
    window.addEventListener('resize', () => {
      const newCardWidth = cards[0].offsetWidth + 30;
      track.style.transform = `translateX(-${currentIndex * newCardWidth}px)`;
    });
  });
}

// Timeline progress bar scroll effect
function initTimelineProgress() {
  const timelineContainer = document.querySelector('.timeline-container');
  if (!timelineContainer) return;
  
  function updateProgress() {
    const rect = timelineContainer.getBoundingClientRect();
    const containerTop = rect.top;
    const containerHeight = rect.height;
    const windowHeight = window.innerHeight;
    
    // 计算进度条应该覆盖的高度
    let progress = 0;
    
    if (containerTop < windowHeight * 0.5) {
      // 从容器顶部开始计算滚动进度
      const scrolled = (windowHeight * 0.5) - containerTop;
      const maxScroll = containerHeight;
      progress = Math.min(scrolled / maxScroll, 1);
    }
    
    // 设置进度条高度（减去顶部和底部的偏移）
    const progressHeight = (containerHeight - 140) * progress;
    timelineContainer.style.setProperty('--timeline-progress', progressHeight + 'px');
  }
  
  // 使用 CSS 变量来控制高度
  const style = document.createElement('style');
  style.textContent = '.timeline-container::after { height: var(--timeline-progress, 0); }';
  document.head.appendChild(style);
  
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// Concept page image zoom on scroll
function initConceptImgZoom() {
  const topImg = document.querySelector('.concept-hero-img-top img');
  const bottomImg = document.querySelector('.concept-hero-img-bottom img');
  
  if (!topImg && !bottomImg) return;
  
  function updateZoom() {
    const scrollTop = window.scrollY || window.pageYOffset || 0;
    const maxScroll = 800; // 最大滚动距离
    const maxScale = 1.15; // 最大缩放比例
    
    const ratio = Math.min(scrollTop / maxScroll, 1);
    const scale = 1 + (maxScale - 1) * ratio;
    
    if (topImg) {
      topImg.style.transform = `scale(${scale})`;
    }
    if (bottomImg) {
      bottomImg.style.transform = `scale(${scale})`;
    }
  }
  
  window.addEventListener('scroll', updateZoom, { passive: true });
  updateZoom(); // 初始调用
}


