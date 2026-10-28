# PHẦN 11: TÍNH NĂNG HIỆN ĐẠI (2024–2026)

HTML Living Standard không ngừng bổ sung tính năng mới. Phần này tổng hợp các tính năng **mới nhất và đáng học nhất** theo chuẩn WHATWG, được đánh dấu trạng thái **Baseline** (web.dev).

> **Baseline là gì?** Trạng thái cho biết một tính năng web hoạt động ổn định trên cả 3 engine chính (Chromium, Gecko/Firefox, WebKit/Safari). *Newly available* = mới có trên tất cả; *Widely available* = đã ổn định đủ lâu (30 tháng).

---

## 11.1. `<dialog>` — Hộp thoại native

Phần tử `<dialog>` tạo modal/hộp thoại **không cần thư viện**, tự quản lý focus, top layer, và phím Esc.

```html
<button commandfor="ho-tro" command="show-modal">Mở hỗ trợ</button>

<dialog id="ho-tro">
    <h2>Hỗ trợ trực tuyến</h2>
    <p>Bạn cần giúp đỡ gì?</p>
    <form method="dialog">
        <button>Đóng</button>
    </form>
</dialog>
```

```css
/* Backdrop tự sinh */
dialog::backdrop {
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
}
```

```javascript
const dlg = document.querySelector('#ho-tro');
dlg.showModal();               // mở modal (chặn tương tác nền)
dlg.show();                    // mở non-modal
dlg.close('reason');           // đóng, truyền giá trị
dlg.requestClose();            // đóng "nhẹ nhàng" — có thể bị chặn bằng sự kiện cancel (Baseline 2025)
dlg.addEventListener('close', () => console.log(dlg.returnValue));
```

### Hỗ trợ trình duyệt

| Tính năng | Chrome | Firefox | Safari |
|-----------|--------|---------|--------|
| `<dialog>` cơ bản | 37+ | 98+ | 15.4+ |
| `showModal()`, top layer | 37+ | 98+ | 15.4+ |
| `requestClose()` | 137+ (Baseline 2025) | 136+ | 18.4+ |
| `closedby` (light dismiss) | 134+ | — | 26+ |

### Thuộc tính `closedby` — Light dismiss cho dialog (mới 2025)

```html
<!-- Đóng khi bấm ngoài hoặc Esc -->
<dialog id="sheet" closedby="any">...</dialog>

<!-- Chỉ đóng bằng Esc / nút close -->
<dialog id="modal" closedby="closerequest">...</dialog>
```

---

## 11.2. Popover API — Baseline 2025

**Popover API** tạo popover (tooltip, menu, dropdown) **thuần HTML**, có top layer, light dismiss, focus management tự động.

> **Hỗ trợ:** Chrome 114+ (8/2023), Edge 116+, **Firefox 125+** (4/2024), **Safari 17+** (9/2023). Baseline Newly available kể từ **27/1/2025** (khi Safari iOS 18.3 sửa light dismiss).

### Popover cơ bản

```html
<button popovertarget="menu">Mở menu</button>
<button popovertarget="menu" popovertargetaction="hide">Đóng menu</button>

<div id="menu" popover>
    <ul>
        <li><a href="/ho-so">Hồ sơ</a></li>
        <li><a href="/cai-dat">Cài đặt</a></li>
    </ul>
</div>
```

### Hai chế độ: `auto` và `manual`

```html
<!-- auto: light dismiss — bấm ngoài tự đóng, mở popover mới đóng popover cũ -->
<div id="menu" popover="auto">...</div>

<!-- manual: không tự đóng, kiểm soát hoàn toàn bằng JS -->
<div id="hud" popover="manual">...</div>
```

### JavaScript API

```javascript
const pop = document.querySelector('#menu');

pop.showPopover();
pop.hidePopover();
pop.togglePopover();

// Sự kiện
pop.addEventListener('beforetoggle', (e) => {
    console.log('Sắp:', e.newState);   // "open" | "closed"
});
pop.addEventListener('toggle', (e) => {
    console.log('Đã:', e.newState);
});
```

### CSS đi kèm

```css
/* Trạng thái mở */
#menu:popover-open {
    display: block;
}

/* Chuyển động với @starting-style (Chrome 117+, Safari 17.5+, Firefox 129+) */
#menu {
    opacity: 0;
    transition: opacity 0.2s, display 0.2s allow-discrete;
}
#menu:popover-open {
    opacity: 1;
    @starting-style { opacity: 0; }
}
```

