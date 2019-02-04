import { CommandConatainer } from '../../core/commads/command.container';
import { CommandConfigMap } from '../../core/commads/command.list.configmap';

let commad: CommandConatainer = new CommandConfigMap();

console.log(commad.command('container list configmap'));