import { callAPI } from "./core";

interface FetchTestType {
  dest: string;
  method: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchTest = async ({ dest, method }: FetchTestType): Promise<any> => {
  const result = await callAPI({ dest, method })

  return result;
}