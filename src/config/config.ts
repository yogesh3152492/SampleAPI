export interface Config
{
    dbPath: string;   
    port: number;   
    settings: string[];
    whiteListOrigin : string[];
    secert: string;
    tokenExpiryInHr : number;
    backgroundJobCronSchedule : string;
}