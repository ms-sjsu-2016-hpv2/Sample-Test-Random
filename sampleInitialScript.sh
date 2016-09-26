
#echo "Enter Directory to clone to : "
#read dirname

dirname=/home/yoda
mkdir -p "$dirname"
cd "$dirname"

git clone https://github.com/heroku/node-js-sample.git 
cd node-js-sample && npm install && npm start