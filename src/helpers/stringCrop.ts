export const stringCrop = (str: string | null, charCount: number) => {
  if (str !== null) {
    if (str.length > charCount) {
      return str.substring(0, charCount) + "...";
    } else {
      return str;
    }
  } else {
    return null;
  }
};
