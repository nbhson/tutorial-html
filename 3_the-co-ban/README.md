# PHẦN 3: THẺ HTML CƠ BẢN

## 3.1. Tiêu đề — `<h1>` đến `<h6>`

HTML cung cấp 6 cấp tiêu đề, từ `<h1>` (quan trọng nhất) đến `<h6>` (ít quan trọng nhất).

```html
<h1>Tiêu đề chính của trang</h1>
<h2>Tiêu đề mục lớn</h2>
<h3>Tiêu đề mục con</h3>
<h4>Tiêu đề con cấp 4</h4>
<h5>Tiêu đề con cấp 5</h5>
<h6>Tiêu đề con cấp 6</h6>
```

### Quy tắc vàng

1. **Mỗi trang chỉ nên có một `<h1>`** — tiêu đề chủ đề chính của trang
2. **Không nhảy cấp**: `<h1>` → `<h3>` là sai cấu trúc; dùng tuần tự `<h1>` → `<h2>` → `<h3>`
3. **Dùng tiêu đề theo cấu trúc ngữ nghĩa, KHÔNG dùng để chỉnh cỡ chữ** (việc đó là của CSS)
4. Công cụ tìm kiếm và trình đọc màn hình dùng tiêu đề để tạo **mục lục (outline)** của trang

```html
<!-- ❌ Sai: nhảy cấp, dùng heading vì muốn chữ to -->
<h1>Dịch vụ</h1>
<h3>Thiết kế web</h3>
<h6>Giá rẻ</h6>

<!-- ✅ Đúng: cấu trúc phân cấp hợp lý -->
<h1>Dịch vụ</h1>
  <h2>Thiết kế web</h2>
    <h3>Báo giá</h3>
  <h2>SEO</h2>
```

---

## 3.2. Đoạn văn và văn bản — `<p>`, định dạng chữ

```html
<p>Đây là một đoạn văn. Trình duyệt tự thêm khoảng cách trước và sau đoạn văn.</p>
```

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

> **Khác biệt `<strong>` vs `<b>`:** `<strong>` mang ngữ nghĩa "quan trọng" — trình đọc màn hình đọc với ngữ điệu nhấn mạnh. `<b>` chỉ là định dạng trực quan. Ưu tiên `<strong>` và `<em>`; chỉ dùng `<b>`, `<i>` khi không có ý nghĩa ngữ nghĩa.

### Ngắt dòng và ngăn cách

```html
<p>Địa chỉ:<br>123 Nguyễn Huệ<br>Quận 1, TP.HCM</p>  <!-- ngắt dòng -->

<hr>  <!-- đường phân cách chủ đề (thematic break) -->

<p>Nội dung sau đường phân cách.</p>
```

---

## 3.3. Liên kết — `<a>`

```html
<!-- Liên kết cơ bản -->
<a href="https://developer.mozilla.org/">MDN Web Docs</a>

<!-- Mở tab mới -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Tab mới</a>

<!-- Liên kết nội bộ (đến vị trí trong trang) -->
<a href="#phan-danh-gia">Xem đánh giá</a>
<h2 id="phan-danh-gia">Đánh giá</h2>

<!-- Liên kết email và điện thoại -->
<a href="mailto:info@example.com">Gửi email</a>
<a href="tel:+84901234567">Gọi điện</a>

<!-- Tải file -->
<a href="bao-gia.pdf" download="BaoGia-2026.pdf">Tải báo giá</a>
```

### Thuộc tính `rel` — quan trọng cho SEO và bảo mật

| Giá trị | Ý nghĩa |
|---------|---------|
| `noopener` | Bắt buộc khi `target="_blank"` — chặn tấn công tabnabbing |
| `noreferrer` | Không gửi referrer |
| `nofollow` | Báo Google không truyền PageRank (liên kết quảng cáo, UGC) |
| `ugc` | Liên kết do người dùng tạo (bình luận, diễn đàn) |
| `sponsored` | Liên kết quảng cáo, tài trợ |

