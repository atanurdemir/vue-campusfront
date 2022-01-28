import Swal from "sweetalert2";

export const enumToArray = (enm) => {
  const arr = [];
  const keys = Object.keys(enm);
  keys.forEach((key) => {
    arr.push(enm[key]);
  });
  return arr;
};

export const responseMessage = (
  text,
  title = "Error!",
  icon = "error",
  options
) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: "Ok",
    ...options,
  });
};
