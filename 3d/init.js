import * as THREE from "three"

function yelp(msg) {
    alert(msg)
}

function initCamera(x, y, z) {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.01, 1000)
    camera.position.x = x
    camera.position.y = y
    camera.position.z = z
    camera.lookAt(0, 0, 0)
    return camera
}

function initCanvas() {
    const canvas = document.getElementById("ctx")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.style.position = "absolute"
    canvas.style.top = 0
    canvas.style.left = 0
    canvas.style.zIndex = -1
    return canvas
}

function initRenderer() {
    return new THREE.WebGLRenderer({ canvas: ctx })
}

function initScene() {
    return new THREE.Scene()
}

export { yelp, initCamera, initCanvas, initRenderer, initScene }