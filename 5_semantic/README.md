# SEMANTIC HTML LÀ GÌ?

## TẠI SAO NÓ LẠI QUAN TRỌNG VỚI CẤU TRÚC WEBSITE?

Ngoài Semantic keywords thì Semantic HTML cũng là một trong những yếu tố onpage giúp cho thuật toán của search engine hiểu các thành phần nào là quan trọng trong một trang web.

Semantic HTML là cách viết HTML mà sử dụng các thẻ HTML ứng với nội dung được chứa trong nó chứ không phải sử dụng các thẻ theo cách mà chúng ta muốn nội dung trong đó được hiển thị. Nếu bạn là một Front-end web developer thì nên quan tâm đến Semantic HTML.

Semantic HTML rất quan trọng vì các công cụ tìm kiếm sử dụng thuật toán để xếp hạng các trang và Semantic HTML giúp đảm bảo rằng các tín hiệu được gửi đến công cụ tìm kiếm là chính xác và hữu ích nhất có thể.

Về cốt lõi, Semantic HTML chỉ đơn giản là một cách mô tả cấu trúc và nội dung của một trang web thông qua các thẻ HTML. Semantic HTML có thể được thực hiện bằng cách sử dụng các thẻ HTML như thẻ tiêu đề, danh sách và đoạn văn, thay vì làm cho văn bản trông đẹp hơn với các kỹ thuật HTML nâng cao hơn.

Sử dụng thẻ HTML đúng cách cho phép các công cụ tìm kiếm hiểu rõ hơn về nội dung trang web của bạn, giúp search engine dễ dàng phân loại và xếp hạng nó hơn. Từ đó giúp người dùng dễ dàng tìm thấy nội dung họ đang tìm kiếm.

Việc sử dụng các thẻ HTML đảm bảo rằng nội dung được cấu trúc hợp lý (nếu nội dung phù hợp với trải nghiệm người dùng, bạn sẽ cải thiện được time onsite và giảm tỉ lệ thoát trang).

Điều này có thể dẫn đến trải nghiệm người dùng tốt hơn, đó là một yếu tố quan trọng trong SEO. Điều này có thể dẫn đến thứ hạng được cải thiện, vì khả năng tiếp cận ngày càng trở nên quan trọng đối với các thuật toán của công cụ tìm kiếm.

Bằng cách sử dụng các thẻ HTML đúng cách, bạn có thể đảm bảo rằng nội dung trang web của bạn được cấu trúc tốt và được hiểu bởi các thuật toán của công cụ tìm kiếm.

---

*(Phần dưới đây được bổ sung theo chuẩn HTML Living Standard 2025–2026.)*

---

## 5.1. Danh sách các thẻ Semantic chính

HTML5 giới thiệu bộ thẻ ngữ nghĩa để mô tả cấu trúc trang:

| Thẻ | Vai trò |
|-----|---------|
| `<header>` | Phần đầu của trang hoặc một section: logo, tiêu đề, điều hướng |
| `<nav>` | Khối điều hướng chính |
| `<main>` | Nội dung chính duy nhất của trang (mỗi trang chỉ 1 thẻ) |
| `<section>` | Nhóm nội dung theo chủ đề, thường có tiêu đề |
| `<article>` | Nội dung độc lập: bài viết, bài đăng, bình luận |
| `<aside>` | Nội dung liên quan phụ: sidebar, quảng cáo, ghi chú |
| `<footer>` | Chân trang: bản quyền, liên kết phụ |
| `<figure>` / `<figcaption>` | Hình ảnh/minh họa kèm chú thích |
| `<time>` | Thời gian máy có thể đọc được |
| `<address>` | Thông tin liên hệ của tác giả/organizational |

---

## 5.2. Cấu trúc trang chuẩn Semantic

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trang chuẩn Semantic HTML</title>
</head>
<body>
    <header>
        <h1>Logo &amp; Tên website</h1>
        <nav aria-label="Điều hướng chính">
            <ul>
                <li><a href="/">Trang chủ</a></li>
                <li><a href="/bai-viet">Bài viết</a></li>
                <li><a href="/lien-he">Liên hệ</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <header>
                <h2>Tiêu đề bài viết</h2>
                <p>Đăng ngày <time datetime="2026-10-20">20 tháng 10, 2026</time></p>
            </article>

            <section>
                <h3>Phần mở đầu</h3>
                <p>Nội dung...</p>
            </section>

            <figure>
                <img src="hinh.jpg" alt="Minh họa" loading="lazy">
                <figcaption>Hình 1: Minh họa cấu trúc</figcaption>
            </figure>

            <aside>
                <h4>Bài liên quan</h4>
                <ul>
                    <li><a href="/bai-2">Bài liên quan 1</a></li>
                </ul>
            </aside>
        </article>
    </main>

    <footer>
        <p>&copy; 2026 Website. Mọi quyền được bảo lưu.</p>
    </footer>
