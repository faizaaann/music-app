import { AxiosResponse } from 'axios';

export const ErrorType = (err) => {
  if (err.response) {
    return err.response.data.message || 'Response Error';
  } else if (err.request) {
    return 'Bad Request';
  } else {
    return err.message;
  }
};
