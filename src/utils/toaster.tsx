import { toast } from "react-toastify";
export default function toaster(props: any, options?: any) {
  return toast(props, {
    autoClose: 3000,
    className: "bg-card dark:bg-card-dark dark:text-secondary-dark",
    progressClassName: "toaster-progress",
    closeButton: false,
    ...options,
  });
}
