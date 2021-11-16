const years: string[] = [];
const dates: string[] = [];
const profileFormData = {
  genders: ['Male', 'Female', 'Other'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  years,
  dates,
};

const currentYear = new Date().getFullYear();

for (let i = 1900; i < currentYear; i++) {
  const str = i.toString();
  years.push(str);
}

for (let i = 0; i < 32; i++) {
  const str = i.toString();
  dates.push(str);
}

export default profileFormData;
