type WorkerButton = {
  color?: string;
  actionColor?: string;
  title: string;
  icon?: React.JSX.Element;
  id: string | number;
  onClick: (id: number | string) => void;
};
export default function WorkerButton({
  color,
  actionColor,
  title,
  onClick,
  icon,
  id,
}: WorkerButton) {
  return (
    <span className={`flex w-auto flex-row`}>
      <span
        className={`flex flex-row px-3 py-2 ${actionColor ? 'rounded-s-md' : 'rounded-md'} ${color}`}
      >
        {title}
      </span>
      <button
        onClick={() => onClick(id)}
        className={`w-8 px-1 focus:ring-2 ${actionColor} h-full content-center rounded-e-md`}
      >
        {icon}
      </button>
    </span>
  );
}
