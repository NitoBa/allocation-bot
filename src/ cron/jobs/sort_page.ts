import { schedule } from 'node-cron';
import { sortAllocationPage } from '../../puppetter/puppeteer'

function sortAlocationPage() {
    console.log("Sort alocation page")
    sortAllocationPage();
}

export default schedule('0 50 22 * * MON,TUE,WED,THU,FRI *', sortAlocationPage, { scheduled: false, timezone: 'America/Sao_Paulo' });

