export function unicodeToBase64(str: string): string {
  const utf8Bytes = new TextEncoder().encode(str);
  const binaryString = String.fromCharCode(...utf8Bytes);
  return btoa(binaryString);
}

export function base64ToUnicode(base64: string): string {
  const binaryString = atob(base64);
  const utf8Bytes = new Uint8Array(
    [...binaryString].map((char) => char.charCodeAt(0))
  );
  return new TextDecoder().decode(utf8Bytes);
}

export function encodeURIComp(str: string): string {
  return encodeURIComponent(str);
}

export function decodeURIComp(str: string): string {
  return decodeURIComponent(str);
}