</body>
</html>
```

---

## 5.3. Quy tắc sử dụng từng thẻ

### `<header>`
- Có thể dùng nhiều lần: mỗi `<article>`, `<section>`, hoặc `<body>` đều có thể có `<header>` riêng
- Không được lồng trong `<footer>`, `<address>`, hoặc `<header>` khác

### `<nav>`
- Chỉ dùng cho **khối điều hướng chính** (menu chính, phân trang, breadcrumb)
- Không bọc mọi cụm liên kết trong `<nav>`
- Trang có thể có nhiều `<nav>`, dùng `aria-label` để phân biệt:

```html
<nav aria-label="Menu chính">...</nav>
<nav aria-label="Breadcrumb">
    <ol>
        <li><a href="/">Trang chủ</a></li>
        <li><a href="/html">HTML</a></li>
        <li aria-current="page">Semantic</li>
    </ul>
</nav>
```

### `<main>`
- **Chỉ một `<main>` hiển thị** cho mỗi trang
- Không được đặt `<main>` bên trong `<article>`, `<aside>`, `<header>`, `<footer>`, `<nav>`
- Trình đọc màn hình dùng `<main>` làm **landmark** giúp người dùng nhảy thẳng đến nội dung

### `<article>` vs `<section>`

- `<article>`: nội dung **độc lập, tự hoàn chỉnh** — đưa sang trang khác vẫn hiểu được (bài viết, sản phẩm, bình luận, card tin tức)
- `<section>`: nhóm nội dung theo **chủ đề trong trang**, gần như luôn cần tiêu đề `<h1>`–`<h6>`

```html
<article>
    <h2>Bài viết chính</h2>
    <p>...</p>
    <section>
        <h3>Phần 1: Giới thiệu</h3>
    </section>
    <section>
        <h3>Phần 2: Nội dung</h3>
    </section>
</article>
```

### `<aside>`
Nội dung **liên quan gián tiếp** đến nội dung xung quanh: sidebar, box "Bài liên quan", chú thích kéo dài, quảng cáo.

### `<footer>`
Thông tin kết thúc: tác giả, bản quyền, liên kết điều hướng phụ. Có thể có nhiều `<footer>` (một cho trang, một cho mỗi `<article>`).

---

## 5.4. Outline Algorithm và Heading

Cấu trúc heading (`h1`–`h6`) nên phản ánh đúng cấu trúc nội dung. Từ HTML Living Standard, thuật toán "document outline" tự động (dựa trên `<section>`/`<article>`) **không còn được các trình duyệt/assistive tech hỗ trợ** — vì vậy:

> **Quy tắc thực tế 2026:** Đừng dựa vào sectioning để "reset" cấp heading. Luôn dùng `h1` → `h2` → `h3` theo thứ tự logic rõ ràng, bất kể phần tử bọc bên ngoài là gì.

---

## 5.5. Semantic HTML và SEO

- Search engine dùng các landmark (`<nav>`, `<main>`, `<header>`, `<footer>`) để hiểu vùng nội dung
- `<article>` giúp Google hiểu khối nội dung chính của trang
- `<time datetime="...">` cung cấp dữ liệu ngày tháng máy đọc được
- Kết hợp với dữ liệu có cấu trúc (xem [Phần 9: SEO](../9_seo/README.md)) cho hiệu quả tốt nhất

```html
<time datetime="2026-10-20T09:30+07:00">20/10/2026, 9:30 sáng</time>
```

---

## 5.6. Semantic HTML và Accessibility

Trình đọc màn hình (NVDA, VoiceOver, JAWS) nhận diện các landmark:

| Thẻ | Landmark role tự động |
|-----|----------------------|
| `<header>` (con trực tiếp của body) | `banner` |
| `<nav>` | `navigation` |
| `<main>` | `main` |
| `<aside>` | `complementary` |
| `<footer>` (con trực tiếp của body) | `contentinfo` |
| `<form aria-label="...">` | `form` / `search` |

Người dùng screen reader có thể nhảy nhanh giữa các landmark — đây là lý do lớn nhất để dùng Semantic HTML thay vì `<div>`.

---

## 5.7. Kiểm tra: trang của bạn đã semantic chưa?

Danh sách kiểm tra nhanh:

- [ ] Mỗi trang có đúng một `<main>`
- [ ] `<header>` và `<footer>` không bọc toàn bộ nội dung trang (trừ khi thực sự là header/footer)
- [ ] Điều hướng chính nằm trong `<nav>`
- [ ] Mỗi `<section>` có tiêu đề
- [ ] Không dùng `<div>` thay cho `<button>`, `<a>`, `<article>`
- [ ] Hình ảnh có ý nghĩa được bọc trong `<figure>` + `<figcaption>`
- [ ] Thời gian đăng bài dùng `<time datetime="...">`

---

## 5.8. Tài liệu tham khảo

- [MDN: HTML semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [web.dev — Learn HTML: semantic HTML](https://web.dev/learn/html/semantic-html/)
- [WHATWG HTML — Sections](https://html.spec.whatwg.org/multipage/sections.html)

---

## Tóm tắt

- ✅ Semantic = chọn thẻ theo **ý nghĩa nội dung**, không phải theo cách hiển thị
- ✅ `header`, `nav`, `main`, `article`, `section`, `aside`, `footer` tạo skeleton chuẩn
- ✅ Một `<main>` duy nhất mỗi trang
- ✅ Giúp SEO hiểu nội dung + screen reader điều hướng nhanh
- ✅ Đặt tiêu đề `<h1>`–`<h6>` rõ ràng, không phụ thuộc outline tự động

---

**Phần tiếp theo:** [Forms](../6_forms/README.md) — Biểu mẫu, input types, validation và Autocomplete API.
