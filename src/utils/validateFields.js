export function validateFields(values = {}) {
  const errors = Object.keys(values).filter((key) => {
    const value = values[key];
    const numberOrString = typeof value;

    if (!value) {
      return true;
    }

    if (numberOrString === "string" && !numberOrString.length) return true;
    if (numberOrString === "number" && numberOrString === 0) return true;

    return false;
  });

  return errors;
}
