/* eslint-disable @typescript-eslint/no-explicit-any */
interface APIProps {
  dest: string;
  method: string;
  body?: any;
}

export const callAPI = async ({ dest, method, body }: APIProps): Promise<any> => {
  console.log(dest, method, body)

  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      Accpet: 'application/json',
    },
    // body: JSON.stringify({
    //   ...body,
    // }),
  }



  const fetch_result = await fetch(dest, options);
  const fetch_json = await fetch_result.json();
  return fetch_json;
  // return fetch_json.data;
}