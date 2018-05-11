var Generator = require('yeoman-generator');

module.exports = class extends Generator {

    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'viewName',
            message: 'Your view name'
        }, {
            type: 'input',
            name: 'path',
            message: 'Path to your view',
            default: ''
        }]).then(answers => {
            this.log('view name', answers.viewName);
            this.log('path', answers.path);

            Object.assign(this, answers);
        });
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath('template.view.xml'),
            this.destinationPath(`WebContent/zss18_t1_web_frontend/${this.path}/${this.viewName}.view.xml`),
            {viewName: this.viewName, path: `.${this.path}`}
        );
        this.fs.copyTpl(
            this.templatePath('template.controller.js'),
            this.destinationPath(`WebContent/zss18_t1_web_frontend/${this.path}/${this.viewName}.controller.js`),
            {viewName: this.viewName, path: `.${this.path}`}
        );
    }
};