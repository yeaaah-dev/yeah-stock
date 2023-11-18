export function validateFields(values = {}) {
  const errors = Object.keys(values).filter((key) => {
    const value = values[key];
    const numberOrString = typeof value;

    if (!value) {
      return true;
    }

    if (numberOrString === "string" && !value.length) return true;
    if (numberOrString === "number" && value === 0) return true;

    if (key === "description") {
      console.log(numberOrString, value.length);
    }

    return false;
  });

  return errors;
}
