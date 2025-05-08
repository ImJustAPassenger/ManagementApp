export default function Input({ref, label, textArea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 roundend-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex  flex-col gap-1 my-4 ">
      <label className="text-sm font-bold uppercase text-stone-500" htmlFor="">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
}
