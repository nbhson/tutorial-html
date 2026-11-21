# PHẦN 2: CẤU TRÚC TRANG HTML — `<head>`, `<body>`, META TAGS

## 2.1. Phần tử `<html>`

Mục này nói về "cổ chai" bao trùm cả trang: thẻ `<html>` — mọi thứ khác đều nằm bên trong nó.

Phần tử `<html>` là phần tử **gốc (root element)** của mọi tài liệu HTML. Mọi phần tử khác phải nằm bên trong nó — giống như mọi người trong gia đình đều sống trong cùng một mái nhà.

### Thuộc tính quan trọng

> 📄 **Code ví dụ:** [`examples/01-thuoc-tinh-quan-trong.html`](examples/01-thuoc-tinh-quan-trong.html)

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `lang` | Ngôn ngữ của tài liệu (`vi` = tiếng Việt, `en` = tiếng Anh) |
| `dir` | Hướng văn bản: `ltr` (trái → phải) hoặc `rtl` (phải → trái) |

> **Cách đọc bảng này:** mỗi dòng là một "cài đặt ngôn ngữ" cho cả trang — `lang` trả lời câu hỏi "trang này nói tiếng gì", `dir` trả lời "chữ chạy từ bên nào sang bên nào".

### Tại sao `lang` quan trọng?

- **Trình đọc màn hình (screen reader)** chọn đúng giọng đọc
- **Công cụ tìm kiếm** hiểu nội dung thuộc ngôn ngữ nào
- **Trình duyệt** đề nghị dịch trang
- **CSS** có thể chọn phần tử theo ngôn ngữ: `:lang(vi)`

> 📄 **Code ví dụ:** [`examples/02-tai-sao-lang-quan-trong.css`](examples/02-tai-sao-lang-quan-trong.css)

> **Tóm gọn 1 câu:** `lang` là "giấy khai báo quốc tịch" của trang — trình đọc màn hình, Google và trình duyệt đều dựa vào nó mà hành xử đúng.

---

## 2.2. Phần tử `<head>` — Bộ não của trang

Mục này vào "phòng điều khiển" của trang: nơi chứa mọi thông tin điều hành mà khách không nhìn thấy nhưng thiếu là trang rối loạn.

`<head>` chứa **metadata** (dữ liệu về dữ liệu) — thông tin về trang mà người dùng không nhìn thấy trực tiếp nhưng rất quan trọng cho trình duyệt, công cụ tìm kiếm, và mạng xã hội. Hãy hình dung `<head>` như **phòng lái của máy bay**: hành khách không được vào, nhưng máy bay bay được hay không lại phụ thuộc vào đó.

### Danh sách đầy đủ các phần tử trong `<head>`

> 📄 **Code ví dụ:** [`examples/03-danh-sach-ay-u-cac-phan-tu-trong.html`](examples/03-danh-sach-ay-u-cac-phan-tu-trong.html)

> **Quan trọng:** `<head>` phải là phần tử con đầu tiên của `<html>`, đứng trước `<body>`. Trong `<head>` chỉ được chứa: `<title>`, `<meta>`, `<link>`, `<style>`, `<script>`, `<base>`, `<noscript>`, `<template>`.

> **Tóm gọn 1 câu:** `<head>` là phòng điều khiển ngầm — nơi khai báo danh tính, ngôn ngữ và cách nạp tài nguyên của trang, không một chút nội dung hiển thị nào.

---

## 2.3. Phần tử `<title>`

Mục này nói về "tấm biển hiệu" của trang: cái tên hiện lên ở tab trình duyệt và trên kết quả tìm kiếm Google.

Tiêu đề trang hiển thị ở **tab trình duyệt**, **kết quả tìm kiếm Google**, và **lịch sử duyệt web** — như tấm biển hiệu của quán: người ta nhìn biển trước, rồi mới quyết định bước vào hay không.

### Nguyên tắc viết `<title>`

> 📄 **Code ví dụ:** [`examples/04-nguyen-tac-viet-title.html`](examples/04-nguyen-tac-viet-title.html)

