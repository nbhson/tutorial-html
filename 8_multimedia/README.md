# PHẦN 8: ĐA PHƯƠNG TIỆN (MULTIMEDIA)

## 8.1. Video — `<video>`

```html
<video controls width="640" height="360" poster="anh-bia.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Trình duyệt của bạn không hỗ trợ video HTML5.
</video>
```

### Thuộc tính quan trọng

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `controls` | Hiển thị điều khiển (play, volume, fullscreen) |
| `autoplay` | Tự phát (cần `muted` để trình duyệt cho phép) |
| `muted` | Tắt tiếng ban đầu |
| `loop` | Lặp lại |
| `preload` | `none` / `metadata` (khuyến nghị) / `auto` |
| `poster` | Ảnh hiển thị trước khi phát |
| `playsinline` | Phát inline trên iOS (không fullscreen tự động) |
| `width`, `height` | Đặt kích thước → tránh layout shift |

### Ví dụ video hoàn chỉnh chuẩn 2026

```html
<video controls
       width="1280" height="720"
       poster="poster.webp"
       preload="metadata"
       playsinline
       crossorigin="anonymous">
    <source src="video-1080p.webm" type="video/webm">
    <source src="video-1080p.mp4" type="video/mp4">
    <track kind="captions" src="phu-de-vi.vtt" srclang="vi" label="Tiếng Việt" default>
    <track kind="subtitles" src="phu-de-en.vtt" srclang="en" label="English">
    <p>Trình duyệt không hỗ trợ. <a href="video.mp4">Tải video</a>.</p>
</video>
```

> **Chính sách autoplay:** Các trình duyệt hiện đại **chặn autoplay có tiếng**. Video autoplay phải `muted` hoặc người dùng đã tương tác với trang.

---

## 8.2. Audio — `<audio>`

```html
<audio controls preload="metadata">
    <source src="bai-hat.opus" type="audio/ogg">
    <source src="bai-hat.mp3" type="audio/mpeg">
    Trình duyệt không hỗ trợ audio.
</audio>
```

### Định dạng audio phổ biến

| Định dạng | Codec | Hỗ trợ |
|-----------|-------|--------|
| MP3 | MPEG Audio Layer III | Toàn bộ |
| AAC (m4a) | AAC | Toàn bộ |
| Opus | Opus | Toàn bộ trình duyệt hiện đại, hiệu suất tốt |
| WAV | PCM | Toàn bộ (file lớn) |

---

## 8.3. `<track>` — Phụ đề và caption

`<track>` nằm trong `<video>`/`<audio>`, chứa text track định dạng **WebVTT** (.vtt):

```html
<video controls>
    <source src="bai-giang.mp4" type="video/mp4">
    <track kind="subtitles" src="phu-de-vi.vtt" srclang="vi" label="Tiếng Việt" default>
    <track kind="captions"  src="caption-en.vtt" srclang="en" label="English">
    <track kind="chapters"  src="chuong.vtt"      srclang="vi" label="Chương">
</video>
```

### Giá trị `kind`

| kind | Mục đích |
|------|---------|
| `subtitles` | Phụ đề dịch/ngôn ngữ khác (mặc định) |
| `captions` | Phụ đề kèm âm thanh mô tả (cho người điếc) |
| `descriptions` | Mô tả âm thanh cho người khiếm thị |
| `chapters` | Đánh dấu chương |

### File WebVTT mẫu

```vtt
WEBVTT

00:00:01.000 --> 00:00:04.000
Xin chào, chào mừng đến với bài học HTML.

00:00:04.500 --> 00:00:08.200
Hôm nay chúng ta tìm hiểu về multimedia.
```

> **WCAG 1.2.2 (Level A):** Video có âm thoại phải có captions. Đây là yêu cầu bắt buộc.

---

## 8.4. `iframe` — Nhúng nội dung khác

```html
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        width="560" height="315"
        title="Video hướng dẫn HTML"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin allow-presentation">
</iframe>
```

### Thuộc tính bảo mật của iframe

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `title` | **Bắt buộc a11y** — mô tả nội dung iframe |
| `loading="lazy"` | Tải chậm, cải thiện LCP (Chrome 76+, Safari 15.4+, Firefox 121+) |
| `sandbox` | Giới hạn quyền của nội dung nhúng |
| `allow` | Permissions Policy: camera, microphone, fullscreen... |
| `referrerpolicy` | Kiểm soát referrer |

### `sandbox` — isolating nội dung không tin cậy

```html
<!-- Chặn script, chặn form, chặn popup -->
<iframe src="dung-thu.html" sandbox></iframe>

<!-- Cho phép script nhưng không cùng origin -->
<iframe src="widget.html" sandbox="allow-scripts"></iframe>
```

> **Lưu ý:** Nếu `src` trỏ đến origin khác, luôn cân nhắc `sandbox`. Tránh dùng `allow-scripts allow-same-origin` cùng lúc với nội dung không tin cậy (nó cho phép phá bỏ sandbox).

### iframes hiện đại: `credentialless` / `csp`

```html
<!-- Chrome 110+: iframe không chia sẻ credential, giảm rủi ro XS-Leaks -->
<iframe src="https://untrusted.example/embed" credentialless></iframe>
```

---

## 8.5. Hình ảnh responsive — `<picture>` và `srcset`

