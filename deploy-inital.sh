# Bash variable for project name
PROJECT_NAME="project-name"


rm -rf .git
git init
git add .
git commit -m "Initalized Repository"
git branch -M main
gh repo create $PROJECT_NAME --private --source=.
git remote add origin https://github.com/OWNER/$PROJECT_NAME.git
git push -u origin main
vercel git connect --yes
vercel deploy