🧑‍💻React
- Meta社が開発したJSのライブラリ。
- JSはDOMからhtmlの要素をタグでとってきて操作する。ということをしているが、サービスが大きくなればなれほど、膨大な処理をすることになる。
    - この処理を和らげるのが、Reactによるコンポーネント処理。DOMの複数のhtmlタグをひとまとめにして、コンポーネントとすることで、処理を減らす。
- webサイトの見た目をつくることができる
- JSX
    - ほぼHTML
    - render() {
        - return (
            - <div>
                - {*/    コメント   */}
                - <h1></h1>
                - <h2></h2>
            - </div>
        - );
    - }
- returnの外ならJSを記述できる
- JSXにJSを埋め込むには{}で囲む
- Reactの武器　イベント(操作された事象)とステイト(値)
    - イベント
        - イベント名={() => { 処理 }}と書くことで、指定したタイミングで処理を実行できる。アロー関数はJavaScriptなのでJSXに記述するには、{}で囲む
        - イベントの種類
            - クリックイベント
                - <button> onClick={() => {this.handleClickLesson}} </button>
    - ステイト
        - import {useState} from 'react';　したら使える
        - state, setState
        - constructorにオブジェクトの形(this.state)で定義する
            -   constructor(props) {
            -     super(props);
            -     this.state = {
            -       isModalOpen: false
            -     }
            -   }
        - ステイトの変更(this.setState)
            - handleClickLesson() {
                - this.setState({isModalOpen: true});
            - }
- App.js→index.js→index.html
- JSXにCSSを適用するとき、クラス名は以下のように指定する
    - <h1 className=“title”>Hello World</h1> 
- クラス名がコンポーネントの名前
- import React from 'react';
- class App extends React.Component {
-   constructor(props) {
-     super(props);
-     this.state = {count: 0};
-   }
-   
-   // handleClickメソッドを定義してください
-   handleClick() {
-     this.setState({count: this.state.count +1});
-   }
-   
-   render() {
-     return (
-       <div>
-         <h1>
-           {this.state.count}
-         </h1>
-         {/* <button>タグ内でonClickイベントを追加してください */}
-         <button onClick={() => {this.handleClick()}}>+</button>
-         
-       </div>
-     );
-   }
- }
