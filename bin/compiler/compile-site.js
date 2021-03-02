function build() {}

function watch() {}

async function compileSite(prod = false) {
  if (prod) {
    build();
  } else {
    watch();
  }
}

module.exports = {
  compileSite,
}
