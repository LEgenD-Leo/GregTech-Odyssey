ServerEvents.recipes((event) => {
    event.custom({
        "type": "avaritia:shaped_extreme_craft",
        "category": "misc",
        "pattern": [
            "J  ACA  J",
            "   ADA   ",
            "  ABABA  ",
            " ABBBBBA ",
            "AEABFBAGA",
            " ABBBBBA ",
            "  ABABA  ",
            " AHA AIA ",
            "J A   A J"
        ],
        "key": {
            "A": {
                "item": "gtocore:fishbig_fabric"
            },
            "B": {
                "item": "gtocore:fishbig_frame"
            },
            "C": {
                "item": "gtocore:fishbig_hair"
            },
            "D": {
                "item": "gtocore:fishbig_hade"
            },
            "E": {
                "item": "gtocore:fishbig_lhand"
            },
            "F": {
                "item": "gtocore:fishbig_body"
            },
            "G": {
                "item": "gtocore:fishbig_rhand"
            },
            "H": {
                "item": "gtocore:fishbig_lleg"
            },
            "I": {
                "item": "gtocore:fishbig_rleg"
            },
            "J": {
                "item": "avaritia:singularity"
            }
        },
        "result": {
            "item": "expatternprovider:fishbig"
        },
        "show_notification": true
    })
})