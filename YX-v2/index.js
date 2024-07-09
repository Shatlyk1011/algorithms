// 1 done

function solution(config) {
  const { vars, calculations } = config;

  const result = {};

  const calcMap = {};
  calculations.forEach((calc) => {
    calcMap[calc.id] = calc.formula;
  });

  function computeVariable(id) {
    if (result.hasOwnProperty(id)) {
      return result[id];
    }

    const variable = vars.find((v) => v.id === id);
    if (!variable) {
      console.log(`${id} not found`);
    }

    if (variable.value) {
      result[id] = variable.value;
    } else if (variable.formula) {
      const formula = calcMap[variable.formula];
      if (!formula) {
        console.log(`${variable.formula} not found`);
      }

      const keys = formula.split(" ");
      const evaluatedTokens = keys.map((key) => {
        if (key.startsWith("$")) {
          const varId = key.substring(1);
          if (!computeVariable(varId)) {
            return;
          }
          return result[varId];
        }
        return key;
      });

      const evaluatedFormula = evaluatedTokens.join(" ");

      const value = new Function(`return ${evaluatedFormula}`)();

      if (isNaN(value)) {
        console.log(`error ${value}`);
      }
      result[id] = value;
    }

    return result[id];
  }

  try {
    vars.forEach((variable) => {
      if (!result.hasOwnProperty(variable.id)) {
        computeVariable(variable.id);
      }
    });
    return result;
  } catch (e) {
    return "impossible";
  }
}

// Example usage:
const config = {
  vars: [
    { id: "a", formula: "calcA" },
    { id: "b", formula: "calcB" },
    { id: "c", formula: "calcC" },
    { id: "d", value: 5 },
    { id: "f", value: 5 },
  ],
  calculations: [
    { id: "calcA", formula: "$b + $c" },
    { id: "calcB", formula: "$d * ( $f + 5 )" },
    { id: "calcC", formula: "$f + $b" },
  ],
};

console.log("1", solution(config));

//2done

// module.exports = function calculator() {
//   let value = 0;

//   return {
//     add: function (num) {
//       value += num;
//     },
//     subtract: function (num) {
//       value -= num;
//     },
//     multiply: function (num) {
//       value *= num;
//     },
//     divide: function (num) {
//       if (num === 0) {
//         throw new Error("Cannot divide by zero.");
//       }
//       value /= num;
//     },
//     magic: function (func) {
//       return function innerMagic(num) {
//         if (func === this.divide) {
//           if (num !== 0) {
//             func.call(this, num);
//           }
//         } else {
//           func.call(this, num);
//         }
//         return innerMagic.bind(this);
//       }.bind(this);
//     },
//     getValue: function () {
//       return value;
//     },
//   };
// };

// const calc = calculator();

// calc.add(10);
// calc.multiply(2);
// calc.subtract(5);
// calc.divide(3);
// calc.magic(calc.add)(2)(3)(4);
// console.log(calc.getValue());

// module.exports = function calculator() {
//   // Ваше решение...
//   constructor() {
//     this.value = 0;
//   }

//   add(num) {
//     this.value += num;
//   }

//   subtract(num) {
//     this.value -= num;
//   }

//   divide(num, isMagic = false) {
//     if (num === 0 && !isMagic) {
//       throw new Error("Cannot divide by zero.");
//     }
//     this.value /= num;
//   }

//   magic(func) {
//     return (num) => {
//       func(num, true);
//     };
//   }

//   getValue() {
//     return this.value;
//   }
// }

// const calc2 = new Calc2();

// console.log(calc.add(10));
// console.log(calc.multiply(2));
// console.log(calc.subtract(5));
// console.log(calc.divide(3));
// console.log(calc.getValue());

// console.log(restoreCardNumber("111111-011111-2.02102"));