- Mỗi trang **phải có** `<title>` duy nhất (yêu cầu của WCAG 2.2 — tiêu chí 2.4.2 Page Titled)
- Google hiển thị khoảng **50–60 ký tự**; phần còn lại bị cắt bằng "…"

> **Tóm gọn 1 câu:** `<title>` là biển hiệu ngắn 50–60 ký tự — viết đúng thì cả tab trình duyệt lẫn Google đều "bắt đúng sóng".

---

## 2.4. Meta tags quan trọng

Mục này đi qua 4 tấm "thẻ căn cước" metadata thiết yếu: charset, viewport, description và vài thẻ khác — mỗi thẻ giải quyết một vấn đề riêng.

### 2.4.1. `charset` — Mã hóa ký tự

> 📄 **Code ví dụ:** [`examples/05-2-4-1-charset-ma-hoa-ky-tu.html`](examples/05-2-4-1-charset-ma-hoa-ky-tu.html)

- **UTF-8** là chuẩn duy nhất nên dùng — hỗ trợ mọi ngôn ngữ, kể cả tiếng Việt
- Phải nằm trong **1024 byte đầu tiên** của tài liệu — đặt ngay đầu `<head>`
- Thiếu `charset` → ký tự tiếng Việt hiển thị thành "Xin chÃ o"

### 2.4.2. `viewport` — Tối ưu di động

> 📄 **Code ví dụ:** [`examples/06-2-4-2-viewport-toi-uu-di-ong.html`](examples/06-2-4-2-viewport-toi-uu-di-ong.html)

| Giá trị | Ý nghĩa |
|---------|---------|
| `width=device-width` | Chiều rộng trang = chiều rộng màn hình thiết bị |
| `initial-scale=1.0` | Mức zoom ban đầu 100% |

> **Cách đọc bảng này:** hai giá trị này luôn đi cặp với nhau trong cùng một thẻ meta — dòng trên bảo "co giãn theo màn hình", dòng dưới bảo "không tự zoom lung tung khi vừa mở".

> **Lưu ý:** Không dùng `user-scalable=no` hay `maximum-scale=1` — hành vi này chặn người dùng phóng to, vi phạm WCAG 2.2 (tiêu chí 1.4.4 Resize Text).

### 2.4.3. `description` — Mô tả tìm kiếm

> 📄 **Code ví dụ:** [`examples/07-2-4-3-description-mo-ta-tim-kiem.html`](examples/07-2-4-3-description-mo-ta-tim-kiem.html)

- Google không dùng làm yếu tố xếp hạng trực tiếp, nhưng ảnh hưởng **tỷ lệ click (CTR)**
- Độ dài khuyến nghị: **150–160 ký tự**
- Google có thể tự viết lại description từ nội dung trang

### 2.4.4. Các meta tags khác

> 📄 **Code ví dụ:** [`examples/08-2-4-4-cac-meta-tags-khac.html`](examples/08-2-4-4-cac-meta-tags-khac.html)

---

## 2.5. Phần tử `<body>` — Nội dung hiển thị

Mọi thứ người dùng nhìn thấy nằm trong `<body>`:

> 📄 **Code ví dụ:** [`examples/09-2-5-phan-tu-body-noi-dung-hien.html`](examples/09-2-5-phan-tu-body-noi-dung-hien.html)

### Sự kiện trên `<body>` (tham khảo, nên dùng `window` thay thế)

> 📄 **Code ví dụ:** [`examples/10-su-kien-tren-body-tham-khao-nen-dung.html`](examples/10-su-kien-tren-body-tham-khao-nen-dung.html)

---

## 2.6. Thứ tự tải tài nguyên trong `<head>`

Mục này nói về "món nào nấu trước, món nào nấu sau": CSS và JS được nạp theo thứ tự nào, và vì sao script không kiểm soát sẽ làm trang đứng hình.

### Critical Rendering Path

```
HTML → DOM
     → CSS (head) → CSSOM
     → JS (blocking!) → chặn parse HTML
```

### Các cách nạp CSS/JS

> 📄 **Code ví dụ:** [`examples/11-cac-cach-nap-css-js.html`](examples/11-cac-cach-nap-css-js.html)

