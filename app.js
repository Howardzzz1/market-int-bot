const views = {
  brief: {
    label: 'Daily brief',
    title: 'Your market brief',
    lede: 'A prioritized view of what changed, why it matters, and what to monitor next.'
  },
  portfolio: {
    label: 'Portfolio fit',
    title: 'What matters to your portfolio',
    lede: 'Connect market developments to holdings, exposures, and the assumptions behind the current thesis.'
  },
  evidence: {
    label: 'Evidence',
    title: 'Evidence behind the brief',
    lede: 'Keep source quality, confidence, and uncertainty visible alongside every important conclusion.'
  },
  thesis: {
    label: 'Thesis watch',
    title: 'Challenge the thesis',
    lede: 'Track the conditions that would weaken the current market read or change the next research question.'
  }
};

const toast = document.querySelector('#toast');
let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function setView(view) {
  const next = views[view] || views.brief;
  document.querySelector('#breadcrumb-label').textContent = next.label;
  document.querySelector('#page-title').textContent = next.title;
  document.querySelector('#page-lede').textContent = next.lede;
  document.querySelectorAll('.nav-item').forEach((button) => {
    button.classList.toggle('active', button.dataset.view === view);
    button.setAttribute('aria-current', button.dataset.view === view ? 'page' : 'false');
  });
  if (view !== 'brief') showToast(`${next.label} view selected — demo content remains synthetic.`);
}

document.querySelector('#nav-list').addEventListener('click', (event) => {
  const button = event.target.closest('[data-view]');
  if (button) setView(button.dataset.view);
});

document.querySelectorAll('[data-view-target]').forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.viewTarget));
});

document.querySelector('#refresh-button').addEventListener('click', () => {
  showToast('Demo snapshot refreshed — no external data was requested.');
});

document.querySelector('#export-button').addEventListener('click', () => {
  const brief = [
    'MARKETLENS AI — DAILY BRIEF',
    'Wednesday · July 16, 2026',
    '',
    'What changed: Rates are pulling attention back to quality.',
    'Portfolio relevance: 5 linked across 3 holdings.',
    'Evidence coverage: 12 items, including 9 primary sources.',
    '',
    'Research workspace, not financial advice. Demo values are synthetic.'
  ].join('\n');
  const blob = new Blob([brief], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'marketlens-daily-brief.txt';
  link.click();
  URL.revokeObjectURL(url);
  showToast('Brief exported as a text snapshot.');
});

document.querySelectorAll('.icon-button').forEach((button) => {
  button.addEventListener('click', () => showToast('This demo keeps the interaction local and does not connect to external services.'));
});
