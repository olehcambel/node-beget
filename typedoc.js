// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Application } = require('typedoc');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { promises: fsp } = require('fs');

const app = new Application();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const boot = async () => {
    app.bootstrap({
        inputFiles: ['./src'],
        mode: 'modules',
        // mode: 'file',
        out: 'docs',
        includeDeclarations: true,
        excludeExternals: true,
        tsconfig: './tsconfig.build.json',
        readme: 'readme.md',
        theme: 'default',
        // categoryOrder: ['Endpoints', '*'],
    });
    app.generateDocs(app.expandInputFiles(['./src']), 'docs');

    /**
     * @see https://github.com/TypeStrong/typedoc/issues/620
     */
    await fsp.writeFile('docs/_config.yml', 'include:\n  - "_*_.html"\n  - "_*_.*.html"');
};

boot();
