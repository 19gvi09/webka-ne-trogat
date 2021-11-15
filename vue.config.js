module.exports = {
    pages: {
        index: {
            // точка входа для страницы
            entry: 'src/pages/Index/main.js',
            // исходный шаблон
            template: 'public/index.html',
            // в результате будет dist/Bank/index.html
            filename: 'Bank/index.html',
            // когда используется опция title, то <title> в шаблоне
            // должен быть <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'RiskRanger',
            // все фрагменты, добавляемые на этой странице, по умолчанию
            // это извлечённые общий фрагмент и вендорный фрагмент.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        group: {
            entry: 'src/pages/Group/main.js',
            template: 'public/index.html',
            filename: 'Group/group.html',
            title: 'RiskRanger',
            chunks: ['chunk-vendors', 'chunk-common', 'group']
        },
        mfo: {
            entry: 'src/pages/MFO/main.js',
            template: 'public/index.html',
            filename: 'MFO/mfo.html',
            title: 'RiskRanger',
            chunks: ['chunk-vendors', 'chunk-common', 'mfo']
        }
    }
}