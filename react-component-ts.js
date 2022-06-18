module.exports = function main(plop, options = {}) {
    const componentsDir = options.componentsDir;
    if (!componentsDir) {
        throw new Error('Invalid components directory');
    }

    plop.setGenerator("react-component", {
        description: 'React typescript component',
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
                path: `${componentsDir}/{{group}}/{{kebabCase name}}.tsx`,
                templateFile: `${__dirname}/templates/react-component-ts.hbs`,
            },
            {
                type: 'add',
                path: `${componentsDir}/{{group}}/{{kebabCase name}}.test.tsx`,
                templateFile: `${__dirname}/templates/react-component-ts-test.hbs`,
            },
            {
                type: 'add',
                path: `${componentsDir}/{{group}}/{{kebabCase name}}.module.scss`,
                templateFile: `${__dirname}/templates/react-component-styles.hbs`,
            },
        ],
    });
}