> **Bảo mật:** Từ năm 2021, trình duyệt hiện đại tự áp dụng `noopener` cho mọi `target="_blank"`, nhưng nên ghi rõ để tương thích trình duyệt cũ.

---

## 3.4. Hình ảnh — `<img>`

```html
<img src="anh-dep.jpg" alt="Hoàng hôn trên vịnh Hạ Long" width="800" height="600" loading="lazy" decoding="async">
```

### Các thuộc tính quan trọng

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `src` | Đường dẫn ảnh (bắt buộc) |
| `alt` | Văn bản thay thế — bắt buộc cho accessibility & SEO |
| `width`, `height` | Đặt kích thước → tránh layout shift (CLS) |
| `loading="lazy"` | Tải chậm khi cuộn gần đến (Chrome 76+, Safari 15.4+, Firefox 75+) |
| `decoding="async"` | Giải mã không chặn luồng chính |
| `srcset`, `sizes` | Responsive images (xem Phần 8) |

### Viết `alt` đúng cách

```html
<!-- ✅ Mô tả nội dung ảnh -->
<img src="meo.jpg" alt="Con mèo tam thể đang nằm trên bệ cửa sổ">

<!-- Ảnh trang trí → alt rỗng để screen reader bỏ qua -->
<img src="divider.png" alt="">

<!-- Ảnh chức năng → mô tả chức năng, không phải hình ảnh -->
<a href="/gio-hang"><img src="cart.png" alt="Giỏ hàng"></a>
```

---

## 3.5. Danh sách — `<ul>`, `<ol>`, `<dl>`

### Danh sách không thứ tự

```html
<ul>
    <li>Táo</li>
    <li>Cam</li>
    <li>Xoài</li>
</ul>
```

### Danh sách có thứ tự

```html
<ol>
    <li>Đun sôi nước</li>
    <li>Cho mì vào</li>
    <li>Nêm gia vị</li>
</ol>

<!-- Thuộc tính hữu ích -->
<ol start="3" type="I" reversed>
    <li>Mục 3</li>
    <li>Mục 2</li>
</ol>
```

### Danh sách mô tả

```html
<dl>
    <dt>HTML</dt>
    <dd>Ngôn ngữ đánh dấu cấu trúc nội dung web.</dd>
    <dt>CSS</dt>
    <dd>Ngôn ngữ trình bày giao diện.</dd>
</dl>
```

> **Lưu ý:** Dùng `list-style: none` trong CSS là đủ để ẩn bullet; **không** lạm dụng `<ul>` + CSS để tạo menu khi cấu trúc không phải danh sách. Ngược lại, menu điều hướng thật sự nên dùng `<nav><ul><li><a>`.

---

## 3.6. Bảng — `<table>`

```html
<table>
    <caption>Doanh thu quý 4/2025</caption>
    <thead>
        <tr>
            <th scope="col">Tháng</th>
            <th scope="col">Doanh thu (triệu VND)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Tháng 10</th>
            <td>450</td>
        </tr>
        <tr>
            <th scope="row">Tháng 11</th>
            <td>520</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>Tổng cộng</td>
            <td>970</td>
        </tr>
    </tfoot>
</table>
```

### Các quy tắc bảng

- `<caption>`: tiêu đề bảng — giúp cả SEO và screen reader
- `<th scope="col">` / `<th scope="row">`: xác định ô tiêu đề cho cột/hàng
- `<thead>`, `<tbody>`, `<tfoot>`: phân vùng ngữ nghĩa
- `<colgroup>`, `<col>`: định dạng cột hàng loạt
- **Chỉ dùng bảng cho dữ liệu dạng bảng**, không dùng để dàn trang (lỗi cổ điển thời HTML4)

### Gộp ô: `colspan` và `rowspan`

```html
<tr>
    <td colspan="2">Ô chiếm 2 cột</td>
    <td rowspan="2">Ô chiếm 2 hàng</td>
</tr>
```

---

## 3.7. `pre`, `code`, `kbd`, `samp`, `var` — Hiển thị mã nguồn

