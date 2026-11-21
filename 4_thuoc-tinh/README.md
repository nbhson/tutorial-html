# PHẦN 4: THUỘC TÍNH HTML

## 4.1. Giới thiệu về thuộc tính (Attributes)

Mục này nói về "phụ kiện" của thẻ: thuộc tính (attributes) — thứ gắn thêm vào thẻ mở để cấu hình chi tiết hành vi của phần tử.

Thuộc tính HTML cung cấp **thông tin bổ sung** cho phần tử, được đặt trong thẻ mở dưới dạng `tên="giá trị"`. Nếu thẻ là món đồ, thì thuộc tính là **phiếu thông số đi kèm** — dán ngay trên món đồ, không dán lên hộp (thẻ đóng).

> 📄 **Code ví dụ:** [`examples/01-4-1-gioi-thieu-ve-thuoc-tinh-attributes.html`](examples/01-4-1-gioi-thieu-ve-thuoc-tinh-attributes.html)

### Quy tắc quan trọng

1. **Thuộc tính luôn nằm trong thẻ mở**, không phải thẻ đóng
2. **Luôn dùng dấu ngoặc kép** — đơn (`'`) hoặc kép (`"`)
3. **Một số thuộc tính không có giá trị** — gọi là **boolean attributes**: `disabled`, `checked`, `readonly`, `required`
4. **Từ HTML5**, thứ tự thuộc tính không quan trọng, nhưng giữ thứ tự nhất quán giúp maintain

> 📄 **Code ví dụ:** [`examples/02-quy-tac-quan-trong.html`](examples/02-quy-tac-quan-trong.html)

> **Tóm gọn 1 câu:** Thuộc tính là "phiếu thông số" gắn trên thẻ mở — đặt trong ngoặc kép, nhất quán thứ tự, và nhớ rằng có loại thuộc tính chỉ cần hiện diện là có tác dụng (boolean).

---

## 4.2. Thuộc tính `id`

Mục này nói về "số CMND" của phần tử: `id` — mỗi phần tử một số, không bao giờ trùng nhau trong trang.

`id` là **định danh duy nhất** của một phần tử trong trang.

> 📄 **Code ví dụ:** [`examples/03-4-2-thuoc-tinh-id.html`](examples/03-4-2-thuoc-tinh-id.html)

### Quy tắc `id`

- **Duy nhất**: Mỗi `id` chỉ xuất hiện **một lần** trong trang
- **Bắt đầu bằng chữ cái** (a–z, A–Z), có thể chứa số, dấu gạch ngang `-`, dấu gạch dưới `_`
- **Phân biệt hoa/thường**
- **Không dùng ký tự đặc biệt** ngoài `-` và `_` (tránh lỗi với CSS/JS selector)

> 📄 **Code ví dụ:** [`examples/04-quy-tac-id.html`](examples/04-quy-tac-id.html)

> **Mẹo đặt tên:** BEM-ish (`block-element__modifier`) hoặc kebab-case (`section-products`). Chọn một quy ước và dùng nhất quán.

> **Tóm gọn 1 câu:** `id` như số CMND — mỗi phần tử một số duy nhất, viết đúng chuẩn thì CSS, JS và anchor đều "tra tên" được ngay.

---

## 4.3. Thuộc tính `class`

Mục này nói về "đồng phục nhóm": `class` — gán nhiều phần tử vào cùng một nhóm để style hoặc thao tác hàng loạt.

`class` gán **nhiều lớp** (phân cách bằng khoảng trắng) cho phần tử — nếu `id` là số CMND thì `class` là đồng phục: bao nhiêu người mặc cùng một bộ cũng được.

> 📄 **Code ví dụ:** [`examples/05-4-3-thuoc-tinh-class.html`](examples/05-4-3-thuoc-tinh-class.html)

### Sự khác biệt `id` vs `class`

| Tiêu chí | `id` | `class` |
|---------|------|---------|
| Tính duy nhất | Một phần tử duy nhất | Nhiều phần tử cùng class |
| CSS `#id {}` | Độ đặc hiệu cao (ID > Class) | `.class {}` |
| JS `getElementById()` | ✅ Nhanh nhất | ❌ |
| JS `querySelectorAll('.class')` | ❌ | ✅ |
| Anchor link `#section` | ✅ | ❌ (dùng `id`) |

