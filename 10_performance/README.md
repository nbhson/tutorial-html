# PHẦN 10: HIỆU NĂNG (PERFORMANCE)

## 10.1. Hiệu năng web — Các chỉ số Core Web Vitals 2026

Hiệu năng trang ảnh hưởng trực tiếp đến **trải nghiệm người dùng** và **xếp hạng tìm kiếm** (Google dùng Core Web Vitals làm tín hiệu xếp hạng).

### Core Web Vitals (chuẩn hiện tại)

| Chỉ số | Đo gì | Mục tiêu tốt |
|--------|-------|--------------|
| **LCP** (Largest Contentful Paint) | Thời gian hiển thị phần tử lớn nhất | ≤ 2.5s |
| **CLS** (Cumulative Layout Shift) | Độ dịch chuyển bố cục | < 0.1 |
| **INP** (Interaction to Next Paint) | Độ trễ phản hồi tương tác | < 200ms |

> INP đã **thay thế FID** từ tháng 3/2024. Các chỉ số khác: FCP, TTFB, CLS, TBT.

### HTML ảnh hưởng gì đến hiệu năng?

- Thứ tự tải tài nguyên (script chặn parser)
- Kích thước hình ảnh và cách tải
- Layout shift do thiếu `width`/`height`
- Cách trình duyệt parse và render

---

## 10.2. `defer`, `async`, và `type="module"`

### Ba cách nạp JavaScript

```html
<!-- 1. Blocking (mặc định) — CHẶN parser, chậm nhất -->
<script src="app.js"></script>

<!-- 2. async — tải song song, chạy ngay khi tải xong (thứ tự không đảm bảo) -->
<script src="analytics.js" async></script>

<!-- 3. defer — tải song song, chạy sau khi DOM parse xong, đúng thứ tự -->
<script src="app.js" defer></script>

<!-- 4. type="module" — mặc định như defer -->
<script type="module" src="app.js"></script>
```

### So sánh chi tiết

| | Blocking | `async` | `defer` / `module` |
|---|---------|---------|---------------------|
| Chặn parse HTML | ✅ | ❌ | ❌ |
| Chạy khi | Ngay | Tải xong | DOMContentLoaded |
| Đảm bảo thứ tự | ✅ | ❌ | ✅ |
| Phù hợp cho | Hiếm khi | Analytics độc lập | App chính |

**Khuyến nghị:** App chính dùng `defer` hoặc `type="module"`. Script độc lập (analytics, ads) có thể `async`.

---

## 10.3. Resource Hints — Gợi ý tải tài nguyên

```html
<!-- preconnect: mở kết nối sớm (DNS + TCP + TLS) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- dns-prefetch: chỉ resolve DNS (fallback cho preconnect) -->
<link rel="dns-prefetch" href="https://api.example.com">

<!-- preload: tải tài nguyên quan trọng, ưu tiên cao -->
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="hero.avif" as="image" fetchpriority="high">
<link rel="preload" href="critical.css" as="style">

<!-- prefetch: tải trước cho điều hướng tương lai -->
<link rel="prefetch" href="/trang-tiep-theo.html">

<!-- modulepreload: tải trước ES module và dependencies -->
<link rel="modulepreload" href="/js/app.js">

<!-- prerender/Speculation Rules: tải trước trang tiếp theo (Chrome) -->
<script type="speculationrules">
{
  "prefetch": [{
    "source": "document",
    "where": { "href_matches": "/bai-viet/*" },
    "eagerness": "moderate"
  }]
}
</script>
```

### Khi nào dùng cái nào?

| Gợi ý | Dùng khi | Rủi ro |
|-------|----------|--------|
| `preconnect` | Origin cần kết nối sớm (CDN font, API) | Rẻ |
| `preload` | Tài nguyên LCP hiện tại (font, hero image) | Lãng phí nếu sai |
| `prefetch` | Trang người dùng có thể đi tiếp | Lãng phí băng thông |
| `modulepreload` | Entry point của app JS | Rẻ |

---

## 10.4. Lazy loading hình ảnh và iframe

```html
<!-- Ảnh lazy: chỉ tải khi sắp vào viewport -->
<img src="anh.jpg" alt="Mô tả" width="800" height="450" loading="lazy" decoding="async">

<!-- iframe lazy -->
<iframe src="https://www.youtube.com/embed/xyz" loading="lazy" title="Demo"></iframe>
```

### Hỗ trợ trình duyệt `loading="lazy"`

- **Chrome 76+** (7/2019)
- **Firefox 121+** (12/2023; bản trước chỉ áp dụng khoảng cách mặc định)
- **Safari 15.4+** (3/2022)

### ⚠️ Không lazy-load ảnh LCP!

```html
<!-- ❌ Ảnh hero (LCP element) — lazy sẽ làm LCP tệ hơn -->
<img src="hero.avif" loading="lazy" alt="">

<!-- ✅ Ảnh LCP: tải ngay + ưu tiên cao -->
<img src="hero.avif" alt="Mô tả" width="1200" height="630"
     fetchpriority="high">
```

`fetchpriority="high"` (Chrome 101+, Safari 17+, Firefox 132+) nâng ưu tiên tải ảnh hero.

---

## 10.5. Tối ưu hình ảnh

### Checklist tối ưu ảnh

1. **Định dạng hiện đại**: AVIF (nén tốt nhất) → WebP → JPEG/PNG
2. **Kích thước đúng**: không tải ảnh 3000px để hiển thị 400px
3. **Responsive**: `srcset` + `sizes`
4. **`width`/`height`** luôn đặt → tránh CLS
5. **Lazy** cho ảnh dưới màn hình đầu, `fetchpriority="high"` cho LCP

### Ví dụ hoàn chỉnh

