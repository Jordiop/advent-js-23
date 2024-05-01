function adjustLights(lights) {
    for (let i = 0; i < lights.length-1; i++) {
        if (lights[i] == lights[i+1]){
            lights[i+1] = '🔴' ? '🟢' : '🔴'
        }
    }
    return lights
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))