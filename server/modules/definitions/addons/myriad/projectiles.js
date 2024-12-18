const { combineStats, weaponArray, makeDeco, makeTurret } = require('../../facilitators.js')
const { base, statnames } = require('../../constants.js')
const g = require('../../gunvals.js')
// wave 1
Class.myriad_multiBullet = {
  	PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
        		POSITION: { LENGTH: 7, ANGLE: 22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.3}]),
              	TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
              	SHOOT_ON_DEATH: true
            }
      	},
      	{
          	POSITION: { LENGTH: 7, ANGLE: -22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.3}]),
              	TYPE: ["bullet", { PERSISTS_AFTER_DEATH: true }],
              	SHOOT_ON_DEATH: true
            }
        }
    ],
  	PROPS: [
      	{
          	POSITION: [5, 0, 0, 0, 1],
          	TYPE: ["genericEntity", {COLOR: 12}]
        }
    ]
}
Class.myriad_tetraBullet = {
  	PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
          	POSITION: { LENGTH: 7, ANGLE: 22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.5}]),
              	TYPE: ["myriad_multiBullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: -22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.5}]),
              	TYPE: ["myriad_multiBullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        }
    ],
  	PROPS: [
      	{
          	POSITION: [7.5, 0, 0, 0, 1],
          	TYPE: ["genericEntity", {COLOR: 12}]
        }
    ]
}
Class.myriad_pentaBullet = {
  	PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
          	POSITION: { LENGTH: 7, ANGLE: 22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.45}]),
              	TYPE: ["myriad_tetraBullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: -22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.45}]),
              	TYPE: ["myriad_tetraBullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        }
    ],
  	PROPS: [
      	{
          	POSITION: [10, 0, 0, 0, 1],
          	TYPE: ["genericEntity", {COLOR: 12}]
        }
    ]
}
Class.myriad_splitterBullet = {
  	PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
          	POSITION: { LENGTH: 7 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.4}]),
              	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: 22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.4}]),
              	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: -22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.4}]),
              	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        }
    ],
  	TURRETS: weaponArray(
      	{
          	POSITION: [2.5, 4, 0, 0, 0, 1],
          	TYPE: ["genericEntity", {COLOR: 12}]
        }, 3
    )
}
Class.myriad_decapitatorBullet = {
  	PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
          	POSITION: { LENGTH: 7 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.3}]),
              	TYPE: ["myriad_splitterBullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: 22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.3}]),
              	TYPE: ["myriad_splitterBullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: -22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.7}]),
              	TYPE: ["myriad_splitterBullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        }
    ],
  	TURRETS: weaponArray({
      	POSITION: [6, 6, 0, 0, 0, 1],
      	TYPE: ["genericEntity", {COLOR: 12}]
    }, 3)
}
Class.myriad_tearerBullet = {
		PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
          	POSITION: { LENGTH: 7, ANGLE: 11.25 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.7}]),
              	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: -11.25 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.7}]),
              	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: 22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.7}]),
              	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        },
      	{
          	POSITION: { LENGTH: 7, ANGLE: -22.5 },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {damage: 0.7}]),
              	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true}],
              	SHOOT_ON_DEATH: true
            }
        }
    ],
  	TURRETS: weaponArray({
      	POSITION: [4, 6, 0, 0, 0, 1],
      	TYPE: ["genericEntity", {COLOR: 12}]
    }, 6)
}
Class.myriad_hiveDeco = makeDeco(6, 10)
Class.myriad_hiveBullet = {
  	PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: weaponArray({
      	POSITION: {
          	LENGTH: 7
        },
      	PROPERTIES: {
          	SHOOT_SETTINGS: combineStats([g.swarm, g.bee, {damage: 0.7}]),
          	TYPE: ["bee", {INDEPENDENT: true, PERSISTS_AFTER_DEATH: true}],
          	STAT_CALCULATOR: "drone",
          	SYNCS_SKILLS: true,
          	SHOOT_ON_DEATH: true,
          	WAIT_TO_CYCLE: true
        }
    }, 6),
  	PROPS: [
      	{
          	POSITION: [7.5, 0, 0, 0, 1],
          	TYPE: "myriad_hiveDeco"
        }
    ]
}
Class.myriad_multiMinion = {
  	PARENT: "minion",
  	LABEL: "Multiplier Minion",
  	GUNS: [
      	{
          	POSITION: {
              	LENGTH: 18,
              	WIDTH: 8
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {reload: 1.5, damage: 0.3}]),
              	TYPE: "myriad_multiBullet"
            }
        },
      	{
          	POSITION: {
              	LENGTH: 14,
              	WIDTH: 5
            },
          	PROPERTIES: {
              	COLOR: 12
            }
        }
    ]
}
// wave 2
Class.myriad_signal = {
  	PARENT: "bullet",
  	MOTION_TYPE: "slowgrow",
  	SHAPE: 'M 0 -2 Q 1 0 0 2 0.5 0 0 -2'
}
Class.myriad_signalDrone = {
  	PARENT: "drone",
  	SHAPE: 'M 0 -2 Q 1 0 0 2 0.5 0 0 -2'
}
//eave 4
function makeMissile(level, amount) {
  	let cannons = []
  	for (let i = 0; i < level; i++) {
      	cannons.push({
          	POSITION: {
              	LENGTH: 0
            },
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, {speed: 1 * ((i / 2) + 1), spray: 0, shudder: 0}]),
              	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: "true"}],
              	SHOOT_ON_DEATH: true
            }
        })
    }
  	Class.deco = makeDeco(0, 'red')
  	let missile = {
      	PARENT: "bullet",
      	LABEL: "Missile",
      	INDEPENDENT: true,
      	GUNS: [
          	{
              	POSITION: {
                  	LENGTH: 0,
                  	WIDTH: 26,
                  	X: 10
                },
              	PROPERTIES: {
                  	SHOOT_SETTINGS: combineStats([g.basic, {spray: 0, shudder: 0, speed: 0, pen: 1.2}]),
                  	TYPE: ["bullet", {PERSISTS_AFTER_DEATH: true, MOTION_TYPE: "grow"}],
                  	SHOOT_ON_DEATH: true,
                  	ALPHA: 0
                }
            },
          	{
              	POSITION: {
                  	LENGTH: 5,
                  	WIDTH: 20,
                  	ASPECT: -1.5
                }
            },
          	{
              	POSITION: {
                  	LENGTH: 20,
                  	WIDTH: 10,
                  	ASPECT: 0.01
                }
            },
          	{
              	POSITION: {
                  	LENGTH: 15,
                  	WIDTH: 10,
                  	ASPECT: 1.2,
                  	ANGLE: 180,
                }
            },
          	...weaponArray(cannons, amount)
        ],
      	PROPS: [
          	{
              	POSITION: [13, 0, 0, 0, 0],
              	TYPE: "deco"
          	}
        ]
    }
  	return missile
}
// "make missile (how many it shoots, how many directiins ir shoot)" -drumk anguis
Class.myriad_missile = makeMissile(1, 4)
// t2
Class.myriad_missileR = makeMissile(1, 6) // rocketeer
Class.myriad_missileL = makeMissile(1, 3) // launcher 
Class.myriad_missileD = makeMissile(2, 4) // dispatcher
// rocketeer (shoots in more directions)
Class.myriad_missileR1 = makeMissile(1, 8)
Class.myriad_missileRL = makeMissile(1, 5)
Class.myriad_missileRD = makeMissile(2, 6)
// launcher (minigun esque)
Class.myriad_missileL1 = makeMissile(1, 2)
Class.myriad_missileLD = makeMissile(2, 3)
// dispatcher (more bullets)
Class.myriad_missileD1 = makeMissile(3, 4)

