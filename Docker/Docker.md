# Docker

Webアプリなど何かサービスを創っていく際には、複数人で開発していく。
このとき開発者それぞれで開発環境を揃える必要がある。
そこでDockerが便利。

dockerはこの開発環境をコンテナとして作る。
つまり、開発環境＝コンテナと言える。


開発者開発環境、本番環境など



<!-- 大元 -->
<!-- docker hub -->
docker login
<!-- docker hubからhello-worldというdocker imageを持ってくる -->
docker pull hello-world
<!-- hello-worldはgithubのlibraryから取ってきてる。実は、右記の省略registry-1.docker.io/library/hello-world:latest -->

<!-- docker imageを表示 -->
docker images

<!-- ローカルにある実行中のコンテナを表示  ps(=process status) -->
docker ps
<!-- ローカルにある全てのコンテナを表示 -->
docker ps -a

<!-- hello-worldというプログラムをdocker imageからコンテナを作って、プログラムを実行 -->
docker run hello-world

<!-- `-it` は bash起動時に必要なおまじない -->
docker run -it ubuntu bash
<!-- ローカルホストの中にimageがなかったら、dockerhubからpullして持ってきてくれる。 -->s


<!-- コンテナがUpのまま、コンテナからexitする方法 -->
ctrl+p+q

<!-- 残していたコンテナの中にはいる -->
docker attach コンテナ名

<!-- コンテナから抜けてdownにする -->
コンテナの中でexitする

<!-- downのコンテナをもう一度Upにする -->
docker restart コンテナ名

docker exec -it <conatainer名> bash

<!-- コンテナで新しいimageにする。docker commit コンテナ名 新しイメージ名 -->
docker commit 623c10817e8d ubuntu:updated
<!-- 結果 -->
sha256:e3952e1c47edee35fe0c0e8596c3c769abbf15abd6b3874083d2e73e2ab46101


## docker hubにdocker imagesをpushする
<!-- imagesに新しいタグをつけてupdateする -->
docker tag ubuntu:updated hirokishimizu39/my-first-repo
<!-- ↓　結果　 ↓　-->
docker images
ubuntu                          updated     e3952e1c47ed
hirokishimizu39/my-first-repo   latest      e3952e1c47ed

<!-- docker hubにpushする -->
docker push hirokishimizu39/my-first-repo
Using default tag: latest
The push refers to repository [docker.io/hirokishimizu39/my-first-repo]
738542921e67: Pushed
2d6b6e63aa2f: Mounted from library/ubuntu

<!-- ローカルのdocker imageを削除する -->
docker rmi hirokishimizu39/my-first-repo

<!-- docker hub　からrepositoryをpullしてくる -->
docker pull hiroki hirokishimizu39/my-first-repo