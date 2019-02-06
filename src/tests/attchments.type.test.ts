import { listContainer } from "../../core/builders/attachments/attachments.type";

const containes = [
    'heimdall',
    'nginx',
    'postgresql'
]

const attchBuilder = listContainer.fields[0];

for (var i = 0; i < containes.length; i++){
    attchBuilder.title = containes[i];
    attchBuilder
}

console.log(attchBuilder);