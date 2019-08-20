workflow "build and test" {
  on = "push"
  resolves = ["test", "coverage", "lint"]
}

action "build" {
  uses = "actions/npm@master"
  args = "ci"
}

action "test" {
  needs = "build"
  uses = "actions/npm@master"
  args = "t"
}

action "lint" {
  needs = "build"
  uses = "actions/npm@master"
  args = "run lint"
}
