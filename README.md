# 项目介绍

  一个基于**uniapp+vue3**专业学习规划分析平台，本代码主要为移动端。  

- dev-uniapp为开发分支

- dev-master为最新的打包分支，仅供记录使用

- package为as的打包分支，仅供打包使用

- dev-kotlin为kotlin分支，已停止更新

- feat-picker为选择器更换分支，已进行更换，并入主分支

---

## 未处理的问题

- [ ] 学习记录index页面，app端无法触发onActivated生命周期钩子函数，导致添加计划后返回首页数据无法刷新。

- [x] 部分机型选择器无法显示。
  
  - 原因：input设置了disabled，导致input元素被禁用时，用户无法与其进行任何交互，无法触发click事件。
  
  - 解决方法：
    
    1. 将click绑定到form-item上，而不是input上。
    
    2. 在input上添加
       
       ```css
       style="pointer-events: none"
       ```
       
       - `pointer-events` 是 CSS 的一个属性，用于控制元素是否响应鼠标事件。设置 `pointer-events: none` 时，元素不会响应任何鼠标事件，包括点击、悬停等。
       - 这个属性会使元素完全“不可点击”，但它不影响元素的视觉样式，只是控制鼠标事件。

- [ ] 添加学习记录页面app端有时候会报错secondColumns is not defined。概率问题，无法复现。



## 比賽

半決賽已過--2024.09.03