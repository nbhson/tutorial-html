# PHẦN 9: SEO VÀ METADATA

## 9.1. HTML và SEO — Mối quan hệ cốt lõi

**SEO (Search Engine Optimization)** là tối ưu trang để công cụ tìm kiếm hiểu và xếp hạng. HTML là **tín hiệu đầu tiên** mà bot đọc:

```
Bot Google → Tải HTML → Đọc <title>, <meta>, headings, semantic structure → Index → Xếp hạng
```

### Ba trụ cột SEO on-page trong HTML

1. **Metadata** (`<title>`, `<meta name="description">`)
2. **Cấu trúc ngữ nghĩa** (headings, semantic tags — xem [Phần 5](../5_semantic/README.md))
3. **Dữ liệu có cấu trúc** (Schema.org / JSON-LD)

---

## 9.2. `<title>` — Yếu tố xếp hạng quan trọng nhất trong `<head>`

```html
<!-- Công thức: [Từ khóa chính] — [Lợi ích] | [Thương hiệu] -->
<title>Học HTML từ cơ bản đến nâng cao (2026) — WebViet</title>
```

### Quy tắc

- **50–60 ký tự** — Google cắt phần dư bằng "…"
- Từ khóa quan trọng **đặt đầu tiên**
- **Duy nhất cho mỗi trang**
- Không nhồi từ khóa ("HTML, học HTML, HTML cơ bản, HTML 2026")

---

## 9.3. `<meta name="description">`

```html
<meta name="description" content="Khóa học HTML tiếng Việt miễn phí: 12 phần từ cơ bản đến nâng cao, cập nhật chuẩn WHATWG 2026, kèm ví dụ thực hành.">
```

- **150–160 ký tự** là tối ưu
- Không phải yếu tố xếp hạng trực tiếp, nhưng ảnh hưởng **CTR** trong SERP
- Google có thể **tự viết lại** từ nội dung trang nếu description kém
- Mỗi trang một description **duy nhất**, chứa từ khóa chính

---

## 9.4. Canonical URL — chống trùng lặp nội dung

Khi cùng nội dung truy cập được qua nhiều URL, Google có thể index trùng lặp:

```html
<!-- Trang này là bản chính thức -->
<link rel="canonical" href="https://webviet.vn/hoc-html">
```

### Khi nào cần canonical

| Trường hợp | Ví dụ |
|-----------|-------|
| URL có tham số | `?utm_source=facebook`, `?sort=price` |
| Có cả www và non-www | `www.webviet.vn` vs `webviet.vn` |
| Có cả http và https | Chuyển hướng 301 + canonical |
| Trang phân trang | `/danh-sach?page=2` |
| Nội dung tổng hợp (syndicated) | Bài đăng lại từ nguồn khác |

### Lưu ý

- Canonical phải là **URL tuyệt đối** (`https://...`)
- Không đặt canonical trỏ đến trang 404/noindex
- Tự tham chiếu (self-canonical) trên mọi trang là best practice

---

## 9.5. Open Graph — chia sẻ đẹp trên mạng xã hội

**Open Graph (OG)** do Facebook phát triển, được Facebook, LinkedIn, Zalo, Slack, Discord... sử dụng:

```html
<meta property="og:type" content="article">
<meta property="og:url" content="https://webviet.vn/hoc-html">
<meta property="og:title" content="Học HTML từ cơ bản đến nâng cao">
<meta property="og:description" content="12 phần học HTML miễn phí, cập nhật chuẩn 2026.">
<meta property="og:image" content="https://webviet.vn/og/hoc-html.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="vi_VN">
<meta property="og:site_name" content="WebViet">
```

- `og:image` nên kích thước **1200×630 px** (< 5MB)
- `og:type` phổ biến: `website`, `article`, `product`

### Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Học HTML từ cơ bản đến nâng cao">
<meta name="twitter:description" content="12 phần học HTML miễn phí, chuẩn 2026.">
<meta name="twitter:image" content="https://webviet.vn/og/hoc-html.jpg">
<meta name="twitter:site" content="@webviet">
```

### Công cụ kiểm tra

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 9.6. Schema.org / JSON-LD — Dữ liệu có cấu trúc

**JSON-LD** là cách Google khuyến nghị nhúng dữ liệu có cấu trúc — viết trong thẻ `<script type="application/ld+json">`.

### Ví dụ Article (bài viết)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Học HTML từ cơ bản đến nâng cao",
  "image": "https://webviet.vn/og/hoc-html.jpg",
  "author": {
    "@type": "Person",
    "name": "Nguyễn Sơn",
    "url": "https://webviet.vn/author/ngson"
  },
  "publisher": {
    "@type": "Organization",
    "name": "WebViet",
    "logo": { "@type": "ImageObject", "url": "https://webviet.vn/logo.png" }
  },
  "datePublished": "2026-10-20T09:00:00+07:00",
  "dateModified": "2026-10-26T14:30:00+07:00",
  "description": "Khóa học HTML tiếng Việt miễn phí theo chuẩn WHATWG 2026."
}
</script>
```

