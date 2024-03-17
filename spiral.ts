const addSinToLine = (
  line: string,
  frame: number,
  speed: number = 0.2,
  intensity: number = 10
) => {
  const sin = Math.sin(frame * speed)
  const x = Math.abs(Math.round(sin * intensity + 10))
  const asc = sin < Math.sin((frame + 1) * speed)
  const char = Math.abs(sin) > 0.85 ? "*" : asc ? "-" : "@"
  return line.substring(0, x) + char + line.substring(x + 1)
}

for (let frame = 0; true; frame++) {
  let line = new Array(25).join(" ")
  line = addSinToLine(line, frame + 15, 0.2, 10)
  line = addSinToLine(line, frame, 0.2, 10)
  console.log(line)
  await new Promise((resolve) => setTimeout(resolve, 60))
}
