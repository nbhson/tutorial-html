# PHẦN 10: HIỆU NĂNG (PERFORMANCE)

## 10.1. Hiệu năng web — Các chỉ số Core Web Vitals 2026

Mục này nói về "bảng điểm tốc độ" của trang: Core Web Vitals — ba chỉ số Google dùng để chấm cảm giác nhanh/chậm, và HTML ảnh hưởng đến nó thế nào.

Hiệu năng trang ảnh hưởng trực tiếp đến **trải nghiệm người dùng** và **xếp hạng tìm kiếm** (Google dùng Core Web Vitals làm tín hiệu xếp hạng).

### Core Web Vitals (chuẩn hiện tại)

| Chỉ số | Đo gì | Mục tiêu tốt |
|--------|-------|--------------|
| **LCP** (Largest Contentful Paint) | Thời gian hiển thị phần tử lớn nhất | ≤ 2.5s |
| **CLS** (Cumulative Layout Shift) | Độ dịch chuyển bố cục | < 0.1 |
| **INP** (Interaction to Next Paint) | Độ trễ phản hồi tương tác | < 200ms |

> **Cách đọc bảng này:** mỗi dòng là một "môn thi" của trang web — LCP thi "nhanh hiện lên", CLS thi "đứng yên không nhảy", INP thi "phản hồi lẹ tay"; cột "Mục tiêu tốt" là điểm đỗ, nhớ 3 con số đó là nhớ cả bảng.

> INP đã **thay thế FID** từ tháng 3/2024. Các chỉ số khác: FCP, TTFB, CLS, TBT.

### HTML ảnh hưởng gì đến hiệu năng?

- Thứ tự tải tài nguyên (script chặn parser)
- Kích thước hình ảnh và cách tải
- Layout shift do thiếu `width`/`height`
- Cách trình duyệt parse và render

> **Tóm gọn 1 câu:** Core Web Vitals là bảng điểm 3 môn của trang — nhanh hiện lên, không giật layout, phản hồi lẹ — và HTML của bạn trực tiếp làm điểm từng môn.

---

## 10.2. `defer`, `async`, và `type="module"`

Mục này nói về "ba kiểu xếp hàng của script": blocking, async, defer — chọn sai kiểu là script tự dựng rào chắn giữa người dùng và nội dung.

### Ba cách nạp JavaScript

> 📄 **Code ví dụ:** [`examples/01-ba-cach-nap-javascript.html`](examples/01-ba-cach-nap-javascript.html)

### So sánh chi tiết

| | Blocking | `async` | `defer` / `module` |
|---|---------|---------|---------------------|
| Chặn parse HTML | ✅ | ❌ | ❌ |
| Chạy khi | Ngay | Tải xong | DOMContentLoaded |
| Đảm bảo thứ tự | ✅ | ❌ | ✅ |
| Phù hợp cho | Hiếm khi | Analytics độc lập | App chính |

> **Cách đọc bảng này:** mỗi cột là một "kiểu xếp hàng" của script — Blocking cắt ngang mọi thứ, Async nhảy hàng lúc nào xong lúc nấy, Defer xếp hàng lịch sự chờ DOM xong; đọc theo từng dòng để thấy mỗi kiểu tự do và đảm bảo được gì.

**Khuyến nghị:** App chính dùng `defer` hoặc `type="module"`. Script độc lập (analytics, ads) có thể `async`.

> **Tóm gọn 1 câu:** Script app chính nên "xếp hàng lịch sự" (`defer`/`module`), script vặt mới được "nhảy hàng" (`async`) — blocking là kiểu xếp hàng phá đám, gần như luôn tránh.

---

## 10.3. Resource Hints — Gợi ý tải tài nguyên

Mục này nói về "lời mách nước cho trình duyệt": resource hints — báo trước tài nguyên sắp cần để trình duyệt chuẩn bị từ sớm.

> 📄 **Code ví dụ:** [`examples/02-10-3-resource-hints-goi-y-tai-tai.html`](examples/02-10-3-resource-hints-goi-y-tai-tai.html)

### Khi nào dùng cái nào?

| Gợi ý | Dùng khi | Rủi ro |
|-------|----------|--------|
| `preconnect` | Origin cần kết nối sớm (CDN font, API) | Rẻ |
| `preload` | Tài nguyên LCP hiện tại (font, hero image) | Lãng phí nếu sai |
| `prefetch` | Trang người dùng có thể đi tiếp | Lãng phí băng thông |
| `modulepreload` | Entry point của app JS | Rẻ |

> **Cách đọc bảng này:** mỗi dòng là một "mẹo tiết kiệm thời gian" với mức rủi ro kèm theo — `preconnect` rẻ nên dùng thoải mái, `preload` mạnh nhưng "mua nhầm" là phí; đọc cột Dùng khi để biết gợi ý nào hợp với tài nguyên nào.

---

## 10.4. Lazy loading hình ảnh và iframe

Mục này nói về "tải theo nhu cầu": lazy loading — chỉ tải ảnh/iframe khi người dùng cuộn tới gần, kèm một ngoại lệ quan trọng là ảnh LCP.

> 📄 **Code ví dụ:** [`examples/03-10-4-lazy-loading-hinh-anh-va-iframe.html`](examples/03-10-4-lazy-loading-hinh-anh-va-iframe.html)

### Hỗ trợ trình duyệt `loading="lazy"`

- **Chrome 76+** (7/2019)
- **Firefox 121+** (12/2023; bản trước chỉ áp dụng khoảng cách mặc định)
- **Safari 15.4+** (3/2022)

### ⚠️ Không lazy-load ảnh LCP!