```html
<!-- Code inline -->
<p>Dùng hàm <code>document.querySelector()</code> để chọn phần tử.</p>

<!-- Khối code giữ nguyên định dạng -->
<pre><code class="language-js">
function greet(name) {
    return `Xin chào, ${name}!`;
}
</code></pre>

<!-- Đầu vào từ người dùng -->
<p>Nhấn <kbd>Ctrl</kbd> + <kbd>S</kbd> để lưu.</p>

<!-- Đầu ra từ chương trình -->
<samp>Server started on port 3000</samp>

<!-- Biến -->
<p>Diện tích = <var>l</var> × <var>w</var></p>
```

---

## 3.8. `div` và `span` — Thẻ trung tính

```html
<!-- div: khối trung tính, gom nhóm để style -->
<div class="product-card">
    <h3>Tên sản phẩm</h3>
    <p>Mô tả...</p>
</div>

<!-- span: nội tuyến trung tính, style một phần văn bản -->
<p>Giá chỉ còn <span class="highlight">1.500.000₫</span></p>
```

> **Nguyên tắc 2026:** `<div>`/`<span>` là **phương án cuối cùng**. Nếu tồn tại thẻ ngữ nghĩa phù hợp (`<header>`, `<article>`, `<nav>`, `<main>`, `<figure>`...), hãy dùng thẻ đó. Xem [Phần 5: Semantic HTML](../5_semantic/README.md).

---

## 3.9. Trích dẫn và nội dung đặc biệt

```html
<!-- Trích dẫn khối -->
<blockquote cite="https://www.w3.org/WAI/">
    <p>"The web is fundamentally designed to work for all people."</p>
</blockquote>

<!-- Trích dẫn inline -->
<p>Theo <cite>WCAG 2.2</cite>, mọi nội dung phải tiếp cận được.</p>

<!-- Trích dẫn tiêu đề tác phẩm -->
<q>Đây là trích dẫn ngắn</q>, tương tự dấu ngoặc kép.

<!-- Chi tiết thu gọn/mở rộng (native, không cần JS) -->
<details>
    <summary>Xem thêm chi tiết kỹ thuật</summary>
    <p>Nội dung bị ẩn, hiện ra khi bấm vào summary.</p>
</details>
```

> `<details>`/`<summary>` được hỗ trợ từ thời cổ, còn `<details name="accordion">` cho phép nhóm các details loại trừ nhau (Chrome 120+, Safari 17.2+, Firefox 130+) — tính năng "accordion không cần JS".

---

## 3.10. Bài thực hành: Trang bài viết hoàn chỉnh

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phở Hà Nội — Ẩm thực Việt</title>
    <meta name="description" content="Khám phá lịch sử và cách nêm nếm chuẩn vị của phở Hà Nội.">
</head>
<body>
    <header>
        <h1>Ẩm thực Việt Nam</h1>
        <nav>
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/mon-viet">Món Việt</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Phở Hà Nội — Tinh hoa ẩm thực</h2>
            <p><em>Cập nhật: 10/2026</em></p>

            <img src="pho.jpg" alt="Tô phở bò nóng hổi với hành lá" width="800" height="450" loading="lazy">

            <h3>Lịch sử</h3>
            <p>Phở xuất hiện ở Hà Nội khoảng đầu thế kỷ 20...</p>

            <h3>Cách thưởng thức</h3>
            <ol>
                <li>Thưởng thức nước dùng trước</li>
                <li>Thêm chanh, ớt theo khẩu vị</li>
            </ol>

            <blockquote cite="https://example.com/pho">
                <p>"Phở là món ăn quốc hồn quốc túy của Việt Nam."</p>
            </blockquote>
        </article>
    </main>

    <footer>
        <p><small>© 2026 Ẩm thực Việt</small></p>
    </footer>
</body>
</html>
```

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

---

**Phần tiếp theo:** [Thuộc tính HTML](../4_thuoc-tinh/README.md) — `id`, `class`, `data-*`, `aria-*` và cách dùng đúng.
