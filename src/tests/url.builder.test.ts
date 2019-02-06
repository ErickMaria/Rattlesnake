import { UrlBuilder } from "../../core/builders/url/url.builder";
import { ConfigENV } from "../../core/utils/configenv";

console.log(new UrlBuilder().builder(ConfigENV.get()['RANCHER_KUBENETES_ENDPOINT'], {
    namespace:'test',
    pod: 'testpod-12123e31',
    container: 'testcontainer'
}));