### Polyfill cho trình duyệt cũ

```html
<script type="module">
  if (!HTMLElement.prototype.hasOwnProperty('popover')) {
    import('@oddbird/popover-polyfill');
  }
</script>
```

---

## 11.3. Invoker Commands API — nút điều khiển không cần JS (Baseline 2025)

> **Hỗ trợ:** Chrome 135+ (4/2025), Edge 135+, **Firefox 144+** (10/2025), Safari 26.2 (12/2025). Baseline Newly available kể từ 12/12/2025.

```html
<!-- Mở/đóng dialog không cần JavaScript! -->
<button commandfor="dlg" command="show-modal">Mở</button>
<button commandfor="dlg" command="close">Đóng</button>

<dialog id="dlg">Nội dung</dialog>

<!-- Điều khiển popover -->
<button commandfor="pop" command="show-popover">Hiện</button>
<button commandfor="pop" command="hide-popover">Ẩn</button>
<button commandfor="pop" command="toggle-popover">Bật/tắt</button>
<div id="pop" popover>Nội dung popover</div>

<!-- Custom command -->
<button commandfor="app" command="--show-confetti">🎉</button>
<script>
  document.querySelector('#app').addEventListener('command', (e) => {
    if (e.command === '--show-confetti') fireConfetti();
  });
</script>
```

---

## 11.4. `<template>` — Nội dung không render

`<template>` chứa HTML **không được render** khi tải trang, dùng làm khuôn mẫu nhân bản bằng JS:

```html
<template id="card-template">
    <article class="card">
        <h3 class="card-title"></h3>
        <p class="card-desc"></p>
    </article>
</template>

<div id="list"></div>

<script>
  const tpl = document.querySelector('#card-template');
  const data = [
    { title: 'Bài viết 1', desc: 'Nội dung 1' },
    { title: 'Bài viết 2', desc: 'Nội dung 2' },
  ];

  for (const item of data) {
    const node = tpl.content.cloneNode(true);   // nhân bản khuôn mẫu
    node.querySelector('.card-title').textContent = item.title;
    node.querySelector('.card-desc').textContent = item.desc;
    document.querySelector('#list').append(node);
  }
</script>
```

**Ưu điểm:** Nội dung trong `<template>` được parse (kiểm tra lỗi sớm) nhưng inert — không tải ảnh, không chạy script, không nằm trong DOM chính.

---

## 11.5. Custom Elements — tự tạo thẻ HTML

**Web Components** gồm 3 công nghệ: Custom Elements, Shadow DOM, `<template>`. Custom Elements cho phép tạo thẻ riêng:

```javascript
// Định nghĩa custom element <count-up>
class CountUp extends HTMLElement {
  connectedCallback() {
    this.count = 0;
    this.innerHTML = `<button type="button">Bấm: ${this.count}</button>`;
    this.querySelector('button').addEventListener('click', () => {
      this.count++;
      this.querySelector('button').textContent = `Bấm: ${this.count}`;
    });
  }
}

customElements.define('count-up', CountUp);
```

```html
<!-- Sử dụng -->
<count-up></count-up>
```

### Element với Shadow DOM (encapsulated styles)

```javascript
class MyCard extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; border: 1px solid #ddd; border-radius: 8px; padding: 12px; }
        ::slotted(h3) { margin: 0 0 8px; }
      </style>
      <slot name="title"></slot>
      <slot></slot>
    `;
  }
}
customElements.define('my-card', MyCard);
```

```html
<my-card>
    <h3 slot="title">Tiêu đề</h3>
    <p>Nội dung đi vào slot mặc định.</p>
</my-card>
```

### Declarative Shadow DOM (SSR cho Web Components)

```html
<my-card>
    <template shadowrootmode="open">
        <style>:host { display: block; padding: 12px; }</style>
        <slot></slot>
    </template>
    <p>Nội dung render từ server!</p>
</my-card>
```

> Declarative Shadow DOM được hỗ trợ: Chrome 111+, Safari 16.4+, Firefox 123+ — cho phép Web Components render phía server không cần JS.

---

## 11.6. Customizable `<select>` (2025 — rất mới)

Cuối cùng, `<select>` có thể style hoàn toàn bằng CSS:

```html
<label for="mon">Chọn nhân vật</label>
<select id="mon">
    <button>
        <selectedcontent></selectedcontent>   <!-- phản chiếu option đang chọn -->
    </button>
    <option value="dragon">🐉 Rồng lửa</option>
    <option value="wolf">🐺 Sói bạc</option>
