export const isEmail = (email: string) => {
  const regexEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  return regexEmail.test(email)
}

export const isPassword = (password: string) => {
  const regexPw = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/
  return regexPw.test(password)
}

export const isNickname = (nickname: string) => {
  const regexNickname = /^[0-9a-zA-Z가-힣]{1,6}$/
  return regexNickname.test(nickname)
}
