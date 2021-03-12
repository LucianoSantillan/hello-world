const { createList } = require("./abmListGenerator")
const { rootPath } = require("./constants")
const { generarIndexJsFile } = require("./indexJsFileGenerator")
const { capitalizeFirstLetter } = require("./utils/StringUtils")

function createABM(args) {
    const { entityNameInPlural, entityName } = new CreateABMRequest(args)
    createList(entityNameInPlural, entityName)
    generarIndexJsFile(`${rootPath}/${entityNameInPlural}`, entityNameInPlural)
}

exports.createABM = createABM

class CreateABMRequest {
    constructor(args) {
        if (!args[1]) {
            throw new Error("valor inválido: entity name en plural")
        }
        if (!args[2]) {
            throw new Error("valor inválido: entity name")
        }
        this.entityNameInPlural = capitalizeFirstLetter(args[1]?.toString().trim())
        this.entityName = capitalizeFirstLetter(args[2]?.toString().trim())
    }
}