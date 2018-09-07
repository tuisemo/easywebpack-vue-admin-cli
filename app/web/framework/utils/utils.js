
import manba from 'manba';

export function removeHTML(input) {
  return input;
}

export function formatDate(input, config) {
  return manba(input).format(config);
}

export function getUrlParameter(url) {
  return url;
}