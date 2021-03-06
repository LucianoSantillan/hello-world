function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function replaceAll(allText, search, replace) {
    return allText.split(search).join(replace)
}

exports.capitalizeFirstLetter = capitalizeFirstLetter;
exports.lowerFirstLetter = lowerFirstLetter;
exports.replaceAll = replaceAll;