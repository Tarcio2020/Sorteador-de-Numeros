# Grunt-Automate


<h2>Automação de tarefas com Grunt</h2>
O Grunt, é uma ferramenta para automação de tarefas
front-end, com ele podemos automatizar a compilação de SASS e LESS, comprimir
arquivos, entre outras coisas.


Requisitos
O Grunt é executado a partir do NodeJS,
portanto precisamos ter o Node e o NPM
instalados.


Primeiramente precisamos instalar o Grunt CLI
de forma global:

    npm install –g grunt-cli

Após isso, na pasta do projeto digitamos:
    npm install –-save-dev grunt

***O arquivo de configuração do Grunt é o
Gruntfile.js, neste arquivo iremos configurar as
tarefas e importar os plugins.


A configuração básica do Grunt é:
**Colocamos esse código dentro do Gruntfile.js 

    module.exports = function(grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON(“package.json”);
    });
    }

No código acima fizemos a exportação do arquivo, que será
acessado pelo Grunt, onde ele injetará o argumento “grunt”.
Inicializamos a configuração com grunt.initConfig, onde,
dentro da função, em pkg, importamos o arquivo
package.json



Para criar uma tarefa no Grunt devemos:

registrá-la, uma tarefa no Grunt é basicamente
uma função.

Escrevemos uma tarefa no Grunt assim:

    // após grunt.initConfig({ ... })
    grunt.registerTask(“minhaTarefa”, function() {
    // conteúdo da tarefas
    console.log(“Olá Grunt”);
    });



Tarefas

Para executar a tarefa, no terminal digitamos: grunt minhaTarefa,
no Windows é necessário adicionar o comando na seção de
scripts, no arquivo package.json:

    “scripts”: {
    “grunt”: “grunt”
    }

Quando executamos apenas grunt, irá ocorrer um erro
porque não possuímos uma tarefa default (padrão).
Para resolver isso podemos registrar uma tarefa com o
nome “default”.

Uma tarefa pode chamar outra, em grunt.registerTask onde
inserimos o callback, também podemos inserir um array com
os nomes das tarefas que iremos executar, por exemplo:

    grunt.registerTask(“default”, [“minhaTarefa”,
    “minhaTarefa2”]);
______________________________________________________
Plugins

As automações no Grunt funcionam com o uso de plugins,
possuímos plugins para compilar SASS e LESS, minificar
arquivos, limpar pastas, entre outros.

Plugins
As automações no Grunt funcionam com o uso de plugins,
possuímos plugins para pré-processador código de
estilos, comprimir arquivos, limpar pastas, entre outros.
Os plugins também são tarefas, porém não utilizamos o
grunt.registerTask para eles, mas sim a função
grunt.loadNpmTasks(“nomeDoPacote”), e dentro da
função initConfig, após “pkg”, configuramos o plugin.

A configuração de um plugin pode ser dividida entre os
ambientes, por exemplo: podemos compilar um código
LESS para produção aplicando a minificação e compilar o
mesmo arquivo, mas não minificando para o ambiente de
desenvolvimento.
As configurações de plugins serão inseridas logo após a
propriedade “pkg”dentro da função grunt.initConfig.

______________________________________________________
Plugins: exemplo de configuração

    module.exports = function(grunt) {
        grunt.initConfig({
         pkg: grunt.file.readJSON(‘package.json’),
         less: {
             desenvolvimento: {
                 files: {
                     ‘final.css’: ‘origem.less’ >>>>> EX:        'main.min.css': 'main.less'
                  }
             }
        }
    });
        grunt.loadNpmTasks(‘grunt-contrib-less’);
    }

    Na configuração, onde temos a palavra “desenvolvimento”
podemos separar as configurações no que o Grunt chama de
targets (alvos), então podemos ter um alvo para
desenvolvimento e outro alvo para produção, enviando o arquivo
final para outra pasta e comprimindo ele.
    ...
    less: {
        desenvolvimento: { ... }
        producao: {
            options: { compress: true }
            files: { ‘dist/final.css’: ‘origem.less’ }
        }
    }



_________________________________________________________
Trabalhando com Less no Grunt

Intalar o Less no Projeto

    npm install --save-dev grunt-contrib-less

Em seguida configuramos o Plugin no Arq gulpfile.js como está abaixo    

        module .exports = function(grunt) {
            grunt.initConfig({
                pkg: grunt.file.readJSON('package.json'),
                less: {
                    development: {
                        files: {
                            'main.css': 'main.less'
                        }
                    },
                    production: {
                        options: {
                            compress: true,
                        },
                        files: {
                            'main.min.css': 'main.less'
                        }
                    }
                }
            })

        
            grunt.loadNpmTasks('grunt-contrib-less');

            // [] = Array...pode conter várias tarefas
            grunt.registerTask('default', ['less'])
        }

crie o arq fonte main.less 

comando 

    npm run grunt **será criados os arquivos .css
_________________________________________________________
Também podemos usar o Grunt para compilar o SASS

Instale os pacotes

npm install --save-dev grunt-contrib-sass

Colocamos no final do arq

    grunt.loadNpmTasks('grunt-contrib-sass');

  _______________________________________________________

Para o grunt ficar assistindo as atualizações:

    npm install --save-dev grunt-contrib-watch

Para 
    npm install --save-dev grunt-replace


















_________________________________________________________
Documentação Grunt:
https://gruntjs.com/getting-started


