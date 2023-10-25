/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyjtgmcjjy8mhee")

  // remove
  collection.schema.removeField("uhue4hu8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xjgstz30",
    "name": "libelle",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kyjtgmcjjy8mhee")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uhue4hu8",
    "name": "libelle",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("xjgstz30")

  return dao.saveCollection(collection)
})
