let addSinToLine = (line: string, frame: number) => {
  let sin = Math.sin(frame),
    x = Math.round(sin * 10 + 10),
    char = Math.abs(sin) > 0.85 ? "*" : Math.cos(frame) > 0 ? "-" : "@"
  return line.slice(0, x) + char + line.slice(x + 1)
}

for (let frame = 0;;frame++) {
  await new Promise((resolve) => setTimeout(resolve, 60))
  let line = addSinToLine(" ".repeat(25), (frame + 15) * 0.2)
  console.log(addSinToLine(line, frame * 0.21))
}
