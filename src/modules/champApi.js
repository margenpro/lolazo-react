import championFull from "../modules/championFull.json";

function getChampByName(name) {
  const champions = Object.values(championFull.data);
  let champ = champions.find((e) => e.name == name);
  return champ;
}

function getChampSkinsByName(name) {
  let champ = getChampByName(name);
  return champ.skins;
}

function getChampLoreByName(name) {
  let champ = getChampByName(name);
  return champ.lore;
}

function getChampAllyTipsByName(name) {
  let champ = getChampByName(name);
  return champ.allytips;
}

function getChampEnemyTipsByName(name) {
  let champ = getChampByName(name);
  return champ.enemytips;
}

function getChampSpellsByName(name) {
  let champ = getChampByName(name);
  return champ.spells;
}

function getChampPassiveByName(name) {
  let champ = getChampByName(name);
  return champ.passive;
}

function getSpellImageByiId(id) {
  return `/spell/${id}`;
}

export default {
  getChampSkinsByName,
  getChampLoreByName,
  getChampAllyTipsByName,
  getChampEnemyTipsByName,
  getChampSpellsByName,
  getSpellImageByiId,
  getChampPassiveByName,
};
