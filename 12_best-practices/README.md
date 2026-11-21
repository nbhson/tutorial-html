# PHẦN 12: BEST PRACTICES — STYLE GUIDE, LỖI THƯỜNG GẶP, VALIDATOR

## 12.1. HTML Style Guide — Quy ước viết code

Mục này là "nội quy phòng làm việc chung": quy ước viết code để cả nhóm đọc code của nhau không phải đoán mò.

### 12.1.1. Quy ước chung

1. **Luôn khai báo DOCTYPE** ở dòng đầu tiên
2. **Viết thường** cho thẻ và thuộc tính
3. **Dùng ngoặc kép** cho giá trị thuộc tính
4. **Thụt lề 2 spaces** (hoặc 4 — chọn một, nhất quán toàn dự án)
5. **Một dòng một phần tử** cho các khối lớn

> 📄 **Code ví dụ:** [`examples/01-12-1-1-quy-uoc-chung.html`](examples/01-12-1-1-quy-uoc-chung.html)

### 12.1.2. Quy ước đặt tên

> 📄 **Code ví dụ:** [`examples/02-12-1-2-quy-uoc-at-ten.html`](examples/02-12-1-2-quy-uoc-at-ten.html)

### 12.1.3. Thứ tự thuộc tính khuyến nghị

> 📄 **Code ví dụ:** [`examples/03-12-1-3-thu-tu-thuoc-tinh-khuyen.html`](examples/03-12-1-3-thu-tu-thuoc-tinh-khuyen.html)

1. `class` → 2. `id` → 3. `name` → 4. `data-*` → 5. `src`, `href`, `for` → 6. `type`, `value` → 7. `title`, `alt` → 8. `role`, `aria-*` → 9. sự kiện (`onclick`...)

> **Tóm gọn 1 câu:** Style guide là "vệ sinh chung của cả nhà" — viết thường, ngoặc kép, thụt lề nhất quán, thứ tự thuộc tính ổn định để ai đọc cũng không phải đoán.

---

## 12.2. 20 lỗi HTML phổ biến và cách sửa

Mục này là "sách bệnh án" dày nhất của khóa học: 20 lỗi hay gặp nhất, kèm ví dụ sai/đúng — đọc một lần tiết kiệm vô số lần debug sau này.

### 12.2.1. Thiếu `alt` trên hình ảnh

> 📄 **Code ví dụ:** [`examples/04-12-2-1-thieu-alt-tren-hinh-anh.html`](examples/04-12-2-1-thieu-alt-tren-hinh-anh.html)

### 12.2.2. Dùng `<br>` để tạo khoảng cách thay vì CSS margin

> 📄 **Code ví dụ:** [`examples/05-12-2-2-dung-br-e-tao-khoang.html`](examples/05-12-2-2-dung-br-e-tao-khoang.html)

### 12.2.3. Dùng bảng để dàn layout

> 📄 **Code ví dụ:** [`examples/06-12-2-3-dung-bang-e-dan-layout.html`](examples/06-12-2-3-dung-bang-e-dan-layout.html)

### 12.2.4. Thẻ lồng sai

> 📄 **Code ví dụ:** [`examples/07-12-2-4-the-long-sai.html`](examples/07-12-2-4-the-long-sai.html)

### 12.2.5. Nhiều `<h1>` hoặc bỏ hẳn heading

Mỗi trang một `<h1>`; không nhảy cấp; không dùng heading chỉ vì muốn chữ to.

### 12.2.6. `<div>` làm nút bấm

> 📄 **Code ví dụ:** [`examples/08-12-2-6-div-lam-nut-bam.html`](examples/08-12-2-6-div-lam-nut-bam.html)

### 12.2.7. Thiếu `label` cho input

> 📄 **Code ví dụ:** [`examples/09-12-2-7-thieu-label-cho-input.html`](examples/09-12-2-7-thieu-label-cho-input.html)

### 12.2.8. Nhầm `<b>`/`<i>` với `<strong>`/`<em>`

Dùng `<strong>`/`<em>` khi mang ngữ nghĩa; `<b>`/`<i>` chỉ cho mục đích thị giác.

### 12.2.9. Nhiều `id` trùng lặp

