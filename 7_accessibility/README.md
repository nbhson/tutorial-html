# PHẦN 7: KHẢ NĂNG TIẾP CẬN (ACCESSIBILITY / A11Y)

## 7.1. Accessibility là gì và tại sao quan trọng?

**Accessibility (khả năng tiếp cận, viết tắt a11y)** là việc thiết kế web để **mọi người dùng** — kể cả người khuyết tật — đều sử dụng được.

### Người thụ hưởng trực tiếp

- Người khiếm thị dùng **screen reader** (NVDA, JAWS, VoiceOver)
- Người thị lực yếu cần phóng to, độ tương phản cao
- Người khiếm thính cần phụ đề video
- Người vận động hạn chế chỉ dùng **bàn phím** hoặc switch device
- Người rối loạn nhận thức cần ngôn ngữ đơn giản, cấu trúc nhất quán

### Lợi ích gián tiếp

- **SEO tốt hơn**: Semantic HTML + a11y = cấu trúc rõ ràng mà Google yêu thích
- **Tuân thủ pháp lý**: Nhiều quốc gia yêu cầu WCAG (ADA, EN 301 549, Luật Người khuyết tật Việt Nam 2025 quy định tiếp cận số)
- **Chất lượng code tốt hơn**: a11y buộc code sạch, ngữ nghĩa

---

## 7.2. WCAG 2.2 — Tiêu chuẩn chính thức

**WCAG 2.2** trở thành **W3C Recommendation ngày 12/12/2024** (bản cập nhật). Đây là chuẩn nên nhắm tới trong 2025–2026.

### 4 nguyên tắc (POUR)

| Nguyên tắc | Ý nghĩa |
|-----------|---------|
| **P**erceivable | Nội dung phải cảm nhận được (văn bản thay thế, phụ đề) |
| **O**perable | Vận hành được (bàn phím, đủ thời gian) |
| **U**nderstandable | Dễ hiểu (ngôn ngữ rõ, nhất quán) |
| **R**obust | Mạnh mẽ (tương thích assistive technology) |

### 3 mức độ tuân thủ

- **Level A**: tối thiểu bắt buộc
- **Level AA**: chuẩn mục tiêu của hầu hết tổ chức, chính phủ
- **Level AAA**: cao nhất, không nên đặt làm yêu cầu toàn trang

### 9 tiêu chí MỚI trong WCAG 2.2 (liên quan HTML nhiều nhất)

| Tiêu chí | Mức | Liên quan HTML |
|----------|-----|----------------|
| 2.4.11 Focus Not Obscured (Minimum) | AA | Sticky header không che focus |
| 2.5.7 Dragging Movements | AA | Cung cấp lựa chọn thay thế kéo-thả |
| 2.5.8 Target Size (Minimum) | AA | Vùng bấm ≥ 24×24 px |
| 3.2.6 Consistent Help | A | Trợ giúp đặt ở cùng vị trí các trang |
| 3.3.7 Redundant Entry | A | Không bắt nhập lại thông tin đã có |
| 3.3.8 Accessible Authentication (Minimum) | AA | Đăng nhập không yêu cầu nhận diện (CAPTCHA) |
| 2.4.12 Focus Not Obscured (Enhanced) | AAA | |
| 2.4.13 Focus Appearance | AAA | |
| 3.3.9 Accessible Authentication (Enhanced) | AAA | |

> Lưu ý: Tiêu chí **4.1.1 Parsing đã bị loại (obsolete)** trong WCAG 2.2 — nhưng HTML hợp lệ vẫn là nền tảng a11y tốt.

---

## 7.3. HTML Semantic là a11y tốt nhất

**Quy tắc số 1 của ARIA: đừng dùng ARIA nếu HTML ngữ nghĩa đã đủ** ("No ARIA is better than bad ARIA" — First Rule of ARIA).

```html
<!-- ❌ Không semantic, không accessible -->
<div class="btn" onclick="save()">Lưu</div>

<!-- ✅ Semantic: có vai trò button, focus được, Enter/Space hoạt động -->
<button type="button" onclick="save()">Lưu</button>
```

### Bảng so sánh: HTML native vs tự làm bằng ARIA

| Native HTML | Thay thế ARIA (tránh) |
|-------------|----------------------|
| `<button>` | `<div role="button" tabindex="0">` |
| `<a href="...">` | `<span role="link">` |
| `<label>` + input | `aria-label` tự chế |
| `<dialog>` | `<div role="dialog">` tự quản lý focus |
| `<input type="checkbox">` | `<span role="checkbox" aria-checked>` |
| `<table>` với `<th scope>` | Grid ARIA tự dựng |
| `<details>`/`<summary>` | `<div role="button" aria-expanded>` |

