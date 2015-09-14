var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOLAB_URI ||
  'mongodb://localhost/mydb';

module.exports = {
  mongodb: {
    defaultForType: "mongodb",
    connector: "loopback-connector-mongodb",
    url: mongoUri
  }
};
