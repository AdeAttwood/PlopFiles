module.exports = function main(plop, options = {}) {
    const pagesDir = options.pagesDir;
    if (!pagesDir) {
        throw new Error('Invalid hooks directory');
    }

    plop.setGenerator("next-page", {
        description: 'Next JS Page',
        prompts: [
            {
                name: 'name',
                type: 'input',
                message: 'What is the name of your page?',
            },
            {
                name: 'path',
                type: 'input',
                message: 'What is the path for your page?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: `${pagesDir}/{{ path }}/{{ name }}.page.tsx`,
                templateFile: `${__dirname}/templates/next-page-ts.hbs`,
            },
            {
                type: 'add',
                path: `${pagesDir}/{{ path }}/{{ name }}.test.tsx`,
                templateFile: `${__dirname}/templates/next-page-ts-test.hbs`,
            },
            {
                type: 'add',
                path: `${pagesDir}/{{ path }}/{{ name }}.module.scss`,
                templateFile: `${__dirname}/templates/react-component-styles.hbs`,
            },
        ],
    });
}