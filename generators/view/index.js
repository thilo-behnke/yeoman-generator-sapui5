var Generator = require('yeoman-generator');

const SAP_PATHS = {
    MessageToast: 'sap/m/MessageToast',
    MessageBox: 'sap/m/MessageBox'
};

const LIB_PATHS = {
  momentjs: 'WebContent/lib/moment',
  rxjs: 'WebContent/lib/rx.all'
};

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
        }, {
            type: 'checkbox',
            name: 'libraries',
            message: 'Select the libraries you need',
            choices: Object.keys(LIB_PATHS),
            default: []
        }, {
            type: 'checkbox',
            name: 'comps',
            message: 'Select the SapUI5 components you need',
            choices: Object.keys(SAP_PATHS),
            default: []
        }]).then(answers => {
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
            {
                viewName: this.viewName,
                path: `.${this.path}`,
                libraries: this.libraries.map(x => LIB_PATHS[x]),
                comps: this.comps.map(x => SAP_PATHS[x])
            }
        );
    }
};