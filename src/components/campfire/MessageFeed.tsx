export default function MessageFeed({ messages }) {
  return (
	 <div className="flex-1 p-4 overflow-y-auto space-y-3">
		{messages.map((m) => (
		  <div key={m.id} className="flex gap-3">
			 <div className="text-zinc-400 w-24 text-sm">
				{m.sender}
			 </div>

			 <div className="bg-zinc-900 px-3 py-2 rounded">
				{m.text}
			 </div>
		  </div>
		))}
	 </div>
  );
}