import * as THREE from "three"

function build() {
    const ambLight = new THREE.AmbientLight( 0xFFFFFF, 0.2 )
    return ambLight
}

function update() {

}

export { build, update }