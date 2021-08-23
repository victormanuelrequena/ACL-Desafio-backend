const CARACTERES = "0123456789abcdefghijklmnopqrstuvwxyz";

const keyGenerate = (length) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += CARACTERES.charAt(
      Math.floor(Math.random() * CARACTERES.length)
    );
  }
  return password;
};

export default keyGenerate;