import * as THREE from "three"

function build() {
    const stationController = buildStationController()
    const stationCore = buildStationCore()
    const stationMainDeck = buildStationMainDeck()

    stationCore.add(stationMainDeck)
    stationController.add(stationCore)
    
    return stationController
}

function update(station) {
    station.rotation.y += 0.001
}

// Design Constants
const coreColor = 0x404040
const coreMat = new THREE.MeshPhysicalMaterial()
coreMat.metalness = 0
coreMat.reflectivity = 1
coreMat.clearcoat = 0.3

// Object Controller
function buildStationController() {
    const geo = new THREE.SphereGeometry(1)
    const mat = new THREE.MeshBasicMaterial()
    const controller = new THREE.Mesh(geo, mat)

    controller.rotation.set(0, .2, .2)

    return controller
}

// Build Functions
function buildStationCore() {
    const segs = 100

    const geo = new THREE.CylinderGeometry(4, 4, 8, segs)
    const mat = coreMat
    mat.color = new THREE.Color(coreColor)
    const core = new THREE.Mesh(geo, mat)
    core.name = "stationCore"

    return core
}

/*
 * TO DO:
 * Make it so the top and bot cylinders change according to the height
 * of the middle cylinder
*/
function buildStationMainDeck() {
    const segs = 10

    const geoDeck = new THREE.CylinderGeometry(10, 10, 2, segs)
    const mat = coreMat
    mat.color = new THREE.Color(coreColor)
    const deck = new THREE.Mesh(geoDeck, mat)
    
    const geoTop = new THREE.CylinderGeometry(5, 10, 2, segs)
    const top = new THREE.Mesh(geoTop, mat)
    top.position.y = 2
    
    const geoBot = new THREE.CylinderGeometry(10, 5, 2, segs)
    const bot = new THREE.Mesh(geoBot, mat)
    bot.position.y = -2

    deck.add(top, bot)

    return deck
}

export { build, update }