import { EnvConfig } from "../../utils/environment";
import { WebClient } from '@slack/client';

export interface Bot {
    run(): Bot;
}