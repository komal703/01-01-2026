git branch -m main
git push -u origin main
git log --oneline
git add .
git commit -m "Initial commit: Bingo web application with Docker setup"
git config --global user.email "komalshripat22@gmail.com"
git config --global user.name "komal703"
git push -u origin main
git remote -v
# Clear the credential helper cache
git config --global --unset credential.helper
