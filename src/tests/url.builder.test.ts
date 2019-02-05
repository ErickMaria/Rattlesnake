import { UrlBuilder, Params } from "../../core/builders/url.builder";
import { ConfigENV } from "../../core/utils/configenv";

const params = new Params();

console.log(new UrlBuilder().builder(ConfigENV.get()['RANCHER_KUBENETES_ENDPOINT'], params));
