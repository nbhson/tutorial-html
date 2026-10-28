# PHẦN 2: CẤU TRÚC TRANG HTML — `<head>`, `<body>`, META TAGS

## 2.1. Phần tử `<html>`

Phần tử `<html>` là phần tử **gốc (root element)** của mọi tài liệu HTML. Mọi phần tử khác phải nằm bên trong nó.

### Thuộc tính quan trọng

```html
<html lang="vi" dir="ltr">
```

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `lang` | Ngôn ngữ của tài liệu (`vi` = tiếng Việt, `en` = tiếng Anh) |
| `dir` | Hướng văn bản: `ltr` (trái → phải) hoặc `rtl` (phải → trái) |

### Tại sao `lang` quan trọng?

- **Trình đọc màn hình (screen reader)** chọn đúng giọng đọc
- **Công cụ tìm kiếm** hiểu nội dung thuộc ngôn ngữ nào
- **Trình duyệt** đề nghị dịch trang
- **CSS** có thể chọn phần tử theo ngôn ngữ: `:lang(vi)`

```css
/* CSS chọn nội dung tiếng Việt */
:lang(vi) { font-family: "Be Vietnam Pro", sans-serif; }
```

---

## 2.2. Phần tử `<head>` — Bộ não của trang

`<head>` chứa **metadata** (dữ liệu về dữ liệu) — thông tin về trang mà người dùng không nhìn thấy trực tiếp nhưng rất quan trọng cho trình duyệt, công cụ tìm kiếm, và mạng xã hội.

### Danh sách đầy đủ các phần tử trong `<head>`

```html
<head>
    <!-- Bắt buộc -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiêu đề trang — Tối đa 50-60 ký tự</title>

    <!-- SEO -->
    <meta name="description" content="Mô tả trang, tối đa 150-160 ký tự.">
    <meta name="author" content="Tên tác giả">
    <link rel="canonical" href="https://example.com/trang-nay">

    <!-- Mạng xã hội (Open Graph) -->
    <meta property="og:title" content="Tiêu đề chia sẻ">
    <meta property="og:image" content="https://example.com/image.jpg">

    <!-- Tài nguyên -->
    <link rel="stylesheet" href="/css/style.css">
    <link rel="icon" href="/favicon.ico" sizes="32x32">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <script src="/js/app.js" defer></script>
</head>
```

> **Quan trọng:** `<head>` phải là phần tử con đầu tiên của `<html>`, đứng trước `<body>`. Trong `<head>` chỉ được chứa: `<title>`, `<meta>`, `<link>`, `<style>`, `<script>`, `<base>`, `<noscript>`, `<template>`.

---

## 2.3. Phần tử `<title>`

Tiêu đề trang hiển thị ở **tab trình duyệt**, **kết quả tìm kiếm Google**, và **lịch sử duyệt web**.

### Nguyên tắc viết `<title>`

```html
<!-- ✅ Tốt: Đặc trưng + Thương hiệu, 50–60 ký tự -->
<title>Học HTML cơ bản cho người mới bắt đầu — WebViet</title>

<!-- ❌ Tránh: quá dài, trùng lặp, nhồi từ khóa -->
<title>HTML | Học HTML | HTML cơ bản | HTML nâng cao | WebViet HTML 2025 2026</title>
```

- Mỗi trang **phải có** `<title>` duy nhất (yêu cầu của WCAG 2.2 — tiêu chí 2.4.2 Page Titled)
- Google hiển thị khoảng **50–60 ký tự**; phần còn lại bị cắt bằng "…"

---

## 2.4. Meta tags quan trọng

### 2.4.1. `charset` — Mã hóa ký tự

```html
<meta charset="UTF-8">
```

- **UTF-8** là chuẩn duy nhất nên dùng — hỗ trợ mọi ngôn ngữ, kể cả tiếng Việt
- Phải nằm trong **1024 byte đầu tiên** của tài liệu — đặt ngay đầu `<head>`
- Thiếu `charset` → ký tự tiếng Việt hiển thị thành "Xin chÃ o"

### 2.4.2. `viewport` — Tối ưu di động

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

| Giá trị | Ý nghĩa |
|---------|---------|
| `width=device-width` | Chiều rộng trang = chiều rộng màn hình thiết bị |
| `initial-scale=1.0` | Mức zoom ban đầu 100% |

> **Lưu ý:** Không dùng `user-scalable=no` hay `maximum-scale=1` — hành vi này chặn người dùng phóng to, vi phạm WCAG 2.2 (tiêu chí 1.4.4 Resize Text).

### 2.4.3. `description` — Mô tả tìm kiếm

```html
<meta name="description" content="Hướng dẫn HTML tiếng Việt từ cơ bản đến nâng cao, cập nhật theo chuẩn WHATWG 2025–2026.">
```

- Google không dùng làm yếu tố xếp hạng trực tiếp, nhưng ảnh hưởng **tỷ lệ click (CTR)**
- Độ dài khuyến nghị: **150–160 ký tự**
- Google có thể tự viết lại description từ nội dung trang

### 2.4.4. Các meta tags khác

```html
<!-- Robots: điều khiển bot tìm kiếm -->
<meta name="robots" content="index, follow">
<meta name="robots" content="noindex, nofollow">  <!-- Trang không muốn index -->

<!-- Theme color: thanh trình duyệt trên mobile -->
<meta name="theme-color" content="#1a73e8">

<!-- Màu scheme tự động -->
<meta name="color-scheme" content="dark light">

<!-- Referrer policy (quyền riêng tư) -->
<meta name="referrer" content="strict-origin-when-cross-origin">

<!-- Hướng dẫn trình AI crawler 2025+ -->
<meta name="robots" content="noai, noimageai">
```

