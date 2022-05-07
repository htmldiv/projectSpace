/*
 * @Description: 布局配置
 * @Author: wander
 * @Date: 2022-05-06 01:20:05
 * @LastEditors: wander
 * @LastEditTime: 2022-05-07 11:39:40
 */

interface LayoutSettings {
    // Controls settings panel display
    showSettings: boolean 
    // Controls tagsview display
    showTagsView: boolean 
    // Controls siderbar logo display
    showSidebarLogo: boolean 
    // If true, will fix the header component
    fixedHeader: boolean 
    // If true, will change active text color for sidebar based on theme
    sidebarTextTheme: boolean 
  }
  
  // You can customize below settings :)
  const layoutSettings: LayoutSettings = {
    showSettings: true,
    showTagsView: true,
    fixedHeader: false,
    showSidebarLogo: true,
    sidebarTextTheme: true,
  }
  
  export default layoutSettings