### 8.4.1. `srcset` + `sizes` — chọn độ phân giải

```html
<img src="anh-800.jpg"
     srcset="anh-400.jpg 400w,
             anh-800.jpg 800w,
             anh-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Biểu đồ tăng trưởng" width="800" height="450" loading="lazy">
```

- `srcset`: danh sách ảnh với độ rộng thực (pixel)
- `sizes`: gợi ý chiều rộng hiển thị theo điều kiện
- Trình duyệt tự chọn ảnh phù hợp với màn hình (DPR, kích thước)

### 8.4.2. `<picture>` — Art direction / đổi định dạng

```html
<picture>
    <!-- Ảnh hiện đại nhẹ hơn -->
    <source type="image/avif" srcset="anh.avif">
    <source type="image/webp" srcset="anh.webp">
    <!-- Ảnh crop khác nhau theo màn hình -->
    <source media="(max-width: 600px)" srcset="anh-mobile.jpg">
    <!-- Fallback bắt buộc -->
    <img src="anh.jpg" alt="Mô tả ảnh" width="800" height="450">
</picture>
```

| Định dạng | Hỗ trợ | Ghi chú |
|-----------|--------|---------|
| AVIF | Chrome 85+, Firefox 93+, Safari 16.1+ | Nén tốt nhất hiện nay |
| WebP | Chrome 32+, Firefox 65+, Safari 14+ | Phổ biến, nén tốt |
| JPEG/PNG | Toàn bộ | Fallback |

---

## 8.6. `<figure>` và `<figcaption>`

```html
<figure>
    <img src="bieu-do.png" alt="Doanh thu theo quý" width="600" height="400" loading="lazy">
    <figcaption>Hình 2: Doanh thu theo quý năm 2025 (nghìn VND)</figcaption>
</figure>

<!-- Áp dụng cho code, video, bảng -->
<figure>
    <video controls width="640"><source src="demo.mp4" type="video/mp4"></video>
    <figcaption>Video 1: Demo tính năng kéo thả</figcaption>
</figure>
```

---

## 8.7. Embed nội dung khác: `<embed>`, `<object>`

```html
<!-- <embed>: nhúng plugin nội dung (PDF, SVG) -->
<embed src="tai-lieu.pdf" type="application/pdf" width="600" height="400">

<!-- <object>: nhúng kèm nội dung fallback -->
<object data="tai-lieu.pdf" type="application/pdf" width="600" height="400">
    <p>Trình duyệt không hiển thị được PDF. <a href="tai-lieu.pdf">Tải xuống</a>.</p>
</object>
```

> **Khuyến nghị 2026:** Hạn chế `<embed>`/`<object>`; ưu tiên iframe cho trang web, `<video>`/`<audio>` cho media, và nhúng PDF bằng Google Docs viewer hoặc thư viện PDF.js.

---

## 8.8. Sự kiện và điều khiển media bằng JS

```javascript
const video = document.querySelector('video');

// Điều khiển
video.play();          // trả về Promise (bắt lỗi NotAllowedError nếu autoplay bị chặn)
video.pause();
video.currentTime = 30; // nhảy tới giây 30
video.playbackRate = 1.5;
video.volume = 0.5;

// Sự kiện
video.addEventListener('play', () => console.log('Đang phát'));
video.addEventListener('ended', () => console.log('Kết thúc'));
video.addEventListener('error', (e) => console.error('Lỗi tải video', e));

// CanPlayType: kiểm tra hỗ trợ định dạng
const canAv1 = video.canPlayType('video/mp4; codecs="av01.0.05M.08"');
console.log(canAv1); // "probably" | "maybe" | ""
```

---

## 8.9. Tối ưu media — checklist nhanh

- [ ] Video dùng `preload="metadata"` hoặc `preload="none"` (không `auto`)
- [ ] Poster image + `width`/`height` cho video → tránh layout shift
- [ ] Ảnh dùng `loading="lazy"` (trừ ảnh LCP — xem [Phần 10](../10_performance/README.md))
- [ ] `srcset`/`sizes` hoặc `<picture>` cho responsive
- [ ] AVIF/WebP cho ảnh, MP4 (H.264/AV1) cho video
- [ ] Video tự phát phải `muted` + `playsinline`
- [ ] `<track>` captions cho mọi video có thoại

---

## 8.10. Tài liệu tham khảo

- [MDN: `<video>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video)
- [MDN: Responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images)
- [web.dev — Learn Media](https://web.dev/learn/media/)
- [WHATWG HTML — Video and audio](https://html.spec.whatwg.org/multipage/media.html)

---

## Tóm tắt

- ✅ `<video>`: `controls`, `poster`, `preload="metadata"`, `playsinline`
- ✅ `<audio>`: dùng cho nhạc/podcast; hiển thị player mặc định
- ✅ `<track kind="captions">` — bắt buộc cho a11y (WCAG 1.2.2)
- ✅ `<picture>` + `srcset`/`sizes` = responsive images chuẩn
- ✅ `iframe` cần `title`, `loading="lazy"`, và `sandbox` cho nội dung ngoài
- ✅ `figure` + `figcaption` bọc media có chú thích

---

**Phần tiếp theo:** [SEO và Metadata](../9_seo/README.md) — Meta description, Open Graph, Schema.org/JSON-LD, canonical URL.
