# 
set -e

# 打包
# npm run docs:build

# 进入该文件
cd public

# 自己域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '增加背景音乐模块，增加公告模块'

# 部署github https://<USERNAME>.github.io
#  git push -f git@github.com:yuangegena/yuangegena.github.io.git master

# 部署github https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yuangegena/my_blog.git master:gh-pages

# 部署在码云
#git push -f https://gitee.com/yuangegena/my_blog.git master:gh-pages


cd -