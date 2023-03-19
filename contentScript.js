const targetUrl = 'https://chat.openai.com/chat';
const queryParameter = 'model=gpt-4';

function addQueryParam(url) {
  if (url.includes('?')) {
    return `${url}&${queryParameter}`;
  } else {
    return `${url}?${queryParameter}`;
  }
}

function hasQueryParam(url) {
  const paramKeyValue = queryParameter.split('=');
  const paramName = paramKeyValue[0];
  const paramValue = paramKeyValue[1];

  const queryParams = new URLSearchParams(url.split('?')[1]);
  return queryParams.get(paramName) === paramValue;
}

if (window.location.href.startsWith(targetUrl) && !hasQueryParam(window.location.href)) {
  const newUrl = addQueryParam(window.location.href);
  window.location.href = newUrl;
}