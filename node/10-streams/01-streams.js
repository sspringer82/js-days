const readableStream = new ReadableStream({
  start(controller) {
    const data = ['Hello', 'World', 'from', 'Web', 'Streams'];
    data.forEach((chunk) => controller.enqueue(chunk));
    controller.close();
  },
});

const transformStream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase()); // Konvertiere Text in Großbuchstaben
  },
});

const writableStream = new WritableStream({
  write(chunk) {
    console.log('Output:', chunk);
  },
});

readableStream.pipeThrough(transformStream).pipeTo(writableStream);
