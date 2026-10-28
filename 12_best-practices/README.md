# PHẦN 12: BEST PRACTICES — STYLE GUIDE, LỖI THƯỜNG GẶP, VALIDATOR

## 12.1. HTML Style Guide — Quy ước viết code

### 12.1.1. Quy ước chung

1. **Luôn khai báo DOCTYPE** ở dòng đầu tiên
2. **Viết thường** cho thẻ và thuộc tính
3. **Dùng ngoặc kép** cho giá trị thuộc tính
4. **Thụt lề 2 spaces** (hoặc 4 — chọn một, nhất quán toàn dự án)
5. **Một dòng một phần tử** cho các khối lớn

```html
<!-- ✅ Chuẩn -->
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Tiêu đề</title>
</head>
<body>
    <main>
        <h1>Tiêu đề</h1>
        <p>Nội dung.</p>
    </main>
</body>
</html>

<!-- ❌ Không nhất quán -->
<HTML>
<HEAD><TITLE>x</TITLE></head>
<body><DIV class="a"><P>x</P></DIV></body>
</html>
```

### 12.1.2. Quy ước đặt tên

```html
<!-- class: kebab-case -->
<div class="product-card is-featured">...</div>

<!-- id: kebab-case, duy nhất -->
<section id="user-profile"></section>

<!-- data-*: kebab-case -->
<div data-user-id="42"></div>

<!-- file: lowercase, không khoảng trắng -->
<!-- index.html, ve-chung-toi.html, css/main.css -->
```

### 12.1.3. Thứ tự thuộc tính khuyến nghị

```html
<a class="btn" id="login-btn" href="/dang-nhap" target="_blank" data-role="cta" aria-label="Đăng nhập">
```

1. `class` → 2. `id` → 3. `name` → 4. `data-*` → 5. `src`, `href`, `for` → 6. `type`, `value` → 7. `title`, `alt` → 8. `role`, `aria-*` → 9. sự kiện (`onclick`...)

---

## 12.2. 20 lỗi HTML phổ biến và cách sửa

### 12.2.1. Thiếu `alt` trên hình ảnh

```html
<!-- ❌ -->
<img src="anh.jpg">

<!-- ✅ -->
<img src="anh.jpg" alt="Người dùng đang học HTML trên laptop" width="800" height="450">
```

### 12.2.2. Dùng `<br>` để tạo khoảng cách thay vì CSS margin

```html
<!-- ❌ -->
<p>Dòng 1<br><br>Dòng tiếp theo</p>

<!-- ✅ -->
<p>Dòng 1</p>
<p>Dòng tiếp</p>
```

### 12.2.3. Dùng bảng để dàn layout

```html
<!-- ❌ Cấu trúc thời HTML4 -->
<table>
    <tr><td>Sidebar</td><td>Nội dung</td></tr>
</table>

<!-- ✅ Dùng semantic + CSS Grid/Flexbox -->
<div class="layout">
    <aside>Sidebar</aside>
    <main>Nội dung</main>
</div>
```

### 12.2.4. Thẻ lồng sai

```html
<!-- ❌ Sai: block chứa trong inline; p chứa p -->
<p><div>Sai!</div></p>
<a href="#"><h2>Tiêu đề</h2></a>

<!-- ✅ Đúng -->
<a href="/bai-viet">
    <h2>Tiêu đề bài viết</h2>   <!-- a chứa heading: HỢP LỆ từ HTML5 -->
</a>
```

### 12.2.5. Nhiều `<h1>` hoặc bỏ hẳn heading

Mỗi trang một `<h1>`; không nhảy cấp; không dùng heading chỉ vì muốn chữ to.

### 12.2.6. `<div>` làm nút bấm

```html
<!-- ❌ -->
<div onclick="save()" class="save-btn">Lưu</div>

<!-- ✅ -->
<button type="button" onclick="save()">Lưu</button>
```

### 12.2.7. Thiếu `label` cho input

```html
<!-- ❌ -->
<input type="text" name="ho-ten" placeholder="Họ và tên">

<!-- ✅ -->
<label for="ho-ten">Họ và tên</label>
<input type="text" id="ho-ten" name="ho-ten">
```

### 12.2.8. Nhầm `<b>`/`<i>` với `<strong>`/`<em>`

Dùng `<strong>`/`<em>` khi mang ngữ nghĩa; `<b>`/`<i>` chỉ cho mục đích thị giác.

### 12.2.9. Nhiều `id` trùng lặp

```html
<!-- ❌ Hai id giống nhau -->
<div id="card">...</div>
<div id="card">...</div>
```

### 12.2.10. Thiếu `alt=""` cho ảnh trang trí

Ảnh trang trí **cần `alt=""`** (rỗng) — để screen reader bỏ qua, KHÔNG bỏ thuộc tính `alt`.

