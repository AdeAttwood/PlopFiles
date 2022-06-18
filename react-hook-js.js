module.exports = function main(plop, options = {}) {
    const hooksDir = options.hooksDir;
    if (!hooksDir) {
        throw new Error('Invalid hooks directory');
    }

    plop.setGenerator("react-hook", {
        description: 'React javascript hook',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of your hook (For example "state" will become "useState")?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: `${hooksDir}/use-{{kebabCase name}}.js`,
                templateFile: `${__dirname}/templates/react-hook-js.hbs`,
            },
        ],
    });
}