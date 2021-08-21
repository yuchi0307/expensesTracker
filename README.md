# expensesTracker
【 React Expenses Tracker 練習筆記 】

1.  Component is just function、是客製化的 html 標籤，可用 <></> 表示。（opening and closing tag）

2.  JSX ： 瀏覽器最終能讀懂的終究是 html, css,  vanilla js ，JSX 為 React 環境讓我們寫方便閱讀的語法糖。（這些神奇魔法仰賴 package.json file裡面諸多 dependencies）
     例如，在比較舊的 react 專案中會有 import React from 'react'，是因為 JSX 被視為 React method 如下
     某個component = () => { return React.createElement(){ 'html element' , { attribute } , contents between closing element } }
     這也是為什麼我們只能在每個 component 中 return 一個 <div> 的原因，因為我們不能 return more than one thing

3.  當變數有初始值，又給予其他新的值，並不會使 React 改變UI，唯有 useState()，他會將值放在 React 某處（我們看不見的地方）並重新 render。 


