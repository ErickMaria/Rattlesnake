import { CommandList } from '../../core/commads/command.list'
import { CommandConatainer } from '../../core/commads/command.container';

let list: CommandConatainer = new CommandList();

console.log(list.command('container list'));