> **Cách đọc bảng này:** mỗi dòng là một tình huống dùng thật, cột `id` và `class` cho biết tình huống đó "phù hợp với ai" — dọc cột tiêu chí để quyết định: cần duy nhất một chỗ thì `id`, cần nhóm nhiều chỗ thì `class`.

> **Tóm gọn 1 câu:** `id` là CMND (duy nhất, tra lẻ), `class` là đồng phục (dùng chung hàng loạt) — chấm dứt cảnh lầm hai vai.

---

## 4.4. Thuộc tính `data-*` — Lưu trữ dữ liệu tùy chỉnh

Mục này nói về "túi khoác tự may": `data-*` — nơi bạn gắn dữ liệu riêng của mình lên phần tử để JavaScript đọc sau.

`data-*` cho phép lưu trữ dữ liệu tùy chỉnh trong phần tử HTML để JavaScript đọc. Hãy hình dung mỗi phần tử có một túi khoác: bạn tự đặt tên túi (`data-gì-cũng-được`) và bỏ dữ liệu vào, JS lục túi ra dùng lúc cần.

> 📄 **Code ví dụ:** [`examples/06-4-4-thuoc-tinh-data-luu-tru-du.html`](examples/06-4-4-thuoc-tinh-data-luu-tru-du.html)

### Đọc bằng JavaScript

> 📄 **Code ví dụ:** [`examples/07-oc-bang-javascript.js`](examples/07-oc-bang-javascript.js)

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

> **Cách đọc bảng này:** đọc theo từng cặp trái–phải — cột trái là việc nên bỏ vào "túi data-*", cột phải là việc tuyệt đối không bỏ vào (mỗi dòng là một cặp đối chiếu).

> **Tóm gọn 1 câu:** `data-*` là cầu nối dữ liệu từ HTML sang JS — bỏ state của UI vào đó, đừng bao giờ nhét thông tin nhạy cảm hay nội dung hiển thị.

---

## 4.5. Thuộc tính `title`

Mục này nói về chú thích "móc mè": thuộc tính `title` — thông tin phụ hiện thành tooltip khi rê chuột, không phải nơi chứa thông tin quan trọng.

Cung cấp **chú thích bổ sung** — trình duyệt hiển thị tooltip khi hover.

> 📄 **Code ví dụ:** [`examples/08-4-5-thuoc-tinh-title.html`](examples/08-4-5-thuoc-tinh-title.html)

> **Hạn chế:** Tooltip `title` không accessible trên thiết bị cảm ứng. Dùng cho thông tin bổ sung không thiết yếu. Với thông tin quan trọng, dùng `aria-describedby` thay thế.

---

## 4.6. Thuộc tính `style` — Inline CSS

Mục này nói về việc viết CSS "tận nơi" trên từng phần tử — tiện cho debug nhưng là thói quen nên bỏ trong code production.

Dùng để viết CSS trực tiếp trên phần tử. **Không khuyến khích** cho code production — giống như viết ghi chú dán lốn trên từng cửa thay vì làm hẳn bảng màu chung cả nhà.

> 📄 **Code ví dụ:** [`examples/09-4-6-thuoc-tinh-style-inline-css.html`](examples/09-4-6-thuoc-tinh-style-inline-css.html)

### Khi nào inline style được chấp nhận?

- Email HTML (không hỗ trợ external CSS)
- Email marketing (Litmus/Email on Acid vẫn yêu cầu inline)
- Debug nhanh
- CSS-in-JS library tự động generate

> **Mẹo:** Nếu dùng nhiều `style=""` trên nhiều phần tử → refactor thành class CSS.

> **Tóm gọn 1 câu:** Inline `style` là "phao cứu sinh", không phải "phương tiện di chuyển hằng ngày" — dùng khi đặc thù (email, debug), trả lại class CSS khi hết tình huống khẩn.

---

## 4.7. Thuộc tính ngữ nghĩa toàn cục (Global Attributes)

Mục này điểm danh các thuộc tính "dán được lên mọi thẻ" (global attributes) — từ ngôn ngữ `lang` đến kéo thả `draggable`.

Mọi phần tử HTML đều hỗ trợ các thuộc tính toàn cục sau:

### 4.7.1. `lang` — Ngôn ngữ

