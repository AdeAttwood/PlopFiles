module.exports = function main(plop, options = {}) {
    const componentsDir = options.componentsDir;
    const fileExtension = options.fileExtension || 'jsx';
    if (!componentsDir) {
        throw new Error('Invalid components directory');
    }

    plop.setGenerator("react-component", {
        description: 'React javascript component',
        prompts: [
            {
                name: 'group',
                type: 'input',
                message: 'What group is this component part of?',
            },
            {
                name: 'name',
                type: 'input',
                message: 'What is your component name?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: `${componentsDir}/{{group}}/{{kebabCase name}}.${fileExtension}`,
                templateFile: `${__dirname}/templates/react-component-js.hbs`,
            },
            {
                type: 'add',
                path: `${componentsDir}/{{group}}/{{kebabCase name}}.test.${fileExtension}`,
                templateFile: `${__dirname}/templates/react-component-js-test.hbs`,
            },
            {
                type: 'add',
                path: `${componentsDir}/{{group}}/{{kebabCase name}}.module.scss`,
                templateFile: `${__dirname}/templates/react-component-styles.hbs`,
            },
        ],
    });
}