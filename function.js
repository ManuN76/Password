let cache = new Map();

window.function = function (key, length, lower, upper, num, sym) {
  key = key.value ?? "";
  length = length.value ?? 8;
  lower = lower.value ?? 1;
  upper = upper.value ?? 1;
  num = num.value ?? 1;
  sym = sym.value ?? 1;

  key = key + length + lower + upper + num + sym;

  let newPassword = "";

  if (key !== "") {
    newPassword = cache.get(key);
  }

  if (newPassword === undefined) {
    newPassword = "";
    const dataLowercase = "azertyuiopqsdfghjklmwxcvbn".split("");
    const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split("");
    const dataNumbers = "0123456789".split("");
    const dataSymbols = "!@#$%^&*-_=+|:;',.>/?~".split("");

    const data = [].concat(
      lower ? dataLowercase : [],
      upper ? dataUppercase : [],
      num ? dataNumbers : [],
      sym ? dataSymbols : []
    );

    if (data.length === 0 || length === 0) return "";

    for (let i = 0; i < length; i++) {
      newPassword += data[Math.floor(Math.random() * data.length)];
    }
  }

  if (key !== "") {
    cache.set(key, newPassword);
  }

  return newPassword;
};
