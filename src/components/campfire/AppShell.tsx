import { useState } from "react";
import Header from "./Header";
import ChannelList from "./ChannelList";
import MessageFeed from "./MessageFeed";
import Composer from "./Composer";

export default function AppShell() {
  const [channels] = useState([
	 { id: "general", name: "general" },
	 { id: "photos", name: "photos" },
  ]);

  const [selectedChannel, setSelectedChannel] = useState("general");

  const [messages, setMessages] = useState([
	 { id: "1", channelId: "general", sender: "Javier", text: "Campfire is live 🔥", createdAt: Date.now() },
	 { id: "2", channelId: "general", sender: "Chris", text: "this is cool", createdAt: Date.now() },
  ]);

  const filteredMessages = messages.filter(
	 (m) => m.channelId === selectedChannel
  );

  function sendMessage(text: string) {
	 setMessages((prev) => [
		...prev,
		{
		  id: crypto.randomUUID(),
		  channelId: selectedChannel,
		  sender: "You",
		  text,
		  createdAt: Date.now(),
		},
	 ]);
  }

  return (
	 <div className="h-screen flex flex-col bg-zinc-950 text-white">
		<Header />

		<div className="flex flex-1 overflow-hidden">
		  <ChannelList
			 channels={channels}
			 selected={selectedChannel}
			 onSelect={setSelectedChannel}
		  />

		  <MessageFeed messages={filteredMessages} />
		</div>

		<Composer onSend={sendMessage} />
	 </div>
  );
}