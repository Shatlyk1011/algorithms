const allowedDomains = [
  "ya.ru",
  "yandex.ru",
  "yandex.com",
  "yandex.kz",
  "yandex.by",
  "yandex.az",
  "yandex.ua",
  "yandex.uz",
  "yandex.ge",
  "yandex.lv",
  "yandex.ee",
  "yandex.lt",
  "yandex.fr",
  "yandex.co.uk",
  "yandex.de",
];

function isValidYandexLink(url) {
  try {
    const hostname = new URL(url).hostname;

    return allowedDomains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}

module.exports = isValidYandexLink;
