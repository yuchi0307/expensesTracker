# expensesTracker
【 React Expenses Tracker 練習筆記 】
✔ component
1.  Component is just function、是客製化的 html 標籤，可用 <></> 表示。（opening and closing tag）

2.  JSX ： 瀏覽器最終能讀懂的終究是 html, css,  vanilla js ，JSX 為 React 環境讓我們寫方便閱讀的語法糖。（這些神奇魔法仰賴 package.json file裡面諸多 dependencies）
     例如，在比較舊的 react 專案中會有 import React from 'react'，是因為 JSX 被視為 React method 如下
     某個component = () => { return React.createElement(){ 'html element' , { attribute } , contents between closing element } }
     這也是為什麼我們只能在每個 component 中 return 一個 div 的原因，因為我們不能 return more than one thing
<img width="693" alt="截圖 2021-08-21 下午10 41 14" src="https://user-images.githubusercontent.com/67968321/130325861-ef3c630c-3802-4439-8419-071561dd30b5.png">

3.  當變數有初始值，又給予其他新的值，並不會使 React 改變UI，唯有 useState()，他會將值放在 React 某處（我們看不見的地方）並重新 render。 

✔ React State & Working with
Events
1. 子傳父值： pass a function from a paerent component to a child component and then call that function inside of the child component。
-> 當 function 在子層被呼叫，把資料data當作參數放入function
-> 因為父層把 function 當作 <子層 /> 的 prop 傳上來
