# PHẦN 7: KHẢ NĂNG TIẾP CẬN (ACCESSIBILITY / A11Y)

## 7.1. Accessibility là gì và tại sao quan trọng?

Mục này trả lời câu hỏi mở đầu: accessibility là gì, ai được lợi, và tại sao nó lại là "việc nên làm" chứ không phải "việc làm màu".

**Accessibility (khả năng tiếp cận, viết tắt a11y)** là việc thiết kế web để **mọi người dùng** — kể cả người khuyết tật — đều sử dụng được. Hãy hình dung web như một tòa nhà công cộng: có thang máy, có lối đi cho xe lăn thì ai cũng vào được — không chỉ nhóm đặc biệt.

### Người thụ hưởng trực tiếp

- Người khiếm thị dùng **screen reader** (NVDA, JAWS, VoiceOver)
- Người thị lực yếu cần phóng to, độ tương phản cao
- Người khiếm thính cần phụ đề video
- Người vận động hạn chế chỉ dùng **bàn phím** hoặc switch device
- Người rối loạn nhận thức cần ngôn ngữ đơn giản, cấu trúc nhất quán

### Lợi ích gián tiếp

- **SEO tốt hơn**: Semantic HTML + a11y = cấu trúc rõ ràng mà Google yêu thích
- **Tuân thủ pháp lý**: Nhiều quốc gia yêu cầu WCAG (ADA, EN 301 549, Luật Người khuyết tật Việt Nam 2025 quy định tiếp cận số)
- **Chất lượng code tốt hơn**: a11y buộc code sạch, ngữ nghĩa

> **Tóm gọn 1 câu:** Accessibility là xây "lối đi không bậc thềm" cho web — người khuyết tật đi được thì tất cả mọi người đi đều dễ hơn.

---

## 7.2. WCAG 2.2 — Tiêu chuẩn chính thức

Mục này giới thiệu "luật chơi" chính thức của a11y: WCAG 2.2 — gồm 4 nguyên tắc, 3 mức độ, và các tiêu chí mới cần biết trong 2025–2026.

**WCAG 2.2** trở thành **W3C Recommendation ngày 12/12/2024** (bản cập nhật). Đây là chuẩn nên nhắm tới trong 2025–2026.

### 4 nguyên tắc (POUR)

| Nguyên tắc | Ý nghĩa |
|-----------|---------|
| **P**erceivable | Nội dung phải cảm nhận được (văn bản thay thế, phụ đề) |
| **O**perable | Vận hành được (bàn phím, đủ thời gian) |
| **U**nderstandable | Dễ hiểu (ngôn ngữ rõ, nhất quán) |
| **R**obust | Mạnh mẽ (tương thích assistive technology) |

> **Cách đọc bảng này:** chữ cái đầu mỗi dòng ghép thành từ POUR — P là "nghe/thấy được", O là "bấm được", U là "hiểu được", R là "không hỏng với công cụ hỗ trợ"; đánh giá mọi trang theo 4 trụ cột này là đủ khung.

### 3 mức độ tuân thủ

- **Level A**: tối thiểu bắt buộc
- **Level AA**: chuẩn mục tiêu của hầu hết tổ chức, chính phủ
- **Level AAA**: cao nhất, không nên đặt làm yêu cầu toàn trang

### 9 tiêu chí MỚI trong WCAG 2.2 (liên quan HTML nhiều nhất)

| Tiêu chí | Mức | Liên quan HTML |
|----------|-----|----------------|
| 2.4.11 Focus Not Obscured (Minimum) | AA | Sticky header không che focus |
| 2.5.7 Dragging Movements | AA | Cung cấp lựa chọn thay thế kéo-thả |
| 2.5.8 Target Size (Minimum) | AA | Vùng bấm ≥ 24×24 px |
| 3.2.6 Consistent Help | A | Trợ giúp đặt ở cùng vị trí các trang |
| 3.3.7 Redundant Entry | A | Không bắt nhập lại thông tin đã có |
| 3.3.8 Accessible Authentication (Minimum) | AA | Đăng nhập không yêu cầu nhận diện (CAPTCHA) |
| 2.4.12 Focus Not Obscured (Enhanced) | AAA | |
| 2.4.13 Focus Appearance | AAA | |
| 3.3.9 Accessible Authentication (Enhanced) | AAA | |

> Lưu ý: Tiêu chí **4.1.1 Parsing đã bị loại (obsolete)** trong WCAG 2.2 — nhưng HTML hợp lệ vẫn là nền tảng a11y tốt.

> **Tóm gọn 1 câu:** WCAG 2.2 là "la bàn" a11y 2025–2026 — nhắm Level AA, nhớ từ khóa POUR, và đừng quên focus phải luôn nhìn thấy.

---

## 7.3. HTML Semantic là a11y tốt nhất

Mục này chốt nguyên tắc quan trọng nhất của cả phần: dùng đúng HTML gốc còn tốt hơn tự chế bằng ARIA.