Class.myriad_missilePillboxTurret = makeTurret({
  	GUNS: [
      	{
          	POSITION: [20, 5, 1, 0, 0, 0, 0]
        },
      	{
          	POSITION: [5, 5, 3, 20, 0, 0, 0]
        },
      	{
          	POSITION: [10, 10, 1, 25, 0, 0, 0]
        },
      	{
        		POSITION: [15, 8, 1.2, 25, 0, 0, 0],
          	PROPERTIES: {
              	SHOOT_SETTINGS: combineStats([g.basic, g.pounder]),
              	TYPE: "myriad_missile",
              	STAT_CALCULATOR: "sustained"
            }
      	}
    ]
})
Class.myriad_missilePillbox = {
  	PARENT: "unsetTrap",
  	DIE_AT_RANGE: true,
  	INDEPENDENT: true,
  	TURRETS: [
      	{
          	POSITION: [11, 0, 0, 0, 360, 1],
          	TYPE: "myriad_missilePillboxTurret"
        }
    ]
}
// shoots traps instead of bullets
Class.myriad_missileW = {
  	PARENT: "bullet",
  	INDEPENDENT: true,
  	GUNS: [
      	{
          	POSITION: [5, 20, -1.5, 0, 0, 0, 0] 
        },
      	{
          	POSITION: [20, 10, 0.001, 0, 0, 0, 0]
        },
      	{
          	POSITION: [15, 10, 1.2, 0, 0, 180, 0]
        },
      	...weaponArray(
          	[
              	{
                  	POSITION:	[0, 10, 1, 0, 0, 0, 0],
                  	PROPERTIES: {
                      	SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
                      	TYPE: ["trap", {PERSISTS_AFTER_DEATH: true}],
                      	STAT_CALCULATOR: "trap",
                      	SHOOT_ON_DEATH: true
                    }
                },
              	{
                  	POSITION: [0, 15, 1, 0, 0, 45, 0],
                  	PROPERTIES: {
                      	SHOOT_SETTINGS: combineStats([g.trap, g.pounder]),
                      	TYPE: ["unsetTrap", {PERSISTS_AFTER_DEATH: true}],
                      	STAT_CALCULATOR: "block",
                      	SHOOT_ON_DEATH: true
                    }
                }
        ], 4)
    ]
}

