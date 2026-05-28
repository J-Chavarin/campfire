export default function ChannelList({ channels, selected, onSelect }) {
  return (
	 <div className="w-60 border-r border-zinc-800 p-2">
		{channels.map((c) => (
		  <div
			 key={c.id}
			 onClick={() => onSelect(c.id)}
			 className={`p-2 rounded cursor-pointer ${
				selected === c.id ? "bg-zinc-800" : "hover:bg-zinc-900"
			 }`}
		  >
			 # {c.name}
		  </div>
		))}
	 </div>
  );
}