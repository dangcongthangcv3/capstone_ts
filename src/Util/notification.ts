import { notification } from 'antd';

export const openNotification = (type: 'success' | 'info' | 'warning' | 'error', message: string) => {
  notification[type]({
    message: message,
  });
};
