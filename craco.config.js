const CracoAlias = require("craco-alias")

module.exports = {
    Plugins: [
        {
            plugins : CracoAlias,
            options : {
                source : 'tsconfig',
                tsConfigPath : 'tsconfig.paths.json'
            }
        }
    ]
}