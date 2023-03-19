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

chrome.webNavigation.onHistoryStateUpdated.addListener(details => {
  if (details.url === targetUrl && !hasQueryParam(details.url)) {
    const newUrl = addQueryParam(details.url);
    chrome.tabs.update(details.tabId, { url: newUrl });
  }
});