//3 done
// async function buildDependencyTree(dependencies, fetcher) {
//   async function safeFetch(package) {
//     let attempts = 0;
//     while (attempts < 3) {
//       try {
//         const { dependencies } = await fetcher(package);
//         return dependencies;
//       } catch (err) {
//         attempts++;
//         if (attempts === 0) throw new Error(`Нет зависимости для ${package}`);
//       }
//     }
//   }

//   async function addDependencies(package) {
//     const subDeps = await safeFetch(package);
//     if (subDeps.length === 0) return {};

//     const subDepsObject = {};
//     for (const dep of subDeps) {
//       subDepsObject[dep] = await addDependencies(dep);
//     }
//     return subDepsObject;
//   }

//   for (const package in dependencies) {
//     dependencies[package] = await addDependencies(package);
//   }
// }

// module.exports = buildDependencyTree;

// 4
// function restoreTheBankNumber(number) {
//   // Регулярное выражение для проверки требований Тратьбанка
//   const tratBankRegex = /^(1[0-2]?|[0-2]1)(-1?[0-2]{5,}|[0-2]{5,}1?)(-[0-2]{3,7})+$/;
//   // Регулярное выражение для проверки требований Омегабанка
//   const omegaBankRegex = /([0-2]{5,7}|[0-2]{1,4}-[0-2]{6})/;

//   // Функция для проверки, соответствует ли номер требованиям банка
//   function checkBankRequirements(bankRegex, number) {
//     return bankRegex.test(number);
//   }

//   // Попытка восстановить номер для каждого банка
//   for (let i = 0; i <= 2; i++) {
//     const restoredNumber = number.replace(".", i.toString());
//     if (checkBankRequirements(tratBankRegex, restoredNumber)) {
//       return restoredNumber; // Возвращает номер, если соответствует Тратьбанку
//     } else if (checkBankRequirements(omegaBankRegex, restoredNumber)) {
//       return restoredNumber; // Возвращает номер, если соответствует Омегабанку
//     }
//   }

//   // Если ни один из банков не подходит, возвращаем исходный номер
//   return number;
// }

// function restoreTheBankNumber(number) {
//   function isValidGeneral(number) {
//     const blocks = number.split("-");
//     for (let block of blocks) {
//       if (block.length < 3 || block.length > 7) return false;
//       if (/00|22/.test(block)) return false;
//     }
//     return true;
//   }

//   function isValidTratBank(number) {
//     const blocks = number.split("-");
//     for (let i = 0; i < blocks.length; i++) {
//       const block = blocks[i];
//       if (i < blocks.length - 1 && block.startsWith("0")) return false;
//       if ((block.match(/1/g) || []).length > 1) return false;
//       if (i > 0 && block.length <= 4) return false;
//     }
//     return true;
//   }

//   function isValidOmegabank(number) {
//     const blocks = number.split("-");
//     let isLengthFiveOrSeven = false;
//     let isLess20000 = false;
//     let isLengthSix = blocks.length > 1 && blocks[1].length === 6;

//     for (let block of blocks) {
//       if (block.length === 5 || block.length === 7) {
//         isLengthFiveOrSeven = true;
//       }
//       if (+block < 20000) {
//         isLess20000 = true;
//       }
//     }

//     return isLengthFiveOrSeven && isLess20000 && isLengthSix;
//   }

//   const replacements = ["0", "1", "2", "-"];
//   for (let val of replacements) {
//     const restoredNumber = number.replace(".", val);
//     if (isValidGeneral(restoredNumber)) {
//       if (isValidTratBank(restoredNumber) || isValidOmegabank(restoredNumber)) {
//         return restoredNumber;
//       }
//     }
//   }
//   return number;
// }

// console.log("restoreTheBankNumber", restoreTheBankNumber("111111-011111-2.02102"));
// console.log("restoreTheBankNumber", restoreTheBankNumber("111111.011111-2102102"));
// console.log("restoreTheBankNumber", restoreTheBankNumber("111111-.11111-2102102"));
