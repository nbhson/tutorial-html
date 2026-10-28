# PHẦN 6: BIỂU MẪU (FORMS)

## 6.1. Phần tử `<form>`

`<form>` là vùng chứa các phần tử tương tác để người dùng nhập và gửi dữ liệu.

```html
<form action="/dang-ky" method="post">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Đăng ký</button>
</form>
```

### Thuộc tính quan trọng của `<form>`

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `action` | URL nhận dữ liệu khi submit |
| `method` | `get` (mặc định, dữ liệu lên URL) hoặc `post` (dữ liệu trong body) |
| `enctype` | Cách mã hóa dữ liệu: `application/x-www-form-urlencoded`, `multipart/form-data` (upload file), `text/plain` |
| `novalidate` | Tắt validation mặc định của trình duyệt |
| `autocomplete` | Bật/tắt gợi ý điền tự động cho toàn form |
| `target` | Nơi hiển thị kết quả (`_self`, `_blank`, iframe) |

```html
<!-- Form upload file: bắt buộc multipart/form-data -->
<form action="/upload" method="post" enctype="multipart/form-data">
    <input type="file" name="anh" accept="image/*" required>
    <button type="submit">Tải lên</button>
</form>
```

---

## 6.2. `<label>` — Luôn gắn nhãn cho input

```html
<!-- Cách 1: for + id (rõ ràng nhất) -->
<label for="ho-ten">Họ và tên</label>
<input type="text" id="ho-ten" name="ho-ten">

<!-- Cách 2: bọc input trong label -->
<label>
    Họ và tên
    <input type="text" name="ho-ten">
</label>
```

> **Bắt buộc về accessibility:** Mỗi input phải có label. Input không có label → screen reader đọc rời rạc, vùng click nhỏ hơn, vi phạm WCAG 3.3.2 (Labels or Instructions).

---

## 6.3. Các `type` của `<input>`

### Input văn bản và số

```html
<input type="text" name="ten">
<input type="email" name="email" multiple>          <!-- kiểm tra định dạng email -->
<input type="password" name="mat-khau" autocomplete="new-password">
<input type="search" name="q">                       <!-- ô tìm kiếm -->
<input type="url" name="website">                    <!-- kiểm tra URL -->
<input type="tel" name="sdt" pattern="[0-9]{10}">    <!-- không validate tự động -->
<input type="number" name="tuoi" min="18" max="100" step="1">
<input type="range" name="muc-do" min="0" max="10">
```

### Input ngày giờ

```html
<input type="date" name="ngay-sinh">
<input type="time" name="gio-hen">
<input type="datetime-local" name="hen-gio">
<input type="month" name="thang">
<input type="week" name="tuan">
```

### Input khác

```html
<input type="checkbox" name="dong-y" required>
<input type="radio" name="gioi-tinh" value="nam">
<input type="radio" name="gioi-tinh" value="nu">
<input type="file" name="avatar" accept="image/png, image/jpeg" multiple>
<input type="color" name="mau-yeu-thich">
<input type="hidden" name="csrf-token" value="abc123">
<input type="submit" value="Gửi">   <!-- khuyến khích dùng <button> thay thế -->
```

---

## 6.4. `<textarea>`, `<select>`, `<datalist>`

```html
<!-- Textarea: văn bản nhiều dòng -->
<label for="mo-ta">Mô tả</label>
<textarea id="mo-ta" name="mo-ta" rows="5" cols="40" maxlength="500" placeholder="Nhập mô tả..."></textarea>

<!-- Select: dropdown -->
<label for="thanh-pho">Thành phố</label>
<select id="thanh-pho" name="thanh-pho">
    <option value="">-- Chọn --</option>
    <optgroup label="Miền Bắc">
        <option value="hanoi" selected>Hà Nội</option>
        <option value="haiphong">Hải Phòng</option>
    </optgroup>
    <optgroup label="Miền Nam">
        <option value="hcm">TP. Hồ Chí Minh</option>
    </optgroup>
</select>

<!-- Select multiple -->
<select name="ngon-ngu" multiple size="3">
    <option value="vi">Tiếng Việt</option>
    <option value="en">Tiếng Anh</option>
    <option value="ja">Tiếng Nhật</option>
</select>

<!-- Datalist: input kết hợp gợi ý -->
<label for="trinh-duyet">Trình duyệt</label>
<input list="ds-trinh-duyet" id="trinh-duyet" name="trinh-duyet">
<datalist id="ds-trinh-duyet">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Safari">
</datalist>
```

