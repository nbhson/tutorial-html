# PHẦN 1: TỔNG QUAN VỀ HTML

## 1.1. HTML là gì?

**HTML (HyperText Markup Language)** — Ngôn ngữ đánh dấu siêu văn bản — là ngôn ngữ đánh dấu tiêu chuẩn được sử dụng để tạo và cấu trúc nội dung trên World Wide Web. HTML không phải là ngôn ngữ lập trình (không có logic, không tính toán); nó là **ngôn ngữ đánh dấu** — nghĩa là nó sử dụng các thẻ (tags) để xác định ý nghĩa và cấu trúc của nội dung.

Một tài liệu HTML bao gồm các **phần tử (elements)**, mỗi phần tử được biểu diễn bằng thẻ mở và thẻ đóng. Phần tử có thể chứa văn bản, hình ảnh, liên kết, hoặc các phần tử khác.

### Ví dụ đơn giản

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Trang web đầu tiên</title>
</head>
<body>
    <h1>Chào mừng đến với HTML</h1>
    <p>Đây là đoạn văn bản đầu tiên của tôi.</p>
</body>
</html>
```

Khi mở file này trong trình duyệt, bạn sẽ thấy tiêu đề "Chào mừng đến với HTML" và đoạn văn bản bên dưới. Trình duyệt **không hiển thị** các thẻ HTML; nó sử dụng chúng để xác định cách hiển thị nội dung.

---

## 1.2. Lịch sử HTML

### Các phiên bản quan trọng

| Năm | Phiên bản | Mô tả |
|-----|-----------|--------|
| 1991 | HTML 1.0 | Phiên bản đầu tiên, rất đơn giản |
| 1995 | HTML 2.0 | Tiêu chuẩn đầu tiên (RFC 1866) |
| 1997 | HTML 3.2 | Hỗ trợ bảng, applet, text flow |
| 1999 | HTML 4.01 | Script, CSS, frames, internationalization |
| 2000 | XHTML 1.0 | HTML viết theo cú pháp XML nghiêm ngặt |
| 2012 | HTML5 (Working Draft) | Bản nháp làm việc đầu tiên |
| **2014** | **HTML5 (W3C Recommendation)** | **Lần cuối HTML có số phiên bản** |
| 2019–nay | HTML Living Standard (WHATWG) | Duy trì liên tục, không có phiên bản cố định |

### HTML Living Standard (WHATWG)

Từ năm 2019, WHATWG và W3C đã ký thỏa thuận hợp tác trên một phiên bản HTML duy nhất. Đặc biệt:

- **HTML5 không còn là "phiên bản"** — mà là tên gọi chung cho nền tảng web hiện đại
- **HTML Living Standard** được cập nhật liên tục (tuần tự), không có số phiên bản
- Tính năng mới được thêm vào khi trình duyệt hỗ trợ, không cần đợi phiên bản lớn
- Trạng thái hiện tại: cập nhật ngày **26 tháng 10, 2026**

### Sự khác biệt giữa W3C HTML5 và WHATWG Living Standard

| Khía cạnh | W3C HTML5 | WHATWG Living Standard |
|-----------|-----------|------------------------|
| Mô hình | Phát hành theo phiên bản | Liên tục, "living" |
| URL | https://www.w3.org/TR/html/ | https://html.spec.whatwg.org/ |
| Quản lý | W3C HTML Working Group | WHATWG |
| Mục tiêu | Đặc tả hoàn chỉnh, snapshot | Đặc tả luôn được cập nhật |

---

## 1.3. DOCTYPE là gì?

`<!DOCTYPE html>` là **khai báo loại tài liệu** (Document Type Declaration). Nó nói cho trình duyệt biết phiên bản HTML nào đang được sử dụng để trình duyệt có thể hiển thị đúng.

### Tại sao cần DOCTYPE?

Trước HTML5, có nhiều phiên bản HTML và XHTML. Trình duyệt cần biết để hiển thị ở chế độ tương ứng:

- **Standards Mode ( quirks mode)**: Khi có DOCTYPE hợp lệ, trình duyệt hiển thị theo đặc tả web
- **Quirks Mode**: Khi không có DOCTYPE hoặc DOCTYPE cũ, trình duyệt mô phỏng cách hiển thị cũ

### HTML5 DOCTYPE

```html
<!DOCTYPE html>
```

Đơn giản, ngắn gọn, hoạt động với mọi trình duyệt hiện đại. Đây là DOCTYPE duy nhất bạn cần sử dụng.

### DOCTYPE cũ (tham khảo)

```html
<!-- HTML 4.01 Strict -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<!-- XHTML 1.0 Transitional -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

> **Lưu ý:** Không cần sử dụng các DOCTYPE cũ. `<!DOCTYPE html>` hoạt động cho mọi trang web hiện đại.

---

## 1.4. Cấu trúc cơ bản của tài liệu HTML

### Giải phẫu một trang HTML

```html
<!DOCTYPE html>                    <!-- 1. Khai báo loại tài liệu -->
<html lang="vi">                    <!-- 2. Phần tử gốc, khai báo ngôn ngữ -->
<head>                             <!-- 3. Thông tin meta (không hiển thị) -->
    <meta charset="UTF-8">          <!--    Mã hóa ký tự -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiêu đề trang</title>    <!--    Tiêu đề hiển thị trên tab trình duyệt -->
    <link rel="stylesheet" href="style.css">
</head>
<body>                             <!-- 4. Nội dung hiển thị (visible) -->
    <header>
        <h1>Logo</h1>
        <nav>
            <a href="/">Trang chủ</a>
            <a href="/about">Giới thiệu</a>
        </nav>
    </header>
    <main>
        <h2>Nội dung chính</h2>
        <p>Xin chào thế giới!</p>
    </main>
    <footer>
        <p>&copy; 2026</p>
    </footer>
</body>
</html>
```

