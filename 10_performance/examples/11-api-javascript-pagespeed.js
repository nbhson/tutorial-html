// Đo LCP bằng PerformanceObserver
new PerformanceObserver((list) => {
  const entries = list.getEntries();
  const last = entries[entries.length - 1];
  console.log('LCP:', last.startTime, 'ms');
}).observe({ type: 'largest-contentful-paint', buffered: true });

// Đo CLS
new PerformanceObserver((list) => {
  let cls = 0;
  for (const entry of list.getEntries()) if (!entry.hadRecentInput) cls += entry.value;
  console.log('CLS:', cls);
}).observe({ type: 'layout-shift', buffered: true });
