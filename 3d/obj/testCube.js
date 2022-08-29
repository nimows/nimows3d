import * as THREE from "three"

function build(width, height, depth, posX = 0, posY = 0, posZ = 0) {
    const geo = new THREE.BoxGeometry(width, height, depth)
    const mat = new THREE.MeshNormalMaterial()
    const cube = new THREE.Mesh(geo, mat)

    cube.position.x = posX
    cube.position.y = posY
    cube.position.z = posZ

    return cube
}

function update(obj) {
    obj.rotation.x += 0.01
    obj.rotation.y += 0.02
}

export { build, update }