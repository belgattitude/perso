import { createHttpException, HttpRequestTimeout } from '@httpx/exception';
import axios, { AxiosError } from 'axios';

const axiosWithHttpException = axios.create();

const errorMap = {
  timeouts: [
    AxiosError.ECONNABORTED,
    AxiosError.ETIMEDOUT,
    AxiosError.ERR_FR_TOO_MANY_REDIRECTS,
  ],
  ignored: [AxiosError.ERR_CANCELED],
};

axiosWithHttpException.interceptors.response.use(
  (res) => res,
  (err: AxiosError) => {
    const { code = '' } = err;
    if (errorMap.ignored.includes(code)) {
      return;
    }
    const url = err.request?.requestUrl ?? undefined;
    if (errorMap.timeouts.includes(code)) {
      throw new HttpRequestTimeout({
        message: `Request timeout (${code})`,
        url,
      });
    } else {
      const status = err.request?.status ?? 500;
      throw createHttpException(status, {
        message: `${err.message}`,
        url,
      });
    }
  }
);
export const safeAxios = axiosWithHttpException;
