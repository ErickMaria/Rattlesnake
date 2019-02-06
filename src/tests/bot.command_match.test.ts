import { Commands } from "../../core/commads/bot.command";


console.log(Commands.macth('container list '));
console.log(Commands.macth('list volumes --name containername') );
console.log(Commands.macth('list configmap -n containername') );
console.log(Commands.macth('volumes show foo/bar/baz.log -n containername') );
console.log(Commands.macth('configmap edit foo/bar/baz.log --name containername') );