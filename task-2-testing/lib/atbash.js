const atbash = (char) => {
  if (!char.match(/[a-z]/i)) {
    return char;
  }
  const code = char.charCodeAt(0);
  if (code >= 65 && code < 78) {
    return String.fromCharCode(65 + (90 - code));
  }
  if (code >= 78 && code <= 90) {
    return String.fromCharCode(77 + (78 - code));
  }
  if (code >= 97 && code < 110) {
    return String.fromCharCode(97 + (122 - code));
  }
  if (code >= 110 && code <= 122) {
    return String.fromCharCode(109 + (110 - code));
  }
  return char;
};

export default (chunk, shift) => chunk.split('').map((char) => atbash(char, shift)).join('');
