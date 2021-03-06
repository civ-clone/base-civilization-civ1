"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCivilizations = void 0;
const Civilizations_1 = require("./Civilizations");
const CivilizationRegistry_1 = require("@civ-clone/core-civilization/CivilizationRegistry");
const registerCivilizations = (civilizationRegistry = CivilizationRegistry_1.instance) => {
    civilizationRegistry.register(Civilizations_1.American, Civilizations_1.Aztec, Civilizations_1.Babylonian, Civilizations_1.Chinese, Civilizations_1.Egyptian, Civilizations_1.English, Civilizations_1.French, Civilizations_1.German, Civilizations_1.Greek, Civilizations_1.Indian, Civilizations_1.Mongol, Civilizations_1.Roman, Civilizations_1.Russian, Civilizations_1.Zulu);
};
exports.registerCivilizations = registerCivilizations;
exports.default = exports.registerCivilizations;
//# sourceMappingURL=registerCivilizations.js.map