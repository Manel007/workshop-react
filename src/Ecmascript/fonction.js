function search(array, id) {
    return array.find(objet => objet.ID === id);
  }
  
  module.exports = { search };