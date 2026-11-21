# PHẦN 11: TÍNH NĂNG HIỆN ĐẠI (2024–2026)

HTML Living Standard không ngừng bổ sung tính năng mới. Phần này tổng hợp các tính năng **mới nhất và đáng học nhất** theo chuẩn WHATWG, được đánh dấu trạng thái **Baseline** (web.dev).

> **Baseline là gì?** Trạng thái cho biết một tính năng web hoạt động ổn định trên cả 3 engine chính (Chromium, Gecko/Firefox, WebKit/Safari). *Newly available* = mới có trên tất cả; *Widely available* = đã ổn định đủ lâu (30 tháng).

---

## 11.1. `<dialog>` — Hộp thoại native

Mục này mở màn bằng "món quà" hay nhất của HTML hiện đại: `<dialog>` — modal có sẵn mọi thứ mà trước đây phải mướn cả một thư viện.

Phần tử `<dialog>` tạo modal/hộp thoại **không cần thư viện**, tự quản lý focus, top layer, và phím Esc. Hãy hình dung: trước đây bạn phải tự dựng sân khấu, làm đèn chiếu và gác cửa cho modal — giờ HTML cho sẵn cả gói.

> 📄 **Code ví dụ:** [`examples/01-11-1-dialog-hop-thoai-native.html`](examples/01-11-1-dialog-hop-thoai-native.html)

> 📄 **Code ví dụ:** [`examples/02-11-1-dialog-hop-thoai-native.css`](examples/02-11-1-dialog-hop-thoai-native.css)

> 📄 **Code ví dụ:** [`examples/03-11-1-dialog-hop-thoai-native.js`](examples/03-11-1-dialog-hop-thoai-native.js)

### Hỗ trợ trình duyệt

| Tính năng | Chrome | Firefox | Safari |
|-----------|--------|---------|--------|
| `<dialog>` cơ bản | 37+ | 98+ | 15.4+ |
| `showModal()`, top layer | 37+ | 98+ | 15.4+ |
| `requestClose()` | 137+ (Baseline 2025) | 136+ | 18.4+ |
| `closedby` (light dismiss) | 134+ | — | 26+ |

> **Cách đọc bảng này:** mỗi dòng là một năng lực của `<dialog>`, ba cột sau cho biết từng trình duyệt "bật đèn xanh" từ phiên bản nào — dòng cuối là tính năng mới nhất, còn thiếu Firefox nên dùng có dự phòng.

### Thuộc tính `closedby` — Light dismiss cho dialog (mới 2025)

> 📄 **Code ví dụ:** [`examples/04-thuoc-tinh-closedby-light-dismiss-cho-dialog-moi.html`](examples/04-thuoc-tinh-closedby-light-dismiss-cho-dialog-moi.html)

> **Tóm gọn 1 câu:** `<dialog>` là modal "ăn liền" của HTML — mở hộp là có focus trap, top layer và Esc, không cần mua thêm thư viện nào.

---

## 11.2. Popover API — Baseline 2025

Mục này nói về "chị em" của dialog: Popover API — tooltip, menu, dropdown thuần HTML với top layer và light dismiss có sẵn.

**Popover API** tạo popover (tooltip, menu, dropdown) **thuần HTML**, có top layer, light dismiss, focus management tự động.

> **Hỗ trợ:** Chrome 114+ (8/2023), Edge 116+, **Firefox 125+** (4/2024), **Safari 17+** (9/2023). Baseline Newly available kể từ **27/1/2025** (khi Safari iOS 18.3 sửa light dismiss).

### Popover cơ bản

> 📄 **Code ví dụ:** [`examples/05-popover-co-ban.html`](examples/05-popover-co-ban.html)

### Hai chế độ: `auto` và `manual`

> 📄 **Code ví dụ:** [`examples/06-hai-che-o-auto-va-manual.html`](examples/06-hai-che-o-auto-va-manual.html)

### JavaScript API

> 📄 **Code ví dụ:** [`examples/07-javascript-api.js`](examples/07-javascript-api.js)

### CSS đi kèm

> 📄 **Code ví dụ:** [`examples/08-css-i-kem.css`](examples/08-css-i-kem.css)

### Polyfill cho trình duyệt cũ

> 📄 **Code ví dụ:** [`examples/09-polyfill-cho-trinh-duyet-cu.html`](examples/09-polyfill-cho-trinh-duyet-cu.html)