| Thuộc tính | Tải song song? | Thời điểm chạy | Đảm bảo thứ tự? |
|-----------|---------------|----------------|-----------------|
| (không) | ❌ | Ngay, chặn parse | ✅ |
| `async` | ✅ | Ngay khi tải xong | ❌ |
| `defer` | ✅ | Sau khi parse DOM xong | ✅ |
| `type="module"` | ✅ | Sau khi parse DOM xong | ✅ |

> **Khuyến nghị 2026:** Hầu như luôn dùng `defer` hoặc `type="module"`. Xem chi tiết tại [Phần 10: Hiệu năng](../10_performance/README.md).

> **Tóm gọn 1 câu:** Thứ tự nạp script quyết định tốc độ trang — để script "xếp hàng đợi" bằng `defer` thay vì xô ra giữa đường chặn parse.

---

## 2.7. Template trang chuẩn 2026

Mục này gói tất cả kiến thức ở trên vào một mẫu "nhà hình chữ L" dùng được ngay: copy về là có trang chuẩn mà không phải nhớ từng quy tắc.

> 📄 **Code ví dụ:** [`examples/12-2-7-template-trang-chuan-2026.html`](examples/12-2-7-template-trang-chuan-2026.html)

---

## 2.8. Các lỗi phổ biến

Mục này là "bệnh án" tổng hợp: từng lỗi hay gặp, hậu quả của nó và đơn thuốc sửa — đọc trước để khỏi tái khám sau khi deploy.

| Lỗi | Hậu quả | Cách sửa |
|-----|---------|----------|
| Thiếu `<meta charset="UTF-8">` | Lỗi ký tự tiếng Việt | Thêm vào đầu `<head>` |
| Thiếu `<meta viewport>` | Trang phóng to trên mobile | Thêm viewport chuẩn |
| Nhiều thẻ `<title>` | Google chọn tùy ý | Chỉ giữ 1 |
| `title` trống hoặc "Untitled" | SEO kém, a11y kém | Viết title mô tả |
| Script không defer | LCP chậm | Dùng `defer`/`module` |
| Meta description trùng giữa các trang | Google tự đặt mô tả | Viết unique cho từng trang |

> **Cách đọc bảng này:** đọc theo hướng trái → phải như đọc một toa thuốc: cột "Lỗi" là bệnh, "Hậu quả" là triệu chứng, "Cách sửa" là đơn thuốc — khi trang có dấu hiệu lạ, dò theo cột giữa để tìm bệnh.

---

## 2.9. Kiểm tra nhanh với DevTools

Mục này chỉ cho bạn cách "soi X-quang" trang bằng DevTools — xác nhận mọi thứ ở trên đã được khai báo đúng chưa.

> 📄 **Code ví dụ:** [`examples/13-2-9-kiem-tra-nhanh-voi-devtools.js`](examples/13-2-9-kiem-tra-nhanh-voi-devtools.js)

---

## 2.10. Tài liệu tham khảo

- [MDN: The head metadata in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [WHATWG HTML — The head element](https://html.spec.whatwg.org/multipage/semantics.html#the-head-element)
- [web.dev — Learn HTML: head](https://web.dev/learn/html/head/)

---

## Tóm tắt

- ✅ `<head>` chứa metadata: title, meta, link, script, style
- ✅ 3 thẻ bắt buộc: `charset`, `viewport`, `title`
- ✅ `lang` trên `<html>` phục vụ accessibility và SEO
- ✅ `defer` / `async` / `module` điều khiển thứ tự tải script
- ✅ Meta description, Open Graph, canonical là nền tảng SEO (chi tiết ở Phần 9)

> **Tóm gọn 1 câu:** Phần 2 dạy bạn trang bị "phòng điều khiển" của trang web — ba thẻ bắt buộc (charset, viewport, title) đúng chỗ thì trang vừa hiển thị chuẩn vừa thân thiện với Google.

---

**Phần tiếp theo:** [Thẻ HTML cơ bản](../3_the-co-ban/README.md) — Các thẻ thông dụng nhất: văn bản, liên kết, hình ảnh, danh sách, bảng.
