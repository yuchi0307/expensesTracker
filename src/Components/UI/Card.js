import './Card.css'
// 1. 作為可以重複利用的 wrapper ，在網頁開發通常稱之為 Card 。
// 2. 欲將 Card 這個 component ( 客製化的 html tag ) 作為 opening closing tag，不像是一般的html可以直接讀懂class
// 3. 利用 React 內建特別的 prop 讓他讀懂 html 的 attribute -> props.children
// 4. 所有 component 都接收 props.children
// 5. props.children 永遠代表其 opening closing tag之間的內容
// 6. 為避免我客製化的 Card html tag 只讀得懂我給予他的css內容，他忘記去讀本身在ExpensesItem.js中的className='expense-item'
    //必須多提醒他：const classes = 'card ' （我客製化的css className）+ props.className（原應有的）;
    //注意！ 'card '結尾必須有空格否則無效
const Card = (props) => {
    const classes = 'card ' + props.className;
    return(
    <div className={classes}>{props.children}</div>
    )
}

export default Card;