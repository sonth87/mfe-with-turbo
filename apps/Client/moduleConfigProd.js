const domain = process.env.DOMAIN;
const moduleFileName = "remoteEntry.js";

const containerModule = {
  fileName: moduleFileName,
  name: "container",
  get url() {
    return `/`;
  },
};

const surveyModule = {
  fileName: moduleFileName,
  name: "survey",
  get randomString() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join("");
  },
  get federationConfig() {
    return `${this.name}@${domain}/${this.name}-static/${this.fileName}?${this.randomString}`;
  },
};

module.exports = {
  containerModule,
  surveyModule,
};
