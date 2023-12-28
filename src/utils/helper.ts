export function removeExtraSpaces(val: string) {
  return val.replace(/\s+/g, " ").trim();
}
