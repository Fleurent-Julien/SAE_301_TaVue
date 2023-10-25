/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("plvth6u427emzrk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tgxse3lp",
    "name": "couleur_branche",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "kyjtgmcjjy8mhee",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pkurxwjd",
    "name": "compo_branche",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fwq8nf2vw5i5cm5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("plvth6u427emzrk")

  // remove
  collection.schema.removeField("tgxse3lp")

  // remove
  collection.schema.removeField("pkurxwjd")

  return dao.saveCollection(collection)
})