> 📄 **Code ví dụ:** [`examples/10-4-7-1-lang-ngon-ngu.html`](examples/10-4-7-1-lang-ngon-ngu.html)

### 4.7.2. `dir` — Hướng văn bản

> 📄 **Code ví dụ:** [`examples/11-4-7-2-dir-huong-van-ban.html`](examples/11-4-7-2-dir-huong-van-ban.html)

### 4.7.3. `hidden` — Ẩn phần tử

> 📄 **Code ví dụ:** [`examples/12-4-7-3-hidden-an-phan-tu.html`](examples/12-4-7-3-hidden-an-phan-tu.html)

> **Khác với `display: none`:** `hidden` trên `<dialog>` có thể dùng CSS `:not([hidden])` để style, nhưng thường dùng CSS hơn.

### 4.7.4. `contenteditable` — Chỉnh sửa trực tiếp

> 📄 **Code ví dụ:** [`examples/13-4-7-4-contenteditable-chinh-sua-truc-tiep.html`](examples/13-4-7-4-contenteditable-chinh-sua-truc-tiep.html)

> **Lưu ý 2026:** `contenteditable="plaintext-only"` là tính năng Baseline 2025 (Chrome 111+, Safari 16.4+, Firefox 124+).

### 4.7.5. `tabindex` — Điều khiển thứ tự Tab

> 📄 **Code ví dụ:** [`examples/14-4-7-5-tabindex-ieu-khien-thu-tu.html`](examples/14-4-7-5-tabindex-ieu-khien-thu-tu.html)

### 4.7.6. `draggable` — Kéo thả

> 📄 **Code ví dụ:** [`examples/15-4-7-6-draggable-keo-tha.html`](examples/15-4-7-6-draggable-keo-tha.html)

> **Lưu ý 2025:** WHATWG đang xem xét thay đổi giá trị mặc định của `draggable` thành `true` (xem [issue #11751](https://github.com/whatwg/html/issues/11751)).

### 4.7.7. `translate` — Kiểm soát dịch thuật

> 📄 **Code ví dụ:** [`examples/16-4-7-7-translate-kiem-soat-dich-thuat.html`](examples/16-4-7-7-translate-kiem-soat-dich-thuat.html)

---

## 4.8. Thuộc tính `accesskey` — Phím tắt truy cập

> 📄 **Code ví dụ:** [`examples/17-4-8-thuoc-tinh-accesskey-phim-tat-truy.html`](examples/17-4-8-thuoc-tinh-accesskey-phim-tat-truy.html)

> **Hạn chế:** Phím tắt accesskey thường xung đột với phím tắt trình duyệt/phần mềm assistive. WCAG 2.1 khuyến nghị cung cấp cách khác để kích hoạt thay vì chỉ dựa vào `accesskey`.

---

## 4.9. Thuộc tính `autocapitalize` — Tự động viết hoa

> 📄 **Code ví dụ:** [`examples/18-4-9-thuoc-tinh-autocapitalize-tu-ong-viet.html`](examples/18-4-9-thuoc-tinh-autocapitalize-tu-ong-viet.html)

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

> **Cách đọc bảng này:** đây là "danh mục phụ tùng" để tra nhanh, không cần học thuộc — cột trái là tên thuộc tính, cột phải là một câu mô tả vai trò; cần chi tiết thì cuộn lên đúng mục 4.x tương ứng.

---

## 4.11. Thuộc tính `slot` và Shadow DOM (nâng cao)

Mục này dành cho người đi xa hơn: `slot` — cơ chế "ổ cắm" của Shadow DOM, cho phép component cha nhét nội dung vào đúng kẽ của component con.

> 📄 **Code ví dụ:** [`examples/19-4-11-thuoc-tinh-slot-va-shadow-dom.html`](examples/19-4-11-thuoc-tinh-slot-va-shadow-dom.html)

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

> **Tóm gọn 1 câu:** Phần 4 dạy bạn trang bị "phụ kiện" cho thẻ — `id` để định danh, `class` để nhóm, `data-*` để chuyển dữ liệu cho JS, và bộ global attributes dùng được với mọi thẻ.

---

**Phần tiếp theo:** [Semantic HTML](../5_semantic/README.md) — Cấu trúc trang với các thẻ ngữ nghĩa: header, nav, main, article, section, aside, footer.
