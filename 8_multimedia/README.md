# PHẦN 8: ĐA PHƯƠNG TIỆN (MULTIMEDIA)

## 8.1. Video — `<video>`

Mục này mở đầu phần media bằng thẻ `<video>`: chèn video vào trang thuần HTML, cùng bộ thuộc tính điều khiển phát, poster và autoplay.

> 📄 **Code ví dụ:** [`examples/01-8-1-video-video.html`](examples/01-8-1-video-video.html)

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

> **Cách đọc bảng này:** cột "Thuộc tính" là nút bấm trong thẻ `<video>`, cột "Ý nghĩa" là tác dụng — hai dòng đáng nhớ nhất là `preload` (chọn `metadata` cho nhẹ) và `playsinline` (bắt buộc nếu muốn video chạy gọn trên iPhone).

### Ví dụ video hoàn chỉnh chuẩn 2026

> 📄 **Code ví dụ:** [`examples/02-vi-du-video-hoan-chinh-chuan-2026.html`](examples/02-vi-du-video-hoan-chinh-chuan-2026.html)

> **Chính sách autoplay:** Các trình duyệt hiện đại **chặn autoplay có tiếng**. Video autoplay phải `muted` hoặc người dùng đã tương tác với trang.

> **Tóm gọn 1 câu:** Video tự phát phải "câm lặng" (`muted` + `playsinline`) — quy tắc bất thành văn của mọi trình duyệt hiện đại.

---

## 8.2. Audio — `<audio>`

Mục này nói về thẻ `<audio>` và các định dạng âm thanh — chọn codec nào để mọi trình duyệt đều phát được.

> 📄 **Code ví dụ:** [`examples/03-8-2-audio-audio.html`](examples/03-8-2-audio-audio.html)

### Định dạng audio phổ biến

| Định dạng | Codec | Hỗ trợ |
|-----------|-------|--------|
| MP3 | MPEG Audio Layer III | Toàn bộ |
| AAC (m4a) | AAC | Toàn bộ |
| Opus | Opus | Toàn bộ trình duyệt hiện đại, hiệu suất tốt |
| WAV | PCM | Toàn bộ (file lớn) |

> **Cách đọc bảng này:** cột "Định dạng" là loại file, cột "Hỗ trợ" cho biết bao nhiêu trình duyệt phát được — nếu phân vân, MP3/AAC là lựa chọn "an toàn tuyệt đối", Opus là lựa chọn "hiệu quả nhất".

---

## 8.3. `<track>` — Phụ đề và caption

Mục này nói về "dòng chữ dưới màn hình": `<track>` — cách gắn phụ đề cho video/audio, vừa giúp người điếc vừa bắt buộc theo WCAG.

`<track>` nằm trong `<video>`/`<audio>`, chứa text track định dạng **WebVTT** (.vtt):

> 📄 **Code ví dụ:** [`examples/04-8-3-track-phu-e-va-caption.html`](examples/04-8-3-track-phu-e-va-caption.html)

### Giá trị `kind`

| kind | Mục đích |
|------|---------|
| `subtitles` | Phụ đề dịch/ngôn ngữ khác (mặc định) |
| `captions` | Phụ đề kèm âm thanh mô tả (cho người điếc) |
| `descriptions` | Mô tả âm thanh cho người khiếm thị |
| `chapters` | Đánh dấu chương |

> **Cách đọc bảng này:** cột `kind` là "loại dòng chữ" gắn kèm video — phân biệt phụ đề dịch thuật (`subtitles`), phụ đề cho người điếc (`captions`) và mô tả cho người khiếm thị (`descriptions`); chọn sai kind là trình duyệt hiểu sai mục đích.

### File WebVTT mẫu

```vtt
WEBVTT

00:00:01.000 --> 00:00:04.000
Xin chào, chào mừng đến với bài học HTML.

00:00:04.500 --> 00:00:08.200
Hôm nay chúng ta tìm hiểu về multimedia.
```

> **WCAG 1.2.2 (Level A):** Video có âm thoại phải có captions. Đây là yêu cầu bắt buộc.

> **Tóm gọn 1 câu:** `<track kind="captions">` không phải "món trang trí" — với video có thoại, nó là giấy phép bắt buộc theo WCAG.

---

## 8.4. `iframe` — Nhúng nội dung khác

Mục này nói về "cửa sổ sang nhà hàng xóm": iframe — nhúng trang khác vào trang của bạn, và những rào chắn bảo mật cần dựng kèm.

> 📄 **Code ví dụ:** [`examples/05-8-4-iframe-nhung-noi-dung-khac.html`](examples/05-8-4-iframe-nhung-noi-dung-khac.html)

### Thuộc tính bảo mật của iframe

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `title` | **Bắt buộc a11y** — mô tả nội dung iframe |
| `loading="lazy"` | Tải chậm, cải thiện LCP (Chrome 76+, Safari 15.4+, Firefox 121+) |
| `sandbox` | Giới hạn quyền của nội dung nhúng |
| `allow` | Permissions Policy: camera, microphone, fullscreen... |
| `referrerpolicy` | Kiểm soát referrer |

