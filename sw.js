const CACHE_NAME = 'kawang-nav-v1';
// 这里列出核心文件，路径必须和你的实际目录完全对应
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './data/style.css',
    './data/script.js',
    './images/apple-touch-icon.png',
    './images/favicon.ico',
    './images/qr.png',
    './images/qq.png',
    './images/email.png',
    './images/douyin.png',
    './images/bilibili.png',
    './images/notice/lanzou-ua.png',
];

// 安装 Service Worker 并缓存核心资源
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
    self.skipWaiting();
});

// 激活时清理旧版缓存
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => Promise.all(
            keys.map((key) => {
                if (key !== CACHE_NAME) return caches.delete(key);
            })
        ))
    );
    self.clients.claim();
});

// 拦截网络请求
self.addEventListener('fetch', (e) => {
    // JSON 数据文件走网络优先（保证每次打开都能拿到最新数据）
    if (e.request.url.includes('.json')) {
        e.respondWith(
            fetch(e.request).then((response) => {
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
                return response;
            }).catch(() => caches.match(e.request)) // 断网时回退到缓存
        );
        return;
    }

    // 静态资源（CSS/JS/图片）走缓存优先
    e.respondWith(
        caches.match(e.request).then((cached) => {
            return cached || fetch(e.request).then((response) => {
                // 只缓存同源的 GET 请求
                if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return response;
                const clone = response.clone();
                caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
                return response;
            });
        })
    );
});