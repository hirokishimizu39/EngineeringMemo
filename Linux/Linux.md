🧑‍💻Linux
* cd(change directory)
    * ディレクトリの移動
    * cd /
* pwd(print name of working directory)
    * カレントディレクトリの表示
* ls(list)
    * ディレクトリの中身を表示
    * ls l
        * ファイルの詳細情報を表示
    * ls -a
        * 隠しファイルも含めて全てのファイルを表示
    * ls -F
        * ファイル種別を表示
* mkdir(make directory)
    * 新しいディレクトリの作成
    * mkdir -p create/nest/directory/2024/10
        * 一気に深いディレクトリを作れる
* rmdir(remove directory)
    * ディレクトリの削除
* ls —help
    * コマンドのヘルプメッセージ（使い方を教えてくれる）
* man(manual)
    * —helpオフションより詳しい
    * man -k
* cat(concatenate)
    * ファイルの中身の表示
* less
    * ファイルの中身をスクロール
* tail
    * 
* touch
    * 新しいファイルの作成
* rm(remove)
    * ファイル、ディレクトリの削除
    * rm -r dir
        * ディレクトリの削除
    * rm -f file
    * rm -i file
* mv(move)
    * mv file file1
        * flieというファイル名をfile1に変更
    * mv file1 dir/
        * file1をdirに移動
    * mv -i file file1
* cp(copy)
    * cp file new_file
    * cp file dir
    * cd -i file new_file
    * cp -r dir new_dir
* ln(link)
    * ファイルに別名をつけることができる
        * ハードリンク
            * 一つのファイルの実体に複数の名前をつける
            * ln file1 file2
        * シンボリックリンク
            * リンク先のパス名が書かれた特殊ファイル。リンク先がファイルの実体。
            * ln -s file1 file2
    * 
* find
    * ファイルを検索するコマンド
    * find . -name README.md -print
    * . 　検索開始ディレクトリ
    * -name　ファイル名を指定してファイル検索（大文字小文字を区別する）
    * -iname　ファイル名を指定してファイルを検索。（大文字小文字を区別しない）
    * -type f　ファイル
    * -type l　シンボリック
    * -type d　ディレクトリ
    * -a　複数の検索条件を指定
* chmod
* chown
* ps
* kill