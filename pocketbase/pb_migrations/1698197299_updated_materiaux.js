/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glqs1u86892681b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tkblnjxz",
    "name": "verre_mat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "vpgfxkhak6nnr69",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "12bomxcr",
    "name": "cadre_mat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "06r02t4847atv0n",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("glqs1u86892681b")

  // remove
  collection.schema.removeField("tkblnjxz")

  // remove
  collection.schema.removeField("12bomxcr")

  return dao.saveCollection(collection)
})
