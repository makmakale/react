export function getMyAge() {
  const birthDate = new Date('1987-04-18');

  const currentDate = new Date();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let age = currentYear - birthYear;

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }

  return age;
}

export function getExperienceYears() {
  const initialDate = new Date('2020-10-01');
  const currentDate = new Date();
  const initialYear = initialDate.getFullYear();
  const initialMonth = initialDate.getMonth();
  const initialDay = initialDate.getDate();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  let exp = currentYear - initialYear;

  if (currentMonth < initialMonth || (currentMonth === initialMonth && currentDay < initialDay)) {
    exp--;
  }

  return exp;
}
