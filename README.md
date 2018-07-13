# ionic-news-app
Simple news,articles,events static app

# Environment setpup
npm install -g ionic cordova </br>
-g is global install. The command installs ionic and cordova

# Star the app
npm install<br>
ionic serve -p 3000</br>
-p <PORT> runs in specified PORT number</br>

Note Since data is served from JSON file need to do the following after starting the app:

Go to: \src\pages\article\article.ts</br>
Remove 'articles' from 'import ArticleList  from '../../../dataFeed/articles';' this line</br>
Save the file. Undo the change and again save the file. (Sounds stupid but works)

