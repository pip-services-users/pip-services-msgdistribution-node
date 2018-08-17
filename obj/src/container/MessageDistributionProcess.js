"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services_container_node_1 = require("pip-services-container-node");
const pip_clients_emailsettings_node_1 = require("pip-clients-emailsettings-node");
const pip_clients_smssettings_node_1 = require("pip-clients-smssettings-node");
const pip_clients_email_node_1 = require("pip-clients-email-node");
const pip_clients_sms_node_1 = require("pip-clients-sms-node");
const pip_clients_msgtemplates_node_1 = require("pip-clients-msgtemplates-node");
const MessageDistributionServiceFactory_1 = require("../build/MessageDistributionServiceFactory");
class MessageDistributionProcess extends pip_services_container_node_1.ProcessContainer {
    constructor() {
        super("msg_distribution", "Message distribution microservice");
        this._factories.add(new MessageDistributionServiceFactory_1.MessageDistributionServiceFactory);
        this._factories.add(new pip_clients_emailsettings_node_1.EmailSettingsClientFactory());
        this._factories.add(new pip_clients_smssettings_node_1.SmsSettingsClientFactory());
        this._factories.add(new pip_clients_email_node_1.EmailClientFactory());
        this._factories.add(new pip_clients_sms_node_1.SmsClientFactory());
        this._factories.add(new pip_clients_msgtemplates_node_1.MessageTemplatesClientFactory());
    }
}
exports.MessageDistributionProcess = MessageDistributionProcess;
//# sourceMappingURL=MessageDistributionProcess.js.map