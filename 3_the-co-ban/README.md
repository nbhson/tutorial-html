# PHẦN 3: THẺ HTML CƠ BẢN

## 3.1. Tiêu đề — `<h1>` đến `<h6>`

Mục này nói về "hệ thống biển chỉ đường" của trang: 6 cấp tiêu đề — đọc nó để biết vì sao tiêu đề không chỉ để chữ to mà còn là bản đồ cho Google và người dùng màn hình.

HTML cung cấp 6 cấp tiêu đề, từ `<h1>` (quan trọng nhất) đến `<h6>` (ít quan trọng nhất). Hãy hình dung như văn phòng phẩm: `<h1>` là tiêu đề báo cáo, `<h2>` là tên chương, `<h3>` là tên mục — có hệ thống thì ai đọc cũng định vị được.

> 📄 **Code ví dụ:** [`examples/01-3-1-tieu-e-h1-en-h6.html`](examples/01-3-1-tieu-e-h1-en-h6.html)

### Quy tắc vàng

1. **Mỗi trang chỉ nên có một `<h1>`** — tiêu đề chủ đề chính của trang
2. **Không nhảy cấp**: `<h1>` → `<h3>` là sai cấu trúc; dùng tuần tự `<h1>` → `<h2>` → `<h3>`
3. **Dùng tiêu đề theo cấu trúc ngữ nghĩa, KHÔNG dùng để chỉnh cỡ chữ** (việc đó là của CSS)
4. Công cụ tìm kiếm và trình đọc màn hình dùng tiêu đề để tạo **mục lục (outline)** của trang

> 📄 **Code ví dụ:** [`examples/02-quy-tac-vang.html`](examples/02-quy-tac-vang.html)

> **Tóm gọn 1 câu:** Tiêu đề là mục lục sống của trang — một `<h1>` duy nhất, không nhảy cấp, và tuyệt đối không dùng heading làm "nút chỉnh cỡ chữ".

---

## 3.2. Đoạn văn và văn bản — `<p>`, định dạng chữ

Mục này là "hộp bút" của trang: các thẻ viết văn hằng ngày — từ đoạn văn `<p>` đến bộ công cụ in đậm, in nghiêng, đánh dấu.

> 📄 **Code ví dụ:** [`examples/03-3-2-oan-van-va-van-ban-p.html`](examples/03-3-2-oan-van-va-van-ban-p.html)

### Thẻ định dạng văn bản quan trọng

| Thẻ | Ý nghĩa | Ví dụ |
|-----|---------|-------|
| `<strong>` | **Quan trọng, mạnh mẽ (ngữ nghĩa)** | `<strong>Cảnh báo!</strong>` |
| `<em>` | *Nhấn mạnh (emphasis)* | `<em>Thật sao?</em>` |
| `<b>` | In đậm thuần túy (không ngữ nghĩa) | `<b>bold</b>` |
| `<i>` | In nghiêng, thuật ngữ, tên phim | `<i>Terminator</i>` |
| `<u>` | Gạch chân (chú thích, lỗi chính tả) | `<u>Wensday</u>` |
| `<mark>` | Đánh dấu nổi bật như bút dạ | `<mark>từ khóa</mark>` |
| `<small>` | Chú thích nhỏ, bản quyền | `<small>© 2026</small>` |
| `<del>` | Nội dung đã xóa | `<del>500k</del>` |
| `<ins>` | Nội dung thêm mới | `<ins>350k</ins>` |
| `<sub>` | Chỉ số dưới | `H<sub>2</sub>O` |
| `<sup>` | Chỉ số trên | `m<sup>2</sup>` |

> **Cách đọc bảng này:** mỗi dòng là một "loại bút" trong hộp bút — cột giữa nói ý nghĩa, cột phải cho thấy nó hiển thị ra sao; so sánh `<strong>` với `<b>` ở hai dòng đầu để thấy khác biệt "có ngữ nghĩa" và "chỉ có vẻ ngoài".

> **Khác biệt `<strong>` vs `<b>`:** `<strong>` mang ngữ nghĩa "quan trọng" — trình đọc màn hình đọc với ngữ điệu nhấn mạnh. `<b>` chỉ là định dạng trực quan. Ưu tiên `<strong>` và `<em>`; chỉ dùng `<b>`, `<i>` khi không có ý nghĩa ngữ nghĩa.

> **Tóm gọn 1 câu:** Chọn thẻ định dạng như chọn bút: `<strong>`/`<em>` là bút có mùi mực "nói lên ý", `<b>`/`<i>` chỉ là bút tô màu — ưu tiên loại có ý.

### Ngắt dòng và ngăn cách

> 📄 **Code ví dụ:** [`examples/04-ngat-dong-va-ngan-cach.html`](examples/04-ngat-dong-va-ngan-cach.html)

---

## 3.3. Liên kết — `<a>`

Mục này nói về "cây cầu" của web: thẻ `<a>` — thứ đã làm nên chữ T trong WWW, và cả những thuộc tính bảo mật đi kèm mà nhiều người bỏ quên.

