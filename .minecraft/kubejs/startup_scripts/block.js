// priority: 98
StartupEvents.registry("block", event => {
    event.create("diamond_compressed_block", "basic")
        .noValidSpawns(true)
        .soundType("stone")
        .mapColor("stone")
        .tagBlock("mineable/pickaxe")
        .textureAll("minecraft:block/diamond_block")
})