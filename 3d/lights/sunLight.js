import * as THREE from "three"

function build() {
    const sunLight = new THREE.PointLight( 0xF0F0F0, 2.5, 500 )
    sunLight.position.set( -50, 50, 50 )
    return sunLight
}

function update() {

}

export { build, update }