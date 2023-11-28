import { InputStateForm } from "@/interfaces";

export function useDebounce(
  cb: (field: keyof InputStateForm, value: any) => void,
  timeout?: number
) {
  let timer: any;
  return (field: keyof InputStateForm, value: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(field, value);
    }, timeout);
  };
}
