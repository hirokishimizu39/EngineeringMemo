### まとめ

| **書き方**             | **例**                                         | **特徴**                    | **用途**                                                                                 |
|-------------------------|-----------------------------------------------|----------------------------|-----------------------------------------------------------------------------------------|
| 関数宣言               | `function greet() {}`                         | 古典的で汎用的             | 名前付きで関数をグローバルに使いたい場合。                                              |
| 関数式                 | `const greet = function() {}`                 | 匿名または名前付きで柔軟    | 必要に応じて動的に定義。                                                               |
| アロー関数             | `const greet = () => {}`                      | 短い記法、`this`に依存しない | シンプルなコールバック関数や、配列操作などに適している。                                  |
| オブジェクトメソッド   | `increment: function() {}` / `decrement() {}` | オブジェクト内で簡潔に記述  | クラスやオブジェクトのメソッドとして記述。                                               |
| コンストラクタ関数     | `function Person() {}`                        | クラス生成の古い形式        | クラスが利用できない状況（古い環境）でオブジェクトを作る場合。                           |
| 即時実行関数           | `(function() {})()`                           | 定義後即実行                | 一時的なスコープ作成やロジックのカプセル化に便利。                                       |
| クラスメソッド         | `class { increment() {} }`                    | `class` 構文内の標準        | OOP (オブジェクト指向) の構築に適している。                                              |
| ジェネレーター関数     | `function* generator() {}`                    | 反復処理に特化              | イテレーターや複雑な反復処理を実装する場合。                                             |
| 非同期関数（`async`） | `async () => {}`                              | プロミスの簡易表現          | 非同期 API 呼び出しや、逐次処理の簡易化。                                               |