---

## 2.5. Phần tử `<body>` — Nội dung hiển thị

Mọi thứ người dùng nhìn thấy nằm trong `<body>`:

```html
<body>
    <!-- Chỉ chứa nội dung hiển thị + script -->
    <h1>...</h1>
    <p>...</p>
    <script src="app.js"></script>
</body>
```

### Sự kiện trên `<body>` (tham khảo, nên dùng `window` thay thế)

```html
<!-- Cách cũ — KHÔNG khuyến khích -->
<body onload="init()" onresize="onResize()">

<!-- ✅ Cách hiện đại: dùng JavaScript bên ngoài -->
<script>
  window.addEventListener('load', init);
  window.addEventListener('resize', onResize, { passive: true });
</script>
```

---

## 2.6. Thứ tự tải tài nguyên trong `<head>`

### Critical Rendering Path

```
HTML → DOM
     → CSS (head) → CSSOM
     → JS (blocking!) → chặn parse HTML
```

### Các cách nạp CSS/JS

```html
<!-- 1. CSS: đặt trong head (chuẩn) -->
<link rel="stylesheet" href="style.css">

<!-- 2. CSS inlining cho phần trên màn hình đầu (Above the fold) -->
<style> /* CSS quan trọng */ </style>

<!-- 3. JS blocking (tránh!) — chặn parse HTML -->
<script src="app.js"></script>

<!-- 4. JS async — tải song song, chạy ngay khi xong (không đảm bảo thứ tự) -->
<script src="analytics.js" async></script>

<!-- 5. JS defer — tải song song, chạy sau khi parse xong, đúng thứ tự (khuyến khích) -->
<script src="app.js" defer></script>

<!-- 6. JS module — mặc định giống defer -->
<script type="module" src="app.js"></script>
```

| Thuộc tính | Tải song song? | Thời điểm chạy | Đảm bảo thứ tự? |
|-----------|---------------|----------------|-----------------|
| (không) | ❌ | Ngay, chặn parse | ✅ |
| `async` | ✅ | Ngay khi tải xong | ❌ |
| `defer` | ✅ | Sau khi parse DOM xong | ✅ |
| `type="module"` | ✅ | Sau khi parse DOM xong | ✅ |

> **Khuyến nghị 2026:** Hầu như luôn dùng `defer` hoặc `type="module"`. Xem chi tiết tại [Phần 10: Hiệu năng](../10_performance/README.md).

---

## 2.7. Template trang chuẩn 2026

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- SEO cơ bản -->
    <title>10 Mẹo học HTML hiệu quả — WebViet</title>
    <meta name="description" content="Tổng hợp 10 mẹo học HTML hiệu quả nhất cho người mới bắt đầu, cập nhật theo chuẩn 2026.">

    <!-- Canonical: tránh trùng lặp nội dung -->
    <link rel="canonical" href="https://webviet.vn/meo-hoc-html">

    <!-- Open Graph: chia sẻ Facebook, LinkedIn, Zalo -->
    <meta property="og:type" content="article">
    <meta property="og:title" content="10 Mẹo học HTML hiệu quả">
    <meta property="og:description" content="Học HTML nhanh hơn với 10 mẹo thực tế.">
    <meta property="og:image" content="https://webviet.vn/og/meo-hoc-html.jpg">
    <meta property="og:url" content="https://webviet.vn/meo-hoc-html">

    <!-- Favicon hiện đại -->
    <link rel="icon" href="/favicon.ico" sizes="48x48">
    <link rel="icon" href="/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-icon-180.png">

    <!-- Tài nguyên -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="/css/main.css">
    <script src="/js/app.js" defer></script>
</head>
<body>
    <header><!-- ... --></header>
    <main><!-- ... --></main>
    <footer><!-- ... --></footer>
</body>
</html>
```

---

## 2.8. Các lỗi phổ biến

| Lỗi | Hậu quả | Cách sửa |
|-----|---------|----------|
| Thiếu `<meta charset="UTF-8">` | Lỗi ký tự tiếng Việt | Thêm vào đầu `<head>` |
| Thiếu `<meta viewport>` | Trang phóng to trên mobile | Thêm viewport chuẩn |
| Nhiều thẻ `<title>` | Google chọn tùy ý | Chỉ giữ 1 |
| `title` trống hoặc "Untitled" | SEO kém, a11y kém | Viết title mô tả |
| Script không defer | LCP chậm | Dùng `defer`/`module` |
| Meta description trùng giữa các trang | Google tự đặt mô tả | Viết unique cho từng trang |

---

## 2.9. Kiểm tra nhanh với DevTools

```js
// Console: xem các meta tags
document.querySelectorAll('meta').forEach(m => console.log(m.outerHTML));

// Kiểm tra title
document.title;

// Kiểm tra ngôn ngữ
document.documentElement.lang;
```

---

## 2.10. Tài liệu tham khảo

- [MDN: The head metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [WHATWG HTML — The head element](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element)
- [web.dev — Learn HTML: head](https://web.dev/learn/html/head/)

---

## Tóm tắt

- ✅ `<head>` chứa metadata: title, meta, link, script, style
- ✅ 3 thẻ bắt buộc: `charset`, `viewport`, `title`
- ✅ `lang` trên `<html>` phục vụ accessibility và SEO
- ✅ `defer` / `async` / `module` điều khiển thứ tự tải script
- ✅ Meta description, Open Graph, canonical là nền tảng SEO (chi tiết ở Phần 9)

---

**Phần tiếp theo:** [Thẻ HTML cơ bản](../3_the-co-ban/README.md) — Các thẻ thông dụng nhất: văn bản, liên kết, hình ảnh, danh sách, bảng.
