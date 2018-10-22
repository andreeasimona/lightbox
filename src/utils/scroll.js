/* Detect if a user has scroll to the bottom of the page */
const isBottom = () => {
  const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
  const { body, documentElement } = document;
  const docHeight = Math.max(body.scrollHeight, body.offsetHeight,
    documentElement.clientHeight, documentElement.scrollHeight, documentElement.offsetHeight);
  const windowBottom = windowHeight + window.pageYOffset;
  if (windowBottom >= docHeight) {
    return true;
  }
  return false;
};

export default isBottom;