> 📄 **Code ví dụ:** [`examples/05-3-3-lien-ket-a.html`](examples/05-3-3-lien-ket-a.html)

### Thuộc tính `rel` — quan trọng cho SEO và bảo mật

| Giá trị | Ý nghĩa |
|---------|---------|
| `noopener` | Bắt buộc khi `target="_blank"` — chặn tấn công tabnabbing |
| `noreferrer` | Không gửi referrer |
| `nofollow` | Báo Google không truyền PageRank (liên kết quảng cáo, UGC) |
| `ugc` | Liên kết do người dùng tạo (bình luận, diễn đàn) |
| `sponsored` | Liên kết quảng cáo, tài trợ |

> **Cách đọc bảng này:** mỗi dòng là một "con dấu" dán lên liên kết để nói với trình duyệt và Google liên kết này đáng tin đến mức nào — dòng đầu tiên (`noopener`) là con dấu bắt buộc về bảo mật, còn lại là con dấu cho Google.

> **Bảo mật:** Từ năm 2021, trình duyệt hiện đại tự áp dụng `noopener` cho mọi `target="_blank"`, nhưng nên ghi rõ để tương thích trình duyệt cũ.

> **Tóm gọn 1 câu:** Liên kết mở tab mới phải đeo `rel="noopener"` — giống như cho khách mượn chìa khóa phòng riêng chứ không phải chìa khóa cả toà nhà.

---

## 3.4. Hình ảnh — `<img>`

Mục này nói về thẻ `<img>` và bộ thuộc tính đi kèm — cách chèn ảnh vừa hiển thị đẹp, vừa không làm trang "nhảy nhót" khi tải.

> 📄 **Code ví dụ:** [`examples/06-3-4-hinh-anh-img.html`](examples/06-3-4-hinh-anh-img.html)

### Các thuộc tính quan trọng

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `src` | Đường dẫn ảnh (bắt buộc) |
| `alt` | Văn bản thay thế — bắt buộc cho accessibility & SEO |
| `width`, `height` | Đặt kích thước → tránh layout shift (CLS) |
| `loading="lazy"` | Tải chậm khi cuộn gần đến (Chrome 76+, Safari 15.4+, Firefox 75+) |
| `decoding="async"` | Giải mã không chặn luồng chính |
| `srcset`, `sizes` | Responsive images (xem Phần 8) |

> **Cách đọc bảng này:** đọc theo cột "Ý nghĩa" từ trên xuống theo thứ tự quan trọng — `src` và `alt` là bắt buộc, các dòng dưới là tối ưu nên có; cột "Thuộc tính" là tên dùng ngay trong thẻ.

### Viết `alt` đúng cách

> 📄 **Code ví dụ:** [`examples/07-viet-alt-ung-cach.html`](examples/07-viet-alt-ung-cach.html)

> **Tóm gọn 1 câu:** Một thẻ `<img>` tử tế cần đủ 3 thứ: đường dẫn `src`, văn bản `alt`, và kích thước `width`/`height` — thiếu cái nào là trang chịu một cái giá.

---

## 3.5. Danh sách — `<ul>`, `<ol>`, `<dl>`

Mục này nói về ba kiểu "gạch đầu dòng": danh sách không thứ tự, có thứ tự, và danh sách mô tả — mỗi kiểu cho một dạng nội dung khác nhau.

### Danh sách không thứ tự

> 📄 **Code ví dụ:** [`examples/08-danh-sach-khong-thu-tu.html`](examples/08-danh-sach-khong-thu-tu.html)

### Danh sách có thứ tự

> 📄 **Code ví dụ:** [`examples/09-danh-sach-co-thu-tu.html`](examples/09-danh-sach-co-thu-tu.html)

### Danh sách mô tả

> 📄 **Code ví dụ:** [`examples/10-danh-sach-mo-ta.html`](examples/10-danh-sach-mo-ta.html)

> **Lưu ý:** Dùng `list-style: none` trong CSS là đủ để ẩn bullet; **không** lạm dụng `<ul>` + CSS để tạo menu khi cấu trúc không phải danh sách. Ngược lại, menu điều hướng thật sự nên dùng `<nav><ul><li><a>`.

> **Tóm gọn 1 câu:** Chọn đúng kiểu danh sách như chọn đúng kiểu ghi chép: `<ul>` cho việc vô trật tự, `<ol>` cho các bước có thứ tự, `<dl>` cho cặp "thuật ngữ – giải nghĩa".

---

## 3.6. Bảng — `<table>`

Mục này nói về thẻ bảng và bộ quy tắc giúp bảng vừa đẹp vừa "đọc được" bởi máy — kèm lời nhắc kinh điển: bảng là để chứa dữ liệu, không phải để dàn trang.

> 📄 **Code ví dụ:** [`examples/11-3-6-bang-table.html`](examples/11-3-6-bang-table.html)

### Các quy tắc bảng

