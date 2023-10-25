/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vpgfxkhak6nnr69")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fcll1qxs",
    "name": "couleur_verre",
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
    "id": "y0qpgrn9",
    "name": "verre_mat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "glqs1u86892681b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "21uw4eg9",
    "name": "compo_verre",
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
  const collection = dao.findCollectionByNameOrId("vpgfxkhak6nnr69")

  // remove
  collection.schema.removeField("fcll1qxs")

  // remove
  collection.schema.removeField("y0qpgrn9")

  // remove
  collection.schema.removeField("21uw4eg9")

  return dao.saveCollection(collection)
})
