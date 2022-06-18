module.exports = function main(plop, options = {}) {
    const contextDir = options.contextDir;
    const fileExtension = options.fileExtension || 'jsx';
    if (!contextDir) {
        throw new Error('Invalid context directory');
    }

    plop.setGenerator("react-context", {
        description: 'React javascript context',
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
                path: `${contextDir}/{{kebabCase name}}.${fileExtension}`,
                templateFile: `${__dirname}/templates/react-context-js.hbs`,
            },
        ],
    });
}