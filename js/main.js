document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;
  var button = form.querySelector('button[type="submit"]');
  var defaultLabel = button.textContent;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (button.disabled) return;

    button.disabled = true;
    button.textContent = 'Sending…';

    fetch('https://formspree.io/f/mkolonyl', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then(function (res) {
        if (res.ok) {
          button.textContent = 'Message sent ✓';
          form.reset();
        } else {
          button.textContent = 'Failed — try again';
        }
        resetAfterDelay();
      })
      .catch(function () {
        button.textContent = 'Failed — try again';
        resetAfterDelay();
      });
  });

  function resetAfterDelay() {
    setTimeout(function () {
      button.disabled = false;
      button.textContent = defaultLabel;
    }, 3000);
  }
});