---

## 6.5. Validation HTML gốc (Client-side Validation)

### Thuộc tính validation

```html
<form action="/dang-ky" method="post">
    <!-- required: bắt buộc nhập -->
    <input type="text" name="ten" required>

    <!-- minlength / maxlength: độ dài -->
    <input type="password" name="mk" minlength="8" maxlength="64" required>

    <!-- min / max / step: giá trị số -->
    <input type="number" name="tuoi" min="18" max="99">

    <!-- pattern: regex -->
    <input type="tel" name="sdt"
           pattern="(0[3|5|7|8|9])+([0-9]{8})"
           title="Số điện thoại Việt Nam 10 số, bắt đầu bằng 03/05/07/08/09">

    <!-- Kết hợp nhiều điều kiện -->
    <input type="email" name="email" required
           pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$">
</form>
```

### Custom message lỗi bằng CSS và JS

```css
/* CSS: pseudo-classes validation */
input:valid       { border-color: green; }
input:invalid     { border-color: red; }
input:invalid:not(:placeholder-shown) { border-color: red; }  /* chỉ báo lỗi khi user đã gõ */
input:user-invalid { border-color: red; }   /* chỉ khi user đã tương tác (mới, Baseline 2024) */
```

```javascript
// JS: tùy biến thông báo lỗi
const email = document.querySelector('#email');
email.addEventListener('invalid', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Vui lòng nhập email hợp lệ, ví dụ: ten@gmail.com');
    } else {
        email.setCustomValidity('');
    }
});
```

```html
<!-- Hiển thị lỗi không chặn submit bằng aria-live -->
<label for="email">Email</label>
<input type="email" id="email" aria-describedby="email-error" required>
<p id="email-error" aria-live="polite"></p>
```

> **Nguyên tắc:** Validation client-side chỉ là **trải nghiệm người dùng** — luôn validate lại ở server. Đừng tin dữ liệu từ client.

---

## 6.6. Autocomplete API — Điền tự động thông minh

Thuộc tính `autocomplete` giúp trình duyệt điền dữ liệu đã lưu (địa chỉ, thẻ, mật khẩu).

```html
<form action="/thanh-toan" method="post" autocomplete="on">
    <!-- Thông tin cá nhân -->
    <input type="text" name="ho" autocomplete="family-name">
    <input type="text" name="ten" autocomplete="given-name">
    <input type="email" name="email" autocomplete="email">
    <input type="tel" name="sdt" autocomplete="tel">

    <!-- Địa chỉ (token nhóm) -->
    <input type="text" name="dia-chi" autocomplete="street-address">
    <input type="text" name="tinh" autocomplete="address-level1">
    <input type="text" name="quan" autocomplete="address-level2">
    <input type="text" name="ma-buu-dien" autocomplete="postal-code">

    <!-- Thẻ tín dụng -->
    <input type="text" name="so-the" autocomplete="cc-number">
    <input type="text" name="ten-tren-the" autocomplete="cc-name">
    <input type="text" name="han-the" autocomplete="cc-exp">

    <!-- Mật khẩu: các giá trị quan trọng cho password manager -->
    <input type="password" name="mk-hien-tai" autocomplete="current-password">
    <input type="password" name="mk-moi" autocomplete="new-password">

    <!-- OTP một lần -->
    <input type="text" name="otp" autocomplete="one-time-code"
           inputmode="numeric" pattern="[0-9]{6}">
</form>
```

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

