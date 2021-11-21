// Когда режим девелопмента, раскомментируй строчки для девелопмента и закомментируй для билда
// Когда билдишь, то закомментируй строчки девелопмента и раскомментируй строчки для билда
module.exports = {
    pages: {
        index: {
            // точка входа для страницы
            entry: 'src/pages/Index/main.js',

            // исходный шаблон
            //template: 'public/index.html', // это для девелопмента
            template: 'public/template.php', // это для билда

            // в результате будет dist/index.html
            //filename: 'index.html', // это для девелопмента
            filename: 'index.php', // это для билда

            // все фрагменты, добавляемые на этой странице, по умолчанию
            // это извлечённые общий фрагмент и вендорный фрагмент.
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        group: {
            entry: 'src/pages/Group/main.js',

            //template: 'public/index.html', // это для девелопмента
            template: 'public/template.php', // это для билда

            //filename: 'group.html', // это для девелопмента
            filename: 'group.php', // это для билда

            chunks: ['chunk-vendors', 'chunk-common', 'group']
        },
        mfo: {
            entry: 'src/pages/MFO/main.js',

            //template: 'public/index.html', // это для девелопмента
            template: 'public/template.php', // это для билда

            //filename: 'mfo.html', // это для девелопмента
            filename: 'mfo.php', // это для билда
            
            chunks: ['chunk-vendors', 'chunk-common', 'mfo']
        }
    },
    publicPath: "./" // это для билда
}