---

## 11.3. Invoker Commands API — nút điều khiển không cần JS (Baseline 2025)

Mục này nói về "remote không cần pin": Invoker Commands — một nút bấm điều khiển dialog/popover thuần HTML, không viết một dòng JS.

> **Hỗ trợ:** Chrome 135+ (4/2025), Edge 135+, **Firefox 144+** (10/2025), Safari 26.2 (12/2025). Baseline Newly available kể từ 12/12/2025.

> 📄 **Code ví dụ:** [`examples/10-11-3-invoker-commands-api-nut-ieu-khien.html`](examples/10-11-3-invoker-commands-api-nut-ieu-khien.html)

> **Tóm gọn 1 câu:** Invoker Commands là "điều khiển từ xa không pin": `commandfor` + `command` nối nút với dialog/popover mà không cần một dòng JS.

---

## 11.4. `<template>` — Nội dung không render

Mục này nói về "khuôn bánh chưa đổ bột": `<template>` — chứa sẵn HTML làm khuôn, nhân bản bằng JS lúc cần mà không hiển thị lúc tải trang.

`<template>` chứa HTML **không được render** khi tải trang, dùng làm khuôn mẫu nhân bản bằng JS:

> 📄 **Code ví dụ:** [`examples/11-11-4-template-noi-dung-khong-render.html`](examples/11-11-4-template-noi-dung-khong-render.html)

**Ưu điểm:** Nội dung trong `<template>` được parse (kiểm tra lỗi sớm) nhưng inert — không tải ảnh, không chạy script, không nằm trong DOM chính.

---

## 11.5. Custom Elements — tự tạo thẻ HTML

Mục này nói về "tự đúc thẻ riêng": Web Components — Custom Elements, Shadow DOM, `<template>` — cho phép bạn chế thẻ của riêng mình.

**Web Components** gồm 3 công nghệ: Custom Elements, Shadow DOM, `<template>`. Custom Elements cho phép tạo thẻ riêng:

> 📄 **Code ví dụ:** [`examples/12-11-5-custom-elements-tu-tao-the-html.js`](examples/12-11-5-custom-elements-tu-tao-the-html.js)

> 📄 **Code ví dụ:** [`examples/13-11-5-custom-elements-tu-tao-the-html.html`](examples/13-11-5-custom-elements-tu-tao-the-html.html)

### Element với Shadow DOM (encapsulated styles)

> 📄 **Code ví dụ:** [`examples/14-element-voi-shadow-dom-encapsulated-styles.js`](examples/14-element-voi-shadow-dom-encapsulated-styles.js)

> 📄 **Code ví dụ:** [`examples/15-element-voi-shadow-dom-encapsulated-styles.html`](examples/15-element-voi-shadow-dom-encapsulated-styles.html)

### Declarative Shadow DOM (SSR cho Web Components)

> 📄 **Code ví dụ:** [`examples/16-declarative-shadow-dom-ssr-cho-web-components.html`](examples/16-declarative-shadow-dom-ssr-cho-web-components.html)

> Declarative Shadow DOM được hỗ trợ: Chrome 111+, Safari 16.4+, Firefox 123+ — cho phép Web Components render phía server không cần JS.

---

## 11.6. Customizable `<select>` (2025 — rất mới)

Mục này là "tin mới nhất trên kệ": Customizable `<select>` — dropdown cuối cùng chịu khuôn CSS, nhưng còn non nên phải có phương án dự phòng.

Cuối cùng, `<select>` có thể style hoàn toàn bằng CSS:

> 📄 **Code ví dụ:** [`examples/17-11-6-customizable-select-2025-rat-moi.html`](examples/17-11-6-customizable-select-2025-rat-moi.html)

> 📄 **Code ví dụ:** [`examples/18-11-6-customizable-select-2025-rat-moi.css`](examples/18-11-6-customizable-select-2025-rat-moi.css)

