🧑‍💻Ruby
    - 変数と文字列を足し算　で連結することはできない→変数展開の使用
    - 配列.each do |変数名|
        - 実行したい処理
    - end
    - 配列とハッシュ
        - ハッシュは、キーバリュー型の配列
            - ハッシュの書き方まとめ
                - user = { “key1” => “value1(文字列)”, “key2” => value2(数値) }
                - user = { :key1 => “value1(文字列)”, :key2 => value2(数値) }
                - user = { key1: “value1(文字列)”, key2: value2(数値) }
    - nil = null のこと？
    - メソッド
        - def
            - 処理1
            - 処理2
        - end
    - メソッドと関数の違いはなに？
    - キーワード引数（それが何の引数なのか分かり易い）
        - def introduce(name:, age:)
            - puts “名前は#{name}です”
            - puts “年齢は#{age}です”
        - end
        - introduce(name: ”hiroki”, age: 23)
    - オブジェクト指向
        - クラス(設計図)とインスタンス(実体)
        - class Menu
            - attr_accessor :name（インスタンス変数1）
            - attr_accessor :price（インスタンス変数2）
            - def show(name:, price:)
                - return “#{name}は#{price}円です！”
        - end
        - インスタンス(実体)の生成
            - menu1 = Menu.new
        - インスタンスに値を追加
            - menu1.name = カレーライス
        - initializeメソッド。phpのコンストラクタ
            - 本来であれば、インスタンス生成→インスタンス変数に値を代入をするが、initalizeメソッドやコンスラクタはこれを同時にやってくれる
        - インスタンスメソッド（クラスで定義したメソッドをインスタンスで呼び出す）
            - menu1.show(name: “カレーライス”, price: 800)
        - ファイルの分割（ファイル名で呼び出す）
            - require “ファイル名のURL”
        - ユーザーの入力を受け付ける
            - 入力1 = gets.chomp（文字列）
            - 入力2 = gets.chomp.to_i（数値）
        - クラスの継承
            - class Food(子クラス) < Menu(親クラスa)
            - end
        - オーバライド（メソッドの上書き）
            - 子クラスに定義されたものが優先されて呼び出される
            - super
                - メソッド内で重複時、親クラスと同名のメソッドを呼び出せる
        - Dateクラス
            - require “date”
            - date1 = Date.new(2024, 9, 21)
            - today = Date.today
