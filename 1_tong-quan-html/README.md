# PHẦN 1: TỔNG QUAN VỀ HTML

## 1.1. HTML là gì?

Mục này trả lời câu hỏi mở màn: HTML là gì, nó khác ngôn ngữ lập trình ở chỗ nào, và một tài liệu HTML trông ra sao.

**HTML (HyperText Markup Language)** — Ngôn ngữ đánh dấu siêu văn bản — là ngôn ngữ đánh dấu tiêu chuẩn được sử dụng để tạo và cấu trúc nội dung trên World Wide Web. HTML không phải là ngôn ngữ lập trình (không có logic, không tính toán); nó là **ngôn ngữ đánh dấu** — nghĩa là nó sử dụng các thẻ (tags) để xác định ý nghĩa và cấu trúc của nội dung. Ví von cho dễ hình dung: nếu ngôn ngữ lập trình là đầu bếp biết tính toán và xử lý tình huống, thì HTML chỉ là **đàn chú thích dán lên từng món nguyên liệu** — "đây là tiêu đề", "đây là đoạn văn", "đây là ảnh".

Một tài liệu HTML bao gồm các **phần tử (elements)**, mỗi phần tử được biểu diễn bằng thẻ mở và thẻ đóng. Phần tử có thể chứa văn bản, hình ảnh, liên kết, hoặc các phần tử khác.

### Ví dụ đơn giản

> 📄 **Code ví dụ:** [`examples/01-vi-du-on-gian.html`](examples/01-vi-du-on-gian.html)

Khi mở file này trong trình duyệt, bạn sẽ thấy tiêu đề "Chào mừng đến với HTML" và đoạn văn bản bên dưới. Trình duyệt **không hiển thị** các thẻ HTML; nó sử dụng chúng để xác định cách hiển thị nội dung.

> **Tóm gọn 1 câu:** HTML là "ngôn ngữ dán nhãn" chứ không phải "ngôn ngữ suy luận" — thẻ chỉ định nghĩa và cấu trúc nội dung, phần diễn xuất là việc của trình duyệt.

---

## 1.2. Lịch sử HTML

Mục này kể hành trình HTML từ 1991 đến nay. Đọc nó để hiểu vì sao ngày nay bạn chỉ cần một dòng `<!DOCTYPE html>` mà không cần khai báo phiên bản dài dòng như xưa.

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

> **Cách đọc bảng này:** mỗi dòng là một "nấc thang" lịch sử, đọc từ trên xuống dưới theo mốc thời gian; dòng in đậm 2014 là điểm rẽ quan trọng nhất — từ đó HTML không còn đánh số phiên bản nữa.

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

> **Cách đọc bảng này:** so sánh theo từng cột — cột giữa là kiểu "ra đĩa nhạc theo album" (mỗi bản phát hành cố định một lần), cột phải là kiểu "streaming cập nhật mỗi tuần". Nếu chỉ nhớ một dòng, hãy nhớ dòng **Mô hình**.

> **Tóm gọn 1 câu:** HTML ngày nay là Living Standard — giống một trang wiki cập nhật liên tục, không còn là "bản 5.0 đóng hộp" như trước.

---

## 1.3. DOCTYPE là gì?

Mục này nói về dòng đầu tiên của mọi file HTML — ngắn ngủi nhưng thiếu nó là trang web bị trình duyệt "diễn sai kịch bản".

`<!DOCTYPE html>` là **khai báo loại tài liệu** (Document Type Declaration). Nó nói cho trình duyệt biết phiên bản HTML nào đang được sử dụng để trình duyệt có thể hiển thị đúng. Hãy tưởng tượng đó là tờ giấy ủy quyền ở cửa: trình duyệt đọc dòng này trước để biết nên áp "luật chơi" nào cho trang của bạn.

### Tại sao cần DOCTYPE?

Trước HTML5, có nhiều phiên bản HTML và XHTML. Trình duyệt cần biết để hiển thị ở chế độ tương ứng:

- **Standards Mode ( quirks mode)**: Khi có DOCTYPE hợp lệ, trình duyệt hiển thị theo đặc tả web
- **Quirks Mode**: Khi không có DOCTYPE hoặc DOCTYPE cũ, trình duyệt mô phỏng cách hiển thị cũ — như tivi đời cũ tự chỉnh màu lung tung khi không nhận được tín hiệu chuẩn

### HTML5 DOCTYPE

> 📄 **Code ví dụ:** [`examples/02-html5-doctype.html`](examples/02-html5-doctype.html)

Đơn giản, ngắn gọn, hoạt động với mọi trình duyệt hiện đại. Đây là DOCTYPE duy nhất bạn cần sử dụng.

### DOCTYPE cũ (tham khảo)

> 📄 **Code ví dụ:** [`examples/03-doctype-cu-tham-khao.html`](examples/03-doctype-cu-tham-khao.html)

> **Lưu ý:** Không cần sử dụng các DOCTYPE cũ. `<!DOCTYPE html>` hoạt động cho mọi trang web hiện đại.

> **Tóm gọn 1 câu:** DOCTYPE là "giấy thông hành" mở đầu trang — có nó thì trình duyệt vào chế độ chuẩn, thiếu nó thì trang bị render theo luật cổ.

