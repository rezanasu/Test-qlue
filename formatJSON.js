'use strict'

function improveJSON(fileName, resultName) {
    // READ FILE
    const fs = require("fs");
    const rawData = fs.readFileSync(fileName);
    let currentData = JSON.parse(rawData);

    // GET FIELDS
    let fields = [];

    for(let prop in currentData[0]) {
        fields.push(prop);
    }

    // GET CONTENTS
    let contentArray = [];
    for(let i = 0; i < currentData.length; i++) {
        let inner = [];
        for(let j = 0; j < fields.length; j++) {
            inner.push(currentData[i][fields[j]]);
        }

        contentArray.push(inner);
    }

    // WRITING FILE
    let content = {
        h: fields,
        d: contentArray
    }

    let newData = JSON.stringify(content);

    fs.writeFileSync(resultName, newData);

}

improveJSON("data.json", "improved-data.json")