> **Hỗ trợ:** Chrome 134/135+ (3–4/2025), Edge 135+, Safari 27+. **Firefox chưa hỗ trợ** — theo dõi tại [caniuse/selectedcontent](https://caniuse.com/mdn-html_elements_selectedcontent). Chỉ dùng khi có fallback hợp lý.

---

## 11.7. Các tính năng nhỏ nhưng hữu ích (2024–2026)

Mục này là "túi đồ lặt vặt mà đáng giá": những tính năng nhỏ hơn của giai đoạn 2024–2026, mỗi món giải quyết một việc cụ thể.

### `popover="hint"` và Interest Invokers (đang phát triển)

> 📄 **Code ví dụ:** [`examples/19-popover-hint-va-interest-invokers-ang-phat-trien.html`](examples/19-popover-hint-va-interest-invokers-ang-phat-trien.html)

> `popover="hint"` và `interestfor`: Chrome 133+ (thử nghiệm), chưa phổ biến.

### `<input>` mới và thuộc tính mới

> 📄 **Code ví dụ:** [`examples/20-input-moi-va-thuoc-tinh-moi.html`](examples/20-input-moi-va-thuoc-tinh-moi.html)

### `<search>` element (2023, dùng rộng rãi 2025+)

> 📄 **Code ví dụ:** [`examples/21-search-element-2023-dung-rong-rai-2025.html`](examples/21-search-element-2023-dung-rong-rai-2025.html)

### `contenteditable="plaintext-only"` — Baseline 2025

> 📄 **Code ví dụ:** [`examples/22-contenteditable-plaintext-only-baseline-2025.html`](examples/22-contenteditable-plaintext-only-baseline-2025.html)

### `<details name="...">` — Accordion native

> 📄 **Code ví dụ:** [`examples/23-details-name-accordion-native.html`](examples/23-details-name-accordion-native.html)

---

## 11.8. Bảng tổng hợp hỗ trợ (tháng 10/2026)

| Tính năng | Chrome | Firefox | Safari | Baseline |
|-----------|--------|---------|--------|----------|
| `<dialog>` | 37 | 98 | 15.4 | 2022 |
| Popover API | 114 | 125 | 17 | **2025** |
| Invoker Commands | 135 | 144 | 26.2 | **2025** |
| `dialog.requestClose()` | 137 | 136 | 18.4 | **2025** |
| `contenteditable="plaintext-only"` | 111 | 124 | 16.4 | **2025** |
| Customizable `<select>` / `selectedcontent` | 135 | ❌ | 27 | Newly (một phần) |
| Declarative Shadow DOM | 111 | 123 | 16.4 | 2024 |
| `dialog closedby` | 134 | ❌ | 26 | Newly |
| Interest Invokers / `popover="hint"` | 133+ | ❌ | ❌ | Thử nghiệm |

> **Cách đọc bảng này:** đọc theo từng dòng, cột "Baseline" là điểm quan trọng nhất — **2025** nghĩa là đã ổn định trên cả 3 engine, "Newly" là mới có cần fallback, "Thử nghiệm" là chưa dùng cho production; ba cột phiên bản chỉ để tra khi cần hỗ trợ trình duyệt cũ.

> **Tóm gọn 1 câu:** Bảng trên là "bản đồ điểm sáng" của HTML hiện đại — ưu tiên gì đã Baseline 2025, dự phòng gì còn Newly, tạm bỏ qua gì đang thử nghiệm.

---

## 11.9. Tài liệu tham khảo

- [MDN: Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [MDN: Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- [MDN: `<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [web.dev — Popover is Baseline](https://web.dev/blog/popover-baseline)
- [web.dev — Baseline 2025](https://web.dev/baseline/2025)
- [Chrome CSS Wrapped 2025](https://chrome.dev/css-wrapped-2025/)

---

## Tóm tắt

- ✅ `<dialog>` + `showModal()` thay thế thư viện modal
- ✅ **Popover API** (Baseline 2025): `popover`, `popovertarget`, top layer + light dismiss
- ✅ **Invoker Commands** (Baseline 2025): `commandfor`/`command` — điều khiển không cần JS
- ✅ `<template>` + Custom Elements + Declarative Shadow DOM = Web Components
- ✅ Customizable `<select>` + `selectedcontent` — mới nhất, chưa full support, cần fallback

> **Tóm gọn 1 câu:** HTML hiện đại thay cả một thùng thư viện JS: `<dialog>` cho modal, Popover cho menu nổi, Invoker Commands cho nút điều khiển — chỉ cần nhớ tra Baseline trước khi dùng.

---

**Phần tiếp theo:** [Best Practices](../12_best-practices/README.md) — Style guide, lỗi thường gặp, và validator.
