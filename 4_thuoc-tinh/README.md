# PHẦN 4: THUỘC TÍNH HTML

## 4.1. Giới thiệu về thuộc tính (Attributes)

Thuộc tính HTML cung cấp **thông tin bổ sung** cho phần tử, được đặt trong thẻ mở dưới dạng `tên="giá trị"`.

```html
<a href="https://example.com" target="_blank" title="Mở trang mới">Liên kết</a>
<img src="photo.jpg" alt="Mô tả ảnh" width="400" height="300">
```

### Quy tắc quan trọng

1. **Thuộc tính luôn nằm trong thẻ mở**, không phải thẻ đóng
2. **Luôn dùng dấu ngoặc kép** — đơn (`'`) hoặc kép (`"`)
3. **Một số thuộc tính không có giá trị** — gọi là **boolean attributes**: `disabled`, `checked`, `readonly`, `required`
4. **Từ HTML5**, thứ tự thuộc tính không quan trọng, nhưng giữ thứ tự nhất quán giúp maintain

```html
<!-- Boolean attribute: viết tên thuộc tính = giá trị hợp lệ -->
<button disabled>Không bấm được</button>
<button disabled="disabled">Cách cũ</button>

<!-- Checkbox đã chọn -->
<input type="checkbox" checked>
<input type="checkbox" checked="checked">
```

---

## 4.2. Thuộc tính `id`

`id` là **định danh duy nhất** của một phần tử trong trang.

```html
<section id="phan-gioi-thieu">...</section>
<a href="#phan-gioi-thieu">Xem phần giới thiệu</a>
```

### Quy tắc `id`

- **Duy nhất**: Mỗi `id` chỉ xuất hiện **một lần** trong trang
- **Bắt đầu bằng chữ cái** (a–z, A–Z), có thể chứa số, dấu gạch ngang `-`, dấu gạch dưới `_`
- **Phân biệt hoa/thường**
- **Không dùng ký tự đặc biệt** ngoài `-` và `_` (tránh lỗi với CSS/JS selector)

```html
<!-- ✅ Tên id hợp lệ -->
<div id="header-main"></div>
<div id="section_about"></div>
<div id="product-123"></div>

<!-- ❌ Tên id không hợp lệ -->
<div id="1header"></div>        <!-- bắt đầu bằng số -->
<div id="header main"></div>   <!-- có khoảng trắng -->
```

> **Mẹo đặt tên:** BEM-ish (`block-element__modifier`) hoặc kebab-case (`section-products`). Chọn một quy ước và dùng nhất quán.

---

## 4.3. Thuộc tính `class`

`class` gán **nhiều lớp** (phân cách bằng khoảng trắng) cho phần tử.

```html
<!-- Nhiều class: phân cách bằng khoảng trắng -->
<button class="btn btn-primary btn-large">Đăng nhập</button>

<!-- Class dùng trong CSS -->
<div class="card product-card featured">...</div>

<!-- Class dùng trong JavaScript -->
<div class="card" data-product-id="1024">...</div>
```

### Sự khác biệt `id` vs `class`

| Tiêu chí | `id` | `class` |
|---------|------|---------|
| Tính duy nhất | Một phần tử duy nhất | Nhiều phần tử cùng class |
| CSS `#id {}` | Độ đặc hiệu cao (ID > Class) | `.class {}` |
| JS `getElementById()` | ✅ Nhanh nhất | ❌ |
| JS `querySelectorAll('.class')` | ❌ | ✅ |
| Anchor link `#section` | ✅ | ❌ (dùng `id`) |

---

## 4.4. Thuộc tính `data-*` — Lưu trữ dữ liệu tùy chỉnh

`data-*` cho phép lưu trữ dữ liệu tùy chỉnh trong phần tử HTML để JavaScript đọc.

```html
<!-- Lưu trữ thông tin sản phẩm -->
<article class="product" data-product-id="1024" data-category="laptop" data-price="15.990.000">
    <h3>MacBook Air M3</h3>
    <p>15.990.000₫</p>
    <button>Thêm vào giỏ</button>
</article>
```

### Đọc bằng JavaScript

