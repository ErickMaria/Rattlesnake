import { UrlBuilder } from "../../core/builders/url/url.builder";
import { ConfigENV } from "../../core/utils/configenv";
import { exec } from "shelljs";

console.log(new UrlBuilder().builder(ConfigENV.get()['RANCHER_KUBENETES_ENDPOINT'], {
    namespace:'test',
    pod: 'testpod-12123e31',
    container: 'testcontainer',
    parameterQuery: ''

}));

console.log('\n');

console.log(new UrlBuilder().builder(ConfigENV.get()['RANCHER_ENDPOINT']));