---

## 7.4. ARIA — Accessible Rich Internet Applications

ARIA là bộ **thuộc tính** bổ sung ngữ nghĩa khi HTML thuần không đủ.

### 7.4.1. `role` — Vai trò

```html
<!-- Chỉ dùng khi không có thẻ native tương ứng -->
<div role="tablist">
    <button role="tab" aria-selected="true" id="tab-1" aria-controls="panel-1">Tổng quan</button>
    <button role="tab" aria-selected="false" id="tab-2" aria-controls="panel-2">Chi tiết</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">Nội dung 1</div>
<div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden>Nội dung 2</div>
```

### 7.4.2. `aria-label`, `aria-labelledby`, `aria-describedby`

```html
<!-- aria-label: nhãn trực tiếp -->
<button aria-label="Đóng cửa sổ">×</button>

<!-- aria-labelledby: tham chiếu phần tử khác làm nhãn -->
<section aria-labelledby="tieu-de-phu">
    <h2 id="tieu-de-phu">Đánh giá sản phẩm</h2>
</section>

<!-- aria-describedby: mô tả bổ sung -->
<input type="password" id="mk" aria-describedby="goi-y-mk">
<p id="goi-y-mk">Mật khẩu tối thiểu 8 ký tự, có chữ hoa và số.</p>
```

### 7.4.3. Trạng thái ARIA quan trọng

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `aria-expanded="true/false"` | Mục lục/dropdown đang mở hay đóng |
| `aria-selected` | Lựa chọn đang chọn (tab, option) |
| `aria-checked` | Trạng thái checkbox/switch |
| `aria-current="page"` | Trang hiện tại trong menu |
| `aria-disabled` | Vô hiệu hóa (giữ focus được, khác `disabled`) |
| `aria-hidden="true"` | Ẩn khỏi screen reader |
| `aria-live="polite/assertive"` | Vùng thông báo thay đổi động |

### 7.4.4. `aria-live` — Thông báo nội dung động

```html
<!-- Thông báo kết quả tìm kiếm cập nhật động -->
<p role="status" aria-live="polite">Tìm thấy 12 kết quả.</p>

<!-- Cảnh báo khẩn (dừng đọc hiện tại) -->
<p role="alert" aria-live="assertive">Kết nối đã mất!</p>
```

---

## 7.5. Điều hướng bàn phím (Keyboard Navigation)

### Yêu cầu cốt lõi (WCAG 2.1.1 Keyboard — Level A)

**Mọi chức năng đều phải dùng được chỉ với bàn phím.**

### Các phím chuẩn

| Phím | Hành vi mong đợi |
|------|------------------|
| `Tab` | Di chuyển đến phần tử tương tác kế tiếp |
| `Shift+Tab` | Di chuyển ngược lại |
| `Enter` | Kích hoạt link, button, submit form |
| `Space` | Kích hoạt button, toggle checkbox, cuộn trang |
| `Esc` | Đóng dialog, popover, menu |
| `←/→`, `↑/↓` | Di chuyển trong nhóm (tabs, radio, menu) |

### `tabindex` — dùng đúng cách

```html
<!-- ✅ tabindex="0": đưa phần tử vào thứ tự tab tự nhiên -->
<div tabindex="0" role="slider" aria-valuenow="5">...</div>

<!-- ✅ tabindex="-1": chỉ focus được bằng JS (focus management) -->
<h1 tabindex="-1">Tiêu đề được focus khi SPA đổi trang</h1>

<!-- ❌ tabindex="1"+: phá vỡ thứ tự tab tự nhiên — KHÔNG dùng -->
<button tabindex="2">Tránh!</button>
```

### Skip link — nhảy qua menu

```html
<body>
    <a class="skip-link" href="#noi-dung-chinh">Bỏ qua điều hướng, đến nội dung chính</a>
    <header><!-- menu dài --></header>
    <main id="noi-dung-chinh">...</main>
</body>
<style>
  .skip-link {
    position: absolute;
    transform: translateY(-100%);
  }
  .skip-link:focus {
    transform: none;
  }
</style>
```

---

## 7.6. Hình ảnh, liên kết và văn bản thay thế

```html
<!-- alt mô tả nội dung -->
<img src="chart.png" alt="Biểu đồ doanh thu tăng 25% trong quý 3/2026">

<!-- ảnh trang trí: alt rỗng -->
<img src="hoa-trang-tri.png" alt="">

<!-- SVG trang trí: aria-hidden + focusable="false" -->
<svg aria-hidden="true" focusable="false"><!-- icon --></svg>

<!-- SVG có ý nghĩa: dùng role="img" + title -->
<svg role="img" aria-labelledby="svg-title">
    <title id="svg-title">Logo công ty ABC</title>
</svg>
```

