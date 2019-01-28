export const setItemInLocalStorage = (key: string, value: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const removeItemFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
};

export const getItemFromLocalStorage = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err);
    return null;
  }
};
