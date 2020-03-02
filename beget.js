"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const beget_request_1 = require("./beget-request");
const backup_1 = require("./endpoints/backup");
const cron_1 = require("./endpoints/cron");
const dns_1 = require("./endpoints/dns");
const domain_1 = require("./endpoints/domain");
const mail_1 = require("./endpoints/mail");
const site_1 = require("./endpoints/site");
const stat_1 = require("./endpoints/stat");
const user_1 = require("./endpoints/user");
const ftp_1 = require("./endpoints/ftp");
const mysql_1 = require("./endpoints/mysql");
class Beget {
    constructor(config) {
        const begetRequest = new beget_request_1.BegetRequest(config);
        this.backup = new backup_1.BackupEndpoint(begetRequest);
        this.cron = new cron_1.CronEndpoint(begetRequest);
        this.dns = new dns_1.DnsEndpoint(begetRequest);
        this.domain = new domain_1.DomainEndpoint(begetRequest);
        this.ftp = new ftp_1.FtpEndpoint(begetRequest);
        this.mail = new mail_1.MailEndpoint(begetRequest);
        this.mysql = new mysql_1.MysqlEndpoint(begetRequest);
        this.site = new site_1.SiteEndpoint(begetRequest);
        this.stat = new stat_1.StatEndpoint(begetRequest);
        this.user = new user_1.UserEndpoint(begetRequest);
    }
}
exports.Beget = Beget;
