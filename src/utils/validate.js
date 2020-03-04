export const validateEmail = email => {
  if (!email.includes('@')) {
    return false;
  }

  return true;
};
