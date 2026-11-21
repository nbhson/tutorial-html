const dlg = document.querySelector('#ho-tro');
dlg.showModal();               // mở modal (chặn tương tác nền)
dlg.show();                    // mở non-modal
dlg.close('reason');           // đóng, truyền giá trị
dlg.requestClose();            // đóng "nhẹ nhàng" — có thể bị chặn bằng sự kiện cancel (Baseline 2025)
dlg.addEventListener('close', () => console.log(dlg.returnValue));