```html
<picture>
    <source type="image/avif"
            srcset="hero-400.avif 400w, hero-800.avif 800w, hero-1600.avif 1600w"
            sizes="(max-width: 600px) 100vw, 800px">
    <source type="image/webp"
            srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
            sizes="(max-width: 600px) 100vw, 800px">
    <img src="hero-800.jpg" alt="Bãi biển Nha Trang lúc hoàng hôn"
         width="800" height="450" decoding="async">
</picture>
```

### Ảnh inline: SVG

```html
<!-- SVG inline: sắc nét mọi kích thước, nhỏ gọn cho icon -->
<img src="icon.svg" alt="Biểu tượng" width="24" height="24">
```

---

## 10.6. Web fonts và hiệu năng

```html
<!-- 1. preconnect tới font CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- 2. Font display: swap -->
<style>
  @font-face {
    font-family: 'Be Vietnam Pro';
    src: url('/fonts/be-vietnam-pro.woff2') format('woff2');
    font-display: swap;        /* hiển thị fallback ngay, đổi font khi tải xong */
    font-weight: 400 700;      /* variable font */
    font-style: normal;
  }
</style>

<!-- 3. Preload font quan trọng -->
<link rel="preload" href="/fonts/be-vietnam-pro.woff2" as="font" type="font/woff2" crossorigin>
```

### `font-display` các giá trị

| Giá trị | Hành vi |
|---------|---------|
| `swap` | Hiện fallback ngay, swap khi font sẵn sàng (phổ biến nhất) |
| `block` | Ẩn text ~3s chờ font (FOIT) |
| `fallback` | Hiện fallback ngắn, sau ~100ms đổi sang fallback vĩnh viễn nếu chậm |
| `optional` | Chỉ dùng font nếu tải xong rất nhanh |

---

## 10.7. CSS blocking và Critical CSS

```html
<head>
    <!-- CSS chặn render — giảm thiểu bằng: -->
    <link rel="stylesheet" href="/css/main.css">

    <!-- Inline CSS "above the fold" -->
    <style>
      /* CSS cho phần nhìn thấy đầu tiên */
      .hero { min-height: 60vh; }
    </style>

    <!-- CSS không quan trọng: tải không chặn -->
    <link rel="stylesheet" href="/css/print.css" media="print">
    <link rel="stylesheet" href="/css/print-other.css" media="print" onload="this.media='all'">
</head>
```

---

## 10.8. Tối ưu DOM — quy tắc số phần tử

- **DOM quá lớn** (~> 800 nodes, > 1400 depth) làm chậm style/layout
- Tránh lồng div quá sâu không cần thiết
- Dùng `content-visibility: auto` cho phần tử ngoài màn hình (Baseline 2023–2025):

```html
<style>
  /* Bỏ qua render phần tử ngoài viewport */
  .long-list-item { content-visibility: auto; contain-intrinsic-size: 0 200px; }
</style>
```

---

## 10.9. Chiến lược nạp trang tổng thể

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- 1. Kết nối sớm -->
    <link rel="preconnect" href="https://cdn.example.com" crossorigin>
    <link rel="dns-prefetch" href="https://api.example.com">

    <!-- 2. Preload LCP -->
    <link rel="preload" as="image" href="/hero.avif" fetchpriority="high">

    <!-- 3. CSS + Font -->
    <link rel="stylesheet" href="/css/critical.css">
    <link rel="preload" as="font" href="/fonts/main.woff2" type="font/woff2" crossorigin>

    <!-- 4. JS không chặn -->
    <script src="/js/app.js" type="module"></script>
    <script src="/js/analytics.js" defer></script>
</head>
<body>
    <!-- LCP element: KHÔNG lazy -->
    <img src="/hero.avif" alt="Hero" width="1200" height="630" fetchpriority="high">

    <!-- Ảnh dưới màn hình: lazy -->
    <img src="/item.jpg" alt="Sản phẩm" width="400" height="300" loading="lazy">
</body>
</html>
```

---

## 10.10. Đo lường hiệu năng

### Công cụ

- **Chrome DevTools** → tab **Performance**, **Lighthouse**
- **PageSpeed Insights** — https://pagespeed.web.dev
- **WebPageTest** — https://www.webpagetest.org
- **Search Console** — Core Web Vitals report

### API JavaScript (PageSpeed)

```javascript
// Đo LCP bằng PerformanceObserver
new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const last = entries[entries.length - 1];
  console.log('LCP:', last.startTime, 'ms');
}).observe({ type: 'largest-contentful-paint', buffered: true });

// Đo CLS
new PerformanceObserver((list) => {
  let cls = 0;
  for (const entry of list.getEntries()) if (!entry.hadRecentInput) cls += entry.value;
  console.log('CLS:', cls);
}).observe({ type: 'layout-shift', buffered: true });
```

---

## 10.11. Tài liệu tham khảo

- [web.dev — Learn Performance](https://web.dev/learn/performance/)
- [web.dev — Core Web Vitals](https://web.dev/articles/vitals)
- [MDN: `<script>` defer/async](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [web.dev — Optimize LCP](https://web.dev/articles/optimize-lcp)

---

## Tóm tắt

- ✅ Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms
- ✅ `defer`/`module` thay cho script blocking
- ✅ Lazy-load ảnh/iframe dưới màn hình, KHÔNG lazy ảnh LCP
- ✅ `fetchpriority="high"` cho ảnh hero
- ✅ `font-display: swap` + `preconnect` cho font
- ✅ `content-visibility: auto` cho danh sách dài

---

**Phần tiếp theo:** [Tính năng hiện đại](../11_modern-features/README.md) — Dialog, Popover API, Template, Custom Elements, Invoker Commands.
