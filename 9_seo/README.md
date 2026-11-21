# PHẦN 9: SEO VÀ METADATA

## 9.1. HTML và SEO — Mối quan hệ cốt lõi

Mục này trả lời câu hỏi "HTML liên quan gì đến SEO": tại sao những dòng metadata viết ở phần 2 lại là tín hiệu đầu tiên quyết định thứ hạng.

**SEO (Search Engine Optimization)** là tối ưu trang để công cụ tìm kiếm hiểu và xếp hạng. HTML là **tín hiệu đầu tiên** mà bot đọc — giống như CV là thứ nhà tuyển dụng đọc trước khi gọi phỏng vấn:

```
Bot Google → Tải HTML → Đọc <title>, <meta>, headings, semantic structure → Index → Xếp hạng
```

### Ba trụ cột SEO on-page trong HTML

1. **Metadata** (`<title>`, `<meta name="description">`)
2. **Cấu trúc ngữ nghĩa** (headings, semantic tags — xem [Phần 5](../5_semantic/README.md))
3. **Dữ liệu có cấu trúc** (Schema.org / JSON-LD)

> **Tóm gọn 1 câu:** Bot đọc HTML trước khi "nhìn" bất cứ thứ gì — viết metadata chuẩn là nộp CV sạch ngay từ vòng duyệt hồ sơ.

---

## 9.2. `<title>` — Yếu tố xếp hạng quan trọng nhất trong `<head>`

Mục này nói về "tấm biển vàng" của SEO: thẻ `<title>` — yếu tố xếp hạng mạnh nhất trong `<head>`.

> 📄 **Code ví dụ:** [`examples/01-9-2-title-yeu-to-xep-hang-quan.html`](examples/01-9-2-title-yeu-to-xep-hang-quan.html)

### Quy tắc

- **50–60 ký tự** — Google cắt phần dư bằng "…"
- Từ khóa quan trọng **đặt đầu tiên**
- **Duy nhất cho mỗi trang**
- Không nhồi từ khóa ("HTML, học HTML, HTML cơ bản, HTML 2026")

> **Tóm gọn 1 câu:** Title là "tấm biển vàng": từ khóa chính lên đầu, giới hạn 60 ký tự, mỗi trang một biển — nhồi nhét chỉ bị coi là biển quảng cáo lộn xộn.

---

## 9.3. `<meta name="description">`

Mục này nói về "đoạn giới thiệu dưới biển hiệu": meta description — không tăng thứ hạng trực tiếp nhưng quyết định người dùng có bấm vào hay không.

> 📄 **Code ví dụ:** [`examples/02-9-3-meta-name-description.html`](examples/02-9-3-meta-name-description.html)

- **150–160 ký tự** là tối ưu
- Không phải yếu tố xếp hạng trực tiếp, nhưng ảnh hưởng **CTR** trong SERP
- Google có thể **tự viết lại** từ nội dung trang nếu description kém
- Mỗi trang một description **duy nhất**, chứa từ khóa chính

---

## 9.4. Canonical URL — chống trùng lặp nội dung

Mục này nói về cách "chốt địa chỉ chính danh": canonical — khi một nội dung có nhiều đường vào, bạn phải chỉ cho Google đường nào là gốc.

Khi cùng nội dung truy cập được qua nhiều URL, Google có thể index trùng lặp:

> 📄 **Code ví dụ:** [`examples/03-9-4-canonical-url-chong-trung-lap-noi.html`](examples/03-9-4-canonical-url-chong-trung-lap-noi.html)

### Khi nào cần canonical

| Trường hợp | Ví dụ |
|-----------|-------|
| URL có tham số | `?utm_source=facebook`, `?sort=price` |
| Có cả www và non-www | `www.webviet.vn` vs `webviet.vn` |
| Có cả http và https | Chuyển hướng 301 + canonical |
| Trang phân trang | `/danh-sach?page=2` |
| Nội dung tổng hợp (syndicated) | Bài đăng lại từ nguồn khác |

> **Cách đọc bảng này:** mỗi dòng là một "tình huống nhân bản" thường gặp — cột Ví dụ cho thấy nội dung tồn tại dưới mấy URL; gặp tình huống nào là cần dán canonical cho tình huống đó.

### Lưu ý

- Canonical phải là **URL tuyệt đối** (`https://...`)
- Không đặt canonical trỏ đến trang 404/noindex
- Tự tham chiếu (self-canonical) trên mọi trang là best practice

> **Tóm gọn 1 câu:** Canonical là "con dấu chỉ định bản chính" — nhiều bản in vẫn được, nhưng phải dán dấu để Google biết bản gốc ở đâu.

---

## 9.5. Open Graph — chia sẻ đẹp trên mạng xã hội

Mục này nói về "thẻ namecard khi chia sẻ": Open Graph — quyết định bài của bạn hiện lên mạng xã hội đẹp hay xấu.

**Open Graph (OG)** do Facebook phát triển, được Facebook, LinkedIn, Zalo, Slack, Discord... sử dụng:

> 📄 **Code ví dụ:** [`examples/04-9-5-open-graph-chia-se-ep-tren.html`](examples/04-9-5-open-graph-chia-se-ep-tren.html)

- `og:image` nên kích thước **1200×630 px** (< 5MB)
- `og:type` phổ biến: `website`, `article`, `product`

### Twitter Card

> 📄 **Code ví dụ:** [`examples/05-twitter-card.html`](examples/05-twitter-card.html)

### Công cụ kiểm tra

- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## 9.6. Schema.org / JSON-LD — Dữ liệu có cấu trúc

Mục này nói về "ngôn ngữ riêng cho máy": JSON-LD — cách mô tả trang bằng dữ liệu có cấu trúc để mở khóa rich results trên Google.

