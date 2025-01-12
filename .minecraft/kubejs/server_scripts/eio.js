ServerEvents.recipes(event => {
    event.remove({ id: "enderio:iron_ingot_from_blasting" })
    event.remove({ id: "enderio:iron_ingot_from_smelting" })
    event.remove({ id: "enderio:gold_ingot_from_blasting" })
    event.remove({ id: "enderio:gold_ingot_from_smelting" })
    event.remove({ id: "enderio:copper_ingot_from_blasting" })
    event.remove({ id: "enderio:copper_ingot_from_smelting" })
    event.remove({ id: "enderio:copper_alloy_block" })
    event.remove({ id: "enderio:copper_alloy_ingot" })
    event.remove({ id: "enderio:copper_alloy_nugget" })
    event.remove({ id: "enderio:copper_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:energetic_alloy_block" })
    event.remove({ id: "enderio:energetic_alloy_ingot" })
    event.remove({ id: "enderio:energetic_alloy_nugget" })
    event.remove({ id: "enderio:energetic_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:vibrant_alloy_block" })
    event.remove({ id: "enderio:vibrant_alloy_ingot" })
    event.remove({ id: "enderio:vibrant_alloy_nugget" })
    event.remove({ id: "enderio:vibrant_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:redstone_alloy_block" })
    event.remove({ id: "enderio:redstone_alloy_ingot" })
    event.remove({ id: "enderio:redstone_alloy_nugget" })
    event.remove({ id: "enderio:redstone_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:conductive_alloy_block" })
    event.remove({ id: "enderio:conductive_alloy_ingot" })
    event.remove({ id: "enderio:conductive_alloy_nugget" })
    event.remove({ id: "enderio:conductive_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:pulsating_alloy_block" })
    event.remove({ id: "enderio:pulsating_alloy_ingot" })
    event.remove({ id: "enderio:pulsating_alloy_nugget" })
    event.remove({ id: "enderio:pulsating_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:dark_steel_block" })
    event.remove({ id: "enderio:dark_steel_ingot" })
    event.remove({ id: "enderio:dark_steel_nugget" })
    event.remove({ id: "enderio:dark_steel_nugget_to_ingot" })
    event.remove({ id: "enderio:soularium_block" })
    event.remove({ id: "enderio:soularium_ingot" })
    event.remove({ id: "enderio:soularium_nugget" })
    event.remove({ id: "enderio:soularium_nugget_to_ingot" })
    event.remove({ id: "enderio:end_steel_block" })
    event.remove({ id: "enderio:end_steel_ingot" })
    event.remove({ id: "enderio:end_steel_nugget" })
    event.remove({ id: "enderio:end_steel_nugget_to_ingot" })
    event.remove({ id: "enderio:wood_gear_corner" })
    event.remove({ id: "enderio:wood_gear" })
    event.remove({ id: "enderio:iron_gear" })
    event.remove({ id: "enderio:energized_gear" })
    event.remove({ id: "enderio:vibrant_gear" })
    event.remove({ id: "enderio:dark_bimetal_gear" })
    event.remove({ id: "enderio:pulsating_crystal" })
    event.remove({ id: "enderio:vibrant_crystal" })
    event.remove({ id: "enderio:sag_milling/ender_crystal" })
    event.remove({ id: "enderio:sag_milling/precient_crystal" })
    event.remove({ id: "enderio:sag_milling/pulsating_crystal" })
    event.remove({ id: "enderio:sag_milling/vibrant_crystal" })
    event.remove({ id: "enderio:sag_milling/soularium" })
    event.remove({ id: "enderio:alloy_smelting/energetic_alloy_ingot" })
    event.remove({ id: "enderio:alloy_smelting/vibrant_alloy_ingot" })
    event.remove({ id: "enderio:alloy_smelting/dark_steel_ingot" })
    event.remove({ id: "enderio:alloy_smelting/end_steel_ingot" })

    const gtr = event.recipes.gtceu

    gtr.arc_generator("gtocore:grains_of_infinity")
        .chancedInput("minecraft:flint", 2000, 0)
        .itemInputs("gtceu:tiny_obsidian_dust")
        .itemOutputs("enderio:grains_of_infinity")
        .duration(200)
        .EUt(30)

    gtr.macerator("gtocore:prescient_powder")
        .itemInputs("enderio:prescient_crystal")
        .itemOutputs("enderio:prescient_powder")
        .duration(200)
        .EUt(30)

    gtr.macerator("gtocore:ender_crystal_powder")
        .itemInputs("enderio:ender_crystal")
        .itemOutputs("enderio:ender_crystal_powder")
        .duration(200)
        .EUt(30)

    gtr.macerator("gtocore:pulsating_powder")
        .itemInputs("enderio:pulsating_crystal")
        .itemOutputs("enderio:pulsating_powder")
        .duration(200)
        .EUt(30)

    gtr.macerator("gtocore:vibrant_powder")
        .itemInputs("enderio:vibrant_crystal")
        .itemOutputs("enderio:vibrant_powder")
        .duration(200)
        .EUt(30)

    gtr.autoclave("gtocore:vibrant_crystal")
        .itemInputs("minecraft:emerald")
        .inputFluids("gtceu:pulsating_alloy 72")
        .itemOutputs("enderio:vibrant_crystal")
        .duration(160)
        .EUt(30)
        .addCondition(new VacuumCondition(2))

    gtr.autoclave("gtocore:pulsating_crystal")
        .itemInputs("minecraft:diamond")
        .inputFluids("gtceu:pulsating_alloy 72")
        .itemOutputs("enderio:pulsating_crystal")
        .duration(100)
        .EUt(30)
        .addCondition(new VacuumCondition(2))

    gtr.autoclave("gtocore:ender_crystal")
        .itemInputs("enderio:vibrant_crystal")
        .inputFluids("gtceu:enderium 8")
        .itemOutputs("enderio:ender_crystal")
        .duration(200)
        .EUt(30)
        .addCondition(new VacuumCondition(4))

    gtr.autoclave("gtocore:prescient_crystal")
        .itemInputs("enderio:vibrant_crystal")
        .inputFluids("gtceu:mithril 8")
        .itemOutputs("enderio:prescient_crystal")
        .duration(200)
        .EUt(30)
        .addCondition(new VacuumCondition(4))

    gtr.forming_press("gtocore:wood_gear")
        .itemInputs("4x gtceu:wood_plate")
        .notConsumable("gtceu:gear_casting_mold")
        .itemOutputs("enderio:wood_gear")
        .EUt(16)
        .duration(60)

    gtr.alloy_smelter("gtocore:infinity_gear")
        .itemInputs("gtceu:iron_gear", "2x enderio:grains_of_infinity")
        .itemOutputs("enderio:iron_gear")
        .duration(80)
        .EUt(16)

    gtr.alloy_smelter("gtocore:energetic_gear")
        .itemInputs("enderio:iron_gear", "4x enderio:energetic_alloy_ingot")
        .itemOutputs("enderio:energized_gear")
        .duration(120)
        .EUt(16)

    gtr.alloy_smelter("gtocore:vibrant_gear")
        .itemInputs("enderio:energized_gear", "4x enderio:vibrant_alloy_ingot")
        .itemOutputs("enderio:vibrant_gear")
        .duration(160)
        .EUt(16)

    gtr.alloy_smelter("gtocore:dark_bimetal_gear")
        .itemInputs("enderio:iron_gear", "4x enderio:dark_steel_ingot")
        .itemOutputs("enderio:dark_bimetal_gear")
        .duration(160)
        .EUt(16)

    gtr.alloy_smelter("gtocore:soularium_ingot")
        .itemInputs("minecraft:gold_ingot", "#minecraft:soul_fire_base_blocks")
        .itemOutputs("enderio:soularium_ingot")
        .EUt(16)
        .duration(200)

    gtr.mixer("gtocore:filled_soul_vial")
        .notConsumable("minecraft:soul_campfire")
        .itemInputs("enderio:empty_soul_vial")
        .itemOutputs("enderio:filled_soul_vial")
        .duration(2000)
        .EUt(2)

    gtr.mixer("gtocore:copper_alloy_ingot_dust")
        .itemInputs("enderio:powdered_copper", "gtceu:silicon_dust")
        .circuit(2)
        .itemOutputs("2x gtceu:copper_alloy_ingot_dust")
        .EUt(30)
        .duration(120)

    gtr.arc_generator("gtocore:energetic_alloy_dust")
        .itemInputs("minecraft:redstone", "enderio:powdered_gold", "minecraft:glowstone_dust")
        .inputFluids("minecraft:water 100")
        .itemOutputs("3x gtceu:energetic_alloy_dust")
        .EUt(30)
        .duration(480)

    gtr.mixer("gtocore:vibrant_alloy_dust")
        .circuit(2)
        .itemInputs("gtceu:energetic_alloy_dust", "enderio:powdered_ender_pearl")
        .itemOutputs("2x gtceu:vibrant_alloy_dust")
        .EUt(120)
        .duration(400)

    gtr.mixer("gtocore:redstone_alloy_dust")
        .itemInputs("minecraft:redstone", "gtceu:silicon_dust")
        .circuit(2)
        .itemOutputs("2x gtceu:redstone_alloy_dust")
        .EUt(30)
        .duration(320)

    gtr.mixer("gtocore:conductive_alloy_dust")
        .itemInputs("gtceu:copper_alloy_ingot_dust", "enderio:powdered_iron", "minecraft:redstone")
        .circuit(3)
        .itemOutputs("3x gtceu:conductive_alloy_dust")
        .EUt(30)
        .duration(240)

    gtr.mixer("gtocore:pulsating_alloy_dust")
        .itemInputs("enderio:powdered_iron", "enderio:powdered_ender_pearl")
        .circuit(2)
        .itemOutputs("2x gtceu:pulsating_alloy_dust")
        .EUt(30)
        .duration(160)

    gtr.mixer("gtocore:dark_steel_dust")
        .itemInputs("enderio:powdered_iron", "enderio:powdered_coal", "enderio:powdered_obsidian")
        .circuit(3)
        .itemOutputs("3x gtceu:dark_steel_dust")
        .EUt(30)
        .duration(300)

    gtr.mixer("gtocore:end_steel_dust")
        .itemInputs("gtceu:endstone_dust", "gtceu:dark_steel_dust", "enderio:powdered_obsidian")
        .circuit(3)
        .itemOutputs("3x gtceu:end_steel_dust")
        .EUt(480)
        .duration(360)

    gtr.chemical_bath("gtocore:vibrant_alloy_ingot")
        .itemInputs("gtceu:hot_vibrant_alloy_ingot")
        .inputFluids("gtceu:distilled_water 100")
        .itemOutputs("enderio:vibrant_alloy_ingot")
        .EUt(120)
        .duration(280)

    gtr.assembler("enderio:ender_fluid_conduit")
        .itemInputs("enderio:pressurized_fluid_conduit", "gtceu:tiny_ender_pearl_dust", "enderio:conduit_binder")
        .itemOutputs("2x enderio:ender_fluid_conduit")
        .EUt(16)
        .duration(120)
})