### Văn bản liên kết có ý nghĩa

```html
<!-- ❌ Không rõ khi đọc ngoài ngữ cảnh (screen reader liệt kê links) -->
<a href="/bai-viet">Đọc thêm</a>

<!-- ✅ Rõ ràng -->
<a href="/bai-viet">Đọc thêm về Semantic HTML</a>
```

---

## 7.7. Form và Accessibility

```html
<form action="/dang-ky" method="post">
    <fieldset>
        <legend>Thông tin cá nhân</legend>

        <label for="ho-ten">Họ và tên <span aria-hidden="true">*</span></label>
        <input type="text" id="ho-ten" name="ho-ten" required
               autocomplete="name" aria-required="true">

        <label for="email">Email</label>
        <input type="email" id="email" name="email" required
               autocomplete="email" aria-describedby="email-goi-y email-loi">
        <p id="email-goi-y">Ví dụ: ten@gmail.com</p>
        <p id="email-loi" role="alert"></p>
    </fieldset>

    <button type="submit">Đăng ký</button>
</form>
```

**Điểm chính:**
- `label` liên kết bằng `for`/`id` (không phụ thuộc `aria-label`)
- `aria-describedby` cho hướng dẫn + vùng lỗi
- `role="alert"` cho thông báo lỗi động
- Dấu `*` cho trường bắt buộc nên `aria-hidden` nếu đã có text giải thích

---

## 7.8. Dialog, Popover và quản lý focus

### Dùng `<dialog>` native (từ 2022, hỗ trợ tốt mọi trình duyệt)

```html
<button commandfor="ho-tro" command="show-modal">Mở hỗ trợ</button>

<dialog id="ho-tro">
    <h2>Hỗ trợ trực tuyến</h2>
    <p>Nội dung hộp thoại.</p>
    <button commandfor="ho-tro" command="close">Đóng</button>
</dialog>
```

`<dialog>` native tự động: chặn focus vào nền (focus trap), đóng bằng `Esc`, đưa vào **top layer**. Xem chi tiết tại [Phần 11](../11_modern-features/README.md).

### Modal tự dựng (khi không dùng `<dialog>`) cần:

1. Focus đưa vào phần tử đầu của modal khi mở
2. Focus trap: Tab không thoát ra ngoài
3. `Esc` đóng modal
4. Trả focus về nút đã mở modal
5. `role="dialog"` + `aria-modal="true"` + `aria-labelledby`

---

## 7.9. Kiểm tra accessibility

### Công cụ tự động

- **Chrome DevTools** → tab Lighthouse → Accessibility audit
- **axe DevTools** extension (Deque)
- **WAVE** (WebAIM)
- **NVDA** (Windows, miễn phí) / **VoiceOver** (macOS: `Cmd+F5`)

### Checklist thủ công

- [ ] Tab qua toàn trang: mọi thứ tương tác được và focus luôn nhìn thấy
- [ ] Không có focus bị header/cookie-bar che (WCAG 2.4.11)
- [ ] Screen reader đọc đúng thứ tự và ý nghĩa
- [ ] Độ tương phản văn bản ≥ 4.5:1 (AA)
- [ ] Vùng chạm ≥ 24×24 px (WCAG 2.5.8)
- [ ] Trang hoạt động khi zoom 200%
- [ ] Video có phụ đề, hình có `alt`

### Lighthouse từ dòng lệnh

```bash
npx lighthouse https://example.com --only-categories=accessibility --output=html
```

---

## 7.10. Tài liệu tham khảo

- [WCAG 2.2 — W3C Recommendation 12/12/2024](https://www.w3.org/TR/WCAG22/)
- [What's New in WCAG 2.2 — W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [MDN: Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [web.dev — Learn Accessibility](https://web.dev/learn/accessibility)

---

## Tóm tắt

- ✅ HTML semantic trước, ARIA sau — "No ARIA is better than bad ARIA"
- ✅ WCAG 2.2 là chuẩn mục tiêu 2025–2026, nhắm Level AA
- ✅ Mọi chức năng dùng được bằng bàn phím; không che focus
- ✅ `alt`, `label`, `aria-live`, skip link là 4 thứ dễ làm, giá trị cao
- ✅ Ưu tiên `<dialog>`/Popover native thay vì modal tự dựng

---

**Phần tiếp theo:** [Multimedia](../8_multimedia/README.md) — video, audio, iframe, picture, source, track.
