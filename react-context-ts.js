module.exports = function main(plop, options = {}) {
    const contextDir = options.contextDir;
    if (!contextDir) {
        throw new Error('Invalid context directory');
    }

    plop.setGenerator("react-context", {
        description: 'React typescript context',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of your context?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: `${contextDir}/{{kebabCase name}}.tsx`,
                templateFile: `${__dirname}/templates/react-context-ts.hbs`,
            },
        ],
    });
}