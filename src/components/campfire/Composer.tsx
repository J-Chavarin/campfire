import { useState } from "react";

export default function Composer({ onSend }) {
  const [text, setText] = useState("");

  return (
	 <div className="p-3 border-t border-zinc-800 flex gap-2">
		<input
		  className="flex-1 bg-zinc-900 px-3 py-2 rounded"
		  placeholder="Send to the fire..."
		  value={text}
		  onChange={(e) => setText(e.target.value)}
		/>

		<button
		  className="bg-orange-600 px-4 py-2 rounded"
		  onClick={() => {
			 if (!text.trim()) return;
			 onSend(text);
			 setText("");
		  }}
		>
		  Send
		</button>
	 </div>
  );
}