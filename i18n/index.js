export const getLanguageText = async () => {
  // Set default language to zh_TW
  if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "zh_TW");
  }
  const current_language = localStorage.getItem("language");
  let module;
  switch (current_language) {
    case "zh_TW":
      module = await import("./zh_TW.js");
      return module.default;
    case "en_US":
      module = await import("./en_US.js");
      return module.default;
    default:
      module = await import("./zh_TW.js");
      return module.default;
  }
};
