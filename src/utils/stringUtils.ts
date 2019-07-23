export const getAppendAttributeValues = (append: string | undefined): string => {
  const appenderString: string = (append) ? " " + append : "";
  return appenderString;
};
