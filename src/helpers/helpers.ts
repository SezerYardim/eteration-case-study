// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function saveLocalStorage(key: string, data: Record<string, any>) {
  const stringData = JSON.stringify(data);
  localStorage.setItem(key, stringData);
}

export function getItemFromLocalStorage(key: string) {
  const stringData = localStorage.getItem(key);
  if (stringData) {
    const data = JSON.parse(stringData);
    return data;
  }
}