### 12.2.11. Quên đóng thẻ

```html
<!-- ❌ -->
<p>Đoạn văn 1
<p>Đoạn văn 2

<!-- ✅ -->
<p>Đoạn văn 1</p>
<p>Đoạn văn 2</p>
```

### 12.2.12. Dùng `target="_blank"` không có `rel="noopener"`

```html
<!-- ❌ -->
<a href="https://khac.com" target="_blank">Link</a>

<!-- ✅ -->
<a href="https://khac.com" target="_blank" rel="noopener noreferrer">Link</a>
```

### 12.2.13. Thẻ `<script>` không có `defer`

Xem [Phần 10](../10_performance/README.md) — dùng `defer`/`module`.

### 12.2.14. Thiếu `width`/`height` cho `<img>` → CLS

### 12.2.15. Thẻ `<a href="#">` làm button

```html
<!-- ❌ -->
<a href="#" onclick="doSomething()">Xóa</a>

<!-- ✅ -->
<button type="button" onclick="doSomething()">Xóa</button>
```

### 12.2.16. Nhồi inline style

→ Chuyển sang class CSS.

### 12.2.17. Dùng `<section>` thay `<div>` vô tội vạ

`<section>` cần có **tiêu đề**; nếu chỉ để style, dùng `<div>`.

### 12.2.18. Thiếu `lang` trên `<html>`

```html
<!-- ❌ -->
<html>

<!-- ✅ -->
<html lang="vi">
```

### 12.2.19. Dùng heading để làm chữ to/màu

Định dạng thị giác là việc của CSS.

### 12.2.20. Thiếu meta viewport

Trên mobile trang sẽ hiển thị như desktop thu nhỏ — thêm viewport meta.

---

## 12.3. Validator — Kiểm tra HTML hợp lệ

### W3C Markup Validator

- URL: **https://validator.w3.org/**
- Nhập URL, upload file, hoặc paste code

### Cách khác

```bash
# html-validate (CLI, cho dự án)
npm install -g html-validate
html-validate "**/*.html"

# axe (a11y)
npx @axe-core/cli https://example.com
```

### VS Code extension

- **HTMLHint** — lint HTML
- **Lighthouse** — built-in trong Chrome DevTools

### Kiểm tra tự động trong CI

```yaml
# GitHub Actions
- name: HTML validation
  run: npx html-validate "dist/**/*.html"
```

---

## 12.4. Checklist cuối cùng trước khi publish

### Cấu trúc

- [ ] `<!DOCTYPE html>` đầu file
- [ ] `<html lang="vi">`
- [ ] `<meta charset="UTF-8">` + `<meta viewport>`
- [ ] Một `<h1>` duy nhất, headings tuần tự
- [ ] Một `<main>`, có `<header>`/`<footer>`/`<nav>` ngữ nghĩa

### Nội dung & Accessibility

- [ ] Mọi `<img>` có `alt` (hoặc `alt=""` nếu trang trí)
- [ ] Mọi input có `label`
- [ ] Tab điều hướng hợp lý, focus nhìn thấy được
- [ ] Video có `<track>` captions
- [ ] Độ tương phản ≥ 4.5:1

### SEO & Hiệu năng

- [ ] `<title>` + `<meta description>` duy nhất
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] JSON-LD Schema (nếu phù hợp)
- [ ] `defer`/`module` cho script
- [ ] `loading="lazy"` cho ảnh dưới màn hình
- [ ] Ảnh AVIF/WebP + `srcset`

### Bảo mật & Chuẩn

- [ ] `rel="noopener"` cho `target="_blank"`
- [ ] iframe có `sandbox` (khi nội dung ngoài)
- [ ] HTML validate qua W3C Validator
- [ ] Không có lỗi console

---

## 12.5. Tài liệu tham khảo

- [W3C HTML Validator](https://validator.w3.org/)
- [MDN: HTML guidelines](https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [web.dev — Learn HTML](https://web.dev/learn/html/)

---

## Tóm tắt

- ✅ Viết thường, ngoặc kép, thụt lề nhất quán
- ✅ Tránh 20 lỗi phổ biến: thiếu alt, label, div-button, table layout...
- ✅ Validate bằng W3C Validator + Lighthouse trước khi deploy
- ✅ Đưa checklist vào code review và CI

---

## Kết thúc tutorial 🎉

Bạn đã hoàn thành 12 phần của khoá học HTML. Các bước tiếp theo:

1. **CSS**: Xem `tutorial-css/` — Flexbox, Grid, Responsive
2. **JavaScript**: Xem `tutorial-javascript/` — DOM APIs (Phần 18)
3. **TypeScript / Angular / Node.js**: các tutorial cùng thư mục

Chúc bạn học tốt! 🚀
