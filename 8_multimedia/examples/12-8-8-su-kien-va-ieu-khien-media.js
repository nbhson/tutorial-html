const video = document.querySelector('video');

// Điều khiển
video.play();          // trả về Promise (bắt lỗi NotAllowedError nếu autoplay bị chặn)
video.pause();
video.currentTime = 30; // nhảy tới giây 30
video.playbackRate = 1.5;
video.volume = 0.5;

// Sự kiện
video.addEventListener('play', () => console.log('Đang phát'));
video.addEventListener('ended', () => console.log('Kết thúc'));
video.addEventListener('error', (e) => console.error('Lỗi tải video', e));

// CanPlayType: kiểm tra hỗ trợ định dạng
const canAv1 = video.canPlayType('video/mp4; codecs="av01.0.05M.08"');
console.log(canAv1); // "probably" | "maybe" | ""