### Ví dụ Organization + Website

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "WebViet",
  "url": "https://webviet.vn",
  "logo": "https://webviet.vn/logo.png",
  "sameAs": [
    "https://www.facebook.com/webviet",
    "https://github.com/webviet"
  ]
}
</script>
```

### Các schema type thường dùng

| Type | Dùng cho |
|------|----------|
| `Article` / `BlogPosting` | Bài viết blog |
| `Product` + `Offer` | Trang sản phẩm (giá, tồn kho) |
| `FAQPage` | Câu hỏi thường gặp |
| `HowTo` | Hướng dẫn từng bước |
| `BreadcrumbList` | Breadcrumb |
| `LocalBusiness` | Doanh nghiệp địa phương |
| `Person` | Trang cá nhân/tác giả |
| `Course` / `LearningResource` | Khóa học (Google yêu cầu markups mới từ 2026) |
| `VideoObject` | Video |
| `BreadcrumbList` | Breadcrumb navigation |

> **Lưu ý 2026:** Google đã **loại bỏ rich results cho HowTo** (09/2023) và thu hẹp FAQ rich results; tính năng Course info bị loại từ **31/12/2025** — hãy kiểm tra [trạng thái hiện tại](https://developers.google.com/search/docs/appearance/structured-data) trước khi triển khai.

---

## 9.7. Breadcrumb và liên kết nội bộ

```html
<!-- Breadcrumb semantic + JSON-LD -->
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/hoc-lap-trinh">Học lập trình</a></li>
        <li aria-current="page">HTML</li>
    </ul>
</ol>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://webviet.vn/" },
    { "@type": "ListItem", "position": 2, "name": "Học lập trình", "item": "https://webviet.vn/hoc-lap-trinh" },
    { "@type": "ListItem", "position": 3, "name": "HTML" }
  ]
}
</script>
```

---

## 9.8. `robots` — Điều khiển indexing

### Meta robots

```html
<meta name="robots" content="index, follow">       <!-- mặc định -->
<meta name="robots" content="noindex, follow">      <!-- không index, vẫn theo link -->
<meta name="robots" content="max-image-preview:large">
<meta name="googlebot" content="noindex, nofollow">
```

### robots.txt (tách khỏi HTML, đặt tại gốc domain)

```txt
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://webviet.vn/sitemap.xml
```

### AI crawlers (mới 2024–2026)

```html
<!-- Chặn AI training crawler -->
<meta name="robots" content="noai, noimageai">
<!-- Hoặc trong robots.txt -->
<!-- User-agent: GPTBot / CCBot / Google-Extended → Disallow: / -->
```

---

## 9.9. Headings và cấu trúc nội dung cho SEO

```html
<h1>Học HTML từ cơ bản đến nâng cao</h1>        <!-- 1 H1 duy nhất, chứa từ khóa chính -->
  <h2>HTML là gì?</h2>
  <h2>Lộ trình học HTML</h2>
    <h3>Giai đoạn 1: Cơ bản</h3>
    <h3>Giai đoạn 2: Semantic</h3>
  <h2>Câu hỏi thường gặp</h2>
```

- Từ khóa chính trong `h1`, từ khóa phụ trong `h2`/`h3`
- Cấu trúc heading hợp lý giúp Google tạo **jump links (sitelinks)** trong SERP
- Kết hợp FAQ bằng Schema `FAQPage` để hiển thị dropdown trong kết quả tìm kiếm

---

## 9.10. Checklist SEO on-page đầy đủ

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <!-- 1. Essentials -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Học HTML 2026 — Lộ trình từ cơ bản đến nâng cao | WebViet</title>
    <meta name="description" content="Lộ trình học HTML 2026: 12 phần, ví dụ thực tế, chuẩn WHATWG mới nhất. Miễn phí.">

    <!-- 2. Canonical -->
    <link rel="canonical" href="https://webviet.vn/hoc-html">

    <!-- 3. Open Graph + Twitter -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="Học HTML 2026 — Lộ trình đầy đủ">
    <meta property="og:description" content="12 phần học HTML miễn phí theo chuẩn mới nhất.">
    <meta property="og:image" content="https://webviet.vn/og/hoc-html.jpg">
    <meta name="twitter:card" content="summary_large_image">

    <!-- 4. Favicon + icons -->
    <link rel="icon" href="/favicon.ico" sizes="48x48">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">

    <!-- 5. JSON-LD -->
    <script type="application/ld+json">{ "@context": "https://schema.org", "@type": "Article", ... }</script>

    <!-- 6. Hiệu năng (xem Phần 10) -->
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/app.js" defer></script>
</head>
<body>
    <main>
        <article>
            <h1>Học HTML từ cơ bản đến nâng cao</h1>
            ...
        </article>
    </main>
</body>
</html>
```

### Công cụ kiểm tra

- **Google Search Console** — index, hiệu suất tìm kiếm
- **Lighthouse** — SEO audit tự động
- **Rich Results Test** — kiểm tra Schema.org
- **W3C Validator** — HTML hợp lệ

---

## 9.11. Tài liệu tham khảo

- [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [MDN: Open Graph protocol](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Introduction_to_meta_viewport)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## Tóm tắt

- ✅ `<title>` (50–60 ký tự) và `<meta description>` (150–160) là nền tảng
- ✅ Canonical URL chống trùng lặp nội dung
- ✅ Open Graph + Twitter Card cho đẹp khi chia sẻ MXH
- ✅ JSON-LD + Schema.org mở khóa rich results
- ✅ Headings phân cấp rõ ràng → Google hiểu nội dung
- ✅ Kiểm chứng bằng Rich Results Test + Search Console

---

**Phần tiếp theo:** [Performance](../10_performance/README.md) — Lazy loading, preload, defer, async, tối ưu hình ảnh.