Ảnh đầu màn hình (LCP) không được lazy-load — giống như nhân viên tiếp tân không được để khách chờ ở cửa: đây chính là "gương mặt" đầu tiên trang hiện lên, chậm nó là chậm điểm LCP.

> 📄 **Code ví dụ:** [`examples/04-khong-lazy-load-anh-lcp.html`](examples/04-khong-lazy-load-anh-lcp.html)

`fetchpriority="high"` (Chrome 101+, Safari 17+, Firefox 132+) nâng ưu tiên tải ảnh hero.

> **Tóm gọn 1 câu:** Lazy cho những gì dưới màn hình, ưu tiên cao cho tấm ảnh hero — "ai ở xa xếp hàng, người đứng cửa ưu tiên vào trước".

---

## 10.5. Tối ưu hình ảnh

Mục này là "cẩm nang giảm cân cho ảnh": chọn định dạng, đúng kích thước, responsive và luôn khai báo `width`/`height`.

### Checklist tối ưu ảnh

1. **Định dạng hiện đại**: AVIF (nén tốt nhất) → WebP → JPEG/PNG
2. **Kích thước đúng**: không tải ảnh 3000px để hiển thị 400px
3. **Responsive**: `srcset` + `sizes`
4. **`width`/`height`** luôn đặt → tránh CLS
5. **Lazy** cho ảnh dưới màn hình đầu, `fetchpriority="high"` cho LCP

### Ví dụ hoàn chỉnh

> 📄 **Code ví dụ:** [`examples/05-vi-du-hoan-chinh.html`](examples/05-vi-du-hoan-chinh.html)

### Ảnh inline: SVG

> 📄 **Code ví dụ:** [`examples/06-anh-inline-svg.html`](examples/06-anh-inline-svg.html)

---

## 10.6. Web fonts và hiệu năng

Mục này nói về "mâu thuẫn chữ đẹp – trang nhanh": web font làm trang đẹp nhưng chờ nó là chữ bị ẩn/đổi — `font-display` giải quyết chính bài toán đó.

> 📄 **Code ví dụ:** [`examples/07-10-6-web-fonts-va-hieu-nang.html`](examples/07-10-6-web-fonts-va-hieu-nang.html)

### `font-display` các giá trị

| Giá trị | Hành vi |
|---------|---------|
| `swap` | Hiện fallback ngay, swap khi font sẵn sàng (phổ biến nhất) |
| `block` | Ẩn text ~3s chờ font (FOIT) |
| `fallback` | Hiện fallback ngắn, sau ~100ms đổi sang fallback vĩnh viễn nếu chậm |
| `optional` | Chỉ dùng font nếu tải xong rất nhanh |

> **Cách đọc bảng này:** mỗi dòng là một "chiến lược chờ font" — từ khoan nhòng (`block`: đứng đợi) đến thực dụng (`optional`: có thì dùng, không có thì thôi); `swap` là lựa chọn cân bằng được dùng phổ biến nhất.

---

## 10.7. CSS blocking và Critical CSS

Mục này nói về "chi phí bắt buộc của CSS": CSS chặn render đầu trang — critical CSS là cách gói phần CSS "gấp gáp" vào ngay lúc đầu.

> 📄 **Code ví dụ:** [`examples/08-10-7-css-blocking-va-critical-css.html`](examples/08-10-7-css-blocking-va-critical-css.html)

---

## 10.8. Tối ưu DOM — quy tắc số phần tử

Mục này nói về "giới hạn sức chứa": DOM quá to và lồng quá sâu làm trình duyệt đuối — kèm công cụ `content-visibility` để nhẹ gánh.

- **DOM quá lớn** (~> 800 nodes, > 1400 depth) làm chậm style/layout — như một cây gia phả ngàn nhánh: càng nhiều tầng càng khó tra
- Tránh lồng div quá sâu không cần thiết
- Dùng `content-visibility: auto` cho phần tử ngoài màn hình (Baseline 2023–2025):

> 📄 **Code ví dụ:** [`examples/09-10-8-toi-uu-dom-quy-tac-so.html`](examples/09-10-8-toi-uu-dom-quy-tac-so.html)

> **Tóm gọn 1 câu:** DOM gọn như cây gia phả gọn — ít nhánh, ít tầng, và phần "ngoài tầm nhìn" thì để trình duyệt tạm quên (`content-visibility: auto`).

---

## 10.9. Chiến lược nạp trang tổng thể

Mục này ghép mọi kỹ thuật trên thành "kịch bản dàn dựng" một lần tải trang hoàn chỉnh.

> 📄 **Code ví dụ:** [`examples/10-10-9-chien-luoc-nap-trang-tong-the.html`](examples/10-10-9-chien-luoc-nap-trang-tong-the.html)

---

## 10.10. Đo lường hiệu năng

Mục này là "phòng xét nghiệm": công cụ nào đo chỉ số nào — từ DevTools, PageSpeed đến Search Console.

### Công cụ

- **Chrome DevTools** → tab **Performance**, **Lighthouse**
- **PageSpeed Insights** — https://pagespeed.web.dev
- **WebPageTest** — https://www.webpagetest.org
- **Search Console** — Core Web Vitals report

### API JavaScript (PageSpeed)

> 📄 **Code ví dụ:** [`examples/11-api-javascript-pagespeed.js`](examples/11-api-javascript-pagespeed.js)

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

> **Tóm gọn 1 câu:** Hiệu năng là "quản lý hàng đợi": script defer, ảnh lazy trừ hero, font swap, DOM gọn — rồi đo bằng Core Web Vitals để biết điểm từng môn.

---

**Phần tiếp theo:** [Tính năng hiện đại](../11_modern-features/README.md) — Dialog, Popover API, Template, Custom Elements, Invoker Commands.
