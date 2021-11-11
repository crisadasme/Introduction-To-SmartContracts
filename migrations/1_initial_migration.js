const Crowfunding = artifacts.require("Crowfunding");

module.exports = function (deployer) {
  deployer.deploy(Crowfunding);
};
