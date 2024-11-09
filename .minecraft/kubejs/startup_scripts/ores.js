// priority: 95
const BlockBehaviour = Java.loadClass("net.minecraft.world.level.block.state.BlockBehaviour")
const BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")
WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", ["ad_astra:moon_desh_ore", "ad_astra:moon_iron_ore", "ad_astra:moon_ice_shard_ore",
        "ad_astra:mars_iron_ore", "ad_astra:mars_diamond_ore", "ad_astra:mars_ostrum_ore", "ad_astra:mars_ice_shard_ore",
        "ad_astra:venus_coal_ore", "ad_astra:venus_gold_ore", "ad_astra:venus_diamond_ore", "ad_astra:venus_calorite_ore",
        "ad_astra:glacio_ice_shard_ore", "ad_astra:glacio_coal_ore", "ad_astra:glacio_copper_ore", "ad_astra:glacio_iron_ore",
        "ad_astra:mercury_iron_ore", "ad_astra:glacio_deepslate_lapis_ore", "ad_astra:glacio_deepslate_iron_ore",
        "ad_astra:glacio_lapis_ore", "ad_astra:glacio_deepslate_copper_ore", "ad_astra:glacio_deepslate_coal_ore"])
})
GTCEuStartupEvents.registry("gtceu:tag_prefix", () => {
    TagPrefix.oreTagPrefix("moon_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(new ResourceLocation("ad_astra:moon_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            new ResourceLocation("ad_astra:block/moon_stone"))

    TagPrefix.oreTagPrefix("mars_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(new ResourceLocation("ad_astra:mars_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            new ResourceLocation("ad_astra:block/mars_stone"))

    TagPrefix.oreTagPrefix("venus_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(new ResourceLocation("ad_astra:venus_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            new ResourceLocation("ad_astra:block/venus_stone"))

    TagPrefix.oreTagPrefix("mercury_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(new ResourceLocation("ad_astra:mercury_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            new ResourceLocation("ad_astra:block/mercury_stone"))

    TagPrefix.oreTagPrefix("glacio_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(new ResourceLocation("ad_astra:glacio_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            new ResourceLocation("ad_astra:block/glacio_stone"))

    TagPrefix.oreTagPrefix("titan_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(GTOCore.id("titan_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            GTOCore.id("block/titan_stone"))

    TagPrefix.oreTagPrefix("pluto_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(GTOCore.id("pluto_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            GTOCore.id("block/pluto_stone"))

    TagPrefix.oreTagPrefix("io_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(GTOCore.id("io_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            GTOCore.id("block/io_stone"))

    TagPrefix.oreTagPrefix("ganymede_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(GTOCore.id("ganymede_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            GTOCore.id("block/ganymede_stone"))

    TagPrefix.oreTagPrefix("enceladus_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(GTOCore.id("enceladus_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            GTOCore.id("block/enceladus_stone"))

    TagPrefix.oreTagPrefix("ceres_stone", BlockTags.MINEABLE_WITH_PICKAXE)
        .registerOre(() => Block.getBlock(GTOCore.id("ceres_stone")).defaultBlockState(), null,
            BlockBehaviour.Properties.of().requiresCorrectToolForDrops().strength(3.0, 3.0),
            GTOCore.id("block/ceres_stone"))
})
GTCEuStartupEvents.registry("gtceu:world_gen_layer", event => {
    event.create("all_layer")
        .targets("#minecraft:stone_ore_replaceables",
            "minecraft:nerherstone",
            "minecraft:endstone",
            "ad_astra:moon_stone",
            "ad_astra:mars_stone",
            "ad_astra:venus_stone",
            "ad_astra:mercury_stone",
            "ad_astra:glacio_stone",
            "gtocore:titan_stone",
            "gtocore:pluto_stone",
            "gtocore:io_stone",
            "gtocore:ganymede_stone",
            "gtocore:enceladus_stone",
            "gtocore:ceres_stone")
        .dimensions("minecraft:overworld",
            "minecraft:the_nether",
            "minecraft:the_end",
            "gtocore:ancient_world",
            "ad_astra:moon",
            "ad_astra:mars",
            "ad_astra:venus",
            "ad_astra:mercury",
            "ad_astra:glacio",
            "gtocore:titan",
            "gtocore:pluto",
            "gtocore:io",
            "gtocore:ganymede",
            "gtocore:enceladus",
            "gtocore:ceres",
            "gtocore:barnarda_c")
})