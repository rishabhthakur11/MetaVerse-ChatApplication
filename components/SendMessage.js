import { useState } from "react";
import { useMoralis } from "react-moralis";
const SendMessage = ({ endOfMessagesRef }) => {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return;
    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error.message);
        }
      );

    endOfMessagesRef?.current?.scrollIntoView({ behavior: "smooth" }, [message]);
    setMessage("");
  };
  return (
    <form className="flex w-11/12 fixed bottom-10 px-5 py-2  max-w-2xl bg-orange-200 rounded-full shadow-xl border-2 border-orange-400">
      <input
        className="flex-grow outline-none bg-transparent placeholder-gray-500  pr-5 p-1"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}....`}
      />
      <button onClick={sendMessage} className="font-bold">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
