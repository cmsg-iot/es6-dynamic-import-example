document.getElementById("func1").addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const module = await import("./functions/func1.js");
    module.func1();
  } catch (error) {
    console.error(error);
  }
});

document.getElementById("func2").addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const module = await import("./functions/func2.js");
    module.func2();
  } catch (error) {
    console.error(error);
  }
});

document.getElementById("func3").addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const module = await import("./functions/func3.js");
    module.func3();
  } catch (error) {
    console.error(error);
  }
});

document.getElementById("func4").addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const module = await import("./functions/func4.js");
    module.func4();
  } catch (error) {
    console.error(error);
  }
});

document.getElementById("func5").addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const module = await import("./functions/func5.js");
    module.func5();
  } catch (error) {
    console.error(error);
  }
});

document.getElementById("objects").addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    const module = await import("./components/object.js");
    console.log(module);
    module.default.d("hello");
    console.log(module.default.a, module.default.b, module.default.c);
  } catch (error) {
    console.error(error);
  }
});

document.getElementById("language").addEventListener("input", async () => {
  let select = document.getElementById("language");
  localStorage.setItem("language", select[select.selectedIndex].value);
  console.log(select[select.selectedIndex].value);
  const module = await import("./i18n/index.js");
  const obj = await module.getLanguageText();
  console.log(obj);
});