```javascript
// DOM string map: tự động parse
const product = document.querySelector('.product');
console.log(product.dataset.productId);     // "1024" (string)
console.log(product.dataset.category);    // "laptop"
console.log(product.dataset.price);        // "15.990.000"

// Gán giá trị động
product.dataset.inStock = "true";
// → data-in-stock="true"

// Xóa thuộc tính
delete product.dataset.price;
```

### Quy tắc `data-*`

- Tên sau `data-` phải: bắt đầu bằng chữ cái, không chứa chữ hoa, có thể có `-`, `_`, `:`, `.`
- `data-product-id` trong HTML → `dataset.productId` trong JS (chuyển `-id` thành camelCase)
- `data-user-name` → `dataset.userName`

### Khi nào DÙNG và KHÔNG dùng `data-*`

| Nên dùng | Không nên dùng |
|----------|----------------|
| Dữ liệu UI state (ẩn/hiện, đã chọn) | Thông tin nhạy cảm (mật khẩu, token) |
| ID/Reference từ database | Nội dung hiển thị (dùng `<span>` hoặc text) |
| Config cho component JS | SEO content (dùng thuộc tính ngữ nghĩa) |

---

## 4.5. Thuộc tính `title`

Cung cấp **chú thích bổ sung** — trình duyệt hiển thị tooltip khi hover.

```html
<a href="/huong-dan" title="Xem hướng dẫn sử dụng đầy đủ">Hướng dẫn</a>
<img src="icon.png" alt="Biểu tượng menu" title="Menu">
```

> **Hạn chế:** Tooltip `title` không accessible trên thiết bị cảm ứng. Dùng cho thông tin bổ sung không thiết yếu. Với thông tin quan trọng, dùng `aria-describedby` thay thế.

---

## 4.6. Thuộc tính `style` — Inline CSS

Dùng để viết CSS trực tiếp trên phần tử. **Không khuyến khích** cho code production.

```html
<!-- Inline style: tránh dùng trong production -->
<p style="color: red; font-size: 16px;">Nội dung cảnh báo</p>

<!-- Tốt hơn: dùng class -->
<p class="alert-text">Nội dung cảnh báo</p>
<style>
  .alert-text { color: red; font-size: 16px; }
</style>
```

### Khi nào inline style được chấp nhận?

- Email HTML (không hỗ trợ external CSS)
- Email marketing (Litmus/Email on Acid vẫn yêu cầu inline)
- Debug nhanh
- CSS-in-JS library tự động generate

> **Mẹo:** Nếu dùng nhiều `style=""` trên nhiều phần tử → refactor thành class CSS.

---

## 4.7. Thuộc tính ngữ nghĩa toàn cục (Global Attributes)

Mọi phần tử HTML đều hỗ trợ các thuộc tính toàn cục sau:

### 4.7.1. `lang` — Ngôn ngữ

```html
<html lang="vi">
<p lang="en">This is English text.</p>
```

### 4.7.2. `dir` — Hướng văn bản

```html
<p dir="ltr">Trái sang phải (tiếng Việt)</p>
<p dir="rtl">Phải sang trái (tiếng Ả Rập)</p>
```

### 4.7.3. `hidden` — Ẩn phần tử

```html
<div hidden>Không hiển thị, không có trong accessibility tree</div>

<!-- Tương đương CSS -->
<style>
  .hidden-manual { display: none; }
</style>
```

> **Khác với `display: none`:** `hidden` trên `<dialog>` có thể dùng CSS `:not([hidden])` để style, nhưng thường dùng CSS hơn.

### 4.7.4. `contenteditable` — Chỉnh sửa trực tiếp

```html
<!-- Cho phép người dùng chỉnh sửa nội dung -->
<div contenteditable="true">
    <p>Bạn có thể sửa văn bản này!</p>
</div>

<!-- Chỉ cho phép chỉnh sửa văn bản thuần, không HTML -->
<div contenteditable="plaintext-only">
    <strong>Chỉ text</strong> <!-- HTML tags bị bỏ qua -->
</div>

<!-- Event handler -->
<script>
  document.querySelector('[contenteditable]')
    .addEventListener('input', e => console.log(e.target.textContent));
</script>
```

> **Lưu ý 2026:** `contenteditable="plaintext-only"` là tính năng Baseline 2025 (Chrome 111+, Safari 16.4+, Firefox 124+).

### 4.7.5. `tabindex` — Điều khiển thứ tự Tab

