export const transitionState = {
  fadeDuration: 0,
  defaultFadeStyle: {
    transition: `opacity 0.5s ease`,
    opacity: 0,
  },
  transitionFadeStyles: {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  },
};

export const NOTIFY_TEXT: string = 'Подпишись на уведомление чтобы не пропустить скидки в этот знаковый день!';
export const DOWNLOAD_APP_TEXT: string = 'Скачай приложение Technodom,чтобы не пропустить скидки в этот знаковый день';
export const UNDER_URL: string = 'https://www.technodom.kz/under/advent-calendar';
