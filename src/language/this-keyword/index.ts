// mothod in an object -> object
// regular function -> Global: Window in browser and Global in node

type Video = {
  // biome-ignore lint/suspicious/noExplicitAny: simulating JS
  [key: string]: any
}

const video: Video = {
  title: "Title A",
  tags: ["good", "better", "best"],
  play() {
    console.log(`Now playing: ${this.title}`)
  },

  showTags() {
    this.tags.forEach(
      function (this: Video, tag: string) {
        console.log(`title: ${this.title}, tag: ${tag}`)
      }.bind(this),
    )
  },
}

// // Because `pause` is a method in the video object, `this` references the
// // `video` object
// video.pause = function () {
//   console.log(`Paused: ${this.title}`)
// }

video.showTags()

// // simple TS function
// function playVideo() {
//   console.log(this)
// }
// // the window (browser) / global (node) object, which in strict mode is set to
// // undefined
// playVideo()

// // constructor function
// function Video(this: { title: string }, title: string) {
//   this.title = title
//   console.log(this)
// }
// // Using the `new` operator creates a new empty object using `Object.create()`
// // and points `this` to the empty object.
// new Video("Title B")

// function playVideo(arg1: unknown, arg2: unknown) {
//   console.log(this, `\nwith args: [${arg1}, ${arg2}]\n`)
// }
// playVideo.call({ property: "value" }, "A", "B") // calls the function
// playVideo.apply({ property: "value" }, [1, 2]) // calls the function
// playVideo.bind({ property: "value" })("X", "Y") // doesn't call but returns new function and points `this` to the object permanantly