> **Cách đọc bảng này:** dòng đầu (`title`) là nghĩa vụ a11y, dòng `sandbox` và `allow` là "hộ chiếu và visa" cho nội dung nhúng — nội dung càng ít tin cậy thì visa càng cắt gọn.

### `sandbox` — isolating nội dung không tin cậy

> 📄 **Code ví dụ:** [`examples/06-sandbox-isolating-noi-dung-khong-tin-cay.html`](examples/06-sandbox-isolating-noi-dung-khong-tin-cay.html)

> **Lưu ý:** Nếu `src` trỏ đến origin khác, luôn cân nhắc `sandbox`. Tránh dùng `allow-scripts allow-same-origin` cùng lúc với nội dung không tin cậy (nó cho phép phá bỏ sandbox).

### iframes hiện đại: `credentialless` / `csp`

> 📄 **Code ví dụ:** [`examples/07-iframes-hien-ai-credentialless-csp.html`](examples/07-iframes-hien-ai-credentialless-csp.html)

---

## 8.5. Hình ảnh responsive — `<picture>` và `srcset`

Mục này giải quyết bài toán "một ảnh, nhiều màn hình": dùng `srcset`/`sizes` và `<picture>` để mỗi thiết bị nhận đúng tấm ảnh vừa khít.

### 8.4.1. `srcset` + `sizes` — chọn độ phân giải

> 📄 **Code ví dụ:** [`examples/08-8-4-1-srcset-sizes-chon-o-phan.html`](examples/08-8-4-1-srcset-sizes-chon-o-phan.html)

- `srcset`: danh sách ảnh với độ rộng thực (pixel) — như chuẩn bị nhiều size đồng phục để khách tự chọn vừa
- `sizes`: gợi ý chiều rộng hiển thị theo điều kiện
- Trình duyệt tự chọn ảnh phù hợp với màn hình (DPR, kích thước)

### 8.4.2. `<picture>` — Art direction / đổi định dạng

> 📄 **Code ví dụ:** [`examples/09-8-4-2-picture-art-direction-oi-inh.html`](examples/09-8-4-2-picture-art-direction-oi-inh.html)

| Định dạng | Hỗ trợ | Ghi chú |
|-----------|--------|---------|
| AVIF | Chrome 85+, Firefox 93+, Safari 16.1+ | Nén tốt nhất hiện nay |
| WebP | Chrome 32+, Firefox 65+, Safari 14+ | Phổ biến, nén tốt |
| JPEG/PNG | Toàn bộ | Fallback |

> **Cách đọc bảng này:** đọc từ dưới lên để hiểu thứ tự ưu tiên — JPEG/PNG là "sàn nhà" ai cũng đứng được, WebP/AVIF là các "tầng ưu tiên" trình duyệt hiện đại sẽ lên trước nếu đi được.

---

## 8.6. `<figure>` và `<figcaption>`

Mục này nói về "bức tranh có nhãn": cặp thẻ bọc hình ảnh/minh họa kèm chú thích — máy hiểu đây là một khối media trọn vẹn.

> 📄 **Code ví dụ:** [`examples/10-8-6-figure-va-figcaption.html`](examples/10-8-6-figure-va-figcaption.html)

---

## 8.7. Embed nội dung khác: `<embed>`, `<object>`

Mục này giới thiệu hai thẻ nhúng "thế hệ trước" — biết đến để không dùng nhầm chỗ, không phải bỏ quên.

> 📄 **Code ví dụ:** [`examples/11-8-7-embed-noi-dung-khac-embed-object.html`](examples/11-8-7-embed-noi-dung-khac-embed-object.html)

> **Khuyến nghị 2026:** Hạn chế `<embed>`/`<object>`; ưu tiên iframe cho trang web, `<video>`/`<audio>` cho media, và nhúng PDF bằng Google Docs viewer hoặc thư viện PDF.js.

---

## 8.8. Sự kiện và điều khiển media bằng JS

Mục này là "bảng điều khiển từ xa": các sự kiện media và cách điều khiển video/audio bằng JavaScript.

> 📄 **Code ví dụ:** [`examples/12-8-8-su-kien-va-ieu-khien-media.js`](examples/12-8-8-su-kien-va-ieu-khien-media.js)

---

## 8.9. Tối ưu media — checklist nhanh

Mục này gom tất cả thành "danh sách dán cửa": điểm từng mục trước khi deploy để media không làm chậm trang.

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

> **Tóm gọn 1 câu:** Media dùng đúng thẻ và đúng thuộc tính là được 3 thứ miễn phí: hiển thị mượt, tải nhanh, và ai cũng xem/nhận được nội dung.

---

**Phần tiếp theo:** [SEO và Metadata](../9_seo/README.md) — Meta description, Open Graph, Schema.org/JSON-LD, canonical URL.
