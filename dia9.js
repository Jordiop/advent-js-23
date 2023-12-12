function adjustLights(lights) {
    for (let i = 1; i < lights.length; i++) {
        if (lights[i] == lights[i-1]){
            lights[i] = '🔴' ? '🟢' : '🔴'
        }
    }
    return lights
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))