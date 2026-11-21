# PHẦN 6: BIỂU MẪU (FORMS)

## 6.1. Phần tử `<form>`

Mục này mở đầu phần biểu mẫu: `<form>` — chiếc "giấy khai" mà người dùng điền và gửi đi, cùng các thuộc tính điều khiển nơi gửi và cách gửi.

`<form>` là vùng chứa các phần tử tương tác để người dùng nhập và gửi dữ liệu — hãy hình dung nó như tấm phiếu đăng ký ở quầy lễ tân: phần nhân viên (server) nhận là phần form submit.

> 📄 **Code ví dụ:** [`examples/01-6-1-phan-tu-form.html`](examples/01-6-1-phan-tu-form.html)

### Thuộc tính quan trọng của `<form>`

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `action` | URL nhận dữ liệu khi submit |
| `method` | `get` (mặc định, dữ liệu lên URL) hoặc `post` (dữ liệu trong body) |
| `enctype` | Cách mã hóa dữ liệu: `application/x-www-form-urlencoded`, `multipart/form-data` (upload file), `text/plain` |
| `novalidate` | Tắt validation mặc định của trình duyệt |
| `autocomplete` | Bật/tắt gợi ý điền tự động cho toàn form |
| `target` | Nơi hiển thị kết quả (`_self`, `_blank`, iframe) |

> **Cách đọc bảng này:** hai dòng đầu (`action`, `method`) là "gửi đến đâu và gửi thế nào" — nhớ 2 dòng này trước; các dòng còn lại là tinh chỉnh khi cần.

> 📄 **Code ví dụ:** [`examples/02-thuoc-tinh-quan-trong-cua-form.html`](examples/02-thuoc-tinh-quan-trong-cua-form.html)

> **Tóm gọn 1 câu:** `<form>` là tấm phiếu đăng ký — `action` ghi địa chỉ nhận, `method` chọn đường chuyển (get/post), còn lại là tinh chỉnh thêm.

---

## 6.2. `<label>` — Luôn gắn nhãn cho input

Mục này nói về "nhãn dán bắt buộc" của mỗi ô nhập: `<label>` — nhỏ mà thiếu là người dùng màn hình bơ vơ.

> 📄 **Code ví dụ:** [`examples/03-6-2-label-luon-gan-nhan-cho-input.html`](examples/03-6-2-label-luon-gan-nhan-cho-input.html)

> **Bắt buộc về accessibility:** Mỗi input phải có label. Input không có label → screen reader đọc rời rạc, vùng click nhỏ hơn, vi phạm WCAG 3.3.2 (Labels or Instructions).

> **Tóm gọn 1 câu:** Input không có label như chai thuốc không dán nhãn — người dùng không biết bên trong là gì, và đó là lỗi a11y đích thực.

---

## 6.3. Các `type` của `<input>`

Mục này giới thiệu "tủ đồ các loại ô nhập": chọn đúng `type` là trình duyệt tự cho đúng bàn phím, đúng validation, đúng trải nghiệm.

### Input văn bản và số

> 📄 **Code ví dụ:** [`examples/04-input-van-ban-va-so.html`](examples/04-input-van-ban-va-so.html)

### Input ngày giờ

> 📄 **Code ví dụ:** [`examples/05-input-ngay-gio.html`](examples/05-input-ngay-gio.html)

### Input khác

> 📄 **Code ví dụ:** [`examples/06-input-khac.html`](examples/06-input-khac.html)

---

## 6.4. `<textarea>`, `<select>`, `<datalist>`

> 📄 **Code ví dụ:** [`examples/07-6-4-textarea-select-datalist.html`](examples/07-6-4-textarea-select-datalist.html)

---

## 6.5. Validation HTML gốc (Client-side Validation)

Mục này nói về "cửa kiểm đầu tiên": validation trình duyệt làm sẵn cho bạn — kiểm tra dữ liệu ngay khi người dùng gõ, trước khi gửi đi.

### Thuộc tính validation

> 📄 **Code ví dụ:** [`examples/08-thuoc-tinh-validation.html`](examples/08-thuoc-tinh-validation.html)

### Custom message lỗi bằng CSS và JS

> 📄 **Code ví dụ:** [`examples/09-custom-message-loi-bang-css-va-js.css`](examples/09-custom-message-loi-bang-css-va-js.css)

> 📄 **Code ví dụ:** [`examples/10-custom-message-loi-bang-css-va-js.js`](examples/10-custom-message-loi-bang-css-va-js.js)

> 📄 **Code ví dụ:** [`examples/11-custom-message-loi-bang-css-va-js.html`](examples/11-custom-message-loi-bang-css-va-js.html)

> **Nguyên tắc:** Validation client-side chỉ là **trải nghiệm người dùng** — luôn validate lại ở server. Đừng tin dữ liệu từ client.

> **Tóm gọn 1 câu:** Validation client là "lễ tân mời khách kiểm tra áo", validation server là "cổng an ninh soát vé" — vui thì có lễ tân, nhưng cửa an ninh phải luôn đứng đó.

---

## 6.6. Autocomplete API — Điền tự động thông minh

Mục này nói về cách để trình duyệt "điền giùm" form: thuộc tính `autocomplete` — người dùng bớt gõ, mật khẩu an toàn hơn.

Thuộc tính `autocomplete` giúp trình duyệt điền dữ liệu đã lưu (địa chỉ, thẻ, mật khẩu).

> 📄 **Code ví dụ:** [`examples/12-6-6-autocomplete-api-ien-tu-ong-thong.html`](examples/12-6-6-autocomplete-api-ien-tu-ong-thong.html)

### Giá trị `autocomplete` thường dùng nhất

