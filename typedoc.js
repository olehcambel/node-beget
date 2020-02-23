// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Application } = require('typedoc');

const app = new Application({
    inputFiles: ['./src'],
    mode: 'modules',
    out: 'docs',
    includeDeclarations: true,
    excludeExternals: true,
    mode: 'file',
    tsconfig: './tsconfig.build.json',
    readme: 'readme.md',
    theme: 'markdown',
    plugin: 'typedoc-plugin-markdown',
});

app.bootstrap();
app.generateDocs(app.expandInputFiles(['./src']), 'docs');
