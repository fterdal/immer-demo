// Exploring Immer
const { green, red } = require("chalk")
const { produce } = require("immer")

const originalObject = {
  name: "Finn",
  tasks: [
    { id: 1, type: "small", text: "check email" },
    { id: 2, type: "medium", text: "create new slideshow" },
    { id: 3, type: "large", text: "terraform mars" }
  ],
  location: {
    lat: 41.895266,
    long: -87.6412237
  }
}

const newObject = produce(originalObject, draft => {
  draft.name = "Travis"

  // throws an error!
  // draft.first.second.third.fourth = "some value"

  // does NOT throw an error
  // draft.first = {
  //   second: {
  //     third: {
  //       fourth: "some value"
  //     }
  //   }
  // }

  // console.log(draft)
})

const areObjectsTheSame = originalObject === newObject
const areNamesTheSame = originalObject.name === newObject.name
const areTasksTheSame = originalObject.tasks === newObject.tasks

// console.log("------------")
// console.log(newObject)

console.log("------------")

console.log(
  areObjectsTheSame
    ? green("✅ The objects ARE the same")
    : red("🔴 The objects are NOT the same")
)

console.log(
  areNamesTheSame
    ? green("✅ The names ARE the same")
    : red("🔴 The names are NOT the same")
)

console.log(
  areTasksTheSame
    ? green("✅ The tasks ARE the same")
    : red("🔴 The tasks are NOT the same")
)

console.log("------------")
