ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu

    gtr.nanorobots_integrated_processing_center("gtocore:epoxy")
        .itemInputs("gtceu:copper_nanoswarm")
        .itemOutputs("gtceu:contaminable_copper_nanoswarm")
        .itemInputs("gtceu:phosphorus_dust", "16x gtceu:salt_dust")
        .inputFluids("minecraft:water 21500", "gtceu:oxygen 10500", "gtceu:propene 4000", "gtceu:benzene 6000")
        .itemOutputs("86x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:epoxy 4000", "gtceu:hydrogen 16000", "gtceu:hydrochloric_acid 4000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(240)
        .blastFurnaceTemp(5600)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:polybenzimidazole")
        .itemInputs("gtceu:iridium_nanoswarm")
        .itemOutputs("gtceu:contaminable_iridium_nanoswarm")
        .notConsumable("gtceu:potassium_dichromate_dust")
        .itemInputs("1152x gtceu:carbon_dust", "16x enderio:powdered_copper", "144x gtceu:zinc_dust")
        .inputFluids("gtceu:chlorobenzene 28800", "gtceu:sulfuric_acid 14400", "gtceu:hydrogen 316800", "gtceu:nitrogen 57600", "gtceu:oxygen 201600")
        .outputFluids("gtceu:polybenzimidazole 21600")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(2000)
        .blastFurnaceTemp(6000)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:polyphenylene_sulfide")
        .itemInputs("gtceu:silver_nanoswarm")
        .itemOutputs("gtceu:contaminable_silver_nanoswarm")
        .itemInputs("16x gtceu:sulfur_dust")
        .inputFluids("gtceu:benzene 16000")
        .outputFluids("gtceu:polyphenylene_sulfide 24000", "gtceu:hydrogen 32000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(120)
        .blastFurnaceTemp(800)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:polyimide")
        .itemInputs("gtceu:glowstone_nanoswarm")
        .itemOutputs("gtceu:contaminable_glowstone_nanoswarm")
        .itemInputs("486x gtceu:carbon_dust")
        .inputFluids("gtceu:hydrogen 256000", "gtceu:nitrogen_dioxide 64000")
        .outputFluids("gtceu:polyimide 21000", "gtceu:hydrogen 12800", "gtceu:nitrogen 6400")
        .EUt(GTValues.V[GTValues.UEV])
        .duration(2000)
        .blastFurnaceTemp(14400)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:cycloparaphenylene")
        .itemInputs("gtceu:osmium_nanoswarm")
        .itemOutputs("gtceu:contaminable_osmium_nanoswarm")
        .itemInputs("1920x gtceu:carbon_dust", "64x gtceu:iodine_dust")
        .inputFluids("gtceu:hydrogen 640000", "gtceu:oxygen 96000", "gtceu:chlorine 96000", "gtceu:fluorine 96000")
        .outputFluids("gtceu:cycloparaphenylene 32000", "gtceu:fluorine 4800", "gtceu:chlorine 3200")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(2000)
        .blastFurnaceTemp(16200)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:polyvinyl_chloride")
        .itemInputs("gtceu:glowstone_nanoswarm")
        .itemOutputs("gtceu:contaminable_glowstone_nanoswarm")
        .inputFluids("gtceu:oxygen 10000", "gtceu:chlorine 1440", "gtceu:ethylene 1440")
        .outputFluids("gtceu:polyvinyl_chloride 2160", "gtceu:hydrogen 1440")
        .EUt(GTValues.VA[GTValues.IV])
        .duration(160)
        .blastFurnaceTemp(800)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:silicone_rubber")
        .itemInputs("gtceu:carbon_nanoswarm")
        .itemOutputs("gtceu:contaminable_carbon_nanoswarm")
        .itemInputs("3x gtceu:silicon_dust", "gtceu:sulfur_dust")
        .inputFluids("minecraft:water 2000", "gtceu:methane 4000")
        .outputFluids("gtceu:silicone_rubber 1296", "gtceu:hydrogen 4000")
        .EUt(GTValues.VA[GTValues.LuV])
        .duration(320)
        .blastFurnaceTemp(1200)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:styrene_butadiene_rubber")
        .itemInputs("gtceu:iron_nanoswarm")
        .itemOutputs("gtceu:contaminable_iron_nanoswarm")
        .itemInputs("5x gtceu:sulfur_dust")
        .inputFluids("gtceu:butadiene 3000", "gtceu:benzene 1000", "gtceu:ethylene 1000", "gtceu:oxygen 15000")
        .outputFluids("gtceu:styrene_butadiene_rubber 6480", "gtceu:hydrogen 2000")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(120)
        .blastFurnaceTemp(1800)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:polytetrafluoroethylene")
        .itemInputs("gtceu:copper_nanoswarm")
        .itemOutputs("gtceu:contaminable_copper_nanoswarm")
        .inputFluids("gtceu:oxygen 5000", "gtceu:methane 1440", "gtceu:fluorine 2880")
        .outputFluids("gtceu:polytetrafluoroethylene 1080", "gtceu:hydrogen 5760")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(240)
        .blastFurnaceTemp(2600)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:unfolded_fullerene_dust")
        .itemInputs("gtceu:enderium_nanoswarm")
        .itemOutputs("gtceu:contaminable_enderium_nanoswarm")
        .itemInputs("3780x gtceu:carbon_dust")
        .inputFluids("gtceu:methane 60000", "gtceu:bromine 60000", "gtceu:nitrogen 60000")
        .itemOutputs("64x gtceu:unfolded_fullerene_dust")
        .outputFluids("gtceu:hydrobromic_acid 60000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(16000)
        .blastFurnaceTemp(16800)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:polyurethaneresin")
        .itemInputs("gtceu:gold_nanoswarm")
        .itemOutputs("gtceu:contaminable_gold_nanoswarm")
        .itemInputs("45x enderio:powdered_tin", "64x gtceu:carbon_dust", "5x gtceu:nickel_dust", "5x gtceu:palladium_dust", "5x enderio:powdered_iron", "36x gtceu:silicon_dust")
        .inputFluids("gtceu:oxygen 1964000", "gtceu:hydrogen 529000", "gtceu:chlorine 870000", "gtceu:nitrogen 45000")
        .outputFluids("gtceu:polyurethaneresin 45000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(2700)
        .blastFurnaceTemp(16200)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:liquidcrystalkevlar")
        .itemInputs("gtceu:rhenium_nanoswarm")
        .itemOutputs("gtceu:contaminable_rhenium_nanoswarm")
        .notConsumable("gtceu:annealed_copper_dust")
        .itemInputs("64x gtceu:carbon_dust", "2x gtceu:calcium_dust")
        .inputFluids("gtceu:hydrogen 100000", "gtceu:chlorine 16000", "gtceu:oxygen 18000", "gtceu:nitrogen 18000")
        .outputFluids("gtceu:liquidcrystalkevlar 45000")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(4000)
        .blastFurnaceTemp(17200)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:hexanitrohexaaxaisowurtzitane_dust")
        .itemInputs("gtceu:orichalcum_nanoswarm")
        .itemOutputs("gtceu:contaminable_orichalcum_nanoswarm")
        .notConsumable("16x gtocore:unstable_star")
        .itemInputs("191x gtceu:silica_gel_dust", "76x gtceu:succinic_acid_dust", "144x gtceu:activated_carbon_dust", "216x gtceu:sodium_dust", "47x gtceu:boron_trioxide_dust", "39x gtceu:potassium_carbonate_dust", "101x gtceu:barium_chloride_dust")
        .inputFluids("gtceu:hydrogen 470000", "gtceu:hydrofluoric_acid 12000", "gtceu:methanol 62000", "gtceu:nitric_acid 15000", "gtceu:ammonia 39000", "gtceu:glyoxal 47000", "gtceu:oxygen_plasma 11000", "gtceu:acetic_anhydride 9000", "gtceu:nitrogen_plasma 7000")
        .itemOutputs("288x gtceu:hexanitrohexaaxaisowurtzitane_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(6400)
        .blastFurnaceTemp(21600)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:photoresist")
        .itemInputs("gtceu:uruium_nanoswarm")
        .itemOutputs("gtceu:contaminable_uruium_nanoswarm")
        .itemInputs("91x gtceu:rutile_dust", "60x gtceu:carbon_dust", "42x gtceu:sodium_hydroxide_dust")
        .inputFluids("gtceu:sulfuric_acid 80000", "gtceu:ethanol 7000", "gtceu:chlorine 81000", "gtceu:propene 15000", "gtceu:benzene 39000", "gtceu:ethylene 47000")
        .outputFluids("gtceu:photoresist 16000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(9600)
        .blastFurnaceTemp(16200)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:euv_photoresist")
        .itemInputs("gtceu:infuscolium_nanoswarm")
        .itemOutputs("gtceu:contaminable_infuscolium_nanoswarm")
        .itemInputs("30x gtceu:rhenium_dust", "56x gtceu:lithium_dust", "40x gtceu:selenium_dust", "50x gtceu:activated_carbon_dust", "60x gtceu:rutile_dust", "55x gtceu:quicklime_dust")
        .inputFluids("gtceu:ethane 12000", "gtceu:chlorine 75000", "gtceu:photoresist 8000", "gtceu:hydrogen 4700", "gtceu:oxygen 89000", "gtceu:nitrogen 40000", "gtceu:butane 57000")
        .outputFluids("gtceu:euv_photoresist 21600")
        .EUt(GTValues.VA[GTValues.OpV])
        .duration(12800)
        .blastFurnaceTemp(21600)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:photopolymer")
        .itemInputs("gtceu:white_dwarf_mtter_nanoswarm")
        .itemOutputs("gtceu:contaminable_white_dwarf_mtter_nanoswarm")
        .itemInputs("768x gtceu:carbon_dust", "50x gtceu:rutile_dust", "70x gtceu:succinic_acid_dust", "32x gtceu:ice_dust", "20x gtceu:silver_dust", "25x gtceu:quicklime_dust", "40x gtceu:boron_dust", "120x gtceu:sodium_dust")
        .inputFluids("gtceu:benzene 40000", "gtceu:bromine 25000", "gtceu:oxygen 21600", "gtceu:chlorine 5600", "gtceu:propene 16000", "gtceu:butene 80000")
        .outputFluids("gtceu:photopolymer 16000")
        .EUt(GTValues.VA[GTValues.MAX])
        .duration(5120)
        .blastFurnaceTemp(21600)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:polyetheretherketone")
        .itemInputs("gtceu:vibranium_nanoswarm")
        .itemOutputs("gtceu:contaminable_vibranium_nanoswarm")
        .itemInputs("16x gtceu:sodium_dust")
        .inputFluids("gtceu:chlorine 48000", "gtceu:benzene 16000", "gtceu:oxygen 60000", "gtceu:propene 8000", "gtceu:nitric_acid 8000")
        .outputFluids("gtceu:polyetheretherketone 20736", "minecraft:water 8000", "gtceu:carbon_dioxide 8000")
        .itemOutputs("32x gtceu:sodium_fluoride_dust")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(16400)
        .blastFurnaceTemp(14400)
        .addData("module", 3)

        gtr.nanorobots_integrated_processing_center("gtocore:zylon_dust")
        .itemInputs("gtceu:black_dwarf_mtter_nanoswarm")
        .itemOutputs("gtceu:contaminable_black_dwarf_mtter_nanoswarm")
        .itemInputs("1762x gtceu:sulfur_dust", "41x gtceu:sodium_dust")
        .inputFluids("gtceu:bromine 15200", "gtceu:toluene 432000", "gtceu:hydrogen 412000", "gtceu:ethane 6000", "gtceu:propene 50000", "gtceu:nitric_acid 67000", "gtceu:oxygen 40000", "gtceu:benzene 70000")
        .itemOutputs("115x gtceu:zylon_dust")
        .EUt(GTValues.VA[GTValues.UXV])
        .duration(3200)
        .blastFurnaceTemp(18900)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:polyvinyl_butyral")
        .itemInputs("gtceu:carbon_nanoswarm")
        .itemOutputs("gtceu:contaminable_carbon_nanoswarm")
        .itemInputs("96x gtceu:carbon_dust", "4x gtceu:rutile_dust")
        .inputFluids("gtceu:hydrogen 52000", "gtceu:oxygen 32000", "gtceu:chlorine 4000", "gtceu:propene 16000 ", "gtceu:ethylene 10000")
        .outputFluids("gtceu:polyvinyl_butyral 36864")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .blastFurnaceTemp(6000)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:cosmic_superconductor")
        .itemInputs("gtceu:draconium_nanoswarm")
        .itemOutputs("gtceu:contaminable_draconium_nanoswarm")
        .itemInputs("gtceu:phosphorus_dust", "18x gtceu:sulfur_dust", "6x gtceu:sodium_dust", "gtceu:thallium_dust", "6x gtceu:rhenium_chloride_dust", "5x gtceu:hassium_chloride_dust", "36x gtceu:atinium_hydride_dust", "14x gtceu:charged_caesium_cerium_cobalt_indium_dust")
        .inputFluids("gtceu:chlorine 34000", "gtceu:fluorine 3000", "gtceu:ethylene 12000", "gtceu:oxygen 46000", "gtceu:hydrogen 102000", "gtceu:uu_matter 2000", "gtceu:quark_gluon_plasma 17000", "gtceu:benzene 3000", "gtceu:acetone 6000")
        .outputFluids("gtceu:cosmic_superconductor 10000")
        .EUt(GTValues.VA[GTValues.MAX])
        .blastFurnaceTemp(36000)
        .duration(16000)
        .addData("module", 3)

    gtr.nanorobots_integrated_processing_center("gtocore:platinum_dust")
        .itemInputs("gtceu:iridium_nanoswarm")
        .itemOutputs("gtceu:contaminable_iridium_nanoswarm")
        .itemInputs("576x gtceu:platinum_group_sludge_dust", "16x gtceu:sulfur_dust")
        .inputFluids("gtceu:hydrogen 72000", "gtceu:oxygen 128000", "gtceu:chlorine 14400")
        .itemOutputs("64x gtceu:platinum_dust", "64x gtceu:palladium_dust", "60x gtceu:ruthenium_dust", "32x gtceu:iridium_dust", "48x gtceu:rhodium_dust", "32x gtceu:osmium_dust")
        .outputFluids("gtceu:hydrogen 2800", "minecraft:water 7200", "gtceu:chlorine 6400")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2400)
        .blastFurnaceTemp(9000)
        .addData("module", 1)

    gtr.nanorobots_integrated_processing_center("gtocore:naquadria_dust")
        .itemInputs("gtceu:naquadah_nanoswarm")
        .itemOutputs("gtceu:contaminable_naquadah_nanoswarm")
        .itemInputs("128x gtceu:naquadah_dust", "16x gtceu:caesium_dust")
        .inputFluids("gtceu:fluorine 32000", "gtceu:fluoroantimonic_acid 64000", "gtceu:sulfuric_acid 12000", "gtceu:radon 8000", "gtceu:nitrogen_dioxide 4000", "gtceu:xenon 4000")
        .itemOutputs("64x gtceu:naquadria_dust", "64x gtceu:trinium_dust", "256x gtceu:antimony_trifluoride_dust")
        .outputFluids("gtceu:hydrofluoric_acid 272000", "gtceu:radon_trioxide 8000", "gtceu:xenon_trioxide 4000", "gtceu:caesium_fluoride 16000")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(3600)
        .blastFurnaceTemp(12600)
        .addData("module", 1)

    gtr.nanorobots_integrated_processing_center("gtocore:zirconium_dust")
        .itemInputs("gtceu:osmium_nanoswarm")
        .itemOutputs("gtceu:contaminable_osmium_nanoswarm")
        .itemInputs("1152x gtceu:zircon_dust", "64x gtceu:potassium_dust")
        .inputFluids("gtceu:chlorine 512000", "gtceu:hydrogen 256000", "gtceu:hydrogen_peroxide 128000", "gtceu:sulfur_trioxide 64000")
        .itemOutputs("64x gtceu:zirconium_dust", "48x gtceu:hafnium_dust", "448x gtceu:potassium_sulfate_dust")
        .outputFluids("gtceu:hydrochloric_acid 512000")
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(6400)
        .blastFurnaceTemp(16200)
        .addData("module", 1)

    gtr.nanorobots_integrated_processing_center("gtocore:stem_cells")
        .itemInputs("gtceu:naquadah_nanoswarm")
        .itemOutputs("gtceu:contaminable_naquadah_nanoswarm")
        .chancedInput("gtocore:glacio_spirit", 8000, 100)
        .itemInputs("gtceu:tiny_naquadah_dust", "gtceu:osmiridium_dust", "gtceu:salt_dust", "gtceu:calcium_dust", "4x gtceu:meat_dust", "4x gtceu:bio_chaff", "2x minecraft:bone")
        .inputFluids("gtceu:phosphoric_acid 1000", "minecraft:water 3000", "gtceu:distilled_water 2000", "gtceu:biomass 1000")
        .itemOutputs("64x gtceu:stem_cells", "gtceu:phosphorus_dust")
        .EUt(GTValues.VA[GTValues.UHV])
        .duration(600)
        .blastFurnaceTemp(12200)
        .addData("module", 2)

    gtr.nanorobots_integrated_processing_center("gtocore:mutagen")
        .itemInputs("gtceu:silver_nanoswarm")
        .itemOutputs("gtceu:contaminable_silver_nanoswarm")
        .itemInputs("256x gtceu:bio_chaff", "gtceu:naquadria_dust")
        .inputFluids("gtceu:distilled_water 10000")
        .outputFluids("gtceu:mutagen 10000")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
        .blastFurnaceTemp(12600)
        .addData("module", 2)

    gtr.nanorobots_integrated_processing_center("gtocore:biological_cells")
        .itemInputs("gtceu:neutronium_nanoswarm")
        .itemOutputs("gtceu:contaminable_neutronium_nanoswarm")
        .itemInputs("256x gtceu:stem_cells", "64x gtceu:meat_dust", "64x gtceu:salt_dust", "64x gtceu:calcium_dust", "64x gtceu:agar_dust", "4x gtocore:tcetieseaweedextract", "2x gtceu:enriched_naquadah_dust", "gtceu:tritanium_dust")
        .inputFluids("gtceu:mutagen 10000")
        .itemOutputs("64x gtocore:biological_cells")
        .EUt(GTValues.VA[GTValues.UV])
        .duration(4000)
        .blastFurnaceTemp(16200)
        .addData("module", 2)

    gtr.nanorobots_integrated_processing_center("gtocore:acidic_naquadria_solution")
        .itemInputs("gtceu:carbon_nanoswarm")
        .itemOutputs("gtceu:contaminable_carbon_nanoswarm")
        .itemInputs("gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:sulfuric_acid 2000")
        .outputFluids("gtceu:acidic_naquadria_solution 3000")
        .EUt(GTValues.VA[GTValues.UV])
        .blastFurnaceTemp(9000)
        .duration(200)
        .addData("module", 1)

    gtr.nanorobots_integrated_processing_center("gtocore:acidic_enriched_naquadah_solution")
        .itemInputs("gtceu:carbon_nanoswarm")
        .itemOutputs("gtceu:contaminable_carbon_nanoswarm")
        .itemInputs("gtceu:naquadria_dust")
        .inputFluids("gtceu:sulfuric_acid 2000")
        .outputFluids("gtceu:acidic_enriched_naquadah_solution 3000")
        .EUt(GTValues.VA[GTValues.UV])
        .blastFurnaceTemp(9000)
        .duration(200)
        .addData("module", 1)
})