> 📄 **Code ví dụ:** [`examples/10-12-2-9-nhieu-id-trung-lap.html`](examples/10-12-2-9-nhieu-id-trung-lap.html)

### 12.2.10. Thiếu `alt=""` cho ảnh trang trí

Ảnh trang trí **cần `alt=""`** (rỗng) — để screen reader bỏ qua, KHÔNG bỏ thuộc tính `alt`.

### 12.2.11. Quên đóng thẻ

> 📄 **Code ví dụ:** [`examples/11-12-2-11-quen-ong-the.html`](examples/11-12-2-11-quen-ong-the.html)

### 12.2.12. Dùng `target="_blank"` không có `rel="noopener"`

> 📄 **Code ví dụ:** [`examples/12-12-2-12-dung-target-blank-khong-co.html`](examples/12-12-2-12-dung-target-blank-khong-co.html)

### 12.2.13. Thẻ `<script>` không có `defer`

Xem [Phần 10](../10_performance/README.md) — dùng `defer`/`module`.

### 12.2.14. Thiếu `width`/`height` cho `<img>` → CLS

### 12.2.15. Thẻ `<a href="#">` làm button

> 📄 **Code ví dụ:** [`examples/13-12-2-15-the-a-href-lam-button.html`](examples/13-12-2-15-the-a-href-lam-button.html)

> **Tóm gọn 1 câu:** 20 lỗi trên đều chung một gốc: dùng thẻ sai vai — thẻ nào đóng vai gì thì để thẻ đó diễn, đừng cast nhầm vai vì tiện tay.

### 12.2.16. Nhồi inline style

→ Chuyển sang class CSS.

### 12.2.17. Dùng `<section>` thay `<div>` vô tội vạ

`<section>` cần có **tiêu đề**; nếu chỉ để style, dùng `<div>`.

### 12.2.18. Thiếu `lang` trên `<html>`

> 📄 **Code ví dụ:** [`examples/14-12-2-18-thieu-lang-tren-html.html`](examples/14-12-2-18-thieu-lang-tren-html.html)

### 12.2.19. Dùng heading để làm chữ to/màu

Định dạng thị giác là việc của CSS.

### 12.2.20. Thiếu meta viewport

Trên mobile trang sẽ hiển thị như desktop thu nhỏ — thêm viewport meta.

---

## 12.3. Validator — Kiểm tra HTML hợp lệ

Mục này nói về "bác sĩ kiểm tra sức khỏe định kỳ": validator — máy móc soi lỗi cú pháp thay cho đôi mắt đã mòn mỏi của bạn.

### W3C Markup Validator

- URL: **https://validator.w3.org/**
- Nhập URL, upload file, hoặc paste code

### Cách khác

> 📄 **Code ví dụ:** [`examples/15-cach-khac.sh`](examples/15-cach-khac.sh)

### VS Code extension

- **HTMLHint** — lint HTML
- **Lighthouse** — built-in trong Chrome DevTools

### Kiểm tra tự động trong CI

> 📄 **Code ví dụ:** [`examples/16-kiem-tra-tu-ong-trong-ci.yaml`](examples/16-kiem-tra-tu-ong-trong-ci.yaml)

---

## 12.4. Checklist cuối cùng trước khi publish

Mục này là "điểm danh trước khi xuất quân": 4 nhóm kiểm tra — cấu trúc, a11y, SEO/hiệu năng, bảo mật — rà từng ô trước khi bấm deploy.

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

> **Tóm gọn 1 câu:** Checklist này là "kiểm tra an toàn trước khi cất cánh" — 4 nhóm ô đều xanh thì trang mới đáng để public.

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

> **Tóm gọn 1 câu:** Phần cuối là "cẩm nang giữ hình": style guide giữ code đồng đều, validator bắt lỗi máy móc, checklist chốt cửa trước khi publish.

---

## Kết thúc tutorial 🎉

Bạn đã hoàn thành 12 phần của khoá học HTML. Các bước tiếp theo:

1. **CSS**: Xem `tutorial-css/` — Flexbox, Grid, Responsive
2. **JavaScript**: Xem `tutorial-javascript/` — DOM APIs (Phần 18)
3. **TypeScript / Angular / Node.js**: các tutorial cùng thư mục

Chúc bạn học tốt! 🚀