| Giá trị | Ý nghĩa |
|---------|---------|
| `name`, `given-name`, `family-name` | Tên người dùng |
| `email` | Email |
| `tel` | Số điện thoại |
| `street-address`, `postal-code` | Địa chỉ |
| `cc-number`, `cc-exp`, `cc-csc` | Thẻ tín dụng |
| `current-password` / `new-password` | Đăng nhập / tạo mật khẩu |
| `one-time-code` | Mã OTP (SMS autofill trên iOS/Android) |
| `organization` | Tên công ty |
| `bday` | Ngày sinh |
| `sex` | Giới tính |
| `username` | Tên đăng nhập |
| `off` | Tắt autocomplete |

> **Cách đọc bảng này:** cột trái là "từ khóa" viết đúng chính tả vào thuộc tính `autocomplete`, cột phải là dữ liệu tương ứng — dò theo trường bạn đang làm rồi copy nguyên giá trị sang, đừng tự chế từ khóa.

> **Lưu ý bảo mật:** Với trường mật khẩu, `autocomplete="new-password"` báo cho password manager sinh mật khẩu mạnh; `autocomplete="off"` trên password **không được trình duyệt tôn trọng** — đây là hành vi cố ý để bảo vệ người dùng.

> **Tóm gọn 1 câu:** `autocomplete` đúng chuẩn là "phiếu thông tin điền sẵn" — người dùng bớt gõ, browser và password manager còn tự lo phần bảo mật.

---

## 6.7. `inputmode` — Bàn phím trên di động

Mục này nói về "bàn phím nào hiện lên": `inputmode` — chọn kiểu bàn phím ảo cho mobile mà không đụng vào validation.

`inputmode` chọn **kiểu bàn phím ảo** mà không thay đổi type (giữ validation không đổi) — ví von: cùng một ô nhập, nhưng bạn chọn "ra bảng chữ số" hay "ra bảng chữ cái" cho ngón tay người dùng đỡ mỏi:

> 📄 **Code ví dụ:** [`examples/13-6-7-inputmode-ban-phim-tren-di-ong.html`](examples/13-6-7-inputmode-ban-phim-tren-di-ong.html)

---

## 6.8. `<fieldset>` và `<legend>` — Nhóm trường

Mục này nói về "khuôn nhóm": `<fieldset>` bọc một nhóm trường liên quan, `<legend>` đặt tên cho cả nhóm.

> 📄 **Code ví dụ:** [`examples/14-6-8-fieldset-va-legend-nhom-truong.html`](examples/14-6-8-fieldset-va-legend-nhom-truong.html)

Screen reader đọc `legend` trước khi vào từng trường → nhóm có ngữ cảnh rõ ràng — như người dẫn chương trình giới thiệu tên mục trước khi đọc từng câu hỏi.

---

## 6.9. Progress, Meter, Output

Mục này giới thiệu ba thẻ "hiển thị số liệu": thanh tiến độ, thước đo, và kết quả tính toán — thay vì tự vẽ bằng div và JS.

> 📄 **Code ví dụ:** [`examples/15-6-9-progress-meter-output.html`](examples/15-6-9-progress-meter-output.html)

---

## 6.10. Form hiện đại: các tính năng 2025–2026

Mục này là "tin nóng" của form: những tính năng mới nhất khiến form làm được nhiều việc mà trước đây phải viết JS.

### `requestSubmit()` và submit từ JS

> 📄 **Code ví dụ:** [`examples/16-requestsubmit-va-submit-tu-js.js`](examples/16-requestsubmit-va-submit-tu-js.js)

### `<form>` với `formmethod`, `formaction` trên button

> 📄 **Code ví dụ:** [`examples/17-form-voi-formmethod-formaction-tren-button.html`](examples/17-form-voi-formmethod-formaction-tren-button.html)

### Customizable `<select>` (rất mới, 2025)

> 📄 **Code ví dụ:** [`examples/18-customizable-select-rat-moi-2025.html`](examples/18-customizable-select-rat-moi-2025.html)

> `selectedcontent` hỗ trợ: **Chrome 135+ (4/2025), Edge 135+, Safari 27+**. Firefox chưa hỗ trợ — kiểm tra tại [caniuse](https://caniuse.com/mdn-html_elements_selectedcontent). Đây là tính năng trong nhóm "Customizable Select" — đang được WHATWG + OpenUI phát triển.

### `<search>` element

> 📄 **Code ví dụ:** [`examples/19-search-element.html`](examples/19-search-element.html)

`<search>` (thêm vào Living Standard 2023) tạo landmark `search` cho screen reader.

---

## 6.11. Tài liệu tham khảo

- [MDN: HTML forms guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [WHATWG HTML — Forms](https://html.spec.whatwg.org/multipage/forms.html)
- [MDN: autocomplete attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)
- [web.dev — Learn Forms](https://web.dev/learn/forms/)

---

## Tóm tắt

- ✅ Mỗi input cần `<label>` liên kết bằng `for`/`id`
- ✅ Chọn `type` đúng để nhận validation + bàn phím phù hợp
- ✅ `autocomplete` chuẩn giúp điền nhanh và hỗ trợ password manager
- ✅ Validation client-side chỉ để UX — luôn validate lại server-side
- ✅ `inputmode` chọn bàn phím ảo trên di động
- ✅ Customizable `<select>` + `selectedcontent` là tính năng mới nhất 2025 (Chrome 135+)

> **Tóm gọn 1 câu:** Form làm đúng chuẩn là: mỗi input có nhãn, `type` và `autocomplete` đúng vai — trình duyệt tự lo phần còn lại từ bàn phím đến bảo mật.

---

**Phần tiếp theo:** [Accessibility](../7_accessibility/README.md) — ARIA, screen reader, keyboard navigation và WCAG 2.2.
