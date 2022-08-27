export let DlcName = "";
export let Order = 0;

export const updateDlcName = (name: string) => {
  DlcName = name;
};

export const updateOrder = (n: number) => (Order = n);
