const shape = (n) => {
  let dn = n * 2;
  let stack = 1;
  let start = 0;

  for (let i = 1; i < dn; i++) {
    let res = "";
    let temp = "";
    start = n - i;
    stack++;
    if (i < n) {
      for (let j = n - i; j < dn - 1; j++) {
        if (j > n) {
          if (j % 2 == 1 && i > 2 && j > dn - stack) {
            if (start % 2 == 0) {
              if (i % 2 == 0) {
                if (Math.round(i / 2) % 2 == 1) {
                  res += temp === "" ? "x" : temp === "o" ? "x" : "o";
                  temp = temp === "" ? "x" : temp === "o" ? "x" : "o";
                } else {
                  res += temp === "" ? "o" : temp === "o" ? "x" : "o";
                  temp = temp === "" ? "o" : temp === "o" ? "x" : "o";
                }
              } else {
                if (Math.round(i / 2) % 2 == 1) {
                  res += temp === "" ? "x" : temp === "o" ? "x" : "o";
                  temp = temp === "" ? "x" : temp === "o" ? "x" : "o";
                } else {
                  res += temp === "" ? "o" : temp === "o" ? "x" : "o";
                  temp = temp === "" ? "o" : temp === "o" ? "x" : "o";
                }
              }
            } else {
              if (i % 2 == 0) {
                if (Math.round(i / 2) % 2 == 1) {
                  res += temp === "" ? "x" : temp === "o" ? "x" : "o";
                  temp = temp === "" ? "x" : temp === "o" ? "x" : "o";
                } else {
                  res += temp === "" ? "o" : temp === "o" ? "x" : "o";
                  temp = temp === "" ? "o" : temp === "o" ? "x" : "o";
                }
              } else {
                if (Math.round(i / 2) % 2 == 1) {
                  res += temp === "" ? "x" : temp === "o" ? "x" : "o";
                  temp = temp === "" ? "x" : temp === "o" ? "x" : "o";
                } else {
                  res += temp === "" ? "o" : temp === "o" ? "x" : "o";
                  temp = temp === "" ? "o" : temp === "o" ? "x" : "o";
                }
              }
            }
          } else {
            res += " ";
          }
        } else {
          res += " ";
        }
        // res += " ";
      }
      res += "x";
    }
    if (i == n) {
      if (n % 2 == 0) {
        for (let j = 1; j < n; j++) {
          if (j % 2 == 0) {
            res += " ";
          } else {
            res += temp === "" ? " x" : temp === "x" ? "o" : "x";
            temp = temp === "" ? "x" : temp === "x" ? "o" : "x";
          }
        }
        let split = res.split(" ");
        let reversed = split.reverse();
        for (let j = 0; j < reversed.length; j++) {
          if (j == 0) {
            res += " ";
          }
          res += split[j] + " ";
        }
      } else {
        for (let j = n - i; j <= dn; j++) {
          if (j % 2 == 0) {
            res += " ";
          } else {
            res += temp === "" ? "x" : temp === "x" ? "o" : "x";
            temp = temp === "" ? "x" : temp === "x" ? "o" : "x";
          }
        }
      }
    }
    if (i > n) {
      for (let j = 0; j <= i - n; j++) {
        res += " ";
      }
      for (let j = 0; j < n; j++) {
        if (j > i - n) {
          if (
            res.charAt(res.length - 1) == " " &&
            res.charAt(res.length - 2) == " "
          ) {
            res += "x";
            temp = "x";
          }
          if (res.charAt(res.length - 1) == " ") {
            res += temp == "x" ? "o" : "x";
            temp = temp == "x" ? "o" : "x";
          } else {
            res += " ";
          }
        }
      }
      if (i == dn - 1) {
        res += "x";
      }
    }

    console.log(res);
  }
};

shape(10); // n value
