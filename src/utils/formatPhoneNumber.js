export function formatPhoneNumber(phoneNumber) {
  // Видаляємо всі символи, крім цифр
  const cleaned = ("" + phoneNumber).replace(/\D/g, "");

  // Витягуємо код країни, код оператора та решту номера
  const countryCode = cleaned.slice(0, 3);
  const operatorCode = cleaned.slice(3, 6);
  const rest = cleaned.slice(6);

  // Форматуємо номер за заданим шаблоном
  const formattedNumber = `+${countryCode}(${operatorCode})${rest.slice(0, 3)}-${rest.slice(
    3,
    5
  )}-${rest.slice(5)}`;

  return formattedNumber;
}
