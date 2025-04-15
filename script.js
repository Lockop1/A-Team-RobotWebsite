window.addEventListener('load', function () {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('scroll') === 'half') {
    const halfway = document.body.scrollHeight / 1.75;
    window.scrollTo({
      top: halfway,
      behavior: 'smooth'
    });
  }
});
