import type { App } from 'vue'

import { Edit, Search, AddLocation, UserFilled } from '@element-plus/icons-vue'

export const icons = [Edit, Search, AddLocation, UserFilled]

//按需导出图标组件
export default function (app: App): void {
  for (const icon of icons) {
    app.component(icon.name, icon)
  }
}

