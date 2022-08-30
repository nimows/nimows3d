import * as THREE from "three"
import { yelp, initCanvas, initRenderer, initCamera, initScene } from "./init"
import * as station from "./obj/station"
import * as testLight from "./lights/testLight"
import * as sunLight from "./lights/sunLight"

// Initialization
const canvas = initCanvas()
const renderer = initRenderer()
const camera = initCamera(0, 5, 20)
const scene = initScene()

// Objects
const stationCore = station.build()
scene.add(stationCore)

console.log(stationCore)

// Lights
const testAmbLight = testLight.build()
const testSunLight = sunLight.build()
scene.add(testAmbLight, testSunLight)
console.log(testAmbLight)

// Update Objects
function update() {
    station.update(stationCore.children[0])
}

// Render Loop
function render() {
    requestAnimationFrame(render)

    update()

    renderer.render(scene, camera)
}

render()