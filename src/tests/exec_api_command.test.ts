import { ExecCommand } from "../../core/commads/exec.command";
import { UrlBuilder } from "../../core/builders/url/url.builder";
import { ConfigENV } from "../../core/utils/configenv";

ExecCommand.exec(
    new UrlBuilder().builder(ConfigENV.get()['RANCHER_KUBENETES_ENDPOINT'], {
        namespace:'test',
        pod: 'testpod-12123e31',
        container: 'testcontainer'
    
    })
);