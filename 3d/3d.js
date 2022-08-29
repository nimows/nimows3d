import * as THREE from "three"
import { yelp, initCanvas, initRenderer, initCamera, initScene } from "./init"
import * as station from "./obj/station"

// Initialization
const canvas = initCanvas()
const renderer = initRenderer()
const camera = initCamera(0, 5, 20)
const scene = initScene()

// Objects
const stationCore = station.build()
scene.add(stationCore)

// Update Objects
function update() {
    station.update(stationCore)
}

// Render Loop
function render() {
    requestAnimationFrame(render)

    update()

    renderer.render(scene, camera)
}

render()