import { getSidebarStatus, getSize } from "@/utils/cookies";
import { getLocale } from '@/locales'

export const DeviceType = {
  Mobile: 'Mobile',
  Desktop: 'Desktop'
}

export const state = {
  device: DeviceType.Desktop,
  sidebar: {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false,
  },
  language: getLocale(),
  size: getSize() || 'medium'
}