- `<caption>`: tiêu đề bảng — giúp cả SEO và screen reader
- `<th scope="col">` / `<th scope="row">`: xác định ô tiêu đề cho cột/hàng
- `<thead>`, `<tbody>`, `<tfoot>`: phân vùng ngữ nghĩa
- `<colgroup>`, `<col>`: định dạng cột hàng loạt
- **Chỉ dùng bảng cho dữ liệu dạng bảng**, không dùng để dàn trang (lỗi cổ điển thời HTML4) — bảng là để liệt kê số liệu như bảng điểm, không phải khung sườn để chia bố cục như bàn ăn chia múi

### Gộp ô: `colspan` và `rowspan`

> 📄 **Code ví dụ:** [`examples/12-gop-o-colspan-va-rowspan.html`](examples/12-gop-o-colspan-va-rowspan.html)

> **Tóm gọn 1 câu:** Bảng HTML có đúng một nhiệm vụ: trình bày dữ liệu dạng bảng — có `caption`, có `scope`, và tuyệt đối không bị lạm dụng làm khung dàn trang.

---

## 3.7. `pre`, `code`, `kbd`, `samp`, `var` — Hiển thị mã nguồn

Mục này là "khung trưng bày mã": các thẻ chuyên dùng để hiển thị code, phím bấm, output chương trình trong trang.

> 📄 **Code ví dụ:** [`examples/13-3-7-pre-code-kbd-samp-var-hien.html`](examples/13-3-7-pre-code-kbd-samp-var-hien.html)

---

## 3.8. `div` và `span` — Thẻ trung tính

Mục này nói về hai "thẻ trắng": `<div>` và `<span>` — không mang ý nghĩa gì cả, chỉ có tác dụng bọc nội dung để style hoặc thao tác bằng JS.

> 📄 **Code ví dụ:** [`examples/14-3-8-div-va-span-the-trung-tinh.html`](examples/14-3-8-div-va-span-the-trung-tinh.html)

> **Nguyên tắc 2026:** `<div>`/`<span>` là **phương án cuối cùng**. Nếu tồn tại thẻ ngữ nghĩa phù hợp (`<header>`, `<article>`, `<nav>`, `<main>`, `<figure>`...), hãy dùng thẻ đó. Xem [Phần 5: Semantic HTML](../5_semantic/README.md).

> **Tóm gọn 1 câu:** `div`/`span` là "giấy nháp" của HTML — dùng khi hết phương án, không phải lựa chọn mặc định.

---

## 3.9. Trích dẫn và nội dung đặc biệt

Mục này giới thiệu các thẻ trích dẫn và nội dung tương tác đặc biệt — trong đó có cặp `<details>`/`<summary>` tạo được accordion mà không cần viết một dòng JS nào.

> 📄 **Code ví dụ:** [`examples/15-3-9-trich-dan-va-noi-dung-ac.html`](examples/15-3-9-trich-dan-va-noi-dung-ac.html)

> `<details>`/`<summary>` được hỗ trợ từ thời cổ, còn `<details name="accordion">` cho phép nhóm các details loại trừ nhau (Chrome 120+, Safari 17.2+, Firefox 130+) — tính năng "accordion không cần JS".

---

## 3.10. Bài thực hành: Trang bài viết hoàn chỉnh

Mục này là "bài kiểm tra cuối chương": ráp tất cả thẻ đã học vào một trang bài viết hoàn chỉnh, hoàn chỉnh từ đầu đến cuối.

> 📄 **Code ví dụ:** [`examples/16-3-10-bai-thuc-hanh-trang-bai-viet.html`](examples/16-3-10-bai-thuc-hanh-trang-bai-viet.html)

---

## 3.11. Tài liệu tham khảo

- [MDN: HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [WHATWG HTML — Text-level semantics](https://html.spec.whatwg.org/multipage/text-level-semantics.html)
- [web.dev — Learn HTML: text basics](https://web.dev/learn/html/text-basics)

---

## Tóm tắt

- ✅ `<h1>`–`<h6>` theo thứ tự phân cấp, 1 `<h1>`/trang
- ✅ Ưu tiên `<strong>`/`<em>` hơn `<b>`/`<i>` vì mang ngữ nghĩa
- ✅ `<a>` luôn cần `rel="noopener"` khi `target="_blank"`
- ✅ `<img>` luôn cần `alt` + `width`/`height`
- ✅ Bảng chỉ dùng cho dữ liệu, có `caption` và `scope`
- ✅ `<div>`/`<span>` là lựa chọn cuối cùng khi không có thẻ ngữ nghĩa phù hợp

> **Tóm gọn 1 câu:** Phần 3 trang bị "tủ đồ thẻ" hằng ngày — tiêu đề, đoạn văn, liên kết, ảnh, danh sách, bảng — nhớ nguyên tắc chung: chọn thẻ theo ý nghĩa trước, cắt dán bằng CSS sau.

---

**Phần tiếp theo:** [Thuộc tính HTML](../4_thuoc-tinh/README.md) — `id`, `class`, `data-*`, `aria-*` và cách dùng đúng.
