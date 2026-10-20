var APP_DATA = {
  "scenes": [
    {
      "id": "0-living",
      "name": "LIVING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.519575248052945,
        "pitch": 0.193609135144877,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.171865374241797,
          "pitch": 0.12248433185752816,
          "rotation": 0,
          "target": "1-office"
        },
        {
          "yaw": -0.4679348852469225,
          "pitch": 0.054490872464077356,
          "rotation": 4.71238898038469,
          "target": "3-study"
        },
        {
          "yaw": -0.16676292420487115,
          "pitch": 0.11024345044439343,
          "rotation": 4.71238898038469,
          "target": "4-bed-1"
        },
        {
          "yaw": -0.062128141742277876,
          "pitch": -0.008708573518472207,
          "rotation": 0,
          "target": "7-bed-2"
        },
        {
          "yaw": -0.14361711758810358,
          "pitch": -0.04445924366186027,
          "rotation": 3.141592653589793,
          "target": "10-bed-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.166539426589269,
          "pitch": 0.00968799659203512,
          "title": "OFFICE",
          "text": "OFFICE"
        },
        {
          "yaw": -0.4684028437422647,
          "pitch": -0.02518149357288557,
          "title": "STUDY",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">STUDY</span>"
        },
        {
          "yaw": -0.0614657874682365,
          "pitch": -0.040205996233954266,
          "title": "BED 2",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">BED 2</span>"
        },
        {
          "yaw": -0.143141626958041,
          "pitch": -0.07559845697138101,
          "title": "BED 3",
          "text": "BED 3"
        },
        {
          "yaw": -0.16487536861308527,
          "pitch": 0.07076007777777349,
          "title": "BED 1",
          "text": "BED 1"
        }
      ]
    },
    {
      "id": "1-office",
      "name": "OFFICE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.6873912130931465,
        "pitch": 0.17105434614096993,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.8596672006715114,
          "pitch": 0.2581421119624121,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.8458947451995176,
          "pitch": 0.17870166372595442,
          "title": "LIVING",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">LIVING</span>"
        }
      ]
    },
    {
      "id": "2-study-view-2",
      "name": "STUDY VIEW 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.418903460292551,
        "pitch": 0.08645170460076734,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.0841005004771702,
          "pitch": 0.0840964576203298,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        },
        {
          "yaw": 1.7606715404654132,
          "pitch": 0.12060214165846084,
          "rotation": 1.5707963267948966,
          "target": "3-study"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0856763948530475,
          "pitch": -0.032706243459070805,
          "title": "LIVING",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">LIVING</span>"
        },
        {
          "yaw": 1.7622598315215372,
          "pitch": -0.0018986005470544853,
          "title": "STUDY",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">STUDY</span>"
        }
      ]
    },
    {
      "id": "3-study",
      "name": "STUDY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.7249099435263417,
        "pitch": 0.15758759915557974,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5477232169465918,
          "pitch": 0.028039862479358746,
          "rotation": 7.853981633974483,
          "target": "2-study-view-2"
        },
        {
          "yaw": -1.7181707798483998,
          "pitch": 0.07472724343865167,
          "rotation": 0,
          "target": "0-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5499369315885785,
          "pitch": -0.0956771906949978,
          "title": "STUDY VIEW 2",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">STUDY VIEW 2</span>"
        },
        {
          "yaw": -1.7199142041253062,
          "pitch": -0.04784922755537835,
          "title": "LIVING&nbsp;",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">LIVING&nbsp;</span>"
        }
      ]
    },
    {
      "id": "4-bed-1",
      "name": "BED 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.01700419488406979,
        "pitch": 0.011859459999474353,
        "fov": 0.9631318738112865
      },
      "linkHotspots": [
        {
          "yaw": 1.8832604301374385,
          "pitch": 0.34007582042432105,
          "rotation": 1.5707963267948966,
          "target": "5-bed-1-wardrobe"
        },
        {
          "yaw": 1.6518091774022956,
          "pitch": -0.10397285028736292,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8675116649659156,
          "pitch": 0.2218335587635849,
          "title": "BED 1 WARDROBE",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">BED 1 WARDROBE</span><div><span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\"><br></span></div>"
        },
        {
          "yaw": 1.6495973369766137,
          "pitch": -0.2123503783764651,
          "title": "LIVING",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">LIVING</span>"
        }
      ]
    },
    {
      "id": "5-bed-1-wardrobe",
      "name": "BED 1 WARDROBE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.37420355057308186,
        "pitch": 0.3174763657583064,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.8050634599720219,
          "pitch": 0.07915430347604158,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 0.20157863028751066,
          "pitch": 0.825790149567819,
          "rotation": 3.141592653589793,
          "target": "4-bed-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8034687877210125,
          "pitch": 0.0015301711681843244,
          "title": "LIVING",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">LIVING</span>"
        },
        {
          "yaw": 0.18015004416484004,
          "pitch": 0.7271061373256007,
          "title": "BED 1",
          "text": "BED 1"
        }
      ]
    },
    {
      "id": "6-bed-2-wardrobe-",
      "name": "BED 2 WARDROBE ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7630592877336415,
          "pitch": 0.407752752220226,
          "rotation": 3.141592653589793,
          "target": "7-bed-2"
        },
        {
          "yaw": 1.8323299834494762,
          "pitch": 0.12849269366121874,
          "rotation": 0,
          "target": "0-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7479228385645449,
          "pitch": 0.3268061144194192,
          "title": "BED 2",
          "text": "BED 2"
        },
        {
          "yaw": 1.8312984760924724,
          "pitch": 0.011111783814088838,
          "title": "LIVING",
          "text": "LIVING"
        }
      ]
    },
    {
      "id": "7-bed-2",
      "name": "BED 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.29536270266746456,
        "pitch": 0.06579148893685272,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.7076214688695011,
          "pitch": 0.09663630087676722,
          "rotation": 4.71238898038469,
          "target": "0-living"
        },
        {
          "yaw": -0.8836238924017934,
          "pitch": 0.5531276062926587,
          "rotation": 3.141592653589793,
          "target": "6-bed-2-wardrobe-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7002123870078876,
          "pitch": 0.004304857119862504,
          "title": "LIVING",
          "text": "LIVING"
        },
        {
          "yaw": -0.8735754018845157,
          "pitch": 0.43807292605513304,
          "title": "BED 2 WARDROBE",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">BED 2 WARDROBE</span>"
        }
      ]
    },
    {
      "id": "8-bed-3-wardrobe",
      "name": "BED 3 WARDROBE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": 0.36652025455003745,
        "pitch": 0.05075343432271495,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 0.09083060878423765,
          "pitch": 0.2733735767511014,
          "rotation": 3.141592653589793,
          "target": "10-bed-3"
        },
        {
          "yaw": 0.36152122857443914,
          "pitch": -0.11335365710693779,
          "rotation": 4.71238898038469,
          "target": "9-bed-3-wardrobe-side-view"
        },
        {
          "yaw": 0.8013789315588582,
          "pitch": -0.029670897464953327,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.09302195925788226,
          "pitch": 0.16481770916088578,
          "title": "BED 3",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">BED 3</span>"
        },
        {
          "yaw": 0.3595184734514696,
          "pitch": -0.2240099923701493,
          "title": "WARDROBE SIDE VIEW",
          "text": "Text"
        },
        {
          "yaw": 0.7994519571647807,
          "pitch": -0.09950629341516937,
          "title": "LIVING",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">LIVING</span>"
        }
      ]
    },
    {
      "id": "9-bed-3-wardrobe-side-view",
      "name": "BED 3 WARDROBE SIDE VIEW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.09935889739705672,
        "pitch": 0.04510759295221334,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.105100244795123,
          "pitch": -0.09565248144587635,
          "rotation": 1.5707963267948966,
          "target": "0-living"
        },
        {
          "yaw": -0.7425750611854411,
          "pitch": 0.12553163704508918,
          "rotation": 4.71238898038469,
          "target": "10-bed-3"
        },
        {
          "yaw": -0.1197768992726882,
          "pitch": 0.26282017297399207,
          "rotation": 1.5707963267948966,
          "target": "8-bed-3-wardrobe"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.110113040369864,
          "pitch": -0.19368459465382415,
          "title": "LIVING",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">LIVING</span>"
        },
        {
          "yaw": -0.7313559899006208,
          "pitch": 0.019437384850300887,
          "title": "BED 3",
          "text": "BED 3"
        },
        {
          "yaw": -0.11899779324081017,
          "pitch": 0.17445719806523918,
          "title": "WARDROBE&nbsp;",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">WARDROBE&nbsp;</span>"
        }
      ]
    },
    {
      "id": "10-bed-3",
      "name": "BED 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4096,
      "initialViewParameters": {
        "yaw": -0.02012654521027102,
        "pitch": 0.011309816634886616,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.7142661521770002,
          "pitch": 0.05071887311074086,
          "rotation": 0,
          "target": "0-living"
        },
        {
          "yaw": 1.7184101950565216,
          "pitch": 0.42906797908004,
          "rotation": 1.5707963267948966,
          "target": "8-bed-3-wardrobe"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.711522628023829,
          "pitch": -0.06450529153713447,
          "title": "LIVING",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">LIVING</span>"
        },
        {
          "yaw": 1.694388578771548,
          "pitch": 0.3418819672132507,
          "title": "BED 3 WARDROBE",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">BED 3 WARDROBE</span>"
        }
      ]
    }
  ],
  "name": "2ND FLOOR GLINTMAX INTERIOR PROJECT",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