**Quy tắc số 1 của ARIA: đừng dùng ARIA nếu HTML ngữ nghĩa đã đủ** ("No ARIA is better than bad ARIA" — First Rule of ARIA). Ví von: thay vì tự đóng vai người dẫn chương trình, hãy để chương trình có sẵn người dẫn.

> 📄 **Code ví dụ:** [`examples/01-7-3-html-semantic-la-a11y-tot-nhat.html`](examples/01-7-3-html-semantic-la-a11y-tot-nhat.html)

### Bảng so sánh: HTML native vs tự làm bằng ARIA

| Native HTML | Thay thế ARIA (tránh) |
|-------------|----------------------|
| `<button>` | `<div role="button" tabindex="0">` |
| `<a href="...">` | `<span role="link">` |
| `<label>` + input | `aria-label` tự chế |
| `<dialog>` | `<div role="dialog">` tự quản lý focus |
| `<input type="checkbox">` | `<span role="checkbox" aria-checked>` |
| `<table>` với `<th scope>` | Grid ARIA tự dựng |
| `<details>`/`<summary>` | `<div role="button" aria-expanded>` |

> **Cách đọc bảng này:** mỗi dòng là một cặp "lựa chọn tốt – lựa chọn tự làm khó mình": cột trái là HTML có sẵn a11y miễn phí, cột phải là bản ARIA tự dựng tốn công mà dễ sai — luôn ưu tiên cột trái.

---

## 7.4. ARIA — Accessible Rich Internet Applications

Mục này nói về "bộ trợ lực dự phòng": ARIA — dùng khi HTML thuần không đủ diễn tả, chứ không phải món trang trí thêm.

ARIA là bộ **thuộc tính** bổ sung ngữ nghĩa khi HTML thuần không đủ.

### 7.4.1. `role` — Vai trò

> 📄 **Code ví dụ:** [`examples/02-7-4-1-role-vai-tro.html`](examples/02-7-4-1-role-vai-tro.html)

### 7.4.2. `aria-label`, `aria-labelledby`, `aria-describedby`

> 📄 **Code ví dụ:** [`examples/03-7-4-2-aria-label-aria-labelledby-aria.html`](examples/03-7-4-2-aria-label-aria-labelledby-aria.html)

### 7.4.3. Trạng thái ARIA quan trọng

| Thuộc tính | Ý nghĩa |
|-----------|---------|
| `aria-expanded="true/false"` | Mục lục/dropdown đang mở hay đóng |
| `aria-selected` | Lựa chọn đang chọn (tab, option) |
| `aria-checked` | Trạng thái checkbox/switch |
| `aria-current="page"` | Trang hiện tại trong menu |
| `aria-disabled` | Vô hiệu hóa (giữ focus được, khác `disabled`) |
| `aria-hidden="true"` | Ẩn khỏi screen reader |
| `aria-live="polite/assertive"` | Vùng thông báo thay đổi động |

> **Cách đọc bảng này:** cột trái là thuộc tính trạng thái, cột phải là câu hỏi nó trả lời cho screen reader ("đang mở hay đóng?", "đang chọn dòng nào?") — đọc cột phải là hiểu ngay khi nào cần dùng thuộc tính đó.

### 7.4.4. `aria-live` — Thông báo nội dung động

> 📄 **Code ví dụ:** [`examples/04-7-4-4-aria-live-thong-bao-noi.html`](examples/04-7-4-4-aria-live-thong-bao-noi.html)

---

## 7.5. Điều hướng bàn phím (Keyboard Navigation)

Mục này nói về việc "điều khiển trang không cần chuột": mọi chức năng phải dùng được bằng bàn phím — chìa khóa để người dùng vận động hạn chế không bị khóa ngoài cửa.

### Yêu cầu cốt lõi (WCAG 2.1.1 Keyboard — Level A)

**Mọi chức năng đều phải dùng được chỉ với bàn phím.**

### Các phím chuẩn

| Phím | Hành vi mong đợi |
|------|------------------|
| `Tab` | Di chuyển đến phần tử tương tác kế tiếp |
| `Shift+Tab` | Di chuyển ngược lại |
| `Enter` | Kích hoạt link, button, submit form |
| `Space` | Kích hoạt button, toggle checkbox, cuộn trang |
| `Esc` | Đóng dialog, popover, menu |
| `←/→`, `↑/↓` | Di chuyển trong nhóm (tabs, radio, menu) |

> **Cách đọc bảng này:** đây là "hợp đồng" mà người dùng bàn phím kỳ vọng từ trang của bạn — cột Phím là phím họ bấm, cột phải là điều trang phải làm; hãy tự bấm thử từng phím để kiểm tra.

### `tabindex` — dùng đúng cách

> 📄 **Code ví dụ:** [`examples/05-tabindex-dung-ung-cach.html`](examples/05-tabindex-dung-ung-cach.html)

### Skip link — nhảy qua menu

> 📄 **Code ví dụ:** [`examples/06-skip-link-nhay-qua-menu.html`](examples/06-skip-link-nhay-qua-menu.html)

> **Tóm gọn 1 câu:** Bàn phím là "con đường duy nhất" của nhiều người dùng — Tab, Enter, Esc phải hành xử đúng lời hứa ở bảng trên.