```html
<!-- Cho phép focus bằng Tab -->
<div tabindex="0">Có thể focus</div>

<!-- Cho phép focus nhưng không thêm vào thứ tự tab tự nhiên -->
<button tabindex="-1">Bỏ qua Tab nhưng vẫn focus được qua JS</button>

<!-- Lấy phần tử ra khỏi thứ tự Tab hoàn toàn -->
<a href="#" tabindex="-1">Không thể tab đến</a>
```

### 4.7.6. `draggable` — Kéo thả

```html
<div draggable="true">Kéo tôi!</div>
<div draggable="false">Không kéo được</div>
<div draggable="auto">Trình duyệt tự quyết định (mặc định)</div>
```

> **Lưu ý 2025:** WHATWG đang xem xét thay đổi giá trị mặc định của `draggable` thành `true` (xem [issue #11751](https://github.com/whatwg/html/issues/11751)).

### 4.7.7. `translate` — Kiểm soát dịch thuật

```html
<!-- Không dịch phần tử này -->
<p translate="no">Windows 11</p>
```

---

## 4.8. Thuộc tính `accesskey` — Phím tắt truy cập

```html
<!-- Phím tắt: Alt + S (Windows) / Ctrl + Alt + S (Safari) -->
<button accesskey="s" onclick="save()">Lưu (Alt+S)</button>

<a href="/" accesskey="h">Trang chủ (Alt+H)</a>
```

> **Hạn chế:** Phím tắt accesskey thường xung đột với phím tắt trình duyệt/phần mềm assistive. WCAG 2.1 khuyến nghị cung cấp cách khác để kích hoạt thay vì chỉ dựa vào `accesskey`.

---

## 4.9. Thuộc tính `autocapitalize` — Tự động viết hoa

```html
<!-- Kiểm soát viết hoa tự động trên di động -->
<input type="text" autocapitalize="characters">   <!-- VIẾT HOA HẾT -->
<input type="text" autocapitalize="words">          <!-- Viết Hoa Mỗi Từ -->
<input type="email" autocapitalize="none">           <!-- Không tự động viết hoa -->
```

---

## 4.10. Bảng tổng hợp thuộc tính toàn cục

| Thuộc tính | Mục đích |
|-----------|---------|
| `id` | Định danh duy nhất |
| `class` | Nhóm phần tử |
| `style` | CSS inline |
| `title` | Chú thích tooltip |
| `lang` | Ngôn ngữ |
| `dir` | Hướng văn bản |
| `accesskey` | Phím tắt |
| `tabindex` | Thứ tự Tab |
| `hidden` | Ẩn phần tử |
| `contenteditable` | Chỉnh sửa trực tiếp |
| `translate` | Kiểm soát dịch |
| `draggable` | Kéo thả |
| `autocapitalize` | Viết hoa tự động |
| `data-*` | Dữ liệu tùy chỉnh |
| `slot` | Shadow DOM slot |
| `part` | CSS part |
| `exportparts` | Shadow DOM export |

---

## 4.11. Thuộc tính `slot` và Shadow DOM (nâng cao)

```html
<!-- Custom element với shadow DOM -->
<my-card>
    <span slot="header">Tiêu đề thẻ</span>
    <span slot="body">Nội dung thẻ</span>
</my-card>
```

Xem thêm [Phần 11: Tính năng hiện đại](../11_modern-features/README.md) — phần Custom Elements.

---

## 4.12. Tài liệu tham khảo

- [MDN: HTML attribute reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes)
- [WHATWG HTML — Global attributes](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)
- [MDN: Using data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)

---

## Tóm tắt

- ✅ `id` phải duy nhất, dùng cho anchor và JS
- ✅ `class` có thể gán nhiều phần tử, dùng cho CSS
- ✅ `data-*` lưu dữ liệu tùy chỉnh, đọc bằng `dataset`
- ✅ Inline `style` chỉ dùng cho email/email marketing
- ✅ `contenteditable="plaintext-only"` là Baseline 2025
- ✅ `tabindex` kiểm soát thứ tự bàn phím

---

**Phần tiếp theo:** [Semantic HTML](../5_semantic/README.md) — Cấu trúc trang với các thẻ ngữ nghĩa: header, nav, main, article, section, aside, footer.