**JSON-LD** là cách Google khuyến nghị nhúng dữ liệu có cấu trúc — viết trong thẻ `<script type="application/ld+json">`. Hãy hình dung đó là phần "giấy khai sinh" đi kèm trang: máy đọc được ngay đây là bài viết của ai, đăng khi nào, bán gì với giá bao nhiêu.

### Ví dụ Article (bài viết)

> 📄 **Code ví dụ:** [`examples/06-vi-du-article-bai-viet.html`](examples/06-vi-du-article-bai-viet.html)

### Ví dụ Organization + Website

> 📄 **Code ví dụ:** [`examples/07-vi-du-organization-website.html`](examples/07-vi-du-organization-website.html)

### Các schema type thường dùng

| Type | Dùng cho |
|------|----------|
| `Article` / `BlogPosting` | Bài viết blog |
| `Product` + `Offer` | Trang sản phẩm (giá, tồn kho) |
| `FAQPage` | Câu hỏi thường gặp |
| `HowTo` | Hướng dẫn từng bước |
| `BreadcrumbList` | Breadcrumb |
| `LocalBusiness` | Doanh nghiệp địa phương |
| `Person` | Trang cá nhân/tác giả |
| `Course` / `LearningResource` | Khóa học (Google yêu cầu markups mới từ 2026) |
| `VideoObject` | Video |
| `BreadcrumbList` | Breadcrumb navigation |

> **Cách đọc bảng này:** đây là "thực đơn" các loại schema — cột Type là tên khai báo, cột "Dùng cho" là loại trang tương ứng; chọn đúng đúng một loại cho đúng loại trang, đừng khai một món cho mọi món ăn.

> **Lưu ý 2026:** Google đã **loại bỏ rich results cho HowTo** (09/2023) và thu hẹp FAQ rich results; tính năng Course info bị loại từ **31/12/2025** — hãy kiểm tra [trạng thái hiện tại](https://developers.google.com/search/docs/appearance/structured-data) trước khi triển khai.

---

## 9.7. Breadcrumb và liên kết nội bộ

Mục này nói về "dải chỉ đường" trong trang: breadcrumb và link nội bộ — giúp cả người dùng lẫn bot lần theo vết.

> 📄 **Code ví dụ:** [`examples/08-9-7-breadcrumb-va-lien-ket-noi-bo.html`](examples/08-9-7-breadcrumb-va-lien-ket-noi-bo.html)

---

## 9.8. `robots` — Điều khiển indexing

Mục này nói về "biển báo cho bot": meta robots và robots.txt — cho phép hoặc cấm bot vào từng ngóc ngách của trang.

### Meta robots

> 📄 **Code ví dụ:** [`examples/09-meta-robots.html`](examples/09-meta-robots.html)

### robots.txt (tách khỏi HTML, đặt tại gốc domain)

```txt
User-agent: *
Allow: /
Disallow: /admin/

Sitemap: https://webviet.vn/sitemap.xml
```

### AI crawlers (mới 2024–2026)

> 📄 **Code ví dụ:** [`examples/10-ai-crawlers-moi-2024-2026.html`](examples/10-ai-crawlers-moi-2024-2026.html)

---

## 9.9. Headings và cấu trúc nội dung cho SEO

Mục này nối lại bài heading ở Phần 3 dưới góc nhìn SEO: cấu trúc `h1`–`h3` sạch giúp Google dựng được mục lục cho kết quả tìm kiếm.

> 📄 **Code ví dụ:** [`examples/11-9-9-headings-va-cau-truc-noi-dung.html`](examples/11-9-9-headings-va-cau-truc-noi-dung.html)

- Từ khóa chính trong `h1`, từ khóa phụ trong `h2`/`h3`
- Cấu trúc heading hợp lý giúp Google tạo **jump links (sitelinks)** trong SERP
- Kết hợp FAQ bằng Schema `FAQPage` để hiển thị dropdown trong kết quả tìm kiếm

---

## 9.10. Checklist SEO on-page đầy đủ

Mục này là "phiếu tổng kiểm tra" của cả phần: tất cả kỹ thuật SEO on-page gom vào một checklist để chạy trước khi xuất bản.

> 📄 **Code ví dụ:** [`examples/12-9-10-checklist-seo-on-page-ay-u.html`](examples/12-9-10-checklist-seo-on-page-ay-u.html)

### Công cụ kiểm tra

- **Google Search Console** — index, hiệu suất tìm kiếm
- **Lighthouse** — SEO audit tự động
- **Rich Results Test** — kiểm tra Schema.org
- **W3C Validator** — HTML hợp lệ

---

## 9.11. Tài liệu tham khảo

- [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Schema.org](https://schema.org/)
- [MDN: Open Graph protocol](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Introduction_to_meta_viewport)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

---

## Tóm tắt

- ✅ `<title>` (50–60 ký tự) và `<meta description>` (150–160) là nền tảng
- ✅ Canonical URL chống trùng lặp nội dung
- ✅ Open Graph + Twitter Card cho đẹp khi chia sẻ MXH
- ✅ JSON-LD + Schema.org mở khóa rich results
- ✅ Headings phân cấp rõ ràng → Google hiểu nội dung
- ✅ Kiểm chứng bằng Rich Results Test + Search Console

> **Tóm gọn 1 câu:** SEO on-page trong HTML là nộp bộ hồ sơ chuẩn: title + description giới hạn ký tự, canonical chỉ bản chính, JSON-LD khai rõ dữ liệu — Google đọc là hiểu ngay.

---

**Phần tiếp theo:** [Performance](../10_performance/README.md) — Lazy loading, preload, defer, async, tối ưu hình ảnh.
