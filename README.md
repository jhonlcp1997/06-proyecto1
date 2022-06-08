
# mejor probamos con cual se puede

***Lo que hice para publicarlo en github pages***

- npm i gh-pages
- **Colocar en el package.json**
    - abajo de private: "homepage": "https://gedgonz.github.io/06-proyecto1",
    - en "scripts": "predeploy":"npm run build",
                    "deploy" : "gh-pages -d build",
- npm run predeploy
- npm run deploy
- **tambien hice por seacaso**
    - git add .
    - git commit -m "mensage"
    - git push