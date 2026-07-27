import type { FormData, FormErrors } from "@/types";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateFormField = (
  field: keyof FormData,
  value: string,
  errorMessages: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageMinLength: string;
  }
): string | undefined => {
  if (field === "name") {
    if (!value.trim()) return errorMessages.nameRequired;
  } else if (field === "email") {
    if (!value.trim()) return errorMessages.emailRequired;
    if (!validateEmail(value)) return errorMessages.emailInvalid;
  } else if (field === "message") {
    if (!value.trim()) return errorMessages.messageRequired;
    if (value.trim().length < 10) return errorMessages.messageMinLength;
  }
  return undefined;
};

export const validateForm = (
  formData: FormData,
  errorMessages: {
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageMinLength: string;
  }
): FormErrors => {
  const errors: FormErrors = {};

  const nameError = validateFormField("name", formData.name, errorMessages);
  if (nameError) errors.name = nameError;

  const emailError = validateFormField("email", formData.email, errorMessages);
  if (emailError) errors.email = emailError;

  const messageError = validateFormField(
    "message",
    formData.message,
    errorMessages
  );
  if (messageError) errors.message = messageError;

  return errors;
};
