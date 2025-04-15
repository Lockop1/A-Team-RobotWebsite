window.addEventListener('load', function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'half') {
    const halfway = document.body.scrollHeight / 2.5;
    window.scrollTo({
      top: halfway,
      behavior: 'smooth'
    });
  }

  if (urlParams.get('scroll') === 'full') {
    const halfway = document.body.scrollHeight / 1.15;
    window.scrollTo({
      top: halfway,
      behavior: 'smooth'
    });
  }
});