### Phân biệt `<head>` và `<body>`

| Phần | Nội dung | Hiển thị? |
|------|----------|-----------|
| `<head>` | Meta data, title, link, script, style | Không |
| `<body>` | Nội dung người dùng nhìn thấy | Có |

### Quy tắc quan trọng

1. **Mọi trang phải có** `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
2. **Phần tử `<html>`** phải có thuộc tính `lang` để hỗ trợ trình đọc màn hình và dịch thuật
3. **`<head>` luôn đứng trước `<body>`**
4. **Chỉ có một `<body>` và một `<head>`** trong mỗi tài liệu

---

## 1.5. Cách trình duyệt phân tích HTML (Parsing)

Khi trình duyệt nhận được một trang HTML, nó thực hiện các bước sau:

```
Network → HTML bytes → Decode (charset) → Tokenize → Build DOM → Build CSSOM → Render
```

1. **Nhận bytes**: Trình duyệt nhận dữ liệu HTML dưới dạng bytes từ server
2. **Decode**: Chuyển bytes thành ký tự (dựa vào `charset`)
3. **Tokenize**: Tách thành các token (thẻ mở, thẻ đóng, văn bản)
4. **Build DOM**: Xây dựng cây DOM (Document Object Model)
5. **Render**: Kết hợp DOM + CSSOM để hiển thị lên màn hình

### Ví dụ DOM Tree

```
html
├── head
│   ├── meta (charset)
│   ├── title
│   └── link (stylesheet)
└── body
    ├── header
    │   ├── h1
    │   └── nav
    │       └── a
    ├── main
    │   ├── h2
    │   └── p
    └── footer
```

Hiểu cách trình duyệt phân tích HTML giúp bạn viết code hiệu quả hơn và debug nhanh hơn.

---

## 1.6. Phần tử khối (Block) vs Phần tử nội tuyến (Inline)

### Phần tử khối (Block-level)

Chiếm toàn bộ chiều rộng có sẵn, luôn bắt đầu trên dòng mới:

```html
<!-- Các phần tử khối phổ biến -->
<div>, <p>, <h1>–<h6>, <ul>, <ol>, <li>, <table>, <form>, <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>, <figure>, <blockquote>
```

### Phần tử nội tuyến (Inline)

Chỉ chiếm không gian cần thiết, nằm trên cùng dòng với nội dung xung quanh:

```html
<!-- Các phần tử nội tuyến phổ biến -->
<span>, <a>, <strong>, <em>, <img>, <input>, <label>, <button>, <select>, <textarea>
```

### Ví dụ minh họa

```html
<!-- Phần tử khối: mỗi phần tử trên một dòng mới -->
<div style="background: #e0e0e0; margin: 8px 0;">
    <p>Đây là đoạn văn — phần tử khối.</p>
    <p>Tiếp tục đoạn văn khác.</p>
</div>

<!-- Phần tử nội tuyến: nằm cùng dòng -->
<p>
    Văn bản bình thường,
    <strong>in đậm</strong>,
    <em>in nghiêng</em>,
    <a href="#">liên kết</a>,
    và <span style="color: red;">span</span>.
</p>
```

> **Lưu ý:** Từ HTML5, sự phân biệt này không còn tuyệt đối. Ví dụ `<a>` và `<button>` có thể chứa phần tử khối trong HTML5. Tuy nhiên, vẫn nên hiểu khái niệm này để sử dụng CSS đúng cách.

---

## 1.7. Tạo trang HTML đầu tiên

### Bước 1: Tạo file

Tạo file `index.html` với nội dung:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang web đầu tiên của tôi</title>
</head>
<body>
    <h1>Xin chào, thế giới!</h1>
    <p>Đây là trang web đầu tiên tôi tự tạo bằng HTML.</p>
    <p>Tôi đang học HTML từ tutorial này.</p>
</body>
</html>
```

### Bước 2: Mở trong trình duyệt

- **Windows/macOS/Linux**: Double-click vào file `index.html`
- **VS Code**: Cài extension "Live Server", right-click → "Open with Live Server"

### Bước 3: Kiểm tra với DevTools

Nhấn `F12` hoặc `Cmd+Option+I` (macOS) để mở Developer Tools, tab **Elements** để xem cấu trúc DOM.

---

## 1.8. Tài liệu tham khảo

- [HTML Living Standard](https://html.spec.whatwg.org/) — Đặc tả chính thức
- [MDN: HTML basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [WHATWG FAQ](https://whatwg.org/faq)

---

## Tóm tắt

Trong phần này, bạn đã học được:

- ✅ HTML là ngôn ngữ đánh dấu để tạo cấu trúc trang web
- ✅ Lịch sử HTML từ 1.0 đến HTML Living Standard 2026
- ✅ DOCTYPE và vai trò của nó
- ✅ Cấu trúc cơ bản của tài liệu HTML
- ✅ Cách trình duyệt phân tích HTML
- ✅ Phân biệt phần tử khối và phần tử nội tuyến

---

**Phần tiếp theo:** [Cấu trúc trang](./2_cau-truc-trang/README.md) — Tìm hiểu sâu về `<head>`, `<body>`, meta tags và nền tảng SEO.
