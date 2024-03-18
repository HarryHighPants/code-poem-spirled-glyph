let addSinToLine = (
  line: string,
  frame: number,
  speed: number,
  intensity: number
) => {
  let sin = Math.sin(frame * speed)
  let x = Math.round(sin * intensity + 10)
  let asc = sin < Math.sin((frame + 1) * speed)
  let char = sin > 0.85 ? "*" : asc ? "-" : "@"
  return line.slice(0, x) + char + line.slice(x + 1)
}

for (let frame = 0;;frame++) {
  await new Promise((resolve) => setTimeout(resolve, 60))
  let line = addSinToLine(" ".repeat(25), frame + 15, 0.2, 10)
  console.log(addSinToLine(line, frame, 0.21, 10))
}
