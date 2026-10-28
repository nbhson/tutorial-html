# Tutorial HTML — Từ Cơ Bản đến Chuyên Sâu

> **Phiên bản:** 2.0 | **Chuẩn:** HTML Living Standard (WHATWG) — cập nhật Tháng 10/2026 | **Baseline:** 2024–2026

---

## Thứ tự đọc khuyến nghị

Học tuần tự từ 1 → 12:

```
1_tong-quan-html → 2_cau-truc-trang → 3_the-co-ban → 4_thuoc-tinh → 5_semantic
→ 6_forms → 7_accessibility → 8_multimedia → 9_seo → 10_performance
→ 11_modern-features → 12_best-practices
```

- **Người mới:** học đúng thứ tự 1 → 12; mỗi phần là nền cho phần sau.
- **Đã biết HTML cũ:** đọc nhanh 1–4 để đối chiếu, tập trung 11 (`<dialog>`, Popover API, Invoker Commands, Customizable Select, View Transitions) và 12.

> ⚠️ **Lưu ý:** các thư mục `1_core/` và `2_html-tutorial/` là **tài liệu cũ (legacy), đã ngừng bảo trì** — hãy học theo giáo trình đánh số ở trên. Xem banner giải thích trong [`1_core/README.md`](./1_core/README.md) và [`2_html-tutorial/README.md`](./2_html-tutorial/README.md).

---

## Mục lục

1. [Tổng quan HTML](./1_tong-quan-html/README.md) — HTML là gì, lịch sử HTML5, DOCTYPE, cấu trúc tài liệu cơ bản
2. [Cấu trúc trang](./2_cau-truc-trang/README.md) — Phần tử `<head>` / `<body>`, thẻ meta, title, nền tảng SEO
3. [Thẻ HTML cơ bản](./3_the-co-ban/README.md) — `p`, `h1`–`h6`, `a`, `img`, `ul`/`ol`, `div`/`span`, `table`, `pre`, `code`
4. [Thuộc tính](./4_thuoc-tinh/README.md) — `id`, `class`, `data-*`, `aria-*`, inline styles
5. [Semantic HTML](./5_semantic/README.md) — `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`
6. [Biểu mẫu (Forms)](./6_forms/README.md) — Form, input types, textarea, select, validation, Autocomplete API
7. [Khả năng tiếp cận (Accessibility)](./7_accessibility/README.md) — ARIA, screen reader, keyboard navigation, WCAG 2.2
8. [Đa phương tiện](./8_multimedia/README.md) — `video`, `audio`, `iframe`, `picture`, `source`, `track`
9. [SEO và Metadata](./9_seo/README.md) — Meta description, Open Graph, Schema.org/JSON-LD, canonical URL
10. [Hiệu năng](./10_performance/README.md) — Lazy loading, preload, defer, async, tối ưu hình ảnh
11. [Tính năng hiện đại](./11_modern-features/README.md) — `<dialog>`, Popover API, `<template>`, Custom Elements, Invoker Commands
12. [Best Practices](./12_best-practices/README.md) — HTML style guide, lỗi thường gặp, validator

---

## Tổng quan

**HTML (HyperText Markup Language)** là ngôn ngữ đánh dấu tiêu chuẩn để tạo nội dung trên web. HTML mô tả **cấu trúc** của một trang web bằng cách sử dụng một hệ thống các phần tử (elements). Các phần tử này cho trình duyệt biết cách hiển thị nội dung.

### Tại sao học HTML?

- **Nền tảng của mọi trang web** — Mọi trang web đều được xây dựng trên HTML
- **Dễ học** — Cú pháp đơn giản, trực quan
- **Không phụ thuộc ngôn ngữ lập trình** — HTML hoạt động với mọi backend
- **Tiêu chuẩn web** — Được duy trì bởi WHATWG (HTML Living Standard)

### Yêu cầu tiên quyết

- Máy tính có trình duyệt web (Chrome, Firefox, Safari, Edge)
- Trình soạn thảo mã (VS Code, Sublime Text, hoặc bất kỳ editor nào)
- Không cần kiến thức lập trình trước

### Chuẩn bị môi trường

```bash
# Tạo file HTML đầu tiên
mkdir html-tutorial && cd html-tutorial
touch index.html

# Mở bằng VS Code
code .
```

---

## Tài liệu tham khảo

- [HTML Living Standard — WHATWG](https://html.spec.whatwg.org/)
- [MDN Web Docs — HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [Baseline — web.dev](https://web.dev/baseline)
- [WCAG 2.2 — W3C](https://www.w3.org/TR/WCAG22/)

---

*Lưu ý: HTML là **Living Standard** — không có số phiên bản như "HTML6". Tutorial này cập nhật theo Living Standard tại Tháng 10/2026, bao gồm Popover API, Invoker Commands API, Customizable `<select>`, Declarative Shadow DOM, View Transitions API và các tính năng hiện đại khác (chi tiết tại [phần 11](./11_modern-features/README.md)).*