---

## 7.6. Hình ảnh, liên kết và văn bản thay thế

Mục này nói về "giọng đọc thay mắt": alt text cho ảnh và văn bản liên kết có nghĩa — hai chỗ dễ sửa nhất mà giá trị a11y cao nhất.

> 📄 **Code ví dụ:** [`examples/07-7-6-hinh-anh-lien-ket-va-van.html`](examples/07-7-6-hinh-anh-lien-ket-va-van.html)

### Văn bản liên kết có ý nghĩa

> 📄 **Code ví dụ:** [`examples/08-van-ban-lien-ket-co-y-nghia.html`](examples/08-van-ban-lien-ket-co-y-nghia.html)

---

## 7.7. Form và Accessibility

Mục này ghép form với a11y: làm sao người dùng màn hình điền form không bị lạc, không bị lỗi "bốc hơi".

> 📄 **Code ví dụ:** [`examples/09-7-7-form-va-accessibility.html`](examples/09-7-7-form-va-accessibility.html)

**Điểm chính:**
- `label` liên kết bằng `for`/`id` (không phụ thuộc `aria-label`)
- `aria-describedby` cho hướng dẫn + vùng lỗi
- `role="alert"` cho thông báo lỗi động
- Dấu `*` cho trường bắt buộc nên `aria-hidden` nếu đã có text giải thích

---

## 7.8. Dialog, Popover và quản lý focus

Mục này nói về "quản lý ánh đèn sân khấu": khi modal mở, ánh đèn (focus) phải đổ đúng vào modal và trả về đúng chỗ khi tắt.

### Dùng `<dialog>` native (từ 2022, hỗ trợ tốt mọi trình duyệt)

> 📄 **Code ví dụ:** [`examples/10-dung-dialog-native-tu-2022-ho-tro-tot.html`](examples/10-dung-dialog-native-tu-2022-ho-tro-tot.html)

`<dialog>` native tự động: chặn focus vào nền (focus trap), đóng bằng `Esc`, đưa vào **top layer**. Xem chi tiết tại [Phần 11](../11_modern-features/README.md).

### Modal tự dựng (khi không dùng `<dialog>`) cần:

1. Focus đưa vào phần tử đầu của modal khi mở
2. Focus trap: Tab không thoát ra ngoài
3. `Esc` đóng modal
4. Trả focus về nút đã mở modal
5. `role="dialog"` + `aria-modal="true"` + `aria-labelledby`

> **Tóm gọn 1 câu:** Modal tự dựng phải tự lo 5 việc mà `<dialog>` native làm sẵn — focus vào đúng chỗ, không thoát ra ngoài, Esc tắt được, trả focus, khai báo đúng role.

---

## 7.9. Kiểm tra accessibility

Mục này là "đợt tổng kiểm tra": công cụ tự động nào dùng, checklist thủ công nào chạy, để a11y không chỉ nằm trên giấy.

### Công cụ tự động

- **Chrome DevTools** → tab Lighthouse → Accessibility audit
- **axe DevTools** extension (Deque)
- **WAVE** (WebAIM)
- **NVDA** (Windows, miễn phí) / **VoiceOver** (macOS: `Cmd+F5`)

### Checklist thủ công

- [ ] Tab qua toàn trang: mọi thứ tương tác được và focus luôn nhìn thấy
- [ ] Không có focus bị header/cookie-bar che (WCAG 2.4.11)
- [ ] Screen reader đọc đúng thứ tự và ý nghĩa
- [ ] Độ tương phản văn bản ≥ 4.5:1 (AA)
- [ ] Vùng chạm ≥ 24×24 px (WCAG 2.5.8)
- [ ] Trang hoạt động khi zoom 200%
- [ ] Video có phụ đề, hình có `alt`

### Lighthouse từ dòng lệnh

> 📄 **Code ví dụ:** [`examples/11-lighthouse-tu-dong-lenh.sh`](examples/11-lighthouse-tu-dong-lenh.sh)

---

## 7.10. Tài liệu tham khảo

- [WCAG 2.2 — W3C Recommendation 12/12/2024](https://www.w3.org/TR/WCAG22/)
- [What's New in WCAG 2.2 — W3C WAI](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/)
- [MDN: Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [web.dev — Learn Accessibility](https://web.dev/learn/accessibility)

---

## Tóm tắt

- ✅ HTML semantic trước, ARIA sau — "No ARIA is better than bad ARIA"
- ✅ WCAG 2.2 là chuẩn mục tiêu 2025–2026, nhắm Level AA
- ✅ Mọi chức năng dùng được bằng bàn phím; không che focus
- ✅ `alt`, `label`, `aria-live`, skip link là 4 thứ dễ làm, giá trị cao
- ✅ Ưu tiên `<dialog>`/Popover native thay vì modal tự dựng

> **Tóm gọn 1 câu:** A11y là "đi bộ trong giày của người khác": semantic trước, ARIA sau, bàn phím luôn thông, focus luôn nhìn thấy.

---

**Phần tiếp theo:** [Multimedia](../8_multimedia/README.md) — video, audio, iframe, picture, source, track.
