const getActiveLinkClass = ({ isActive }: { isActive: boolean }): string =>
  isActive ? "bg-sky-700" : "text-black";

export default getActiveLinkClass;
