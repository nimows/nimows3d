import * as THREE from "three"

function build() {
    const stationCore = buildStationCore()
    
    return stationCore
}

function update(station) {
    station.rotation.y += 0.005
}
/*
 * TO DO:
 * Make it so the top and bot cylinders change according to the height
 * of the middle cylinder
*/
function buildStationCore() {
    const segs = 10

    const geoCore = new THREE.CylinderGeometry(10, 10, 2, segs)
    const mat = new THREE.MeshNormalMaterial()
    const core = new THREE.Mesh(geoCore, mat)
    
    const geoTop = new THREE.CylinderGeometry(5, 10, 2, segs)
    const top = new THREE.Mesh(geoTop, mat)
    top.position.y = 2
    
    const geoBot = new THREE.CylinderGeometry(10, 5, 2, segs)
    const bot = new THREE.Mesh(geoBot, mat)
    bot.position.y = -2

    core.add(top, bot)

    return core
}

export { build, update }