# Express JS Crush Course

[Youtube](https://www.youtube.com/watch?v=L72fhGm1tfE)

## メモ
npm installするもの  
・express  
・express-handlebars [ドキュメント](https://www.npmjs.com/package/express-handlebars)  
・moment  
・uuid  
・nodemon(開発ツール)  

### index.jsがメイン
・”/“に対してrenderメソッドで読み込むファイル(拡張子: handlebars)を指定。値を渡すこともできる。  
・“api/members”のurlに対してはmembers.jsのファイルへルーティング  
・PORTをlisten  

### members.jsでCRUD処理
・express.Router()に対して以下を実行  
・select文 == get || insert文 == post || update文 == put || delete文 == delete  
・idをパラメータで渡す。そのidがMembers.jsのオブジェクト内にいるかどうかで条件分岐後処理。res.の後にレスポンスの内容を記入。  
・オブジェクトでキーとバリューが同じならmembers : membersだったらmembersを1回書くだけでok  

### handlebarsファイル
・viewsフォルダのlayoutsフォルダのmain.handlebarsファイルの{{{ body }}}でindex.jsが表示される(package.jsonに書いてあるやつよね?)   