</select>
```

```css
/* Bật chế độ customizable */
select,
select::picker(select) {
    appearance: base-select;
}

/* Style từng phần */
select::picker-icon { color: crimson; }        /* mũi tên */
option:checked::checkmark { color: green; }     /* dấu check */
```

> **Hỗ trợ:** Chrome 134/135+ (3–4/2025), Edge 135+, Safari 27+. **Firefox chưa hỗ trợ** — theo dõi tại [caniuse/selectedcontent](https://caniuse.com/mdn-html_elements_selectedcontent). Chỉ dùng khi có fallback hợp lý.

---

## 11.7. Các tính năng nhỏ nhưng hữu ích (2024–2026)

### `popover="hint"` và Interest Invokers (đang phát triển)

```html
<!-- popover hint: không đóng các popover khác, dành cho tooltip -->
<button interestfor="tooltip">Tôi là gì?</button>
<div id="tooltip" popover="hint">Chú thích hiện khi hover/focus</div>
```

> `popover="hint"` và `interestfor`: Chrome 133+ (thử nghiệm), chưa phổ biến.

### `<input>` mới và thuộc tính mới

```html
<!-- showPicker(): mở picker bằng JS (Chrome 99+, Safari 16+, Firefox 101+) -->
<input type="date" id="ngay">
<script>document.querySelector('#ngay').showPicker();</script>

<!-- toggleevent / switch role -->
<input type="checkbox" switch>   <!-- giao diện switch (Chrome 134+) -->
```

### `<search>` element (2023, dùng rộng rãi 2025+)

```html
<search>
    <form action="/tim"><input type="search" name="q"><button>Tìm</button></form>
</search>
```

### `contenteditable="plaintext-only"` — Baseline 2025

```html
<div contenteditable="plaintext-only">Chỉ cho gõ văn bản thuần.</div>
```

### `<details name="...">` — Accordion native

```html
<details name="faq">
    <summary>Câu hỏi 1?</summary>
    <p>Trả lời 1.</p>
</details>
<details name="faq">
    <summary>Câu hỏi 2?</summary>
    <p>Mở cái này thì cái kia tự đóng (Chrome 120+, Safari 17.2+, Firefox 130+).</p>
</details>
```

---

## 11.8. Bảng tổng hợp hỗ trợ (tháng 10/2026)

| Tính năng | Chrome | Firefox | Safari | Baseline |
|-----------|--------|---------|--------|----------|
| `<dialog>` | 37 | 98 | 15.4 | 2022 |
| Popover API | 114 | 125 | 17 | **2025** |
| Invoker Commands | 135 | 144 | 26.2 | **2025** |
| `dialog.requestClose()` | 137 | 136 | 18.4 | **2025** |
| `contenteditable="plaintext-only"` | 111 | 124 | 16.4 | **2025** |
| Customizable `<select>` / `selectedcontent` | 135 | ❌ | 27 | Newly (một phần) |
| Declarative Shadow DOM | 111 | 123 | 16.4 | 2024 |
| `dialog closedby` | 134 | ❌ | 26 | Newly |
| Interest Invokers / `popover="hint"` | 133+ | ❌ | ❌ | Thử nghiệm |

---

## 11.9. Tài liệu tham khảo

- [MDN: Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API)
- [MDN: Invoker Commands API](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- [MDN: `<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [web.dev — Popover is Baseline](https://web.dev/blog/popover-baseline)
- [web.dev — Baseline 2025](https://web.dev/baseline/2025)
- [Chrome CSS Wrapped 2025](https://chrome.dev/css-wrapped-2025/)

---

## Tóm tắt

- ✅ `<dialog>` + `showModal()` thay thế thư viện modal
- ✅ **Popover API** (Baseline 2025): `popover`, `popovertarget`, top layer + light dismiss
- ✅ **Invoker Commands** (Baseline 2025): `commandfor`/`command` — điều khiển không cần JS
- ✅ `<template>` + Custom Elements + Declarative Shadow DOM = Web Components
- ✅ Customizable `<select>` + `selectedcontent` — mới nhất, chưa full support, cần fallback

---

**Phần tiếp theo:** [Best Practices](../12_best-practices/README.md) — Style guide, lỗi thường gặp, và validator.
