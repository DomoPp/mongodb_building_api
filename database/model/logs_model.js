const mongoose = require('mongoose');
const schema = mongoose.Schema;
const pageLog = new schema({
        userID: String,
        keycloakID: String,
        companyID: Number,
        serverName: String,
        ipAddress: String,
        host: String,
        origin: String,
        fullPath: String,
        user: schema.Types.Map,
        query: schema.Types.Map,
        body: schema.Types.Map,
        header: schema.Types.Map,
        additionalData: schema.Types.Map,
    },
    {timestamps: true, versionKey: false},
);
const PageLog = mongoose.model('log', pageLog);
module.exports.PageLog = {
    pageLog: PageLog,
};