> **Lưu ý bảo mật:** Với trường mật khẩu, `autocomplete="new-password"` báo cho password manager sinh mật khẩu mạnh; `autocomplete="off"` trên password **không được trình duyệt tôn trọng** — đây là hành vi cố ý để bảo vệ người dùng.

---

## 6.7. `inputmode` — Bàn phím trên di động

`inputmode` chọn **kiểu bàn phím ảo** mà không thay đổi type (giữ validation không đổi):

```html
<input type="text" inputmode="numeric"  name="ma-bh">   <!-- bàn phím số -->
<input type="text" inputmode="decimal"  name="gia">     <!-- số thập phân -->
<input type="text" inputmode="tel"      name="sdt">     <!-- bàn phím điện thoại -->
<input type="text" inputmode="email"    name="mail">    <!-- bàn phím có @ -->
<input type="text" inputmode="url"      name="link">    <!-- bàn phím có /. -->
<input type="text" inputmode="search"   name="q">       <!-- phím search -->
```

---

## 6.8. `<fieldset>` và `<legend>` — Nhóm trường

```html
<fieldset>
    <legend>Thông tin liên hệ</legend>
    <label for="dt">Điện thoại</label>
    <input type="tel" id="dt" name="dt">
    <label for="dc">Địa chỉ</label>
    <input type="text" id="dc" name="dc">
</fieldset>
```

Screen reader đọc `legend` trước khi vào từng trường → nhóm có ngữ cảnh rõ ràng.

---

## 6.9. Progress, Meter, Output

```html
<!-- Progress: tiến trình công việc -->
<label for="tai">Đang tải:</label>
<progress id="tai" value="70" max="100">70%</progress>

<!-- Meter: mức đo trong phạm vi đã biết -->
<label for="dia">Dung lượng ổ đĩa:</label>
<meter id="dia" value="0.6" min="0" max="1" low="0.3" high="0.8" optimum="0.2">60%</meter>

<!-- Output: kết quả tính toán -->
<form oninput="kq.value = Number(a.value) + Number(b.value)">
    <input type="number" id="a" value="5"> +
    <input type="number" id="b" value="3"> =
    <output name="kq" for="a b">8</output>
</form>
```

---

## 6.10. Form hiện đại: các tính năng 2025–2026

### `requestSubmit()` và submit từ JS

```javascript
// Gửi form như thể người dùng bấm nút submit (chạy validation)
form.requestSubmit();

// Gửi không validation
form.submit();
```

### `<form>` với `formmethod`, `formaction` trên button

```html
<form action="/mac-dinh" method="post">
    <button type="submit">Lưu nháp</button>
    <button type="submit" formaction="/xuat-ban" formmethod="post">Xuất bản</button>
    <button type="submit" formtarget="_blank">Xem trước (tab mới)</button>
</form>
```

### Customizable `<select>` (rất mới, 2025)

```html
<!-- Chrome 135+, Safari 27+; chưa có Firefox — cần feature-detect -->
<select>
    <button>
        <selectedcontent></selectedcontent>  <!-- phản chiếu option đang chọn -->
    </button>
    <option value="hn">🇻🇳 Hà Nội</option>
    <option value="sg">🇻🇳 Sài Gòn</option>
</select>
<style>
  select, ::picker(select) { appearance: base-select; }
</style>
```

> `selectedcontent` hỗ trợ: **Chrome 135+ (4/2025), Edge 135+, Safari 27+**. Firefox chưa hỗ trợ — kiểm tra tại [caniuse](https://caniuse.com/mdn-html_elements_selectedcontent). Đây là tính năng trong nhóm "Customizable Select" — đang được WHATWG + OpenUI phát triển.

### `<search>` element

```html
<search>
    <form action="/tim-kiem">
        <label for="q">Tìm kiếm</label>
        <input type="search" id="q" name="q">
        <button type="submit">Tìm</button>
    </form>
</search>
```

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

---

**Phần tiếp theo:** [Accessibility](../7_accessibility/README.md) — ARIA, screen reader, keyboard navigation và WCAG 2.2.