---

## 1.4. Cấu trúc cơ bản của tài liệu HTML

Mục này mổ xẻ một trang HTML thành từng bộ phận — đọc nó để biết trang nào cũng có bộ khung `<html>`, `<head>`, `<body>` như mọi ngôi nhà đều có móng, khung và mái.

### Giải phẫu một trang HTML

> 📄 **Code ví dụ:** [`examples/04-giai-phau-mot-trang-html.html`](examples/04-giai-phau-mot-trang-html.html)

### Phân biệt `<head>` và `<body>`

| Phần | Nội dung | Hiển thị? |
|------|----------|-----------|
| `<head>` | Meta data, title, link, script, style | Không |
| `<body>` | Nội dung người dùng nhìn thấy | Có |

> **Cách đọc bảng này:** đọc theo từng dòng, cột "Hiển thị?" là mấu chốt — `<head>` làm việc ngầm phía sau khung sân khấu, `<body>` mới là phần khán giả nhìn thấy.

### Quy tắc quan trọng

1. **Mọi trang phải có** `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
2. **Phần tử `<html>`** phải có thuộc tính `lang` để hỗ trợ trình đọc màn hình và dịch thuật
3. **`<head>` luôn đứng trước `<body>`**
4. **Chỉ có một `<body>` và một `<head>`** trong mỗi tài liệu

> **Tóm gọn 1 câu:** Mỗi trang HTML là một bộ khung cố định 4 lớp — DOCTYPE, html, head, body — xếp đúng thứ tự thì mọi thứ bên trong mới hoạt động chuẩn.

---

## 1.5. Cách trình duyệt phân tích HTML (Parsing)

Mục này mở nắp nồi xem trình duyệt "nấu" trang HTML của bạn như thế nào — từ cục byte thô đến hình ảnh hiển thị trên màn hình.

Khi trình duyệt nhận được một trang HTML, nó thực hiện các bước sau. Giống như một dây chuyền lắp ráp: nguyên liệu thô (bytes) đi qua từng trạm, đến trạm cuối mới thành sản phẩm hoàn chỉnh trên màn hình:

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

> **Tóm gọn 1 câu:** Trình duyệt đọc HTML như dây chuyền lắp ráp — bytes thành ký tự, ký tự thành token, token thành cây DOM, rồi mới render; hiểu dây chuyền thì bạn biết lỗi "tắc" ở trạm nào.

---

## 1.6. Phần tử khối (Block) vs Phần tử nội tuyến (Inline)

Mục này phân biệt hai "tính cách" của phần tử: loại thích chiếm nguyên một hàng (block) và loại only muốn đứng ghép đôi cùng dòng chữ (inline) — nền tảng để bạn xếp bố cục trang không bị lệch.

### Phần tử khối (Block-level)

Chiếm toàn bộ chiều rộng có sẵn, luôn bắt đầu trên dòng mới — như mỗi người chiếm nguyên một băng ghế ở rạp phim:

> 📄 **Code ví dụ:** [`examples/05-phan-tu-khoi-block-level.html`](examples/05-phan-tu-khoi-block-level.html)

### Phần tử nội tuyến (Inline)

Chỉ chiếm không gian cần thiết, nằm trên cùng dòng với nội dung xung quanh — như một chữ in đậm nằm giữa câu, không hề đòi riêng cả dòng:

> 📄 **Code ví dụ:** [`examples/06-phan-tu-noi-tuyen-inline.html`](examples/06-phan-tu-noi-tuyen-inline.html)

### Ví dụ minh họa

> 📄 **Code ví dụ:** [`examples/07-vi-du-minh-hoa.html`](examples/07-vi-du-minh-hoa.html)

> **Lưu ý:** Từ HTML5, sự phân biệt này không còn tuyệt đối. Ví dụ `<a>` và `<button>` có thể chứa phần tử khối trong HTML5. Tuy nhiên, vẫn nên hiểu khái niệm này để sử dụng CSS đúng cách.

> **Tóm gọn 1 câu:** Block là "người chiếm cả băng ghế", inline là "người ngồi ghép dòng" — nhớ tính cách này là bạn đoán được bố cục trước cả khi mở CSS.

---

## 1.7. Tạo trang HTML đầu tiên

Mục này là phần thực hành đầu tay: từ file trắng đến trang web chạy thật trong trình duyệt, chỉ trong 3 bước.

### Bước 1: Tạo file

Tạo file `index.html` với nội dung:

> 📄 **Code ví dụ:** [`examples/08-buoc-1-tao-file.html`](examples/08-buoc-1-tao-file.html)

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

> **Tóm gọn 1 câu:** Phần 1 trang bị "bộ khung xương + luật chơi": HTML dán nhãn nội dung, DOCTYPE khai báo chuẩn, và trình duyệt lắp ráp theo dây chuyền — nền tảng cho mọi phần sau.

---

**Phần tiếp theo:** [Cấu trúc trang](./2_cau-truc-trang/README.md) — Tìm hiểu sâu về `<head>`, `<body>`, meta tags và nền tảng SEO.
