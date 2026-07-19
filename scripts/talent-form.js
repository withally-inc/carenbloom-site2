(() => {
  const form = document.querySelector('.talent-form');
  if (!form) return;

  const status = form.querySelector('.talent-form-status');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Type: ${data.get('type') || ''}`,
      `Link: ${data.get('link') || ''}`,
      '',
      'What should we know?',
      data.get('note') || '',
    ].join('\n');

    const email = 'hello@carenbloom.com';
    const subject = encodeURIComponent('Talent search');
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${email}?subject=${subject}&body=${encodedBody}`;

    if (status) {
      status.textContent = 'Opening your email client. Send the note from there.';
    }
  });
})();
