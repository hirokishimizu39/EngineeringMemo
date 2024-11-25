■Django で EC サイトを作成してみる
詰まったところ

1. 今回は git clone でリポジトリを持ってきて開発をスタートした。なので、startproject, startapp どれから始めるのか迷った。

`プロジェクトを作成: django-admin startproject ecommerce`
`アプリを作成: python manage.py startapp shop`

アプリ作成から始める

アプリの分割基準
アプリを分けるか、既存のアプリに追加するかを決めるポイントは次の通りです：

1. 機能の独立性:
   - 機能が明確に異なる場合（例: 商品管理、カート機能、ユーザー認証）はアプリを分けます。
   - 一方、機能が密接に関連している場合（例: 商品一覧と詳細）は同じアプリ内にまとめます。
2. 再利用性:
   - 他のプロジェクトでも再利用する可能性がある場合（例: 汎用的なブログアプリや通知機能）は独立したアプリにします。
3. 開発・運用の管理しやすさ:
   - アプリが大きくなりすぎるとコードが複雑になり管理が困難になります。その場合、機能ごとに分割します。
4. チーム開発:
   - 複数人で開発する場合、担当者ごとにアプリを分けると作業がスムーズです。