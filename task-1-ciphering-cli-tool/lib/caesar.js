const caesar = (char, shift) => {
  if (shift < 0) {
    return caesar(char, shift + 26);
  }
  if (!char.match(/[a-z]/i)) {
    return char;
  }

  const code = char.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }

  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }
  return char;
};

export default (chunk, shift) => chunk.split('').map((char) => caesar(char, shift)).join('');
