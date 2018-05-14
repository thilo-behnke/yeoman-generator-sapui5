const libs = '<%= libraries %>'.split(',');
const comps = '<%= comps %>'.split(',');

const importNames = [...comps, ...libs].map(x => x.split('/').map(y => y.split('.')[0]).pop());

sap.ui.define([
        'sap/ui/core/mvc/Controller',
        'WebContent/zss18_t1_web_frontend/utils/base',
        ...comps,
        ...libs
    ], (function () {
        'use strict';

        return function (Controller, BaseUtils, ...imports) {

            imports = BaseUtils.nameMapper(imports, importNames);

            return Controller.extend('zss18_t1_web_frontend<%= path %>.<%= viewName %>', {

                /**
                 * Called when a controller is instantiated and its View controls (if available) are already created.
                 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
                 * @memberOf zss18_t1_web_frontend<%= path %>.<%= viewName %>
                 */
                //	onInit: function() {
                //
                //	},

                /**
                 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
                 * (NOT before the first rendering! onInit() is used for that one!).
                 * @memberOf zss18_t1_web_frontend<%= path %>.<%= viewName %>
                 */
                //	onBeforeRendering: function() {
                //
                //	},

                /**
                 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
                 * This hook is the same one that SAPUI5 controls get after being rendered.
                 * @memberOf zss18_t1_web_frontend<%= path %>.<%= viewName %>
                 */
                //	onAfterRendering: function() {
                //
                //	},

                /**
                 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
                 * @memberOf zss18_t1_web_frontend<%= path %>.<%= viewName %>
                 */
                //	onExit: function() {
                //
                //	}
            });
        }
    })()
);