const timer = (run, duration) => {
    let timer = setInterval(() => run(), 31.25);
    setTimeout(() => {
        clearInterval(timer);
    }, duration * 1000);
};
  const damageOnTick = (body, instance, multiplier, duration, stopAtSetHealth, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.damageOnTicking && !instance.godmode && !instance.invuln && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) {
        instance.damageOnTicking = true;
        setTimeout(() => {
            instance.damageOnTicking = false;
        }, 2 * duration * 1000);
        timer(() => {
            if (instance.damageOnTicking && instance.health.amount > stopAtSetHealth && instance.health.amount - (multiplier * 0.5) > stopAtSetHealth) {
                instance.health.amount -= multiplier * 0.5;
            } //else {if (instance.health.amount - (multiplier * 0.5) < stopAtSetHealth) {instance.health.amount === stopAtSetHealth}}
        }, 2 * duration);
    }
};
const iceOnTick = (body, instance, multiplier, duration, hitsOwnTeam) => {
    if (!instance) return
    if (!instance.invuln && !instance.godmode && (instance.type == "tank" || instance.type == "food" || instance.type == "miniboss" || instance.type == "crasher") && instance.team != body.team) timer(() => {
        instance.velocity.x /= 1.05 * multiplier;
        instance.velocity.y /= 1.05 * multiplier;
    }, 1.5 * duration);
};
Class.poisonbullet = {
    PARENT: "bullet",
      TURRETS: [{
        POSITION: [5.5, 0, 0, 0, 0, 1],
        TYPE: ["genericEntity", { color: "green" }]
      }],
      ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
             damageOnTick(body, damageTool[0], 1, 1, 1, true);
         }
    }]
}
Class.icebullet = {
    PARENT: "bullet",
  	SHAPE: "M -0.6 -1 L 0.3 -0.8 L 0 -0.6 L 1.1 -0.4 L 0.6 0 L 1.6 0.2 L 0.2 0.5 L 0.8 0.8 L -0.6 1 L -0.6 -1",
    ON: [{
        event: "damage",
        handler: ({ body, damageTool }) => {
            iceOnTick(body, damageTool[0], 1, 1, true);
        }
    }]
}