function decimalToHexString(number: number) {
  if (number < 0) {
    number = 0xffffffff + number + 1;
  }

  return number.toString(16).toUpperCase();
}

function jenkinsOneAtATimeHashSigned(key: string) {
  var keyLowered = key.toLowerCase();
  var length = keyLowered.length;
  var hash, i;

  for (hash = i = 0; i < length; i++) {
    hash += keyLowered.charCodeAt(i);
    hash += hash << 10;
    hash ^= hash >>> 6;
  }

  hash += hash << 3;
  hash ^= hash >>> 11;
  hash += hash << 15;

  return hash;
}

function convertToUnsigned(value: number) {
  return value >>> 0;
}

export function joaat(key: string) {
  return decimalToHexString(
    convertToUnsigned(jenkinsOneAtATimeHashSigned(key))
  );
}
