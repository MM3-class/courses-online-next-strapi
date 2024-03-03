export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const starArray = [...Array(5).keys()].map((i) => i + 1);

export const dateCourse = (dating) => {
  const convertDate = new Date(dating);
  const month = (convertDate.getMonth() + 1).toString().padStart(2, "0");
  const year = convertDate.getFullYear().toString();
  return `${month}/${year}`;
};

export const formattedNumber = (number) => {
  return number?.toLocaleString();
};
