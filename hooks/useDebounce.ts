import { InputStateForm } from "@/interfaces";

export function useDebounceForm(
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

export function useDebounce(cb: (value: any) => void, timeout: number = 500) {
  let timer: any;

  return (value: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb(value);
    }, timeout);
  };
}
